import { useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MotionController from "./components/MotionController";
import Preloader from "./components/Preloader";
import { site, type Locale } from "./content/site";
import useRiyadhNight from "./hooks/useRiyadhNight";
import { stripBase } from "./lib/paths";
import NotFound from "./pages/NotFound";
import Hero from "./sections/Hero";
import MenuCounter from "./sections/MenuCounter";
import SavvaFilm from "./sections/SavvaFilm";
import Space from "./sections/Space";
import StoryStrip from "./sections/StoryStrip";
import Visit from "./sections/Visit";

function currentLocale(pathname: string): Locale {
  return pathname.startsWith("/en") ? "en" : "ar";
}

function updateMeta(attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.append(element);
  }

  element.content = content;
}

export default function App() {
  const routePath = stripBase(window.location.pathname, import.meta.env.BASE_URL);
  const locale = currentLocale(routePath);
  const night = useRiyadhNight();
  const path = routePath.replace(/\/+$/, "") || "/";
  const isHome = path === "/" || path === "/en";

  document.documentElement.lang = locale;
  document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.dataset.atmosphere = night ? "night" : "day";
  }, [night]);

  useEffect(() => {
    document.title = isHome ? site.seo.title[locale] : `404 | ${site.identity.name[locale]}`;
    updateMeta("name", "description", site.seo.description[locale]);
    updateMeta("name", "robots", isHome ? "index, follow" : "noindex, nofollow");
    updateMeta("property", "og:title", site.seo.title[locale]);
    updateMeta("property", "og:description", site.seo.description[locale]);
    updateMeta("property", "og:locale", site.seo.locale[locale]);
    updateMeta("property", "og:locale:alternate", site.seo.locale[locale === "ar" ? "en" : "ar"]);
  }, [isHome, locale]);

  if (!isHome) return <NotFound locale={locale} />;

  return (
    <div className={`site ${night ? "site--night" : "site--day"}`}>
      <Preloader locale={locale} />
      <MotionController />
      <a className="skip-link" href="#content">{site.copy.skip[locale]}</a>
      <Header locale={locale} />
      <main id="content">
        <Hero locale={locale} />
        <StoryStrip locale={locale} />
        <MenuCounter locale={locale} />
        <Space locale={locale} />
        <SavvaFilm locale={locale} />
        <Visit locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  );
}
