# SAVVA design system

## Direction

SAVVA is composed as one day rather than a stack of interchangeable sections. The signature is a cold glass that carries the visitor from Madinah heat into an espresso counter and then a blueberry-blue terrace. Typography and material photography lead; UI chrome stays quiet.

## Color tokens

| Token | Value | Role |
| --- | --- | --- |
| Sand Ivory | `#F4EDE3` | Day background |
| Warm Stone | `#D9C7B0` | Secondary surfaces |
| Espresso | `#1A1410` | Text and night foundation |
| Melted Chocolate | `#3B2A22` | Counter and warm night surface |
| Melon Flesh | `#F3C16F` | Signature drink accent |
| Matcha Foam | `#C9D9B8` | Matcha accent |
| Blueberry Night | `#2C3A55` | Terrace atmosphere |
| Cream Highlight | `#FFF8EF` | Night text and highlights |

Use solid material transitions and restrained light falloff. Do not use purple gradients or decorative glassmorphism.

## Typography

- Arabic UI: IBM Plex Sans Arabic, with Tajawal as the alternate.
- Arabic display and poetic copy: Noto Naskh Arabic.
- Latin display: Fraunces.
- Latin UI: Inter.
- Display text remains at or below `6rem`, uses no tighter than `-0.04em` tracking and is tested with real Arabic strings.
- Arabic letterforms are never split into disconnected animated characters.

Font files will be selected, licensed, stored locally and visually verified in the next stage.

## Grid and spacing

- Mobile: four columns and 20px inline gutters.
- Tablet: eight columns and 32px inline gutters.
- Desktop: twelve columns and fluid 48–72px inline gutters.
- Use CSS logical properties so spacing follows writing direction.
- Dense image passages alternate with quiet type-led passages. Headings always receive more space above than below.

## Components

- Header: visible navigation on desktop, compact direct navigation on mobile, permanent AR/EN control.
- Links and buttons: high-contrast focus ring, restrained milk-ripple feedback, magnetic movement only for fine pointers.
- Story strip: native horizontal scroll snap on mobile and an editorial film strip on desktop.
- Menu counter: tactile dark surface, filter chips and object-like menu items; never a spreadsheet or uniform card grid.
- Gallery: controlled masonry with stable reading order and explicit empty states.
- Media: fixed intrinsic dimensions, meaningful alt text and local optimized assets.

## RTL and localization

Arabic is the source composition. Set `lang` and `dir` on the root document. Preserve DOM reading order and use logical layout rather than global `row-reverse`. Isolate telephone numbers, prices and mixed-script fragments with local direction or `bdi`.

## Motion

Motion should feel liquid, slow and confident. The authored moment is the signature glass filling as the menu enters. Scroll-driven transforms use GSAP only after static content works; native CSS handles simple states. With reduced motion, remove preloader delay, pinning, parallax, cursor trails and magnetic movement while keeping all content available.

## Responsive and quality floor

Design mobile-first at 375, 390 and 430px, then create a deliberate tablet and desktop composition at 768 and 1440px. Verify contrast, keyboard order, focus, touch behavior, overflow, layout stability and console output. Decorative effects may never delay access to content or contacts.

