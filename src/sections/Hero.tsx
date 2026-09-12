import { site, type Locale } from "../content/site";

export default function Hero({ locale }: { locale: Locale }) {
  const copy = site.copy.hero;

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-place">{site.identity.city[locale]}</p>
        <h1 id="hero-title">{copy.title[locale]}</h1>
        <p className="hero-intro">{copy.intro[locale]}</p>
      </div>
      <div className="hero-drink" role="img" aria-label={copy.mediaPending[locale]}>
        <div className="hero-sun" aria-hidden="true" />
        <div className="glass" aria-hidden="true">
          <span className="glass-highlight" />
          <span className="glass-liquid" />
          <span className="glass-label">ساڤا</span>
        </div>
        <p>{copy.signature[locale]}</p>
        <small>{copy.mediaPending[locale]}</small>
      </div>
      <a className="scroll-cue" href="#stories">
        <span>{copy.scroll[locale]}</span>
        <span className="drop" aria-hidden="true" />
      </a>
    </section>
  );
}
