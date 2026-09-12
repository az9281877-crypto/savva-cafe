import { site, type Locale } from "../content/site";
import { withBase } from "../lib/paths";

export default function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="site-footer">
      <div className="footer-wordmark">
        <span lang="ar">ساڤا</span>
        <span lang="en">Savva</span>
      </div>
      <div className="footer-links">
        <a href={site.links.instagram}>Instagram</a>
        <a href={`tel:${site.contact.phone}`}><bdi>{site.contact.phone}</bdi></a>
        <a href={site.links.maps}>Google Maps</a>
        <a href={withBase(import.meta.env.BASE_URL, locale === "ar" ? "/en/" : "/")}>{locale === "ar" ? "EN" : "AR"}</a>
      </div>
      <p>{site.identity.tagline[locale]}</p>
      <small>© Savva Madinah</small>
    </footer>
  );
}
