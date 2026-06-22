# RESNOOD — Restaurant Menu

A modern restaurant menu built with Next.js, TypeScript, Tailwind CSS and shadcn/ui. The project features a hero section, a dynamic food card grid, and individual pages for each dish — all with a responsive layout across mobile, tablet and desktop.

<div style="display: flex;">
  <img width="1266" height="1004" alt="image1" src="https://github.com/user-attachments/assets/d2e7e3f1-2c98-4a43-a205-fa55c08cc60a" />
  <img width="1266" height="1004" alt="image2" src="https://github.com/user-attachments/assets/7043e011-5d8d-4108-b510-e71bca094c32" />
</div>

---

## Features

- **Hero section** with call-to-action buttons
- **Menu section** displaying food cards with image, title, description, rating and price
- **Dynamic routes** — each dish has its own page at `/{id}` with detailed information and an order button
- **Related items** — the dish detail page shows the other available items, excluding the current one
- **Fully responsive** — built mobile-first with Tailwind CSS breakpoints (`sm`, `lg`)
- **Custom design system** — tokens for primary, secondary and component background colors; custom fonts (Inria Sans, Inria Serif, Bilderberg)
- **shadcn/ui Button** — with custom variants (`componentBackground`) and a custom size (`giant`)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui + Radix UI |
| Animations | tw-animate-css |
| Fonts | next/font (Google + local) |

---

## Project Structure

```
src/
  app/
    [id]/page.tsx          # Dynamic route — dish detail page
    components/
      header/              # Site header with navigation
      hero/                # Hero section with CTA buttons
      menu/                # Menu section wrapper
      foodsMenu/           # Food card grid (reused on home and detail page)
      foods/               # Food data (typed with TypeScript interface)
      button/              # Legacy button component (kept for reference)
    fonts/                 # Custom font definitions
    globals.css            # CSS variables (design tokens)
    layout.tsx             # Root layout with Header
    page.tsx               # Home page
  components/
    ui/button.tsx          # shadcn/ui Button with custom variants and sizes
  assets/                  # Food images and icons
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Design Decisions

- **shadcn/ui over a closed component library** — gives full control over component code, making customization straightforward without fighting a closed API.
- **Radix UI primitives** — accessibility (focus management, keyboard navigation, ARIA attributes) is handled at the primitive level, not retrofitted manually.
- **CSS variable tokens** (`--primary`, `--secondary`, `--components-background`) — changing the brand color in one place updates every component that references that token.
- **`FoodsMenu` component reuse** — the same grid component renders on the home page (all items) and on the detail page (all items except the current one), controlled via an optional `currentId` prop.
