# HomeAFar website (Vite + React + Supabase)

## Project layout
```
src/
  main.jsx, App.jsx        entry point and routes (pages are code-split with React.lazy)
  pages/                   one file per page (Home, About, ContentPage, Events, Stories, Beyond, Opportunities, GetInvolved, Contact, Privacy, NotFound, Admin)
  components/              Header, Footer, BackToTop, Form, Media (Photo, Figure, Hero, Banner, Gallery), MediaTile, Sections (Faq, Stats, Journey, Notice)
  data/content.js          all page copy, navigation, founders, FAQ
  data/images.js           image registry: file, widths, alt text and focal point for every picture
  hooks/                   usePage (title/meta), useReveal (scroll fade-in), useRows (Supabase lists)
  lib/                     supabase.js (config check + lazy loader), supabaseClient.js (SDK, loaded on demand)
  styles/                  index.css imports tokens, layout, header, hero, buttons, cards, media, sections, forms, pages, footer, motion
public/images/
  brand/                   logo, favicons, social preview image
  photos/                  real HomeAFar photographs (Passport Picnic, community)
  illustrative/            stock and generated images (decorative only)
```
Every image exists as WebP in several widths, named `<name>-<width>.webp`. To add one: put the files in `public/images/<folder>/`, then add one line to `src/data/images.js`; components pick up responsive `srcset`, alt text and focal point from there.

## Run locally
```
npm install
cp .env.example .env     # fill in the two public values
npm run dev
```
## Environment variables (Vercel > Project > Settings > Environment Variables)
- `VITE_SUPABASE_URL` – your Supabase project URL
- `VITE_SUPABASE_PUBLISHABLE_KEY` – the publishable (anon) key. Safe for the browser because Row Level Security protects the data.
- Never add a `service_role` key or database password to this project.

## Database
1. Supabase > SQL editor: run `supabase/schema.sql`.
2. Authentication > Users > Add user (the founder's email + password).
3. Run the commented `insert into admins ...` line at the bottom of the schema to make that user an owner.
4. Sign in at `/admin`.

## Deploy to Vercel
Import the repo; framework "Vite" is auto-detected (build `npm run build`, output `dist`). `vercel.json` makes clean URLs work.

## Admin guide
`/admin` > **Submissions**: read, mark reviewed, archive or delete contact, volunteer, partner, membership, newsletter and event-registration entries. **Events / Opportunities**: add (saved as draft), then Publish or Unpublish. Opportunities need a source link; set an expiry date and they disappear automatically.

## Images
Everything in `public/images/illustrative` (stock and AI-generated: kente, travel flat-lay, coffee, textiles, notebook, armchair, `gen-*`, airport, safari elephant, gavel, maternity care, clinic banner, wedding reception, get-involved, About Us chalkboards, telephone handsets) is decorative only. Never use them to represent real HomeAFar events or people. Side-panel images are captioned "Illustrative image".

## Editing copy
Stats, journey timeline, FAQ, footer links and page content are in `src/content.js`. Only add figures that can be verified.

## Not built yet (future work)
Stories and country-profile publishing from the dashboard, team profiles, partner listings, email notifications/confirmations, CAPTCHA, scheduling, French content, event photo galleries (waiting on approved photos), analytics, donations/ticketing (deliberately not started), Charles Marcell's approved bio and photo, Murugi Njiru's approved bio and photo.
