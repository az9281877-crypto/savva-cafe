import { useState } from "react";
import Media from "../components/Media";
import { site, type Locale, type MenuCategory } from "../content/site";

type Filter = "all" | MenuCategory;

export default function MenuCounter({ locale }: { locale: Locale }) {
  const [filter, setFilter] = useState<Filter>("all");
  const groups = site.menuCategories
    .filter((category) => filter === "all" || category.id === filter)
    .map((category) => ({
      ...category,
      items: site.menu.filter((item) => item.category === category.id),
    }));

  return (
    <section className="menu-section" id="menu" aria-labelledby="menu-title">
      <div className="menu-heading">
        <h2 id="menu-title">{site.copy.menu.title[locale]}</h2>
        <p>{site.copy.menu.intro[locale]}</p>
        <div className="menu-pour" aria-hidden="true">
          <span className="menu-pour__liquid" />
          <span className="menu-pour__crema" />
          <span className="menu-pour__label">ساڤا</span>
        </div>
      </div>
      <div className="menu-visuals" aria-label={site.copy.menu.title[locale]}>
        {site.menuVisuals.map((visual) => {
          const asset = site.media[visual.asset];
          return (
            <Media
              key={visual.id}
              className="menu-visual"
              alt={visual.label[locale]}
              src={asset.src}
              width={asset.width}
              height={asset.height}
              position={asset.position}
              credit={asset.demo ? site.copy.gallery.demoLabel[locale] : undefined}
              ratio="portrait"
            />
          );
        })}
      </div>
      <div className="menu-filters" role="group" aria-label={site.copy.menu.filterLabel[locale]}>
        <button type="button" aria-pressed={filter === "all"} onClick={() => setFilter("all")}>{site.copy.menu.all[locale]}</button>
        {site.menuCategories.map((category) => (
          <button
            type="button"
            key={category.id}
            aria-pressed={filter === category.id}
            onClick={() => setFilter(category.id)}
          >
            {category.label[locale]}
          </button>
        ))}
      </div>
      <div className="menu-counter" aria-live="polite">
        {groups.map((group) => (
          <section className="menu-group" key={group.id} aria-labelledby={"menu-group-" + group.id}>
            <h3 className="menu-group__title" id={"menu-group-" + group.id}>
              <span>{group.label[locale]}</span>
              <bdi>{String(group.items.length).padStart(2, "0")}</bdi>
            </h3>
            {group.items.map((item) => (
              <article className={"menu-item menu-item--" + item.category} key={item.id}>
                <p className="menu-item__name">{item.name[locale]}</p>
                <p>
                  {item.priceSar === null ? (
                    item.unknownPriceLabel?.[locale] ?? site.copy.menu.unavailable[locale]
                  ) : (
                    <bdi>{item.priceSar} {site.copy.menu.currency[locale]}</bdi>
                  )}
                </p>
              </article>
            ))}
          </section>
        ))}
      </div>
    </section>
  );
}
