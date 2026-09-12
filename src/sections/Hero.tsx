import Media from "../components/Media";
import { site, type Locale } from "../content/site";

export default function Hero({ locale }: { locale: Locale }) {
  const copy = site.copy.hero;
  const asset = site.media.melon;

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-place">{site.identity.city[locale]}</p>
        <h1 id="hero-title">{copy.title[locale]}</h1>
        <p className="hero-intro">{copy.intro[locale]}</p>
      </div>
      <div className="hero-drink">
        <Media
          className="hero-media"
          src={asset.src}
          width={asset.width}
          height={asset.height}
          position={asset.position}
          alt={locale === "ar" ? "مشروب شمام بارد مثلج" : "Ice-cold melon drink"}
          ratio="portrait"
          credit={site.copy.gallery.demoLabel[locale]}
          eager
        />
        <p>{copy.signature[locale]}</p>
      </div>
      <a className="scroll-cue" href="#stories">
        <span>{copy.scroll[locale]}</span>
        <span className="drop" aria-hidden="true" />
      </a>
    </section>
  );
}
