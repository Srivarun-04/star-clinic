# Chiropractic & Physiotherapy Centre — Concept Demo

A premium, calm, and trustworthy website demo for the **Chiropractic & Physiotherapy Centre** located in **Amla Nagar, Dilsukhnagar, Hyderabad, Telangana, India**.

This project is an unofficial concept demonstration designed to showcase modern visual branding, mobile-first responsiveness, and structured presentation to the business owner.

---

## 🌿 Design & Aesthetic Direction

- **Color Palette**: Deep restorative forest greens (`#0E271F`, `#16382D`, `#1E4B3D`), soft eucalyptus/sage accents (`#EEF5F1`, `#38806A`), and warm ivory/beige backgrounds (`#FAF8F5`, `#F5F2EC`, `#FFFFFF`).
- **Typography**: Editorial serif typography (`Playfair Display`) paired with clean, highly readable interface typography (`Inter`).
- **Photography**: Professional clinical physical therapy and rehabilitation imagery with respectful alt text and subtle environmental gradient overlays.
- **Tone**: Calm, welcoming, clinical yet approachable. Strictly avoids generic hospital clichés, heavy gradients, or cluttered cards.

---

## 📱 Mobile Accessibility & Performance

- **Mobile First**: Tested and optimized down to 360px and 390px viewport widths.
- **Touch-Friendly Targets**: All interactive elements, buttons, and navigation links maintain a minimum tap target of 44×44px.
- **Screen Reader & Keyboard Friendly**:
  - Accessible skip-to-main-content link (`#main-content`)
  - Semantic HTML5 landmark tags (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`)
  - Full ARIA tags (`aria-expanded`, `aria-controls`, `aria-label`)
  - Keyboard focus indicators with high-contrast outlines (`focus-visible:ring-2`)
  - ESC key dismiss and background lock on mobile drawer menu
- **Reduced Motion Support**: Automatic animation minimization for users with `prefers-reduced-motion: reduce`.

---

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 with custom `@theme` tokens
- **Icons**: Lucide React
- **Hosting**: Optimized for standard Vercel deployment with zero environment dependencies

---

## ⚙️ Central Clinic Configuration

All clinic details are decoupled from UI components and stored in a single source of truth:

```
lib/clinic-config.ts
```

### Configurable Parameters:
1. **Clinic Name & Taglines**:
   - `name`: Clinic name displayed in header, hero, contact, and footer.
   - `heroHeadline`: Main headline ("Move Better. Feel Better. Live Better.").
   - `heroSupportingText`: Sub-headline copy.
2. **Location & Maps**:
   - `area`: Locality ("Amla Nagar").
   - `subLocality`: Greater locality ("Dilsukhnagar").
   - `city`, `state`, `country`.
   - `mapsSearchUrl`: Direct Google Maps search / directions URL.
3. **Verified Contact Details**:
   - `contact.phone`: Set to a verified phone string (e.g. `"+91 98765 43210"`). When set to `null`, displays an "Awaiting Verification" badge to prevent accidental calls to dummy numbers.
   - `contact.whatsapp`: Set to a verified WhatsApp number (e.g. `"919876543210"`). When set to `null`, cleanly hides live messaging links.
4. **Treatment Framework**:
   - Editable array of proposed clinical categories, descriptions, and focus areas.
5. **Brand Pillars**:
   - Editable value proposition cards with custom icons and badges.

---

## 🚀 Running the Project

### 1. Development Mode
```bash
cd chiropractic-physiotherapy-centre
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or whichever port is assigned).

### 2. Production Build
```bash
npm run build
npm run start
```

---

## 📄 Client Review Policy
- **No Mock Testimonials**: No fake patient reviews, star ratings, or fabricated success statistics are included.
- **No Mock Credentials**: No invented doctor degrees or unconfirmed certifications are displayed.
- **No Premature Booking**: No non-functional appointment databases are simulated before clinic scheduling workflows are finalized.

