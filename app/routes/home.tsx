import type { MetaFunction } from "react-router";
import ComingSoon from "~/components/coming-soon/coming-soon";

// ─── Structured Data (JSON-LD) ───────────────────────────────────────────────
const jsonLdLocalBusiness = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://pixelwalacinematic.com/#business",
  name: "PixelWala Cinematic",
  alternateName: ["Pixel Wala", "PixelWala Photography", "PixelWala Cinematic Studio"],
  description:
    "PixelWala Cinematic is a premium wedding photography and cinematography studio serving Indore, Bhopal, Sagar, Khurai, Bina, and all cities across Madhya Pradesh. We specialise in wedding shoots, pre-wedding shoots, engagement shoots, birthday photography, maternity shoots, corporate events, product photography, and candid photography.",
  url: "https://pixelwalacinematic.com",
  logo: "https://img-wixmp-1dc246a0b7b546f6581a8d48.wixmp.com/uploads/attachments/1f3e8d83-9c74-4bdd-a532-d8f9b7040151/IMG_7154.JPG.jpeg/v1/fit/w_800,h_4000,q_90/IMG_7154.jpg",
  image: "https://img-wixmp-1dc246a0b7b546f6581a8d48.wixmp.com/uploads/attachments/79aade1a-9178-4df6-a6c3-aaab1081f2c3/IMG_7156.JPG.jpeg/v1/fit/w_800,h_4000,q_90/IMG_7156.jpg",
  telephone: "+91-95224-41521",
  email: "pixelwala21@gmail.com",
  sameAs: [
    "https://www.instagram.com/pixelwalacinematic/",
    "https://wa.me/919522441521",
  ],
  areaServed: [
    { "@type": "City", name: "Indore", containedInPlace: { "@type": "State", name: "Madhya Pradesh" } },
    { "@type": "City", name: "Bhopal", containedInPlace: { "@type": "State", name: "Madhya Pradesh" } },
    { "@type": "City", name: "Sagar", containedInPlace: { "@type": "State", name: "Madhya Pradesh" } },
    { "@type": "City", name: "Khurai", containedInPlace: { "@type": "State", name: "Madhya Pradesh" } },
    { "@type": "City", name: "Bina", containedInPlace: { "@type": "State", name: "Madhya Pradesh" } },
    { "@type": "City", name: "Jabalpur", containedInPlace: { "@type": "State", name: "Madhya Pradesh" } },
    { "@type": "City", name: "Gwalior", containedInPlace: { "@type": "State", name: "Madhya Pradesh" } },
    { "@type": "City", name: "Ujjain", containedInPlace: { "@type": "State", name: "Madhya Pradesh" } },
    { "@type": "State", name: "Madhya Pradesh", containedInPlace: { "@type": "Country", name: "India" } },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Photography & Cinematography Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wedding Photography" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wedding Cinematography / Videography" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pre-Wedding Shoot" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Engagement Photography" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Haldi Ceremony Photography" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mehendi Photography" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reception Photography" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Birthday Photography" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Maternity Photography" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Newborn Photography" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Event Photography" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Product Photography" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Candid Photography" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fashion Photography" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Baby Shower Photography" } },
    ],
  },
  priceRange: "₹₹–₹₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Bank Transfer",
};

const jsonLdPhotographer = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://pixelwalacinematic.com/#photographer",
  name: "PixelWala Cinematic",
  jobTitle: "Professional Photographer & Cinematographer",
  worksFor: { "@id": "https://pixelwalacinematic.com/#business" },
  knowsAbout: [
    "Wedding Photography",
    "Pre-Wedding Photography",
    "Candid Photography",
    "Cinematography",
    "Video Editing",
    "Portrait Photography",
    "Event Photography",
    "Drone Photography",
  ],
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://pixelwalacinematic.com/#website",
  name: "PixelWala Cinematic",
  url: "https://pixelwalacinematic.com",
  description: "Best wedding photographer in Indore, Bhopal, Sagar, Khurai, Bina – PixelWala Cinematic offers premium wedding photography, pre-wedding shoots, and cinematography across Madhya Pradesh.",
  inLanguage: "en-IN",
  publisher: { "@id": "https://pixelwalacinematic.com/#business" },
};

// ─── Meta Export ─────────────────────────────────────────────────────────────
export const meta: MetaFunction = () => [
  // ── Core ──────────────────────────────────────────────────────────────────
  {
    title:
      "PixelWala Cinematic | Best Wedding Photographer in Indore, Bhopal, Sagar, Khurai, Bina | MP",
  },
  {
    name: "description",
    content:
      "PixelWala Cinematic — Premium Wedding Photography & Cinematography in Indore, Bhopal, Sagar, Khurai, Bina & across Madhya Pradesh. Specialising in wedding shoots, pre-wedding shoots, engagement, haldi, mehendi, birthday, maternity, corporate & candid photography. Book now: +91 95224 41521.",
  },
  {
    name: "keywords",
    content: [
      // Brand
      "PixelWala", "PixelWala Cinematic", "Pixel Wala photography", "pixelwalacinematic",
      // Photography types
      "wedding photographer", "wedding photography", "wedding cinematography", "wedding videography",
      "pre wedding shoot", "pre-wedding photography", "engagement photography", "engagement shoot",
      "haldi ceremony photography", "mehendi photography", "reception photography", "sangeet photography",
      "candid wedding photographer", "candid photography", "traditional wedding photography",
      "birthday photography", "birthday shoot", "maternity photography", "maternity shoot",
      "newborn photography", "baby shower photography", "baby shower shoot",
      "corporate event photography", "corporate photography", "product photography",
      "fashion photography", "portrait photography", "model shoot",
      "outdoor photography", "indoor photography", "studio photography",
      "drone photography", "aerial photography",
      "cinematography", "videography", "wedding film", "cinematic wedding video",
      "highlight reel", "same day edit",
      // Locations — Indore
      "wedding photographer in Indore", "best wedding photographer Indore",
      "pre wedding shoot Indore", "candid photographer Indore",
      "photography studio Indore", "Indore wedding photography",
      "Indore photographer", "wedding cinematography Indore",
      // Locations — Bhopal
      "wedding photographer in Bhopal", "best wedding photographer Bhopal",
      "pre wedding shoot Bhopal", "candid photographer Bhopal",
      "photography studio Bhopal", "Bhopal wedding photography",
      "Bhopal photographer",
      // Locations — Sagar
      "wedding photographer in Sagar", "best wedding photographer Sagar",
      "pre wedding shoot Sagar", "photographer in Sagar MP",
      "Sagar wedding photography", "photography Sagar Madhya Pradesh",
      // Locations — Khurai
      "wedding photographer in Khurai", "photographer in Khurai",
      "Khurai photography", "Khurai wedding shoot", "Khurai pre wedding shoot",
      "best photographer Khurai", "Khurai Madhya Pradesh photography",
      // Locations — Bina
      "wedding photographer in Bina", "photographer in Bina",
      "Bina photography", "Bina wedding shoot", "Bina pre wedding shoot",
      "best photographer Bina", "Bina Madhya Pradesh photography",
      // Other MP cities
      "wedding photographer Madhya Pradesh", "best photographer MP",
      "wedding photographer Jabalpur", "wedding photographer Gwalior",
      "wedding photographer Ujjain", "wedding photographer Rewa",
      "wedding photographer Satna", "wedding photographer Chhindwara",
      "wedding photographer Dewas", "wedding photographer Morena",
      // General India
      "best wedding photographer India", "affordable wedding photography",
      "luxury wedding photography", "destination wedding photographer",
      "wedding photography packages", "wedding photography price",
      // Cinematic
      "cinematic wedding photographer", "cinematic videographer",
      "wedding film maker", "wedding movie maker India",
    ].join(", "),
  },
  { name: "author", content: "PixelWala Cinematic" },
  { name: "theme-color", content: "#0B0B0B" },
  { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },

  // ── Canonical & Language ──────────────────────────────────────────────────
  { tagName: "link", rel: "canonical", href: "https://pixelwalacinematic.com/" },
  { httpEquiv: "content-language", content: "en-IN" },

  // ── Geo / Local SEO ───────────────────────────────────────────────────────
  { name: "geo.region", content: "IN-MP" },
  { name: "geo.placename", content: "Sagar, Madhya Pradesh, India" },
  { name: "geo.position", content: "23.8388;78.7378" },
  { name: "ICBM", content: "23.8388, 78.7378" },

  // ── Open Graph ────────────────────────────────────────────────────────────
  { property: "og:type", content: "website" },
  { property: "og:site_name", content: "PixelWala Cinematic" },
  { property: "og:title", content: "PixelWala Cinematic | Best Wedding Photographer in Indore, Bhopal, Sagar, Khurai, Bina" },
  {
    property: "og:description",
    content:
      "Premium wedding photography & cinematography in Indore, Bhopal, Sagar, Khurai, Bina & all of Madhya Pradesh. Candid, pre-wedding, maternity, birthday & corporate shoots. Call +91 95224 41521.",
  },
  { property: "og:url", content: "https://pixelwalacinematic.com/" },
  {
    property: "og:image",
    content:
      "https://img-wixmp-1dc246a0b7b546f6581a8d48.wixmp.com/uploads/attachments/79aade1a-9178-4df6-a6c3-aaab1081f2c3/IMG_7156.JPG.jpeg/v1/fit/w_800,h_4000,q_90/IMG_7156.jpg",
  },
  { property: "og:image:alt", content: "PixelWala Cinematic — Wedding Photography" },
  { property: "og:image:width", content: "800" },
  { property: "og:image:height", content: "533" },
  { property: "og:locale", content: "en_IN" },

  // ── Twitter Card ──────────────────────────────────────────────────────────
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:site", content: "@pixelwalacinematic" },
  { name: "twitter:creator", content: "@pixelwalacinematic" },
  { name: "twitter:title", content: "PixelWala Cinematic | Best Wedding Photographer in MP" },
  {
    name: "twitter:description",
    content:
      "Wedding photography, pre-wedding shoots, cinematography in Indore, Bhopal, Sagar, Khurai, Bina & Madhya Pradesh. Book now!",
  },
  {
    name: "twitter:image",
    content:
      "https://img-wixmp-1dc246a0b7b546f6581a8d48.wixmp.com/uploads/attachments/79aade1a-9178-4df6-a6c3-aaab1081f2c3/IMG_7156.JPG.jpeg/v1/fit/w_800,h_4000,q_90/IMG_7156.jpg",
  },

  // ── JSON-LD Structured Data ───────────────────────────────────────────────
  { "script:ld+json": jsonLdLocalBusiness },
  { "script:ld+json": jsonLdPhotographer },
  { "script:ld+json": jsonLdWebSite },
];

export default function Home() {
  return <ComingSoon />;
}
