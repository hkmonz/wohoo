export interface MetaEntry {
  title: string;
  description: string;
  image?: string;
  type?: string;
  url?: string;
}

const ensureMeta = (
  attr: "name" | "property",
  key: string,
  content: string
) => {
  const selector = `meta[${attr}="${key}"]`;
  const el = document.head.querySelector<HTMLMetaElement>(selector);

  if (!el) {
    const created = document.createElement("meta");
    created.setAttribute(attr, key);
    created.setAttribute("content", content);
    document.head.appendChild(created);
    return;
  }

  el.setAttribute("content", content);
};

const ensureCanonical = (href: string) => {
  let link = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]'
  );

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", href);
};

export const applyMeta = ({
  title,
  description,
  image,
  type = "website",
  url,
}: MetaEntry) => {
  document.title = title;
  ensureMeta("name", "description", description);
  ensureMeta("property", "og:title", title);
  ensureMeta("property", "og:description", description);
  ensureMeta("property", "og:type", type);

  if (image) {
    ensureMeta("property", "og:image", image);
    ensureMeta("name", "twitter:image", image);
  }

  ensureMeta("name", "twitter:card", "summary_large_image");
  ensureMeta("name", "twitter:title", title);
  ensureMeta("name", "twitter:description", description);

  if (url) {
    ensureCanonical(url);
    ensureMeta("property", "og:url", url);
  }
};

export const absoluteUrl = (path: string) => {
  const origin =
    typeof window === "undefined" ? "" : window.location.origin;
  return `${origin}${path}`;
};
