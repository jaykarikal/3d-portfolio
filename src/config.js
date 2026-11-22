// ─────────────────────────────────────────────────────────────
//  SITE CONFIG — edit this file to change text, prices & links.
//  (The same idea powers your client template later.)
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Jay Karikal',
  studio: '3D Web Studio',
  whatsapp: '917829992907', // country code + number, no "+"
  defaultMessage: "Hi Jay, I'd like a free 3D website preview for my business",
}

export const waLink = (message = site.defaultMessage) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`

export const benefits = [
  {
    icon: '✦',
    title: 'Look premium instantly',
    text: 'Customers judge your business in 3 seconds. An interactive 3D site makes you look like the biggest name in your city.',
  },
  {
    icon: '◎',
    title: 'Customers explore before they visit',
    text: 'Let people rotate your product, walk through your space or browse your menu, then message you on WhatsApp in one tap.',
  },
  {
    icon: '⚡',
    title: 'Fast on every phone',
    text: 'Built and compressed for mobile data, so it opens quickly even on budget Android phones.',
  },
]

// Demo projects. Add `url` once each demo is live.
export const demos = [
  {
    title: 'Brew & Bean Café',
    tag: 'Café · Smart Site',
    text: 'A floating 3D coffee cup hero, menu highlights and one-tap table booking on WhatsApp.',
    gradient: 'from-amber-500/40 via-orange-600/20 to-transparent',
    url: null,
  },
  {
    title: 'SmileCare Dental',
    tag: 'Clinic · Smart Site',
    text: 'A calm, trustworthy clinic site with a 3D accent, treatments with prices, and appointment booking.',
    gradient: 'from-sky-400/40 via-cyan-600/20 to-transparent',
    url: null,
  },
  {
    title: 'Oak & Grain Furniture',
    tag: 'Furniture · Immersive 3D',
    text: 'A 3D sofa customers can rotate and recolour live, with fabric swatches before they visit the showroom.',
    gradient: 'from-violet-500/40 via-fuchsia-600/20 to-transparent',
    url: null,
  },
]

export const packages = [
  {
    name: 'Smart Site',
    price: '₹15,000',
    for: 'Cafés, clinics, salons, gyms, coaching centres, shops',
    features: [
      '1-page scrolling website',
      '1 subtle 3D accent element',
      'WhatsApp button + contact form',
      'Google Maps & business info',
      'Mobile-first, fast loading',
      '2 rounds of changes',
      'Live in 7 days',
    ],
    popular: false,
  },
  {
    name: '3D Showcase',
    price: '₹25,000',
    for: 'Restaurants, hotels, jewellers, boutiques, schools',
    features: [
      'Up to 4 pages',
      '3D hero + scroll animations',
      'Project / product gallery',
      'Basic Google SEO setup',
      'WhatsApp + enquiry form',
      '3 rounds of changes',
      'Live in 10–12 days',
    ],
    popular: true,
  },
  {
    name: 'Immersive 3D',
    price: '₹40,000',
    for: 'Builders, interiors, furniture, showrooms, manufacturers',
    features: [
      'Up to 6 pages',
      '3D product configurator or walkthrough',
      'Custom 3D models of your products',
      'Speed-optimised for mobile',
      'Analytics setup',
      '4 rounds of changes',
      'Live in 15–20 days',
    ],
    popular: false,
  },
]

export const steps = [
  { n: '01', title: 'Free preview', text: 'I design a preview of your website with your name and brand colours, free, in 24–48 hours.' },
  { n: '02', title: 'Approve & start', text: 'Like it? Pay 50% to begin. Not for you? No problem, you owe nothing.' },
  { n: '03', title: 'Build & refine', text: 'I build the full site and share live progress links. You suggest changes.' },
  { n: '04', title: 'Go live', text: 'Pay the remaining 50% and your site goes live on your own .com or .in domain.' },
]

export const faqs = [
  {
    q: 'Is the preview really free?',
    a: 'Yes. I make a preview for your business at no cost. You only pay if you decide to go ahead.',
  },
  {
    q: 'Do I need to buy a domain or hosting?',
    a: 'You buy your own domain (about ₹500–1,000 a year for .in or .com) so it is always yours. I set it up for you, and hosting is included free.',
  },
  {
    q: 'Will the 3D work on mobile phones?',
    a: 'Yes. Every site is built mobile-first and compressed to load fast, even on budget Android phones and mobile data.',
  },
  {
    q: 'Can I update the website later?',
    a: 'Yes. Small updates are easy, and there is an optional monthly maintenance plan if you want me to handle changes for you.',
  },
  {
    q: 'I already have Instagram. Why do I need a website?',
    a: 'Instagram decides who sees your posts, and it rarely shows up when people search Google for your service. A website is yours, ranks on Google, and makes your Instagram look more professional too.',
  },
]
