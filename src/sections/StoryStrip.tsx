import Media from "../components/Media";
import { site, type Locale } from "../content/site";

export default function StoryStrip({ locale }: { locale: Locale }) {
  return (
    <section className="story-section" id="stories" aria-labelledby="stories-title">
      <div className="section-heading story-heading">
        <h2 id="stories-title">{site.copy.stories.title[locale]}</h2>
        <p>{site.copy.stories.intro[locale]}</p>
      </div>
      <div className="story-strip">
        {site.stories.map((story, index) => {
          const asset = site.media[story.asset];
          return (
            <article className="story" key={story.id}>
              <Media
                alt={story.media[locale]}
                src={asset.src}
                width={asset.width}
                height={asset.height}
                position={asset.position}
                credit={asset.demo ? site.copy.gallery.demoLabel[locale] : undefined}
                ratio="portrait"
              />
              <div className="story-caption">
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <p>{story[locale]}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
