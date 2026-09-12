import { site, type Locale } from "../content/site";
import { withBase } from "../lib/paths";

export default function NotFound({ locale }: { locale: Locale }) {
  return (
    <main className="not-found">
      <div className="empty-cup" aria-hidden="true"><span /></div>
      <p className="not-found-code">404</p>
      <h1>{site.copy.notFound.title[locale]}</h1>
      <a className="primary-link" href={withBase(import.meta.env.BASE_URL, locale === "ar" ? "/" : "/en/")}>{site.copy.notFound.action[locale]}</a>
    </main>
  );
}
