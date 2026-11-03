// Image registry. Each entry: P(folder, file base, available widths, alt text, optional default object-position).
// Files are /images/<folder>/<base>-<width>.webp. Real event photos live in "photos"; stock and AI-generated
// illustrative images live in "illustrative" and must never be presented as HomeAFar events or people.
const P = (dir, b, w, alt, pos) => ({ dir, b, w, alt, pos })
const REAL = 'photos'
const ILL = 'illustrative'
const AUTHENTIC_HOME_PHOTO = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-11-03%20at%2003.51.28-wrRfeMETomeQP5cgjV7INz69T2qZ2X.jpeg'

export const PH = {
  // Real HomeAFar photographs
  pp1: P(REAL, 'passport-picnic-group-five', [480, 800, 1200, 1600], 'Five participants holding their Passport Picnic passports in the park'),
  pp2: P(REAL, 'passport-picnic-group-wide', [480, 800, 1200, 1400], 'Passport Picnic participants posing together under the trees'),
  pp3: P(REAL, 'passport-picnic-chatting', [480, 800, 1200], 'Participants chatting in the park at Passport Picnic'),
  pp4: P(REAL, 'passport-picnic-activity', [480, 800, 1200], 'Participants gathered around an activity on the grass'),
  pp5: P(REAL, 'passport-picnic-trees', [480, 800, 1000], 'Participants gathered together under the trees'),
  pp6: P(REAL, 'passport-picnic-passport', [480, 800, 1200], 'A participant holding up her Passport Picnic passport'),
  poster: P(REAL, 'passport-picnic-invitation', [480, 800], 'Passport Picnic invitation: 30 August 2026, 2 to 6 pm, Tineretului Park, Bucharest'),
  portrait: P(REAL, 'community-portrait', [480, 800, 1200], 'A HomeAFar community member in a portrait'),
  team: P(REAL, 'community-indoors', [480, 800, 1200, 1600], 'Members of the HomeAFar community seated together indoors'),

  // Authentic community photo supplied for the homepage hero.
  authenticHome: { src: AUTHENTIC_HOME_PHOTO, w: [480, 800, 1200], alt: 'HomeAFar community members smiling together outdoors', pos: 'center' },

  // Illustrative images: heroes and page features
  desk: P(ILL, 'passport-desk-kente', [480, 800, 1168], 'A desk with a kente cloth, beaded jewellery, a carved mask, a passport and a cup of coffee'),
  traveler: P(ILL, 'traveler-airport', [480, 784], 'A traveller with a backpack and suitcase looking out at planes from an airport terminal'),
  airport: P(ILL, 'airport-landing', [480, 800, 1200, 1600], 'A passenger jet landing at dusk on a lit runway beside the airport terminal and control tower', 'center 45%'),
  safari: P(ILL, 'safari-elephant', [480, 800, 1200, 1600], 'An African elephant beside a bush track as a safari vehicle of visitors approaches', 'center 40%'),
  gavel: P(ILL, 'legal-gavel', [480, 800, 1200, 1600], 'A wooden judge\u2019s gavel with a brass band above a sound block, legal papers and scales of justice behind', 'center 40%'),
  maternity: P(ILL, 'maternity-care', [480, 800, 1122], 'A mother in a bright patterned dress holds her newborn while a health worker listens with a stethoscope', 'center 35%'),
  maternityWide: P(ILL, 'maternity-care-wide', [480, 800, 1122], 'A mother holds her newborn while a health worker examines the baby with a stethoscope', 'center 45%'),
  clinic: P(ILL, 'clinic-banner', [480, 800, 1200, 1600], 'A doctor smiling with a patient in a bright clinic, beside the words Better Care, Good Health and Brighter Future'),
  wedding: P(ILL, 'wedding-reception', [480, 800, 1122], 'A long banquet table with roses and candles beneath a canopy of fairy lights in an evening garden', 'center 55%'),
  involved: P(ILL, 'get-involved', [480, 800, 1200], 'Red sneakers standing on a chalkboard beside a banner that reads get involved'),
  aboutHero: P(ILL, 'about-hero', [480, 800, 1200, 1600], 'A chalkboard reading About Us with a lightbulb, notebook, puzzle pieces, coffee and laptop'),
  aboutChalk: P(ILL, 'about-chalkboard', [480, 800, 1200, 1600], 'A chalkboard reading About Us surrounded by sketches of a lightbulb, a team, a target and a handshake'),
  handsets: P(ILL, 'contact-handsets', [480, 800], 'Three vintage black telephone handsets connected by looping brown cords on a pale blue background'),

  // Illustrative still-life and generated images (decorative only)
  kente: P(ILL, 'kente-weave', [480, 800, 1168], 'Close-up of a woven kente-style cloth in gold, green, red and navy'),
  flatlay: P(ILL, 'travel-flatlay', [480, 800, 1168], 'A leather case, folded map, compass and travel notebook laid out on linen'),
  coffee: P(ILL, 'coffee-pot-beans', [480, 800, 1168], 'A clay coffee pot, cups and roasted and green coffee beans on a wooden table'),
  textiles: P(ILL, 'textiles-fabrics', [480, 800, 1168], 'A pile of patterned African textiles in indigo, rust, green and gold'),
  notebook: P(ILL, 'notebook-plant', [480, 800, 1168], 'An open notebook, a mug of tea and a potted plant in window light'),
  armchair: P(ILL, 'armchair-home', [480, 800, 1168], 'A mustard armchair, clay vase and dried grasses in a warm, quiet room'),
  gTravel: P(ILL, 'gen-travel-exploration', [480, 800, 1200, 1600], 'A world map with a hat, camera, globe and model plane on a travel desk'),
  gCulture: P(ILL, 'gen-culture-heritage', [480, 800, 1200, 1600], 'Kente cloth, a carved mask, a drum and beaded bracelets in front of a map of Africa'),
  gFood: P(ILL, 'gen-food-heritage', [480, 800, 1200, 1600], 'A cup of coffee, a sack of beans, bananas and stew in front of a map of Africa'),
  gGrowth: P(ILL, 'gen-growth-impact', [480, 800, 1200, 1600], 'Graduation cap, books, a seedling and a laptop in front of a city skyline'),
}

export const BRAND = { logo: '/images/brand/homeafar-logo.png' }

export const imgSrc = (p, w) => p.src || `/images/${p.dir}/${p.b}-${w}.webp`
export const imgSrcSet = (p) => p.src ? `${p.src} 1200w` : p.w.map((w) => `${imgSrc(p, w)} ${w}w`).join(', ')
