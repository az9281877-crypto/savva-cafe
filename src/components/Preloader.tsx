import { useEffect, useState } from "react";
import type { Locale } from "../content/site";

const VISITED_KEY = "savva:visited";

function shouldShowPreloader() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;

  try {
    return window.sessionStorage.getItem(VISITED_KEY) !== "1";
  } catch {
    return true;
  }
}

export default function Preloader({ locale }: { locale: Locale }) {
  const [visible, setVisible] = useState(shouldShowPreloader);

  useEffect(() => {
    if (!visible) return;

    try {
      window.sessionStorage.setItem(VISITED_KEY, "1");
    } catch {
      // The animation can still complete when storage is unavailable.
    }

    const timer = window.setTimeout(() => setVisible(false), 1_450);
    return () => window.clearTimeout(timer);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="preloader" role="status" aria-label={locale === "ar" ? "جارٍ فتح سافا" : "Opening Savva"}>
      <div className="preloader-crema" aria-hidden="true" />
      <div className="preloader-wordmark">
        <strong lang="ar">ساڤا</strong>
        <span lang="en">Savva</span>
        <small lang="ar">المدينة المنورة</small>
      </div>
    </div>
  );
}
