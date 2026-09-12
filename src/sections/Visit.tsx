import { site, type Locale } from "../content/site";
import { withBase } from "../lib/paths";

export default function Visit({ locale }: { locale: Locale }) {
  const copy = site.copy.visit;
  const hours = site.hours.daily;

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
          <a className="qr-link" href={site.links.maps}>
            <img src={withBase(import.meta.env.BASE_URL, "/qr/google-maps.svg")} width="512" height="512" loading="lazy" alt={copy.qrMaps[locale]} />
            <span>{copy.qrMaps[locale]} <bdi>Google Maps</bdi></span>
          </a>
          <a className="qr-link" href={site.links.instagram}>
            <img src={withBase(import.meta.env.BASE_URL, "/qr/instagram.svg")} width="512" height="512" loading="lazy" alt={copy.qrInstagram[locale]} />
            <span>{copy.qrInstagram[locale]} <bdi>Instagram</bdi></span>
          </a>
        </div>
      </div>
    </section>
  );
}
