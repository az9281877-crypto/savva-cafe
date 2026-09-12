import { site, type Locale } from "../content/site";
import { withBase } from "../lib/paths";

export default function Header({ locale }: { locale: Locale }) {
  const home = withBase(import.meta.env.BASE_URL, locale === "ar" ? "/" : "/en/");
  const alternate = withBase(import.meta.env.BASE_URL, locale === "ar" ? "/en/" : "/");

  return (
    <header className="site-header">
      <a className="wordmark" href={home} aria-label={locale === "ar" ? "سافا، الرئيسية" : "Savva, home"}>
        <span lang="ar">{site.identity.name.ar}</span>
        <span aria-hidden="true">•</span>
        <span lang="en">{site.identity.name.en}</span>
      </a>
      <nav className="site-nav" aria-label={locale === "ar" ? "التنقل الرئيسي" : "Primary navigation"}>
        {site.navigation.slice(1).map((item) => (
          <a key={item.id} href={item.href}>{item.label[locale]}</a>
        ))}
        <a className="language-link" href={alternate} hrefLang={locale === "ar" ? "en" : "ar"}>
          {locale === "ar" ? "EN" : "AR"}
        </a>
      </nav>
    </header>
  );
}
