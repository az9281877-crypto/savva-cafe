# SAVVA Café

## Русский

Маркетинговый сайт SAVVA Café в Медине. Реализованы React/Vite, централизованный контент, полноценные Arabic RTL / English LTR сцены и адаптивная motion-система.

### Запуск

```sh
npm install
npm run dev
```

Проверка и production-сборка:

```sh
npm run check
npm test
npm run build
```

Все бизнес-данные находятся в `src/content/site.ts`:

- `hours` — часы и окно ночной темы;
- `menu` — позиции и цены; `null` означает неизвестную цену;
- `contact` — телефон и адрес;
- `links` — WhatsApp, Instagram и Google Maps.

Арабская версия использует `/`, английская — `/en/`. Приложение устанавливает соответствующие `lang` и `dir`. Night mode рассчитывается по `Asia/Riyadh`: ночная атмосфера включается с 18:00 до 07:00. При `prefers-reduced-motion` preloader и тяжёлые scroll-эффекты отключаются.

Production-сборка создаёт `dist/index.html` для Arabic, `dist/en/index.html` для English и `dist/404.html` для страницы ошибки. В каждом HTML заранее записаны соответствующие языковые SEO-метаданные.

Фотографии будут храниться локально в `public/gallery`. QR для Google Maps и Instagram находятся в `public/qr` и создаются из ссылок в `src/content/site.ts`:

```sh
npm run assets:qr
```

После изменения ссылок запустите эту команду повторно. `public/favicon.svg` содержит служебный favicon SAVVA. Не добавляйте секреты и `node_modules` в репозиторий.


### Временная публичная версия

GitHub Actions проверяет проект, собирает `dist` и публикует его через GitHub Pages:

https://az9281877-crypto.github.io/savva-cafe/

Локальный запуск использует `/`, а Pages-сборка автоматически использует `/savva-cafe/`.

## English

A marketing site for SAVVA Café in Madinah. It includes the React/Vite foundation, centralized content, complete Arabic RTL / English LTR scenes and a responsive motion system.

### Run locally

```sh
npm install
npm run dev
```

Validate and build:

```sh
npm run check
npm test
npm run build
```

Edit business information in `src/content/site.ts`:

- `hours` contains opening hours and the night-theme window;
- `menu` contains items and prices; `null` means the price is unknown;
- `contact` contains the telephone number and address;
- `links` contains WhatsApp, Instagram and Google Maps.

Arabic uses `/`; English uses `/en/`. The app sets the matching `lang` and `dir`. Night mode follows `Asia/Riyadh` and runs from 18:00 to 07:00. With `prefers-reduced-motion`, the preloader and heavier scroll effects are disabled.

The production build creates `dist/index.html` for Arabic, `dist/en/index.html` for English and `dist/404.html` for the error page. Each HTML file includes its matching language metadata before the application loads.

Local photographs will live in `public/gallery`. Google Maps and Instagram QR files live in `public/qr` and are generated from the links in `src/content/site.ts`:

```sh
npm run assets:qr
```

Run the command again after changing either link. `public/favicon.svg` contains the SAVVA favicon. Do not commit secrets or `node_modules`.

### Temporary public version

GitHub Actions validates the project, builds `dist` and publishes it with GitHub Pages:

https://az9281877-crypto.github.io/savva-cafe/

Local development uses `/`; the Pages build automatically uses `/savva-cafe/`.

