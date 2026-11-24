import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { createServer } from "vite";

const root = resolve(import.meta.dirname, "..");
const distDir = join(root, "dist");
const templatePath = join(distDir, "index.html");
const manifestPath = join(distDir, ".vite", "manifest.json");

const siteUrl = (
  process.env.VITE_SITE_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "")
).replace(/\/+$/, "");

if (!siteUrl) {
  console.warn(
    "[prerender] VITE_SITE_URL not set - canonical and og:image URLs will be relative. Set VITE_SITE_URL in Vercel for absolute URLs."
  );
}

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const loadManifest = async () => {
  try {
    return JSON.parse(await readFile(manifestPath, "utf8"));
  } catch {
    return {};
  }
};

const toPublicPath = (assetPath, manifest) => {
  if (!assetPath) return undefined;
  if (/^https?:\/\//i.test(assetPath)) return assetPath;

  const key = assetPath.replace(/^\//, "");
  const entry = manifest[key];
  if (entry?.file) return `/${entry.file}`;

  return assetPath;
};

const absolute = (path) => {
  if (!path) return path;
  if (/^https?:\/\//i.test(path)) return path;
  if (!siteUrl) return path;
  return `${siteUrl}${path.startsWith("/") ? "" : "/"}${path}`;
};

const buildHead = (seo, manifest, pathname) => {
  const image = toPublicPath(seo.image, manifest);
  const tags = [
    `<title>${escapeHtml(seo.title)}</title>`,
    `<meta name="description" content="${escapeHtml(seo.description)}" />`,
    `<meta property="og:title" content="${escapeHtml(seo.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(seo.description)}" />`,
    `<meta property="og:type" content="${escapeHtml(seo.type ?? "website")}" />`,
    `<meta property="og:url" content="${escapeHtml(absolute(pathname))}" />`,
    `<link rel="canonical" href="${escapeHtml(absolute(pathname))}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(seo.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(
      seo.description
    )}" />`,
  ];

  if (image) {
    const imageUrl = escapeHtml(absolute(image));
    tags.push(`<meta property="og:image" content="${imageUrl}" />`);
    tags.push(`<meta name="twitter:image" content="${imageUrl}" />`);
  }

  return tags.join("\n    ");
};

const replaceHead = (html, seo, manifest, pathname) => {
  const stripped = html
    .replace(/\s*<title>[\s\S]*?<\/title>/i, "")
    .replace(/\s*<meta\s+name="description"[^>]*>/i, "");

  return stripped.replace(
    /<\/head>/i,
    `    ${buildHead(seo, manifest, pathname)}\n  </head>`
  );
};

const writeRoute = async (template, manifest, pathname, seo) => {
  const html = replaceHead(template, seo, manifest, pathname);
  const outDir =
    pathname === "/"
      ? distDir
      : join(distDir, ...pathname.split("/").filter(Boolean));
  await mkdir(outDir, { recursive: true });
  const file = join(outDir, "index.html");
  await writeFile(file, html, "utf8");
  return file;
};

const writeSitemap = async (pathnames) => {
  const urls = pathnames
    .map((pathname) => {
      const loc = escapeHtml(absolute(pathname));
      const changefreq = pathname.startsWith("/blogs/") ? "monthly" : "weekly";
      return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>${changefreq}</changefreq>\n  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  await writeFile(join(distDir, "sitemap.xml"), xml, "utf8");

  const robots = siteUrl
    ? `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`
    : `User-agent: *\nAllow: /\n`;
  await writeFile(join(distDir, "robots.txt"), robots, "utf8");

  return pathnames.length;
};

const vite = await createServer({
  root,
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "error",
});

try {
  const { allSeoRoutes } = await vite.ssrLoadModule("/src/lib/seo.ts");
  const manifest = await loadManifest();
  const template = await readFile(templatePath, "utf8");

  const written = [];
  for (const [pathname, seo] of Object.entries(allSeoRoutes)) {
    written.push(await writeRoute(template, manifest, pathname, seo));
  }

  console.log(`prerendered ${written.length} routes:`);
  for (const file of written) {
    console.log(`  ${file.replace(root, ".")}`);
  }

  const sitemapCount = await writeSitemap(Object.keys(allSeoRoutes));
  console.log(`wrote sitemap.xml and robots.txt (${sitemapCount} urls)`);
} finally {
  await vite.close();
}
