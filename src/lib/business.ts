export const BUSINESS = {
  name: "APM Arizona Electric LLC",
  shortName: "APM Arizona Electric",
  phone: "+1 (480) 619-0510",
  phoneHref: "tel:+14806190510",
  whatsapp: "https://wa.me/14806190510",
  email: "info@apmarizonaelectric.com",
  city: "Phoenix",
  state: "Arizona",
  region: "AZ",
  address: "Phoenix, Arizona",
  hours: [
    { d: "Monday – Friday", h: "7:00 AM – 4:00 PM" },
    { d: "Saturday", h: "8:00 AM – 1:00 PM" },
    { d: "Sunday", h: "Closed" },
  ],
  rating: 5.0,
  reviewCount: 210,
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  image: string;
  benefits: string[];
  problems: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "residential-electrical",
    title: "Residential Electrical Services",
    short: "Trusted home electricians for repairs, upgrades and installations.",
    description:
      "From aging panels to modern smart lighting, our licensed electricians deliver dependable residential electrical work across the Phoenix Metro. We treat every home like our own.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1600&q=70",
    benefits: ["Licensed & insured technicians", "Upfront honest pricing", "Same-day appointments", "100% workmanship guarantee"],
    problems: ["Flickering lights", "Tripping breakers", "Outdated wiring", "Dead outlets"],
  },
  {
    slug: "commercial-electrical",
    title: "Commercial Electrical Services",
    short: "Reliable commercial electricians keeping Arizona businesses powered.",
    description:
      "Retail spaces, offices, restaurants and light industrial — we deliver code-compliant commercial electrical service with minimal downtime and clean, professional installations.",
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1600&q=70",
    benefits: ["After-hours scheduling", "Tenant improvement expertise", "Preventive maintenance plans", "Emergency response"],
    problems: ["Power outages", "Overloaded panels", "Lighting failures", "Data & low-voltage issues"],
  },
  {
    slug: "ceiling-fan-installation",
    title: "Ceiling Fan Installation & Replacement",
    short: "Cool your home the right way with expertly installed ceiling fans.",
    description:
      "We install and replace ceiling fans of every style — from great-room statement fans to bedroom whisper-quiet models — with proper bracing, wiring and balance.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=70",
    benefits: ["Proper support bracing", "Remote & smart controls", "Balanced, wobble-free finish", "Old-fan removal & haul-away"],
    problems: ["Wobbling fans", "No neutral wire", "Dead pull-chains", "Unsupported junction boxes"],
  },
  {
    slug: "light-fixture-installation",
    title: "Light Fixture Installation",
    short: "Chandeliers, recessed lighting, pendants and outdoor fixtures.",
    description:
      "Beautiful lighting transforms a space. Our team installs interior and exterior fixtures cleanly and safely — from dining room chandeliers to landscape lighting.",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1600&q=70",
    benefits: ["Dimmer-compatible wiring", "Recessed LED conversions", "Outdoor & landscape lighting", "Smart-home integrations"],
    problems: ["Buzzing fixtures", "Non-dimmable LEDs", "Burned-out cans", "Improperly grounded lights"],
  },
  {
    slug: "circuit-breaker-repairs",
    title: "Circuit Breaker Troubleshooting & Repairs",
    short: "Fast, accurate diagnosis of tripping breakers and panel issues.",
    description:
      "Breakers that trip repeatedly are a warning. We diagnose overloads, short circuits, ground faults and failed breakers — and repair or replace only what's needed.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1600&q=70",
    benefits: ["Full panel inspection", "Thermal imaging available", "Code-compliant replacements", "Written repair report"],
    problems: ["Repeated tripping", "Hot breaker panel", "Buzzing sounds", "Half-house power loss"],
  },
  {
    slug: "kitchen-electrical-repairs",
    title: "Kitchen Electrical Repairs",
    short: "Dedicated circuits, GFCIs and modern kitchen power upgrades.",
    description:
      "Kitchens demand serious electrical capacity. We add dedicated circuits, upgrade GFCIs, install under-cabinet lighting and wire modern appliances safely.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1600&q=70",
    benefits: ["Dedicated appliance circuits", "GFCI & AFCI protection", "Under-cabinet lighting", "Range & oven wiring"],
    problems: ["Tripping kitchen circuits", "Missing GFCIs", "Dim under-cabinet lights", "Improper appliance wiring"],
  },
  {
    slug: "electrical-maintenance",
    title: "Electrical Maintenance",
    short: "Preventive care that keeps your electrical system safe and efficient.",
    description:
      "Routine maintenance prevents fires, outages and expensive repairs. Our maintenance plans catch small issues before they become emergencies.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=70",
    benefits: ["Annual safety inspections", "Panel torque & thermal checks", "Outlet & GFCI testing", "Priority service scheduling"],
    problems: ["Loose connections", "Corroded terminals", "Aging breakers", "Undersized panels"],
  },
  {
    slug: "electrical-troubleshooting",
    title: "Electrical Troubleshooting",
    short: "Chasing down a mystery electrical problem? We find it fast.",
    description:
      "Ghost switches, dead outlets, half-lit rooms — we systematically diagnose the strangest electrical problems using modern testing equipment and 30+ years of field knowledge.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1600&q=70",
    benefits: ["Systematic diagnostic process", "Modern testing equipment", "Clear written findings", "Fixed-right-the-first-time guarantee"],
    problems: ["Dead outlets", "Flickering lights", "Burning smell", "Intermittent power"],
  },
];

export type Location = { slug: string; city: string; blurb: string; landmarks: string[] };

export const LOCATIONS: Location[] = [
  { slug: "phoenix-az", city: "Phoenix", blurb: "Our hometown. From Arcadia to Desert Ridge, we serve Phoenix homeowners and businesses every day.", landmarks: ["Camelback Mountain", "Downtown Phoenix", "Arcadia", "Desert Ridge", "Ahwatukee"] },
  { slug: "mesa-az", city: "Mesa", blurb: "Fast, licensed electrical service across Mesa — from Eastmark to Dobson Ranch.", landmarks: ["Downtown Mesa", "Eastmark", "Dobson Ranch", "Las Sendas"] },
  { slug: "scottsdale-az", city: "Scottsdale", blurb: "Premium residential and commercial electrical work for Scottsdale homes and businesses.", landmarks: ["Old Town Scottsdale", "North Scottsdale", "Troon", "DC Ranch"] },
  { slug: "tempe-az", city: "Tempe", blurb: "Trusted electricians serving Tempe families, students and local businesses.", landmarks: ["ASU Campus", "Mill Avenue", "South Tempe", "Warner Ranch"] },
  { slug: "chandler-az", city: "Chandler", blurb: "Reliable electrical service across Chandler — repairs, upgrades and new installations.", landmarks: ["Downtown Chandler", "Ocotillo", "Sun Lakes", "Fulton Ranch"] },
  { slug: "glendale-az", city: "Glendale", blurb: "Honest, affordable electricians for Glendale homes and commercial spaces.", landmarks: ["Historic Downtown Glendale", "Arrowhead Ranch", "Westgate", "Peoria border"] },
];

export const FAQS = [
  { q: "Are you licensed and insured?", a: "Yes. APM Arizona Electric LLC is a fully licensed and insured electrical contractor operating throughout the Phoenix Metro Area." },
  { q: "Do you offer free estimates?", a: "Absolutely. We provide free, no-obligation estimates for all residential and commercial electrical projects." },
  { q: "How quickly can you respond to emergencies?", a: "We prioritize emergency calls and typically respond the same day. Call +1 (480) 619-0510 for urgent electrical issues." },
  { q: "What areas do you serve?", a: "We serve Phoenix, Mesa, Scottsdale, Tempe, Chandler, Glendale and the entire Phoenix Metro Area." },
  { q: "Do you handle both residential and commercial work?", a: "Yes — from single-family homes to offices, retail spaces and light industrial." },
  { q: "How much does an electrician cost?", a: "Every job is different. We provide upfront, honest pricing before starting any work — no surprises." },
];
