export const SITE = {
  url: "https://www.apmarizonaelectric.com",
  domain: "apmarizonaelectric.com",
};

export const abs = (path: string) => `${SITE.url}${path.endsWith('/') ? path : path + '/'}`;

export const BUSINESS = {
  name: "APM Arizona Electric LLC",
  shortName: "APM Arizona Electric",
  phone: "(480) 806-1832",
  phoneHref: "tel:4806190510",
  phoneSchema: "480-790-4269",
  email: "info@apmarizonaelectric.com",
  city: "Tempe",
  primaryLocation: "Phoenix",
  state: "Arizona",
  region: "AZ",
  street: "1216 W Hermosa Dr",
  addressLocality: "Tempe",
  postalCode: "85282",
  address: "1216 W Hermosa Dr, Tempe, AZ 85282",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106597.79846182055!2d-112.0103148506771!3d33.39243650285948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0f0f2af0a919%3A0x97952056a9736ef4!2sApm%20Arizona%20Electric%20LLC!5e0!3m2!1sen!2sin!4v1785142846531!5m2!1sen!2sin",
  hours: [
    { d: "Monday – Friday", h: "7:00 AM – 4:00 PM" },
    { d: "Saturday", h: "8:00 AM – 1:00 PM" },
    { d: "Sunday", h: "Closed" },
  ],
  rating: 5.0,
  reviewCount: 210,
  primaryKeyword: "Electrician",
};

export type Service = {
  slug: string;
  title: string;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  short: string;
  description: string;
  intro: string[];
  image: string;
  benefits: string[];
  features: string[];
  problems: string[];
  process: { n: string; t: string; d: string }[];
  whyUs: string[];
  faqs: { q: string; a: string }[];
  related: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "residential-electrical-services-phoenix-az",
    title: "Residential Electrical Services",
    navLabel: "Residential Electrical",
    metaTitle: "Residential Electrical Services in Phoenix, AZ | APM Arizona Electric LLC",
    metaDescription:
      "Residential electrical service information for Phoenix, AZ homeowners, including panel upgrades, rewiring, outlets, lighting and home electrical repairs. Call (480) 806-1832 to connect with a local provider.",
    h1: "Residential Electrical Services in Phoenix, AZ",
    short: "Trusted home electricians for repairs, upgrades and installations.",
    description:
      "From aging panels to modern smart lighting, this site helps Phoenix Metro homeowners connect with independent local providers for residential electrical work.",
    intro: [
      "Phoenix homes take a beating from heat. Attic temperatures above 150°F age insulation, loosen terminations and shorten the life of breakers and outlets faster than in almost any other climate in the country. That is why our residential work always starts with a look at the whole system, not just the symptom you called about.",
      "Homeowners can ask about everything from 1950s Sunnyslope bungalows with cloth-wrapped wiring to newer Laveen homes that need EV chargers, smart switches and dedicated circuits. Provider scope, pricing and availability are confirmed directly with the independent provider.",
    ],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1600&q=70",
    benefits: [
      "Connect with independent local providers",
      "Ask about itemized pricing before work begins",
      "Residential service options across the Valley",
      "Verify provider licensing and insurance before hiring",
    ],
    features: [
      "Panel and sub-panel upgrades from 100A to 200A",
      "Whole-home and partial rewiring for older properties",
      "Outlet, switch, GFCI and AFCI installation",
      "EV charger and 240V appliance circuits",
      "Surge protection at the panel and point of use",
      "Smart switches, dimmers and home automation wiring",
    ],
    problems: ["Flickering lights", "Tripping breakers", "Outdated aluminum or cloth wiring", "Dead outlets and warm switch plates"],
    process: [
      { n: "01", t: "Call or Request", d: "Tell us what residential electrical help you need." },
      { n: "02", t: "Get Connected", d: "We help connect you with an independent local provider." },
      { n: "03", t: "Review Details", d: "Discuss scope, pricing, licensing and insurance directly." },
      { n: "04", t: "Choose a Provider", d: "Hire the provider that fits your home and project." },
    ],
    whyUs: [
      "Residential homeowner-focused information",
      "Connections with independent local providers",
      "Clear request details before a provider call",
      "Homeowners decide which provider to hire",
    ],
    faqs: [
      { q: "Do I need a permit for residential electrical work in Phoenix?", a: "Panel replacements, service upgrades, new circuits and rewires may require a permit from the City of Phoenix or your local jurisdiction. Ask the provider how permitting will be handled." },
      { q: "How do I know if my panel needs upgrading?", a: "Common signs are a 100A or smaller service, a Federal Pacific or Zinsco label, no room for new breakers, or breakers that trip when the AC and oven run together. A qualified provider can inspect and explain the options." },
      { q: "Can I add an EV charger to my existing panel?", a: "An independent provider can review the existing load and determine whether a dedicated 240V circuit, sub-panel or service upgrade is appropriate." },
      { q: "How long does a whole-home rewire take?", a: "Timing depends on the home's size, wiring and access. Ask the provider for a written scope and expected schedule before hiring." },
    ],
    related: ["circuit-breaker-repair-phoenix-az", "light-fixture-installation-phoenix-az", "ceiling-fan-installation-phoenix-az"],
  },
  {
    slug: "ceiling-fan-installation-phoenix-az",
    title: "Ceiling Fan Installation & Replacement",
    navLabel: "Ceiling Fan Installation",
    metaTitle: "Ceiling Fan Installation in Phoenix, AZ | APM Arizona Electric LLC",
    metaDescription:
      "Ceiling fan installation and replacement in Phoenix, AZ. Proper bracing, remote and smart controls, wobble-free finish and old fan haul-away. Call (480) 806-1832.",
    h1: "Ceiling Fan Installation in Phoenix, AZ",
    short: "Cool your home the right way with expertly installed ceiling fans.",
    description:
      "Homeowners can ask an independent provider about ceiling fans of every style, including proper bracing, wiring and balance.",
    intro: [
      "A ceiling fan can make a room feel four to six degrees cooler, which in a Phoenix summer translates directly into a smaller APS or SRP bill. The catch is that most fans fail early because they were hung from a light-only junction box that was never rated to carry a moving load.",
      "We replace the box with a fan-rated brace, verify the joist attachment, wire the control the way you actually want it and balance the blades before we leave. Vaulted ceilings, two-story entries and outdoor patios included.",
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=70",
    benefits: ["Fan-rated bracing installed as standard", "Remote, wall and smart control options", "Balanced, wobble-free finish", "Old fan removal and haul-away included"],
    features: [
      "Standard, vaulted and sloped ceiling mounts",
      "Two-story and high-ceiling installations with lift",
      "Damp and wet-rated patio and outdoor fans",
      "Separate switching for fan and light",
      "Smart fan controls and app integration",
      "Downrod sizing for correct airflow",
    ],
    problems: ["Wobbling or rattling fans", "No neutral or third wire at the switch", "Dead pull chains and failed capacitors", "Junction boxes not rated for fan weight"],
    process: [
      { n: "01", t: "Assess", d: "We check the box, bracing and switch wiring." },
      { n: "02", t: "Prep", d: "Fan-rated brace installed, old fan removed." },
      { n: "03", t: "Install", d: "Assembled, hung, wired and controls set." },
      { n: "04", t: "Balance", d: "Run-tested on every speed and cleaned up." },
    ],
    whyUs: [
      "Flat-rate pricing per fan, no hourly surprises",
      "We bring the brace, downrods and hardware",
      "Ladders and lifts for any ceiling height",
      "Debris and packaging hauled away",
    ],
    faqs: [
      { q: "Can you install a fan where there is only a light?", a: "Yes. We replace the light-only box with a fan-rated support and, if you want separate fan and light control, run the additional conductor or install a remote." },
      { q: "What size fan do I need?", a: "As a rule, 42 inch blades for bedrooms up to 12 feet, 52 inch for living rooms, and 60 inch or larger for great rooms. Ceiling height sets the downrod length." },
      { q: "Can you install a fan on a covered patio?", a: "Only a damp or wet-rated fan should go outdoors here. We confirm the rating, the circuit and GFCI protection before installing." },
      { q: "Do providers supply the fan?", a: "Ask the independent provider whether you should supply the fan or whether they can source one, and confirm the installation price." },
    ],
    related: ["light-fixture-installation-phoenix-az", "residential-electrical-services-phoenix-az", "electrical-troubleshooting-phoenix-az"],
  },
  {
    slug: "light-fixture-installation-phoenix-az",
    title: "Light Fixture Installation",
    navLabel: "Light Fixture Installation",
    metaTitle: "Light Fixture Installation in Phoenix, AZ | APM Arizona Electric LLC",
    metaDescription:
      "Light fixture installation information for Phoenix, AZ, including chandeliers, recessed LED, pendants, under-cabinet and landscape lighting. Connect with a local provider.",
    h1: "Light Fixture Installation in Phoenix, AZ",
    short: "Chandeliers, recessed lighting, pendants and outdoor fixtures.",
    description:
      "Beautiful lighting transforms a space. Homeowners can ask an independent provider about interior and exterior fixtures, from dining room chandeliers to landscape lighting.",
    intro: [
      "Lighting is the cheapest remodel there is. Swapping dated cans for slim LED trims, adding pendants over an island or putting the patio on a dimmer changes how a house feels far more than paint does, and it happens in a single visit.",
      "A provider can review the fussy parts: correct box support for heavy chandeliers, dimmer compatibility with LED drivers, and outdoor fixtures with proper gaskets and GFCI protection.",
    ],
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1600&q=70",
    benefits: ["Dimmer-compatible wiring that never buzzes", "Recessed LED conversions in a day", "Outdoor and landscape lighting", "Smart-home lighting integration"],
    features: [
      "Chandelier and heavy fixture installation with rated support",
      "Recessed can-to-LED retrofit and new-can layouts",
      "Kitchen island and dining pendants",
      "Under-cabinet and cove lighting",
      "Landscape, path and security lighting",
      "Timers, photocells, dimmers and scene controls",
    ],
    problems: ["Buzzing or humming fixtures", "LEDs that flicker on old dimmers", "Burned-out or yellowed recessed cans", "Improperly grounded or unsupported fixtures"],
    process: [
      { n: "01", t: "Design Chat", d: "We talk layout, color temperature and controls." },
      { n: "02", t: "Quote", d: "Fixed price per fixture, written before we start." },
      { n: "03", t: "Install", d: "Clean cuts, correct support, matched dimmers." },
      { n: "04", t: "Tune", d: "Aim, dim and verify every fixture with you." },
    ],
    whyUs: [
      "We match dimmers to drivers so LEDs behave",
      "Drywall cut cleanly and patched around new cans",
      "Consistent color temperature across a room",
      "Old fixtures removed and disposed of",
    ],
    faqs: [
      { q: "Why do my LED lights flicker when dimmed?", a: "Nine times out of ten the dimmer is an older incandescent model that cannot handle a low-wattage LED load. Swapping to an LED-rated dimmer matched to the fixture solves it." },
      { q: "Can you add recessed lighting without tearing up the ceiling?", a: "Yes. Remodel-style LED cans install through a small hole and we fish the wiring from above or across the joist bay, so patching is minimal." },
      { q: "What color temperature should I choose?", a: "2700K feels warm, 3000K is a popular middle ground, and 4000K reads crisp in kitchens and garages. Ask the provider to show samples before choosing." },
      { q: "Do providers install landscape lighting?", a: "Ask an independent provider about line-voltage and low-voltage landscape systems, including transformers, timers and photocells." },
    ],
    related: ["ceiling-fan-installation-phoenix-az", "kitchen-electrical-repairs-phoenix-az", "residential-electrical-services-phoenix-az"],
  },
  {
    slug: "circuit-breaker-repair-phoenix-az",
    title: "Circuit Breaker Troubleshooting & Repairs",
    navLabel: "Circuit Breaker Repair",
    metaTitle: "Circuit Breaker Repair in Phoenix, AZ | APM Arizona Electric LLC",
    metaDescription:
      "Circuit breaker repair and panel troubleshooting information for Phoenix, AZ homeowners. Learn about tripping breakers, overloads and failing panels, then connect with a local provider.",
    h1: "Circuit Breaker Repair in Phoenix, AZ",
    short: "Fast, accurate diagnosis of tripping breakers and panel issues.",
    description:
      "Breakers that trip repeatedly are a warning. An independent provider can diagnose overloads, short circuits, ground faults and failed breakers and explain the options.",
    intro: [
      "A breaker that trips once is doing its job. A breaker that trips every afternoon when the AC kicks on is telling you something is wrong upstream, and in Arizona that call comes in most often between June and September when panels are carrying their heaviest load in the worst heat.",
      "We test under load rather than guessing, isolate the branch causing the fault, and tell you plainly whether you need a single breaker, a panel repair or a service upgrade. Older Federal Pacific and Zinsco panels get an honest safety assessment, not a scare pitch.",
    ],
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1600&q=70",
    benefits: ["Full panel inspection with every call", "Thermal imaging available", "Code-compliant breaker replacements", "Written findings you can keep"],
    features: [
      "Load testing and amp draw measurement",
      "Short circuit and ground fault isolation",
      "AFCI and GFCI breaker replacement",
      "Bus bar, lug and torque inspection",
      "Federal Pacific and Zinsco panel assessment",
      "100A to 200A service upgrades",
    ],
    problems: ["Breakers that trip repeatedly", "Panels that are warm to the touch", "Buzzing or crackling from the panel", "Half the house losing power"],
    process: [
      { n: "01", t: "Diagnose", d: "Meter readings taken under real load." },
      { n: "02", t: "Isolate", d: "We find the exact circuit and cause." },
      { n: "03", t: "Repair", d: "Only the failed component is replaced." },
      { n: "04", t: "Verify", d: "Retested, torqued and documented." },
    ],
    whyUs: [
      "Diagnostic-first, we do not swap parts blindly",
      "Residential help for no-power calls",
      "Thermal scan photos included in the report",
      "Straight answers on panel replacement timing",
    ],
    faqs: [
      { q: "Why does my breaker only trip in the afternoon?", a: "Summer afternoon load plus heat inside the panel enclosure pushes a marginal circuit past its rating. It usually points to an overloaded circuit or a weakening breaker, both of which we can confirm with a load test." },
      { q: "Is a Federal Pacific panel really dangerous?", a: "Those panels have a documented history of breakers failing to trip on a fault. Ask a qualified provider for a factual assessment and available options." },
      { q: "Can I just replace the breaker myself?", a: "Working inside a live panel is the most dangerous DIY electrical task there is, and using a non-listed breaker voids the panel rating. It is a job worth handing off." },
      { q: "How can I get help for a no-power call?", a: "Call (480) 806-1832 to request a connection with an independent local provider and describe the issue." },
    ],
    related: ["electrical-troubleshooting-phoenix-az", "electrical-maintenance-phoenix-az", "residential-electrical-services-phoenix-az"],
  },
  {
    slug: "kitchen-electrical-repairs-phoenix-az",
    title: "Kitchen Electrical Repairs",
    navLabel: "Kitchen Electrical Repairs",
    metaTitle: "Kitchen Electrical Repairs in Phoenix, AZ | APM Arizona Electric LLC",
    metaDescription:
      "Kitchen electrical repairs in Phoenix, AZ, including dedicated appliance circuits, GFCI upgrades, under-cabinet lighting and range wiring. Connect with a local provider.",
    h1: "Kitchen Electrical Repairs in Phoenix, AZ",
    short: "Dedicated circuits, GFCIs and modern kitchen power upgrades.",
    description:
      "Kitchens demand serious electrical capacity. We add dedicated circuits, upgrade GFCIs, install under-cabinet lighting and wire modern appliances safely.",
    intro: [
      "Kitchens built before the 1990s were wired for a fridge, a light and a toaster. Today the same counter runs an air fryer, an espresso machine and a microwave at once, which is why so many Valley homeowners find themselves resetting the same breaker every week.",
      "We bring kitchens up to current code with dedicated small-appliance circuits, proper GFCI protection at every counter receptacle, and clean under-cabinet lighting. If you are mid-remodel we coordinate directly with your cabinet and counter installers.",
    ],
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1600&q=70",
    benefits: ["Dedicated appliance circuits", "GFCI and AFCI protection at counters", "Under-cabinet lighting", "Range, oven and cooktop wiring"],
    features: [
      "Two or more 20A small-appliance circuits to code",
      "Dishwasher and disposal dedicated circuits",
      "240V range, oven and induction cooktop feeds",
      "Island receptacles and pop-up outlets",
      "Under-cabinet LED strip and puck lighting",
      "Microwave and vent hood circuits",
    ],
    problems: ["Kitchen breakers tripping weekly", "Missing or non-functioning GFCIs", "Dim or failed under-cabinet lights", "Appliances on undersized wiring"],
    process: [
      { n: "01", t: "Evaluate", d: "We map the existing circuits and loads." },
      { n: "02", t: "Plan", d: "Circuit plan matched to your appliances." },
      { n: "03", t: "Install", d: "Runs fished cleanly, minimal drywall work." },
      { n: "04", t: "Inspect", d: "Permit closed and every device tested." },
    ],
    whyUs: [
      "Remodel-friendly scheduling with your other trades",
      "Careful protection of new cabinets and counters",
      "Code-correct GFCI placement, no shortcuts",
      "Clear labeling of every new circuit at the panel",
    ],
    faqs: [
      { q: "How many circuits does a modern kitchen need?", a: "Code requires at least two 20-amp small-appliance circuits, plus dedicated circuits for the dishwasher, disposal, microwave and range. Most older Phoenix kitchens have far fewer." },
      { q: "Do all kitchen outlets need GFCI protection?", a: "Every receptacle serving the countertop must be GFCI protected, and current code extends that to most kitchen receptacles including the dishwasher." },
      { q: "Can you add an island outlet after the counter is in?", a: "Usually yes. We route through the cabinet base or crawl space and can use a pop-up or side-mount receptacle to keep the island clean." },
      { q: "Can a provider switch my range from gas to electric?", a: "Ask an independent electrical provider about the 240V circuit and receptacle. Gas line work must be handled by the appropriately licensed provider." },
    ],
    related: ["light-fixture-installation-phoenix-az", "residential-electrical-services-phoenix-az", "circuit-breaker-repair-phoenix-az"],
  },
  {
    slug: "electrical-maintenance-phoenix-az",
    title: "Electrical Maintenance",
    navLabel: "Electrical Maintenance",
    metaTitle: "Electrical Maintenance in Phoenix, AZ | APM Arizona Electric LLC",
    metaDescription:
      "Preventive electrical maintenance information for Phoenix, AZ homes, including safety inspections, panel checks and thermal scans. Connect with a local provider.",
    h1: "Electrical Maintenance in Phoenix, AZ",
    short: "Preventive care that keeps your electrical system safe and efficient.",
    description:
      "Routine maintenance prevents fires, outages and expensive repairs. Our maintenance plans catch small issues before they become emergencies.",
    intro: [
      "Arizona heat is hard on connections. Copper expands and contracts every single day of a Valley summer, and over years that cycling loosens terminations inside panels, disconnects and outdoor equipment. Loose connections are the single most common cause of electrical fires we see.",
      "A periodic inspection can catch problems while they are still straightforward to address. Ask an independent provider what inspection and documentation options fit your home.",
    ],
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=70",
    benefits: ["Annual safety inspections", "Panel torque and thermal checks", "Outlet and GFCI testing", "Priority scheduling for plan holders"],
    features: [
      "Full panel and sub-panel inspection",
      "Infrared thermal scanning of terminations",
      "GFCI, AFCI and smoke detector testing",
      "Outdoor equipment and disconnect checks",
      "Surge protector verification and replacement",
      "Written report with photos for your records",
    ],
    problems: ["Loose or heat-cycled connections", "Corroded outdoor terminals", "Aging breakers past their service life", "Panels running near capacity"],
    process: [
      { n: "01", t: "Schedule", d: "Annual or quarterly visit set in advance." },
      { n: "02", t: "Inspect", d: "Panel, devices, grounding and outdoor gear." },
      { n: "03", t: "Report", d: "Photo report with prioritized findings." },
      { n: "04", t: "Correct", d: "Approved repairs done on the same visit." },
    ],
    whyUs: [
      "Findings ranked urgent, soon or monitor",
      "No pressure to approve anything on the spot",
      "Plan holders skip the queue in an emergency",
      "Records kept year over year to show trends",
    ],
    faqs: [
      { q: "How often should an electrical system be inspected?", a: "Many homeowners ask about an annual inspection, especially for older homes or after major upgrades. An independent provider can recommend a schedule for your system." },
      { q: "What is thermal imaging used for?", a: "An infrared camera shows heat where there should not be any, which reveals loose lugs, failing breakers and overloaded circuits before they fail or start a fire." },
      { q: "Is maintenance worth it if nothing is wrong?", a: "That is exactly when it pays. Most of what we find during inspections is invisible from the outside and cheap to correct compared to an emergency call." },
      { q: "Can I request inspection documentation?", a: "Ask the independent provider whether they offer a dated written report with photos and whether it meets your insurer's requirements." },
    ],
    related: ["circuit-breaker-repair-phoenix-az", "electrical-troubleshooting-phoenix-az", "residential-electrical-services-phoenix-az"],
  },
  {
    slug: "electrical-troubleshooting-phoenix-az",
    title: "Electrical Troubleshooting",
    navLabel: "Electrical Troubleshooting",
    metaTitle: "Electrical Troubleshooting in Phoenix, AZ | APM Arizona Electric LLC",
    metaDescription:
      "Electrical troubleshooting information for Phoenix, AZ homeowners with dead outlets, flickering lights, burning smells or intermittent power. Connect with a local provider.",
    h1: "Electrical Troubleshooting in Phoenix, AZ",
    short: "Chasing down a mystery electrical problem? We find it fast.",
    description:
      "Ghost switches, dead outlets, half-lit rooms — we systematically diagnose the strangest electrical problems using modern testing equipment and 30+ years of field knowledge.",
    intro: [
      "Some electrical problems announce themselves. Others hide behind a wall for months: a switch that controls nothing, an outlet that works only when the dryer is off, lights that dim when the pool pump starts. Those are the calls we like most.",
      "We work the problem methodically with circuit tracers, clamp meters and voltage drop testing rather than opening walls at random. You get a plain-English explanation of what was wrong, what caused it and what it costs to fix before any repair begins.",
    ],
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1600&q=70",
    benefits: ["Systematic diagnostic process", "Modern circuit tracing equipment", "Clear written findings", "Homeowner-focused provider connections"],
    features: [
      "Dead outlet and circuit tracing",
      "Open neutral and shared neutral diagnosis",
      "Voltage drop and load imbalance testing",
      "Burning smell and hot device investigation",
      "Intermittent fault isolation",
      "Aluminum wiring and backstab connection repair",
    ],
    problems: ["Dead outlets with no obvious cause", "Flickering or dimming lights", "Burning smell near a device", "Power that comes and goes"],
    process: [
      { n: "01", t: "Listen", d: "We start with what you have observed." },
      { n: "02", t: "Trace", d: "Meters and tracers narrow it to one circuit." },
      { n: "03", t: "Explain", d: "Cause and fix priced before we proceed." },
      { n: "04", t: "Resolve", d: "Repaired, retested and documented." },
    ],
    whyUs: [
      "Flat diagnostic fee credited toward the repair",
      "Thirty years of field pattern recognition",
      "We open the smallest hole necessary",
      "Honest answer even when the fix is simple",
    ],
    faqs: [
      { q: "How much does troubleshooting cost?", a: "We charge a flat diagnostic fee that covers the time to find the fault, and it is credited toward the repair if you have us complete the work." },
      { q: "My outlet is dead but the breaker is on. Why?", a: "Most often an upstream GFCI has tripped, or a backstabbed connection in another outlet on the same circuit has failed. Both are quick to find with a tracer." },
      { q: "I smell burning near a switch. What should I do?", a: "Turn that circuit off at the panel and call us immediately at (480) 806-1832. A burning smell means heat where there should be none and it should not wait." },
      { q: "Why do my lights dim when the AC starts?", a: "A brief dip is normal, but a sustained dim points to a loose service connection, an undersized service or a failing neutral. All three are worth diagnosing now." },
    ],
    related: ["circuit-breaker-repair-phoenix-az", "residential-electrical-services-phoenix-az", "electrical-maintenance-phoenix-az"],
  },
];

export type Location = {
  slug: string;
  city: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  navLabel: string;
  blurb: string;
  intro: string[];
  landmarks: string[];
  nearby: string[];
  availability: string[];
  whyUs: string[];
  responseTime: string;
  faqs: { q: string; a: string }[];
};

export const LOCATIONS: Location[] = [
  {
    slug: "electrician-phoenix-az",
    city: "Phoenix",
    navLabel: "Phoenix",
    metaTitle: "Electrician in Phoenix, AZ | APM Arizona Electric LLC",
    metaDescription:
      "Residential electrician information for Phoenix, AZ homeowners, including panel upgrades, lighting and ceiling fans. Call (480) 806-1832 to connect with a local provider.",
    h1: "Electrician in Phoenix, AZ",
    blurb: "Residential electrical information for Phoenix homeowners from Arcadia to Desert Ridge.",
    intro: [
      "Phoenix is not one electrical market, it is a dozen. A 1948 block home near Encanto has cloth-insulated branch circuits and a 60-amp service. A 2021 build in Laveen has a 200-amp panel with no room left because the builder filled it. North Phoenix custom homes come with pool equipment, casitas and detached shops all fed from a single overworked service. We work all of it, weekly.",
      "Because we are based just south in Tempe, most Phoenix addresses are a short drive rather than a dispatch across the Valley. That matters when your panel is buzzing at 4pm in July and you need someone today rather than Thursday.",
    ],
    landmarks: ["Camelback Mountain", "Downtown Phoenix", "Arcadia", "Desert Ridge", "Ahwatukee", "Encanto"],
    nearby: ["Tempe", "Scottsdale", "Glendale", "Mesa"],
    availability: [
      "Residential help for loss-of-power calls",
      "Permits pulled through City of Phoenix",
      "Connections with independent local providers",
      "Provider schedules vary by location and availability",
    ],
    whyUs: [
      "Local crews who know Phoenix housing stock by era",
      "Familiar with City of Phoenix permitting and inspectors",
      "Heat-aware panel work scheduled early in summer",
      "Family owned, with a real person answering the phone",
    ],
    responseTime: "Provider availability varies across central and north Phoenix",
    faqs: [
      { q: "Do you serve all of Phoenix?", a: "Yes, from Ahwatukee and South Mountain up through central Phoenix, Arcadia, North Phoenix and Desert Ridge, plus Laveen and the west side." },
      { q: "How can I get help at my Phoenix home?", a: "Call (480) 806-1832 to request a connection with an independent local provider. Timing depends on provider availability." },
      { q: "Do you pull City of Phoenix permits?", a: "We do. Panel changes, service upgrades and new circuits are permitted and inspected, and we meet the inspector on site." },
      { q: "Which Phoenix neighborhoods have the oldest wiring?", a: "Historic districts like Encanto, Coronado, Willo and parts of central Phoenix commonly still have two-wire ungrounded or cloth-wrapped circuits worth evaluating." },
    ],
  },
  {
    slug: "electrician-mesa-az",
    city: "Mesa",
    navLabel: "Mesa",
    metaTitle: "Electrician in Mesa, AZ | APM Arizona Electric LLC",
    metaDescription:
      "Residential electrician information for Mesa, AZ, including breaker repairs, panel upgrades, ceiling fans and lighting. Call (480) 806-1832 to connect with a local provider.",
    h1: "Electrician in Mesa, AZ",
    blurb: "Residential electrical information across Mesa, from Eastmark to Dobson Ranch.",
    intro: [
      "Mesa spans a wide range of build eras, and the electrical work follows. West Mesa and Dobson Ranch homes from the seventies and eighties often need panel attention and GFCI retrofits. Newer Eastmark and Las Sendas properties are more about adding what the builder left out: EV chargers, patio fans, landscape lighting and shop circuits in the garage.",
      "We also serve a large number of Mesa snowbird properties, where owners need a trusted electrician who can meet a house sitter, document the work with photos and invoice remotely. That is routine for us between October and April.",
    ],
    landmarks: ["Downtown Mesa", "Eastmark", "Dobson Ranch", "Las Sendas", "Superstition Springs"],
    nearby: ["Tempe", "Chandler", "Gilbert", "Apache Junction"],
    availability: [
      "Same-week appointments across all of Mesa",
      "Remote coordination for seasonal residents",
      "Photo-documented work for absentee owners",
      "Residential provider connections across the Main Street and Superstition corridor",
    ],
    whyUs: [
      "Short drive from our Tempe base",
      "Experience with 1970s and 80s Mesa panels",
      "EV charger installs common in east Mesa builds",
      "Written estimates before any work starts",
    ],
    responseTime: "Provider timing varies by project, location and availability",
    faqs: [
      { q: "Do you cover east Mesa and Eastmark?", a: "Yes. We cover Mesa end to end, including Eastmark, Las Sendas, Red Mountain, Dobson Ranch and downtown." },
      { q: "Can a provider work on my Mesa home while I am out of state?", a: "Ask the independent provider about access arrangements, documentation and payment terms before hiring." },
      { q: "Do older Mesa homes need a panel upgrade?", a: "Many homes built before 1985 still run 100-amp services that struggle with modern AC, EV charging and appliances. We assess free and give a straight answer." },
      { q: "Can you install an EV charger in Mesa?", a: "Yes, including load calculations, permitting with the City of Mesa and a dedicated 240V circuit sized for your vehicle." },
    ],
  },
  {
    slug: "electrician-scottsdale-az",
    city: "Scottsdale",
    navLabel: "Scottsdale",
    metaTitle: "Electrician in Scottsdale, AZ | APM Arizona Electric LLC",
    metaDescription:
      "Residential electrician information for Scottsdale, AZ, including home lighting, smart controls and panel upgrades. Call (480) 806-1832 to connect with a local provider.",
    h1: "Electrician in Scottsdale, AZ",
    blurb: "Residential electrical information for Scottsdale homes, lighting and smart controls.",
    intro: [
      "Scottsdale work tends to be detail work. North Scottsdale, Troon and DC Ranch homes come with layered lighting designs, landscape systems, casitas, pool and spa equipment, and smart control panels that all have to play together. A sloppy fixture install shows immediately in a house like that.",
      "Homeowners in and around Old Town can ask about track lighting, landscape systems, panel work and smart controls for residential spaces.",
    ],
    landmarks: ["Old Town Scottsdale", "North Scottsdale", "Troon", "DC Ranch", "McDowell Sonoran Preserve"],
    nearby: ["Phoenix", "Paradise Valley", "Tempe", "Fountain Hills"],
    availability: [
      "Detail-oriented residential lighting work",
      "Residential lighting help in Old Town",
      "Smart home and control system integration",
      "Landscape and exterior lighting service",
    ],
    whyUs: [
      "Careful, clean work in finished luxury homes",
      "Comfortable with smart lighting and control systems",
      "Homeowner-focused provider connections",
      "Coordination with designers and builders",
    ],
    responseTime: "Provider timing varies by project and availability",
    faqs: [
      { q: "Can providers work on smart lighting systems?", a: "Ask an independent provider about smart switches, dimmers, scene controllers and app-integrated fixtures." },
      { q: "Can you service North Scottsdale and Troon?", a: "We cover Scottsdale from Old Town through North Scottsdale, Troon and DC Ranch, including hillside properties with detached casitas and shops." },
      { q: "Do you handle landscape lighting repairs?", a: "We repair and expand both low-voltage and line-voltage landscape systems, including transformers, timers, photocells and buried run faults." },
      { q: "Can a provider work around my schedule?", a: "Ask the independent provider about appointment windows and availability before hiring." },
    ],
  },
  {
    slug: "electrician-tempe-az",
    city: "Tempe",
    navLabel: "Tempe",
    metaTitle: "Electrician in Tempe, AZ | APM Arizona Electric LLC",
    metaDescription:
      "Residential electrician information for Tempe, AZ, based near W Hermosa Dr. Explore repairs, panel upgrades, lighting and fans, then connect with a local provider.",
    h1: "Electrician in Tempe, AZ",
    blurb: "Residential electrical information for Tempe homeowners, students and renters.",
    intro: [
      "Tempe is home. Our shop sits on W Hermosa Dr, which means Tempe calls usually get the fastest response of anywhere we serve. We know the mid-century stock south of Broadway, the rental-heavy blocks around ASU, and the newer townhome developments near Tempe Town Lake.",
      "Tempe homeowners and renters can ask about GFCI upgrades, outlet repairs, lighting fixes and other residential electrical needs.",
    ],
    landmarks: ["ASU Campus", "Mill Avenue", "Tempe Town Lake", "South Tempe", "Warner Ranch"],
    nearby: ["Phoenix", "Mesa", "Chandler", "Scottsdale"],
    availability: [
      "Fastest response of any city we serve",
      "Rental turnover and landlord repair service",
      "Residential provider connections near Mill Ave and Apache Blvd",
      "Ask providers about estimates before work begins",
    ],
    whyUs: [
      "We are headquartered in Tempe, not dispatched to it",
      "Familiar with City of Tempe permitting",
      "Landlord-friendly documentation and invoicing",
      "Experience with mid-century Tempe wiring",
    ],
    responseTime: "Provider timing varies; the site is based in Tempe",
    faqs: [
      { q: "Where are you located in Tempe?", a: "Our registered address is 1216 W Hermosa Dr, Tempe, AZ 85282, which puts us minutes from most Tempe addresses." },
      { q: "Can renters request residential electrical help?", a: "Ask the property owner or manager for approval, then confirm the provider's scope, pricing and documentation before work begins." },
      { q: "Can you service homes near ASU?", a: "Yes, and we do frequently. Student rentals near campus often need GFCI upgrades, outlet repairs and lighting fixes between leases." },
      { q: "Are older south Tempe homes safe electrically?", a: "Many are fine but carry undersized services or ungrounded outlets. A one-time inspection tells you exactly where you stand." },
    ],
  },
  {
    slug: "electrician-chandler-az",
    city: "Chandler",
    navLabel: "Chandler",
    metaTitle: "Electrician in Chandler, AZ | APM Arizona Electric LLC",
    metaDescription:
      "Residential electrician information for Chandler, AZ, including home repairs, EV chargers, lighting and ceiling fans. Call (480) 806-1832 to connect with a local provider.",
    h1: "Electrician in Chandler, AZ",
    blurb: "Reliable electrical service across Chandler — repairs, upgrades and new installations.",
    intro: [
      "Chandler skews newer than most of the Valley, and the work reflects it. Ocotillo and Fulton Ranch homes rarely need rewiring, but they very often need capacity added: EV chargers, garage shop circuits, patio fans, pool equipment feeds and smart panels. Builder-grade panels fill up fast once a family adds two electric vehicles.",
      "Sun Lakes and older areas near downtown Chandler include homes with 1980s panels and GFCI requirements that have changed over time. Ask a provider to review the system and explain the options.",
    ],
    landmarks: ["Downtown Chandler", "Ocotillo", "Sun Lakes", "Fulton Ranch", "Chandler Fashion Center"],
    nearby: ["Gilbert", "Tempe", "Mesa", "Ahwatukee"],
    availability: [
      "EV charger installation and load calculations",
      "Sub-panel additions for full builder panels",
      "Same-week residential scheduling",
      "Residential provider connections near Chandler Fashion Center",
    ],
    whyUs: [
      "Experienced with builder-grade panel limitations",
      "Load calculations done properly before EV installs",
      "Clean garage and patio conduit work",
      "Straightforward pricing, no trip surprises",
    ],
    responseTime: "Typically within 24 to 48 hours",
    faqs: [
      { q: "My Chandler panel is full. What are my options?", a: "Either a sub-panel fed from the existing service, or a panel replacement with more spaces. We run a load calculation and price both so you can choose on facts." },
      { q: "Do you install EV chargers in Chandler?", a: "Yes, including permitting with the City of Chandler, dedicated 240V circuits and hardwired or plug-in chargers sized to your vehicle." },
      { q: "Do you serve Sun Lakes?", a: "We do, and we are used to working with HOA requirements and scheduling around community access rules there." },
      { q: "Can a provider add outlets to a covered patio?", a: "Outdoor receptacles need weather-resistant devices, in-use covers and GFCI protection. Ask the provider how the work will meet current code." },
    ],
  },
  {
    slug: "electrician-glendale-az",
    city: "Glendale",
    navLabel: "Glendale",
    metaTitle: "Electrician in Glendale, AZ | APM Arizona Electric LLC",
    metaDescription:
      "Residential electrician information for Glendale, AZ, including panel work, lighting and troubleshooting. Call (480) 806-1832 to connect with a local provider.",
    h1: "Electrician in Glendale, AZ",
    blurb: "Residential electrical information for Glendale homes and older properties.",
    intro: [
      "Glendale mixes historic downtown properties with sprawling newer neighborhoods around Arrowhead Ranch and the Westgate entertainment district. Historic Downtown Glendale homes frequently still run ungrounded two-wire circuits, and the repairs there need a careful hand to keep original finishes intact.",
      "Glendale homeowners can ask about lighting, equipment circuits, panel work and troubleshooting near Westgate and surrounding neighborhoods.",
    ],
    landmarks: ["Historic Downtown Glendale", "Arrowhead Ranch", "Westgate", "State Farm Stadium", "Thunderbird Park"],
    nearby: ["Peoria", "Phoenix", "Sun City", "Surprise"],
    availability: [
      "Historic home rewiring and grounding upgrades",
      "Residential lighting and panel help near Westgate",
      "Provider scheduling varies around local events",
      "Ask providers about estimates before work begins",
    ],
    whyUs: [
      "Careful work in historic properties",
      "Fair pricing without travel surcharges",
      "Grounding and GFCI expertise for older homes",
      "Verify provider licensing and insurance before hiring",
    ],
    responseTime: "Typically within 48 hours, sooner for emergencies",
    faqs: [
      { q: "Do you charge extra to come to the West Valley?", a: "No. Glendale is part of our standard service area and we do not add travel surcharges." },
      { q: "My Glendale home has two-prong outlets. Can they be upgraded?", a: "Yes. Depending on what is in the walls we either run a ground, feed the circuit from a GFCI, or rewire the branch. We explain the options and price each one." },
      { q: "Can a provider help with a Glendale home near Westgate?", a: "Call (480) 806-1832 to request a connection with an independent local residential provider." },
      { q: "Do providers handle exterior and security lighting?", a: "Ask an independent provider about residential exterior fixtures, motion sensors and photocell controls." },
    ],
  },
];

export const INDUSTRIES = [
  { t: "Home Electrical Repairs", d: "Connect with a local provider for residential troubleshooting, outlets, switches and wiring concerns." },
  { t: "Panel & Breaker Help", d: "Learn about panel upgrades, breaker troubleshooting and service capacity for your home." },
  { t: "Lighting & Ceiling Fans", d: "Find residential help for fixtures, dimmers, fans, controls and outdoor home lighting." },
  { t: "Kitchen Electrical", d: "Explore GFCI protection, appliance circuits, range wiring and under-cabinet lighting." },
  { t: "EV Charger Wiring", d: "Ask an independent provider about load calculations and a dedicated home charging circuit." },
  { t: "Home Electrical Maintenance", d: "Review inspection and maintenance options for panels, devices, grounding and safety." },
];

export const STATS = [
  { v: "30+", l: "Years of combined field experience" },
  { v: "5.0", l: "Average customer rating" },
  { v: "Local", l: "Provider connections" },
  { v: "6", l: "Valley cities served daily" },
];

export const FAQS = [
  { q: "Are providers licensed and insured?", a: "Providers are independent. Homeowners should verify that the provider they hire has the licenses and insurance required for the work." },
  { q: "Can I request an estimate?", a: "Call (480) 806-1832 or submit a request to connect with an independent local provider. Ask about pricing before authorizing work." },
  { q: "How can I get help with an electrical emergency?", a: "Call (480) 806-1832 to request a connection and describe the issue. Provider participation, location and availability vary." },
  { q: "What areas do you serve?", a: "This site provides residential electrical service information for Phoenix, Mesa, Scottsdale, Tempe, Chandler, Glendale and the surrounding Phoenix Metro Area." },
  { q: "Is this site the electrical provider?", a: "No. This site helps homeowners connect with independent local residential service providers. Each provider is responsible for its own work." },
  { q: "How much does an electrician cost?", a: "Every job is different, which is why we quote in writing before starting. You approve an itemized price first, so there are no surprises when the work is done." },
  { q: "Do you pull permits?", a: "Yes. Panel changes, service upgrades, new circuits and rewires are permitted with the appropriate city and we meet the inspector on site." },
  { q: "What payment methods are accepted?", a: "Payment methods, pricing and terms are set by the independent provider you choose. Confirm those details before authorizing work." },
];

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
];

export const localBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url}/#business`,
  name: BUSINESS.name,
  url: SITE.url,
  image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=70",
  telephone: BUSINESS.phoneSchema,
  email: BUSINESS.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.street,
    addressLocality: BUSINESS.addressLocality,
    addressRegion: "AZ",
    postalCode: BUSINESS.postalCode,
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 33.3924365, longitude: -112.0103148 },
  areaServed: LOCATIONS.map((l) => ({ "@type": "City", name: `${l.city}, AZ` })),
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "16:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "13:00" },
  ],
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: abs(it.path),
  })),
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

/** Only Phoenix keeps the "Electrician" prefix in link labels. */
export const locLabel = (city: string) =>
  city === "Phoenix" ? "Electrician Phoenix, AZ" : `${city}, AZ`;
