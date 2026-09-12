import { useState } from "react";
import { site, type Locale, type MenuCategory } from "../content/site";

type Filter = "all" | MenuCategory;

export default function MenuCounter({ locale }: { locale: Locale }) {
  const [filter, setFilter] = useState<Filter>("all");
  const items = filter === "all" ? site.menu : site.menu.filter((item) => item.category === filter);

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
        {items.map((item) => (
          <article className={`menu-item menu-item--${item.category}`} key={item.id}>
            <h3>{item.name[locale]}</h3>
            <p>
              {item.priceSar === null ? (
                item.unknownPriceLabel?.[locale] ?? site.copy.menu.unavailable[locale]
              ) : (
                <bdi>{item.priceSar} {site.copy.menu.currency[locale]}</bdi>
              )}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
