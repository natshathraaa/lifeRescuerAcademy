# Life Rescuer Academy — Website

A premium, responsive marketing site for Life Rescuer Academy, a professional
emergency medical training institute. Built with React, Vite, Tailwind CSS
and Framer Motion.

## Tech stack

- React 19 + Vite
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Framer Motion (scroll reveals, counters, the signature "vital line" motif)
- React Icons
- React Router (routing shell, ready for future pages)

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

## Editing content

All copy and data live in plain JSON files under `src/data/` so the site can
be updated without touching component code:

| File                  | Controls                          |
| ---------------------- | ---------------------------------- |
| `site.json`            | Academy name, phone, WhatsApp, email, Instagram |
| `nav.json`              | Navigation menu items |
| `hero.json`             | Hero heading, subtitle, CTAs, image |
| `about.json`            | About Us copy, Vision, Mission, image |
| `coreValues.json`       | The six Core Values cards |
| `whyChooseUs.json`      | The six "Why Choose Us" cards |
| `courses.json`          | The six training programs |
| `gallery.json`          | Gallery images and captions |
| `testimonials.json`     | Testimonial quotes, names, roles and photos |
| `stats.json`            | Animated statistics counters |

The hero image, `about.json`'s image, and all `gallery.json` images already
point at real photography (Unsplash for the hero, the client's own supplied
photos for gallery/about, stored in `public/gallery/`). Update the phone
number, WhatsApp number, email and Instagram link in `site.json` if they
ever change.

## Premium polish

This build includes a full motion/interaction pass on top of the original
layout (palette, typography, logo, content and section order are all
unchanged):

- Scroll-triggered entrance animations (fade, slide, stagger, scale) on
  every section, each playing once.
- A glass, blurred navbar with a scroll-spy active-section indicator.
- Subtle parallax on the hero and gallery images, floating low-opacity
  medical icons in the hero, and soft ambient gradient glows behind key
  sections.
- Curved and heartbeat-line dividers at a few key section seams instead of
  hard color breaks.
- Shine-sweep buttons, lifted/glowing cards, rotating icons on hover
  throughout Why Choose Us, Courses, Core Values and Contact.
- Backgrounds now rotate through three tones (white / very light blue /
  very light gray) so no two adjacent sections share a background.

All animations respect `prefers-reduced-motion` and are CSS/Framer Motion
based — no heavy JS or extra dependencies were added.

### Brand mark

The academy's logo emblem lives in `public/brand/` (`logo-icon.png` /
`logo-icon.webp`, plus a small `favicon.png`). It was cropped from the
client's full logo artwork with the background made transparent. Navbar
and Footer both reference it directly — replace those files with an
updated export if the logo changes, keeping the same filenames.

### Testimonials

`testimonials.json` currently holds placeholder names, roles and quotes with
`"photo": null` (renders as a navy/gold initials avatar). When the real
testimonial photos and quotes come in:

1. Drop each photo into `public/testimonials/` (create the folder).
2. Set `"photo": "/testimonials/filename.jpg"` on the matching entry.
3. Replace the placeholder `name`, `role` and `quote` text.

The section auto-scrolls as a looping marquee and pauses on hover/focus; no
component changes are needed to update the content.

## Structure

```
src/
  components/   Reusable UI building blocks (Navbar, Hero, About, ...)
  data/         JSON content files
  pages/        Home.jsx assembles all sections
  App.jsx       Router shell, Navbar + Footer
  index.css     Design tokens (colors, font) via Tailwind v4 @theme
```

## Notes

- No backend, login, booking, or payment flow — this is an informational
  site with click-to-call, WhatsApp and email as the only conversion points,
  per the brief.
- Respects `prefers-reduced-motion` for all animated elements.
- Fully responsive from mobile through desktop.
