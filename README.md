# PUNAB Photo Card Generator

Professional React + Tailwind CSS + html-to-image poster generator.

## Editable fields

- Guest Image
- Guest Type
- Guest Name
- Guest Designation

Everything else is fixed in `Poster.jsx`.

## Install and run

```bash
npm install
npm run dev
```

Open the Vite URL in your browser.

## Build

```bash
npm run build
```

## Assets

Local files are placed in:

```txt
public/assets/background.png
public/assets/logo.png
public/assets/fonts/
```

For exact typography, place your licensed local font files in `public/assets/fonts/` and update `src/index.css` font variables if needed.

## Output

The downloaded PNG is generated from the fixed poster node at exactly **1080 × 1350 px**.
