import { useEffect, useRef, useState } from "react";
import Media from "../components/Media";
import { site, type Locale } from "../content/site";

export default function SavvaFilm({ locale }: { locale: Locale }) {
  const copy = site.copy.gallery;
  const [heart, setHeart] = useState<string | null>(null);
  const lastTap = useRef<Record<string, number>>({});
  const heartTimer = useRef<number | null>(null);

  const showHeart = (id: string) => {
    setHeart(id);
    if (heartTimer.current !== null) window.clearTimeout(heartTimer.current);
    heartTimer.current = window.setTimeout(() => setHeart(null), 520);
  };

  useEffect(() => () => {
    if (heartTimer.current !== null) window.clearTimeout(heartTimer.current);
  }, []);

  return (
    <section className="film-section" aria-labelledby="film-title">
      <div className="section-heading film-heading">
        <h2 id="film-title">{copy.title[locale]}</h2>
        <p>{copy.intro[locale]}</p>
      </div>
      <div className="film-grid">
        {site.gallery.map((item) => (
          <figure className={`film-frame film-frame--${item.id}`} key={item.id}>
            <button
              className="film-like"
              type="button"
              aria-label={copy.reaction[locale]}
              aria-pressed={heart === item.id}
              onClick={(event) => {
                if (event.detail === 0) showHeart(item.id);
              }}
              onDoubleClick={() => showHeart(item.id)}
              onPointerUp={(event) => {
                if (event.pointerType !== "touch") return;
                const now = window.performance.now();
                if (now - (lastTap.current[item.id] ?? 0) < 360) showHeart(item.id);
                lastTap.current[item.id] = now;
              }}
            >
              <Media alt={item.label[locale]} label={copy.pending[locale]} tone={item.tone} ratio={item.ratio} />
              <span className={`film-heart ${heart === item.id ? "film-heart--visible" : ""}`} aria-hidden="true">♥</span>
            </button>
            <figcaption>{item.label[locale]}</figcaption>
          </figure>
        ))}
      </div>
      <a className="text-link" href={site.links.instagram}>{copy.cta[locale]} <span aria-hidden="true">↗</span></a>
    </section>
  );
}
