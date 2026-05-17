import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use native API to reset scroll
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // 👈 industry standard (no unexpected animations)
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
