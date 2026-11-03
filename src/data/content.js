// All page copy lives here so it is easy to review and edit. Nothing here claims an active service that does not exist yet.
export const GALLERY = ['pp1', 'pp2', 'pp3', 'pp4', 'pp5', 'pp6']
export const NAV = [
  ['/about', 'About'], ['/safe-landing', 'Safe Landing'], ['/tourism-to-africa', 'Tourism to Africa', 'Tourism'],
  ['/protection-and-justice', 'Protection & Justice', 'Justice'], ['/womens-health', "Women's Health & Impact", "Women's Health"],
  ['/events', 'Events'], ['/stories-from-afar', 'Stories From Afar', 'Stories'], ['/beyond-the-borders', 'Beyond the Borders', 'Beyond'],
  ['/opportunities', 'Opportunities'], ['/get-involved', 'Get Involved'], ['/contact', 'Contact'],
]
export const SECTORS = [
  ['/safe-landing', 'Safe Landing', 'From surviving to thriving: practical information for Africans living in or visiting Romania.'],
  ['/tourism-to-africa', 'Tourism to Africa', 'Discover African countries through culture, food, music, landscapes and local experiences.'],
  ['/protection-and-justice', 'Protection & Justice', 'Responsible information and checked referrals for Africans facing injustice.'],
  ['/womens-health', "Women's Health & Impact", 'Our long-term vision for affordable, accessible care for women and girls.'],
]
export const COUNTRIES = [
  ['Kenya'], ['Uganda'], ['Rwanda'], ['Zimbabwe'],
  ['Democratic Republic of the Congo', 'Capital: Kinshasa. Not the same country as the Republic of the Congo.'],
  ['Republic of the Congo', 'Capital: Brazzaville. Not the same country as the Democratic Republic of the Congo.'],
  ['Senegal'], ['Romania', "Country context for HomeAFar's community."],
]
export const VALUES = [
  ['Belonging', 'People deserve connection and a place where they feel welcome.'],
  ['Dignity', 'Every person should be treated with respect and fairness.'],
  ['African identity and diversity', "Celebrating the continent's many cultures, histories, languages and experiences."],
  ['Opportunity', 'Making information, relationships and pathways to growth easier to reach.'],
  ['Solidarity and justice', 'Taking concerns about injustice seriously and helping people find appropriate support.'],
  ['Creativity and participation', 'Building experiences that bring people together.'],
  ['Accountability', 'Communicating honestly about activities, funding, partners and results.'],
  ['Sustainable impact', 'Developing long-term initiatives carefully, with community needs at the centre.'],
]
// Generic content pages: each section has a heading, paragraphs and optional list; `status` labels maturity honestly.
export const PAGES = {
  'safe-landing': { title: 'Safe Landing', lead: 'From surviving to thriving.', img: 'airport', pos: 'center 45%',
    side: 'flatlay', related: ['/opportunities', '/protection-and-justice', '/get-involved'],
    notice: 'Safe Landing is a direction HomeAFar is building toward. We do not publish unverified housing listings and cannot promise accommodation placements.',
    sections: [
      ['Who it is for', ['African professionals living and working in Romania.', 'Africans newly arriving in Romania.', 'Africans visiting Romania for tourism, work, study or events.'], true],
      ['Affordable housing', ['HomeAFar is working toward affordable-housing information, trusted referrals and partnerships so people can find safe places to stay without confusion or exploitation. Any resource we share will be clearly labelled as informational, referred or formally verified.']],
      ['Settlement resources', ['Practical guides for newcomers and visitor accommodation guidance will appear here once they have been checked. Until then, contact us with the questions you most need answered.']],
    ] },
  'tourism-to-africa': { title: 'Tourism to Africa', lead: 'See Africa through a richer, more diverse lens.', img: 'safari', pos: 'center 40%',
    side: 'kente', related: ['/beyond-the-borders', '/events', '/stories-from-afar'],
    gallery: [['gTravel', 'Travel & landscapes'], ['gCulture', 'Heritage & culture'], ['gFood', 'Food & coffee'], ['textiles', 'Fashion & textiles']],
    notice: 'Country guides are being prepared. We will link only to reputable tourism operators and local businesses.',
    sections: [
      ['What you will find here', ['Country guides and cultural features.', 'Heritage, food and traditional cuisine.', 'Music, arts and landscapes.', 'Local experiences and tourism-related opportunities.', 'Future travel partnerships and curated experiences, once they exist.'], true],
    ] },
  'protection-and-justice': { title: 'Protection & Justice', lead: 'Standing with Africans who face injustice.', img: 'gavel', pos: 'center 40%',
    side: 'armchair', related: ['/safe-landing', '/contact', '/get-involved'],
    notice: 'HomeAFar does not provide legal representation, emergency services or guaranteed protection. In an emergency in Romania, call 112.',
    sections: [
      ['What we aim to do', ['Help people understand where they can seek appropriate help for discrimination, exploitation, injustice or unfair treatment, and point to credible organisations and professional support.']],
      ['Referrals', ['Verified referral resources will be listed here after each has been checked. We will not list a service we have not reviewed.']],
      ['Your privacy', ['Please do not send detailed accounts of an incident through the general contact form. Use it to ask for a safe way to be put in touch.']],
    ] },
  'womens-health': { title: "Women's Health & Impact", lead: 'A long-term vision for care that is affordable, accessible and respectful.', img: 'maternityWide', mobile: 'maternity', pos: 'center 6%',
    side: 'gGrowth', banner: ['clinic', 'Illustrative image: the future we are working toward, with care that is affordable, accessible and respectful.'], related: ['/about', '/get-involved', '/contact'],
    notice: 'HomeAFar is not a hospital, clinic or medical provider, and this page is not medical advice. Please see a qualified professional for care.',
    sections: [
      ['Long-term ambitions', ['Awareness of reproductive and genital health, including HPV, endometriosis, adenomyosis, uterine fibroids and PCOS.', 'Gender-based violence awareness and safe, confidential spaces.', 'Early pregnancy support without shame or blame.', 'Affordable, community-based care closer to where people live.'], true],
      ['Early research directions', ['Nanyuki and Embu, Kenya, have been identified as places of interest for future research into women\'s health needs. No research or service delivery has started. We will announce research only once its scope, methods, permissions and partners are confirmed.']],
      ['Current activity', ['There are no active medical programmes, partnerships or services. Please do not share health details through our website forms.']],
    ] },
}

// Facts below come only from content already published on this site; do not add figures that cannot be verified.
export const STATS = [
  ['1', 'community event held', 'Passport Picnic, 30 August 2026'],
  ['5', 'countries represented', 'at our first event'],
  ['4', 'focus areas', 'being built step by step'],
  ['8', 'country profiles', 'in preparation'],
]
export const JOURNEY = [
  ['November 2024', 'The journey begins', 'Founder Murugi Njiru moves from Kenya to Romania and starts to see what community could look like.'],
  ['30 August 2026', 'Passport Picnic', 'Our first community event: a cultural potluck with games in Tineretului Park, Bucharest.'],
  ['Now', 'Building the foundations', 'Preparing country profiles, Safe Landing resources and verified opportunities, one carefully checked step at a time.'],
]
export const FAQ = [
  ['Who is HomeAFar for?', 'HomeAFar is for Africans connecting across borders, starting with African experiences in Romania and Eastern Europe: people who live, work, study or travel here, and friends who want to be part of the community.'],
  ['Do you offer housing, legal help or medical care?', 'Not at the moment. Safe Landing and Protection & Justice are directions we are building toward, and Women\'s Health & Impact is a long-term vision. We will only list resources after we have checked them. In an emergency in Romania, call 112.'],
  ['How do I take part?', 'Choose the route that suits you on the Get Involved page: become a member, volunteer, partner with us or subscribe to updates. You can also write to us from the Contact page.'],
  ['Can I share my story?', 'Yes. Stories From Afar is built around consent: nothing is published without the storyteller\'s approval. Send a short summary and we will contact you.'],
  ['How are opportunities chosen?', 'Every listing shows its source link and, where relevant, a closing date. We list opportunities only after checking them.'],
  ['What happens to the details I send?', 'We use them only to reply to you, handle your application or registration, or send updates you asked for. You can ask us to export or delete them at any time. Read the privacy notice for details.'],
]
export const TOPICS = ['Culture & history', 'Languages', 'Food & music', 'Fashion', 'Tourism', 'Economy', 'Contemporary life']
export const OPP_TYPES = ['Scholarships', 'Jobs', 'Internships', 'Volunteering', 'Training', 'Business', 'Creative collaborations']
export const FOOTER_NAV = {
  Explore: [['/about', 'About'], ['/events', 'Events'], ['/stories-from-afar', 'Stories From Afar'], ['/beyond-the-borders', 'Beyond the Borders'], ['/opportunities', 'Opportunities']],
  'Our work': [['/safe-landing', 'Safe Landing'], ['/tourism-to-africa', 'Tourism to Africa'], ['/protection-and-justice', 'Protection & Justice'], ['/womens-health', "Women's Health & Impact"]],
  Connect: [['/get-involved', 'Get involved'], ['/contact', 'Contact'], ['/privacy', 'Privacy']],
}
export const FOUNDERS = [
  ['Murugi Njiru', 'Founder & Managing Director', 'Originated the HomeAFar vision and leads its direction, events, storytelling concepts and community growth.'],
  ['Charles Marcell', 'Co-founder, Technical Co-Founder & Director of Strategy, Creative & Technology', 'Builds meaningful partnerships and community connections, and contributes to strategy, digital and technology direction.'],
]
export const IG = 'https://www.instagram.com/home.a.far/'
// Which illustration represents each focus area on the homepage tiles.
export const SECTOR_IMG = { '/safe-landing': 'airport', '/tourism-to-africa': 'safari', '/protection-and-justice': 'gavel', '/womens-health': 'maternityWide' }
