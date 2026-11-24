import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getSeo } from "../../lib/seo";
import { applyMeta, absoluteUrl } from "../../lib/meta";

export default function RouteMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = getSeo(pathname);

    applyMeta({
      ...seo,
      url: absoluteUrl(pathname),
    });
  }, [pathname]);

  return null;
}
