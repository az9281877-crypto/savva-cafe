import { site, type Locale } from "../content/site";
import { withBase } from "../lib/paths";

export default function Visit({ locale }: { locale: Locale }) {
  const copy = site.copy.visit;
  const hours = site.hours.daily;
  const qrLinks = [
    { id: "maps", href: site.links.maps, file: "/qr/google-maps.svg", label: copy.qrMaps[locale], detail: "Google Maps" },
    { id: "instagram", href: site.links.instagram, file: "/qr/instagram.svg", label: copy.qrInstagram[locale], detail: "Instagram" },
    { id: "website", href: site.links.website, file: "/qr/website.svg", label: copy.qrWebsite[locale], detail: "savva-cafe" },
    { id: "menu", href: site.links.menu, file: "/qr/menu.svg", label: copy.qrMenu[locale], detail: "savva-cafe/#menu" },
  ];

  return (
    <section className="visit-section" id="visit" aria-labelledby="visit-title">
      <div className="visit-heading">
        <h2 id="visit-title">{copy.title[locale]}</h2>
        <p>{copy.intro[locale]}</p>
      </div>
      <div className="hours-arc" aria-label={`${copy.intro[locale]} ${site.hours.timeZone}`}>
        <div className="hours-time hours-time--open"><bdi>{hours.opens}</bdi><span>{copy.morning[locale]}</span></div>
        <div className="hours-time hours-time--heat"><bdi>12:00</bdi><span>{copy.heat[locale]}</span></div>
        <div className="hours-time hours-time--sunset"><bdi>18:00</bdi><span>{copy.sunset[locale]}</span></div>
        <div className="hours-time hours-time--close"><bdi>{hours.closes}</bdi><span>{copy.night[locale]}</span></div>
      </div>
      <div className="visit-details">
        <address>{site.contact.address[locale]}</address>
        <ul>
          <li>{copy.notes.area[locale]}</li>
          <li>{copy.notes.ride[locale]}</li>
          <li>{copy.notes.parking[locale]}</li>
        </ul>
        <div className="visit-actions">
          <a className="primary-link" href={site.links.maps}>{copy.maps[locale]} <span aria-hidden="true">↗</span></a>
          <a className="secondary-link" href={site.links.whatsapp}>{copy.whatsapp[locale]}</a>
        </div>
      </div>
      <div className="visit-qr">
        <h3>{copy.qrTitle[locale]}</h3>
        <div className="visit-qr__grid">
          {qrLinks.map((qr) => (
            <a className="qr-link" href={qr.href} key={qr.id}>
              <img src={withBase(import.meta.env.BASE_URL, qr.file)} width="512" height="512" loading="lazy" alt={qr.label} />
              <span>{qr.label} <bdi>{qr.detail}</bdi></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
