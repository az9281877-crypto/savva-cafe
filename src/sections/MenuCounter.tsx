import { useEffect, useRef, useState } from "react";
import Media from "../components/Media";
import { site, type Locale, type MenuCategory } from "../content/site";

type Filter = "all" | MenuCategory;

export default function MenuCounter({ locale }: { locale: Locale }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [activeMobileCategory, setActiveMobileCategory] = useState<Filter>("all");
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches,
  );
  const menuRef = useRef<HTMLElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);
  const groupRefs = useRef(new Map<MenuCategory, HTMLElement>());
  const groups = site.menuCategories
    .filter((category) => isMobile || filter === "all" || category.id === filter)
    .map((category) => ({
      ...category,
      items: site.menu.filter((item) => item.category === category.id),
    }));

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const updateViewport = () => setIsMobile(mobileQuery.matches);

    updateViewport();
    mobileQuery.addEventListener("change", updateViewport);
    return () => mobileQuery.removeEventListener("change", updateViewport);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    let frame = 0;
    const updateActiveCategory = () => {
      frame = 0;
      const filters = filtersRef.current;
      if (!filters) return;

      const activationLine = filters.getBoundingClientRect().bottom + 16;
      let nextCategory: Filter = "all";

      site.menuCategories.forEach((category) => {
        const group = groupRefs.current.get(category.id);
        if (group && group.getBoundingClientRect().top <= activationLine) {
          nextCategory = category.id;
        }
      });

      setActiveMobileCategory((current) => current === nextCategory ? current : nextCategory);
    };
    const queueUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateActiveCategory);
    };

    updateActiveCategory();
    window.addEventListener("scroll", queueUpdate, { passive: true });
    window.addEventListener("resize", queueUpdate);
    return () => {
      window.removeEventListener("scroll", queueUpdate);
      window.removeEventListener("resize", queueUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [isMobile]);

  const selectCategory = (category: Filter) => {
    if (!isMobile) {
      setFilter(category);
      return;
    }

    const target = category === "all" ? menuRef.current : groupRefs.current.get(category);
    const filters = filtersRef.current;
    if (!target || !filters) return;

    setActiveMobileCategory(category);
    const stickyTop = Number.parseFloat(window.getComputedStyle(filters).insetBlockStart) || 0;
    const offset = category === "all" ? 0 : filters.getBoundingClientRect().height + stickyTop + 12;
    const top = window.scrollY + target.getBoundingClientRect().top - offset;
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
    window.scrollTo({ top, behavior });
  };

  return (
    <section className="menu-section" id="menu" aria-labelledby="menu-title" ref={menuRef}>
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
      <div className="menu-filters" role="group" aria-label={site.copy.menu.filterLabel[locale]} ref={filtersRef}>
        <button
          type="button"
          aria-pressed={(isMobile ? activeMobileCategory : filter) === "all"}
          onClick={() => selectCategory("all")}
        >
          {site.copy.menu.all[locale]}
        </button>
        {site.menuCategories.map((category) => (
          <button
            type="button"
            key={category.id}
            aria-pressed={(isMobile ? activeMobileCategory : filter) === category.id}
            onClick={() => selectCategory(category.id)}
          >
            {category.label[locale]}
          </button>
        ))}
      </div>
      <div className="menu-counter" aria-live="polite">
        {groups.map((group) => (
          <section
            className="menu-group"
            key={group.id}
            aria-labelledby={"menu-group-" + group.id}
            ref={(element) => {
              if (element) groupRefs.current.set(group.id, element);
              else groupRefs.current.delete(group.id);
            }}
          >
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
