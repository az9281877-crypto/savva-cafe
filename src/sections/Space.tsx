import Media from "../components/Media";
import { site, type Locale } from "../content/site";

export default function Space({ locale }: { locale: Locale }) {
  const copy = site.copy.space;
  const indoor = site.media.interior;
  const terrace = site.media.terrace;

  return (
    <section className="space-section" id="space" aria-labelledby="space-title">
      <div className="section-heading space-heading">
        <h2 id="space-title">{copy.title[locale]}</h2>
        <p>{copy.reviewNote[locale]}</p>
      </div>
      <div className="space-scenes">
        <article className="space-scene space-scene--indoor">
          <Media
            alt={copy.indoor[locale]}
            src={indoor.src}
            width={indoor.width}
            height={indoor.height}
            position={indoor.position}
            credit={site.copy.gallery.demoLabel[locale]}
            ratio="landscape"
          />
          <div>
            <h3>{copy.indoor[locale]}</h3>
            <p>{copy.indoorText[locale]}</p>
          </div>
        </article>
        <article className="space-scene space-scene--terrace">
          <Media
            alt={copy.terrace[locale]}
            src={terrace.src}
            width={terrace.width}
            height={terrace.height}
            position={terrace.position}
            credit={site.copy.gallery.demoLabel[locale]}
            ratio="landscape"
          />
          <div>
            <h3>{copy.terrace[locale]}</h3>
            <p>{copy.terraceText[locale]}</p>
          </div>
        </article>
      </div>
      <div className="space-facts">
        <strong>{copy.seats[locale]}</strong>
        <span>{copy.features.families[locale]}</span>
        <span>{copy.features.music[locale]}</span>
        <span>{copy.features.noPartitions[locale]}</span>
      </div>
    </section>
  );
}
