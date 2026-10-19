export const SITE = {
  url: "https://www.apmarizonaelectric.com",
  domain: "apmarizonaelectric.com",
};

export const abs = (path: string) => `${SITE.url}${path.endsWith("/") ? path : path + "/"}`;

export const BUSINESS = {
  name: "APM Arizona Electric LLC",
  shortName: "APM Arizona Electric",
  phone: "(480) 806-1832",
  phoneHref: "tel:+14808061832",
  phoneSchema: "+14808061832",
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
    slug: "residential-electrical-services",
    title: "Residential Electrical Services",
    navLabel: "Residential Electrical",
    metaTitle: "Residential Electrician in Phoenix, AZ | APM Arizona Electric LLC",
    metaDescription:
      "Licensed residential electrician in Phoenix, AZ. Breaker panel upgrades, whole-home rewiring, EV chargers, outlets & safety inspections. Call (480) 806-1832.",
    h1: "Residential Electrician in Phoenix, AZ",
    short: "Complete home electrical repairs, panel upgrades, and code-compliant installations.",
    description:
      "From aging breaker panels to modern EV charger circuits, we provide licensed, comprehensive residential electrical services tailored to Phoenix homeowners.",
    intro: [
      "Phoenix homes face extreme environmental stress. Summer attic temperatures exceeding 150°F rapidly degrade cable insulation, dry out plastic device boxes, and loosen copper terminations faster than in milder climates. Our residential services focus on long-term safety and system durability, not quick surface patches.",
      "Whether you live in a historic 1950s central Phoenix block home needing grounded wiring or a newer East Valley build requiring a 200-amp panel upgrade for an EV charger, our licensed electricians handle every phase from city permitting to final inspection.",
    ],
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1600&q=70",
    benefits: [
      "Direct work by licensed, bonded & insured electricians",
      "Upfront itemized estimates with no hidden fees",
      "Permits pulled and coordinated with local city inspectors",
      "Full clean-up with shoe covers and protective drop cloths",
    ],
    features: [
      "Main electrical panel and sub-panel upgrades (100A to 200A/400A)",
      "Whole-home and partial rewiring for ungrounded or cloth-insulated circuits",
      "Tamper-resistant, GFCI, and AFCI outlet & switch installations",
      "Dedicated 240V circuits for EV chargers, HVAC, dryers, and water heaters",
      "Whole-home surge protection installed directly at the main panel",
      "Smart switch, dimmer, and automated home lighting installations",
    ],
    problems: [
      "Breakers tripping under combined air conditioning and appliance loads",
      "Flickering or dimming lights during heavy power draws",
      "Outdated cloth-wrapped wiring or ungrounded two-prong outlets",
      "Discolored, warm, or non-functioning wall receptacles",
    ],
    process: [
      {
        n: "01",
        t: "Consultation",
        d: "Call us or submit an online request describing your project or symptoms.",
      },
      {
        n: "02",
        t: "On-Site Evaluation",
        d: "Our electrician inspects your panel, wiring, and load requirements.",
      },
      {
        n: "03",
        t: "Written Upfront Price",
        d: "You receive a clear, itemized quote before any tools touch your walls.",
      },
      {
        n: "04",
        t: "Expert Execution",
        d: "Work completed to National Electrical Code (NEC) standards and cleanly inspected.",
      },
    ],
    whyUs: [
      "Dedicated exclusively to residential homeowners across the Valley",
      "Direct communication with the electrician performing your work",
      "Familiar with City of Phoenix, Tempe, Mesa, and Scottsdale inspection codes",
      "Over 30 years of combined hands-on trade craftsmanship",
    ],
    faqs: [
      {
        q: "Do I need a city permit for residential electrical work in Phoenix?",
        a: "Yes. Major projects including panel replacements, service capacity upgrades, solar interconnections, and new dedicated circuit runs require permits from the City of Phoenix or your local municipality. APM Arizona Electric LLC handles all permit paperwork and meets the city inspector on-site.",
      },
      {
        q: "How do I know if my electrical panel needs an upgrade?",
        a: "Signs that your panel needs attention include having a 100-amp or smaller service, an outdated Federal Pacific or Zinsco panel, visible rust or burn marks, lack of open breaker spaces, or breakers tripping when the AC and stove run together.",
      },
      {
        q: "Can I add an EV charger to my existing electrical panel?",
        a: "We perform a formal load calculation to verify your panel capacity. If there is adequate space and amperage, we install a dedicated 240V 50A/60A circuit. If the panel is maxed out, we explain sub-panel and service upgrade options clearly.",
      },
      {
        q: "How long does a whole-home electrical rewire take?",
        a: "A typical whole-home rewire takes between 3 to 7 working days, depending on home square footage, attic access, and drywall finishes. We plan the work systematically so your family has essential power at the end of each working day.",
      },
    ],
    related: ["circuit-breaker-repair", "light-fixture-installation", "ceiling-fan-installation"],
  },
  {
    slug: "ceiling-fan-installation",
    title: "Ceiling Fan Installation & Replacement",
    navLabel: "Ceiling Fan Installation",
    metaTitle: "Ceiling Fan Installation in Phoenix, AZ | APM Arizona Electric LLC",
    metaDescription:
      "Ceiling fan installation and replacement in Phoenix, AZ. Metal fan-rated bracing, high-ceiling and outdoor installations, and wobble-free balancing. Call (480) 806-1832.",
    h1: "Ceiling Fan Installation in Phoenix, AZ",
    short: "Cool your home efficiently with properly braced, wobble-free ceiling fans.",
    description:
      "From high vaulted living rooms to covered patio fans, we install fans with heavy-duty metal bracing, correct downrod sizing, and smooth balanced operation.",
    intro: [
      "In the Phoenix summer, ceiling fans create a wind-chill effect that makes a room feel 4 to 6 degrees cooler, significantly cutting your summer SRP or APS cooling expenses. However, ceiling fans weigh between 15 and 50 pounds and generate continuous rotational torque.",
      "Hanging a fan from a plastic or light-duty junction box is a major safety hazard. We replace lightweight boxes with UL-listed metal fan-rated bracing anchored directly to ceiling joists, verify wire gauge, balance the blades, and wire your preferred wall switches or smart remotes.",
    ],
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=70",
    benefits: [
      "UL-listed heavy-duty metal fan bracing installed on every mount",
      "Precision dynamic balancing for silent, wobble-free operation",
      "High ladders and safety scaffolding for vaulted and two-story ceilings",
      "Old fan uninstallation and environmental packaging haul-away included",
    ],
    features: [
      "Standard 8ft–10ft ceilings, vaulted sloped mounts, and multi-story entries",
      'Correct downrod sizing (12", 18", 24", 36"+) for optimal airflow circulation',
      "UL damp-rated and wet-rated ceiling fans for covered outdoor patios",
      "Dual wall switch wiring to control light and fan speeds independently",
      "Smart fan integration compatible with handheld remotes and home automation",
      "Pre-assembled blade checks and motor calibration",
    ],
    problems: [
      "Wobbling, shaking, or squeaking fans at medium and high speeds",
      "Fans mounted to flimsy plastic light fixture boxes",
      "Single wall switch where you want independent fan and light controls",
      "Humming motor caused by incompatible electronic wall dimmers",
    ],
    process: [
      {
        n: "01",
        t: "Inspect Ceiling Box",
        d: "We confirm whether your existing box is fan-rated or install an expanding metal brace.",
      },
      {
        n: "02",
        t: "Assembly & Wiring",
        d: "Downrod, motor housing, and safety cables assembled with matched wire connections.",
      },
      {
        n: "03",
        t: "Blade Alignment",
        d: "Blades balanced with precision weights to eliminate all vibration and noise.",
      },
      {
        n: "04",
        t: "Control Setup",
        d: "Wall switches, remotes, and smart apps configured and demonstrated.",
      },
    ],
    whyUs: [
      "Clear, upfront flat-rate pricing per fan installation",
      "We supply required fan-rated junction boxes, downrods, and hardware",
      "Equipped for high ceilings up to 20 feet",
      "1-year workmanship guarantee on all installations",
    ],
    faqs: [
      {
        q: "Can you install a ceiling fan where there is currently only a light fixture?",
        a: "Yes. Standard light fixture boxes cannot safely support the dynamic weight of a ceiling fan. We remove the existing box and install an expanding, joist-anchored metal fan brace that securely holds up to 70 lbs without damaging your drywall.",
      },
      {
        q: "What size ceiling fan and downrod do I need for my room?",
        a: 'For bedrooms up to 144 sq ft, a 44"–50" fan is ideal. Larger living areas (over 225 sq ft) require 54"–60"+ blades. For ceiling height, blades should hang 8 to 9 feet above the floor. We size the downrod accordingly: e.g., a 10ft ceiling needs a 12" downrod, while a 12ft ceiling requires an 18"–24" downrod.',
      },
      {
        q: "Can I install any ceiling fan on an outdoor patio in Phoenix?",
        a: "No. Outdoor fans must be UL Damp-Rated (for covered patios) or Wet-Rated (for open pergolas) to withstand humidity and blowing dust without warping blades or shorting motors. We also verify outdoor GFCI circuit protection.",
      },
      {
        q: "Do I provide the fan, or do you supply it?",
        a: "Most homeowners prefer to select and purchase their own fan style to match their interior décor, and we handle the professional installation and bracing. If you prefer us to source a premium commercial-grade fan, let us know when scheduling.",
      },
    ],
    related: [
      "light-fixture-installation",
      "residential-electrical-services",
      "electrical-troubleshooting",
    ],
  },
  {
    slug: "light-fixture-installation",
    title: "Light Fixture Installation",
    navLabel: "Light Fixture Installation",
    metaTitle: "Light Fixture Installation in Phoenix, AZ | APM Arizona Electric LLC",
    metaDescription:
      "Professional light fixture installation in Phoenix, AZ: chandeliers, recessed LED cans, pendants, and exterior security lighting. Call (480) 806-1832 for upfront pricing.",
    h1: "Light Fixture Installation in Phoenix, AZ",
    short: "Recessed LED retrofits, designer chandeliers, pendants, and outdoor lighting.",
    description:
      "Transform your home's ambiance and energy efficiency with expertly installed interior and exterior lighting, matched dimmers, and secure fixture bracing.",
    intro: [
      "Quality lighting completely transforms the look, feel, and function of your living space. Replacing outdated incandescent canisters with slim, energy-efficient recessed LEDs or installing a statement chandelier over your dining table delivers immediate aesthetic and property value improvements.",
      "Our licensed electricians ensure every installation is mechanically secure and electrically sound. From verifying heavy ceiling junction box ratings for large fixtures to matching LED drivers with compatible low-voltage dimmers that never flicker or buzz, we deliver flawless results.",
    ],
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1600&q=70",
    benefits: [
      "Flicker-free, silent LED dimming with matched digital controls",
      "Heavy chandelier support boxes rated up to 150 lbs",
      "Clean drywall cuts with zero unnecessary ceiling damage",
      "Weatherproof outdoor lighting with GFCI protection",
    ],
    features: [
      "Wafer and canless ultra-thin LED recessed lighting layouts",
      "Heavy foyer and dining chandelier installations with reinforced ceiling framing",
      "Kitchen island, bar, and accent pendant installations",
      "Under-cabinet and architectural cove LED strip lighting",
      "Exterior security floodlights, wall sconces, and low-voltage landscape lighting",
      "Multi-location three-way switches, dimmers, and smart scene lighting",
    ],
    problems: [
      "LED bulbs buzzing, humming, or flickering when dimmed",
      "Heavy chandeliers hanging from unreinforced standard ceiling boxes",
      "Dark kitchen countertops and shadowy food prep areas",
      "Old high-heat incandescent recessed cans driving up air conditioning costs",
    ],
    process: [
      {
        n: "01",
        t: "Design & Layout",
        d: "We review lighting spacing, lumens, and color temperature (2700K to 4000K).",
      },
      {
        n: "02",
        t: "Circuit & Box Prep",
        d: "We install heavy-duty structural boxes and fish wiring through ceiling bays.",
      },
      {
        n: "03",
        t: "Precision Mounting",
        d: "Fixtures leveled, wired with correct polarity, and securely fastened.",
      },
      {
        n: "04",
        t: "Dimmer Calibration",
        d: "Digital dimmers calibrated to fixture drivers for silent, smooth dimming.",
      },
    ],
    whyUs: [
      "We match dimmers to LED drivers so fixtures never buzz or flicker",
      "Drop cloths and vacuum cleanup on every interior job",
      "Consistent color temperature coordination throughout your rooms",
      "Removal and responsible disposal of old fixtures",
    ],
    faqs: [
      {
        q: "Why do my new LED light bulbs flicker or buzz when dimmed?",
        a: "Older traditional dimmers were designed for high-wattage incandescent filaments. When paired with low-wattage LED drivers, they cause electrical phase mismatch that manifests as buzzing or flickering. Installing an Electronic Low Voltage (ELV) or LED-rated digital dimmer completely eliminates this issue.",
      },
      {
        q: "Can you install recessed lighting in a ceiling that doesn't have existing cans?",
        a: "Yes. Using modern ultra-slim, wafer-style recessed LED lights, we cut precise 4-inch or 6-inch holes and fish electrical cable between joist bays. Because wafer lights require only 1 to 2 inches of clearance, they fit even under HVAC ducts without tearing down drywall.",
      },
      {
        q: "How do I choose the right color temperature for my home lighting?",
        a: "2700K produces a warm, cozy incandescent glow ideal for bedrooms and living rooms. 3000K offers a clean, warm white that is our most popular choice for general areas. 4000K provides a crisp, neutral white well-suited for kitchens, bathrooms, and garages.",
      },
      {
        q: "Do you install outdoor landscape and security lighting?",
        a: "Yes. We install both line-voltage 120V security floodlights with motion and photocell sensors, as well as low-voltage 12V landscape transformers, pathway lights, and accent uplighting.",
      },
    ],
    related: [
      "ceiling-fan-installation",
      "kitchen-electrical-repairs",
      "residential-electrical-services",
    ],
  },
  {
    slug: "circuit-breaker-repair",
    title: "Circuit Breaker Troubleshooting & Repairs",
    navLabel: "Circuit Breaker Repair",
    metaTitle: "Circuit Breaker Repair in Phoenix, AZ | APM Arizona Electric LLC",
    metaDescription:
      "Circuit breaker repair and electrical panel troubleshooting in Phoenix, AZ. Diagnosis for tripping breakers, buzzing panels, and worn bus bars. Call (480) 806-1832.",
    h1: "Circuit Breaker Repair in Phoenix, AZ",
    short: "Accurate diagnostics and code-compliant repairs for tripping breakers and panels.",
    description:
      "When breakers trip repeatedly or panels emit buzzing sounds, our licensed electricians pinpoint the root cause—from isolated short circuits to panel replacement needs.",
    intro: [
      "A circuit breaker is designed to trip when it senses an electrical overload, short circuit, or ground fault. If a breaker trips occasionally, it is fulfilling its safety function. However, if a breaker trips repeatedly, feels hot to the touch, or buzzes when heavy appliances turn on, it requires immediate professional evaluation.",
      "In Arizona, intense summer heat puts massive demands on residential electrical services. We test branch circuits under actual load using calibrated meters and thermal imaging. We plainly explain whether you need a simple single-breaker replacement or a full panel upgrade, without high-pressure sales tactics.",
    ],
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1600&q=70",
    benefits: [
      "Complete electrical panel safety check included with every service visit",
      "Infrared thermal imaging to detect hidden hot spots and loose lugs",
      "Exact OEM-specified, code-compliant breaker replacements",
      "Clear differentiation between minor repair and full replacement options",
    ],
    features: [
      "Comprehensive load testing and amperage draw measurements",
      "Short circuit and ground fault location across branch wiring",
      "Arc-Fault (AFCI) and Ground-Fault (GFCI) dual-function breaker replacements",
      "Bus bar corrosion, pitting, and terminal torque verification",
      "Evaluation of hazardous obsolete panels (Federal Pacific Stab-Lok, Zinsco, Challenger)",
      "Full 100-amp to 200-amp main panel changeouts and sub-panel installations",
    ],
    problems: [
      "Breakers that trip instantly upon resetting",
      "Electrical panels that emit buzzing, humming, or crackling sounds",
      "Warm or hot breaker handles or scorch marks on panel faceplates",
      "Loss of power across half of the home's circuits simultaneously",
    ],
    process: [
      {
        n: "01",
        t: "Load & Meter Diagnostics",
        d: "We measure current draw, voltage drop, and thermal signatures under load.",
      },
      {
        n: "02",
        t: "Circuit Isolation",
        d: "We isolate the exact device, wire junction, or appliance causing the fault.",
      },
      {
        n: "03",
        t: "Targeted Repair",
        d: "We replace the failed breaker or repair the branch circuit with exact-spec components.",
      },
      {
        n: "04",
        t: "Torque & Verification",
        d: "Panel lugs torqued to manufacturer foot-pound specs and retested under full load.",
      },
    ],
    whyUs: [
      "Diagnostic-first methodology: we never guess or swap random parts",
      "Equipped for same-day emergency dispatch for loss-of-power calls",
      "Thermal scan photos and electrical findings provided in writing",
      "Honest, transparent guidance when panel repair vs replacement is evaluated",
    ],
    faqs: [
      {
        q: "What is the difference between repairing a breaker and replacing the whole panel?",
        a: "A breaker repair is appropriate when a single breaker has worn out, an individual appliance has caused an overload, or an isolated wire has shorted while the panel bus bar remains clean and healthy. A full panel replacement is necessary when the panel bus bar is burned or corroded, the service capacity (e.g. 60A/100A) is inadequate for the home, or the panel is a documented fire risk brand such as Federal Pacific or Zinsco.",
      },
      {
        q: "Why do Federal Pacific and Zinsco panels fail safety inspections?",
        a: "Extensive testing has demonstrated that Federal Pacific Stab-Lok breakers fail to trip on overloads up to 25% of the time, leading to overheated wires and fire hazards. Zinsco panels have a known design flaw where aluminum breakers fuse and melt onto the copper bus bar. We provide honest, photographic assessments of these panels.",
      },
      {
        q: "Can I replace a circuit breaker myself?",
        a: "Working inside an electrical panel is extremely hazardous because the main service lugs remain energized with deadly voltage even when the main breaker is turned off. Installing an incorrect breaker brand also voids your panel UL rating. This task should always be handled by a licensed electrician.",
      },
      {
        q: "Why does my breaker trip only during summer afternoons?",
        a: "Phoenix summer ambient temperatures combined with high air conditioning loads, pool pumps, and kitchen appliances push circuits to their thermal trip thresholds. We test your system to determine whether the issue is a weak breaker mechanism, loose lug connection, or an overloaded circuit.",
      },
    ],
    related: [
      "electrical-troubleshooting",
      "electrical-maintenance",
      "residential-electrical-services",
    ],
  },
  {
    slug: "kitchen-electrical-repairs",
    title: "Kitchen Electrical Repairs",
    navLabel: "Kitchen Electrical Repairs",
    metaTitle: "Kitchen Electrical Repairs in Phoenix, AZ | APM Arizona Electric LLC",
    metaDescription:
      "Kitchen electrical repairs in Phoenix, AZ: dedicated appliance circuits, GFCI upgrades, range feeds, and under-cabinet lighting. Call (480) 806-1832 for service.",
    h1: "Kitchen Electrical Repairs in Phoenix, AZ",
    short: "Dedicated appliance circuits, GFCI protection, and remodel electrical wiring.",
    description:
      "Modernize your kitchen electrical system with dedicated 20A small-appliance circuits, code-compliant GFCI outlets, and seamless appliance installations.",
    intro: [
      "Kitchens consume more electrical power than almost any other area in a modern home. Homes built decades ago were wired for a simple refrigerator and toaster. Today, countertops accommodate high-wattage air fryers, espresso machines, blenders, and microwaves running simultaneously.",
      "We bring kitchens up to current National Electrical Code (NEC) standards with dedicated 20-amp small appliance branch circuits, dependable countertop GFCI protection, and dedicated 240V lines for electric ranges and induction cooktops. If you are remodeling, we coordinate smoothly with your general contractor and cabinet makers.",
    ],
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1600&q=70",
    benefits: [
      "Dedicated 20-amp circuits that stop kitchen breaker tripping",
      "Complete GFCI and AFCI shock and fire protection for all counters",
      "Clean, hidden under-cabinet and kitchen island wiring",
      "Coordination with cabinet, countertop, and remodel contractors",
    ],
    features: [
      "Two or more dedicated 20-amp small appliance countertop circuits per code",
      "Individual dedicated circuits for refrigerators, microwaves, and dishwashers",
      "240V 40A/50A circuits for electric ranges, wall ovens, and induction cooktops",
      "Kitchen island pop-up and flush-mounted receptacle installations",
      "Warm, dimmable under-cabinet LED task lighting",
      "Garbage disposal and dishwasher branch circuits with proper disconnects",
    ],
    problems: [
      "Breakers tripping whenever the microwave and toaster run together",
      "Outlets near sinks lacking mandatory GFCI shock protection",
      "Non-functioning kitchen island receptacles",
      "Upgrading from gas to an electric or induction cooktop without 240V power",
    ],
    process: [
      {
        n: "01",
        t: "Circuit Mapping",
        d: "We map all existing kitchen circuits to identify shared loads and bottlenecks.",
      },
      {
        n: "02",
        t: "Dedicated Routing",
        d: "New circuits fished through walls or attics with minimal drywall incisions.",
      },
      {
        n: "03",
        t: "Device Installation",
        d: "Tamper-resistant GFCI receptacles, appliance whips, and switches installed.",
      },
      {
        n: "04",
        t: "Safety Verification",
        d: "GFCI trip times tested, panel labels updated, and city inspection completed.",
      },
    ],
    whyUs: [
      "Remodel-experienced scheduling that respects other trades on-site",
      "Careful protection of newly installed cabinetry, backsplashes, and quartz counters",
      "Strict adherence to NEC kitchen safety codes",
      "Clear, permanent circuit labeling at your main breaker panel",
    ],
    faqs: [
      {
        q: "What are the electrical code requirements for a modern kitchen?",
        a: "The National Electrical Code requires at least two separate 20-amp small-appliance circuits serving countertop receptacles, with no lighting on those circuits. In addition, dedicated individual circuits are required for major built-in appliances including the refrigerator, dishwasher, garbage disposal, microwave, and range.",
      },
      {
        q: "Do all kitchen countertop outlets require GFCI protection?",
        a: "Yes. All countertop receptacles, any receptacle within 6 feet of a sink, and circuits serving dishwashers must have Ground-Fault Circuit-Interrupter (GFCI) protection to protect against electric shocks in wet environments.",
      },
      {
        q: "Can you install an electrical outlet in my new kitchen island?",
        a: "Yes. Kitchen islands require receptacle access under electrical codes. We route electrical feeds through the subfloor or cabinet base and can install sleek flush pop-up outlets or side-mounted receptacles that preserve your island's aesthetic.",
      },
      {
        q: "Can you run power to convert our kitchen stove from gas to electric or induction?",
        a: "Yes. Converting to an electric or induction cooktop requires a dedicated 240V 40-amp or 50-amp circuit. We run the cable from your main panel to a new range receptacle behind the stove and verify breaker capacity.",
      },
    ],
    related: [
      "light-fixture-installation",
      "residential-electrical-services",
      "circuit-breaker-repair",
    ],
  },
  {
    slug: "electrical-maintenance",
    title: "Electrical Maintenance & Safety Inspections",
    navLabel: "Electrical Maintenance",
    metaTitle: "Electrical Maintenance in Phoenix, AZ | APM Arizona Electric LLC",
    metaDescription:
      "Comprehensive electrical maintenance and safety inspections in Phoenix, AZ. Panel torque checks, infrared thermal scans, and GFCI testing. Call (480) 806-1832.",
    h1: "Electrical Maintenance in Phoenix, AZ",
    short: "Preventive inspections and thermal diagnostics to protect your home from hazards.",
    description:
      "Routine electrical maintenance identifies loose connections, overloaded circuits, and aging components before they turn into outages or fire hazards.",
    intro: [
      "The extreme thermal expansion and contraction cycles of Arizona summers take a heavy toll on residential electrical infrastructure. Repeated heating cycles loosen copper and aluminum terminations inside main service panels, disconnects, and meter bases over time. In fact, loose connections are the leading cause of electrical arcing and panel damage.",
      "Our comprehensive electrical maintenance service systematically tests your entire system. Our licensed electricians examine connections, test safety devices, and perform infrared thermal scans to give you a clear, documented snapshot of your home's electrical health.",
    ],
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=70",
    benefits: [
      "Thorough multi-point safety inspection by licensed electricians",
      "Infrared thermal imaging to uncover hidden hotspots before failure",
      "Written inspection report with prioritized recommendations for your records",
      "Reduced risk of unexpected power loss and costly emergency repairs",
    ],
    features: [
      "Main electrical panel and sub-panel visual and mechanical inspection",
      "Thermal scan of main breaker lugs, bus bars, and branch terminations",
      "Manufacturer torque verification on all main lugs and neutral bar screws",
      "Functional trip testing of all GFCI and AFCI safety receptacles and breakers",
      "Grounding electrode system and bonding jumper resistance verification",
      "Outdoor air conditioning disconnect and whip condition assessment",
    ],
    problems: [
      "Heat-cycled, loose terminal connections causing intermittent power",
      "Corroded outdoor service entrance conductors and meter sockets",
      "Breakers running hot under summer cooling loads",
      "Uninspected electrical systems in homes older than 25 years",
    ],
    process: [
      {
        n: "01",
        t: "Systematic Inspection",
        d: "We conduct a complete mechanical and electrical check of your service panel and circuits.",
      },
      {
        n: "02",
        t: "Thermal Diagnostics",
        d: "Infrared cameras detect abnormal resistance and heat signatures across breakers.",
      },
      {
        n: "03",
        t: "Safety Device Testing",
        d: "All GFCI, AFCI, and surge protection devices tested for correct trip response.",
      },
      {
        n: "04",
        t: "Detailed Written Report",
        d: "You receive a prioritized report categorized by immediate needs, recommended fixes, or good condition.",
      },
    ],
    whyUs: [
      "Findings presented clearly: Immediate Safety Concern, Recommended, or Good",
      "No high-pressure sales pitches—we give you objective, factual information",
      "Photos included for insurance or real estate documentation",
      "Over 30 years of field troubleshooting experience in the Valley",
    ],
    faqs: [
      {
        q: "How often should a residential electrical system be inspected?",
        a: "We recommend a comprehensive electrical safety inspection every 3 to 5 years for modern homes, and every 1 to 2 years for homes over 25 years old or those undergoing major appliance additions (such as EV chargers or heat pumps).",
      },
      {
        q: "What does infrared thermal imaging reveal in an electrical panel?",
        a: "Infrared thermal cameras detect heat generated by electrical resistance. This allows us to spot loose terminal screws, internal breaker wear, and unbalanced circuit loads before any wire burns or causes an outage.",
      },
      {
        q: "Will I receive written documentation after the inspection?",
        a: "Yes. Our electricians provide a dated, written inspection report outlining our findings, thermal scan photos, and itemized recommendations that you can keep for your home maintenance records or insurance documentation.",
      },
      {
        q: "What maintenance should be done on outdoor AC electrical disconnects?",
        a: "Arizona sun and heat can make plastic disconnect boxes brittle and corrode knife-blade contacts. During an inspection, we clean contacts, check for insect intrusion, tighten terminals, and test the surge protection.",
      },
    ],
    related: [
      "circuit-breaker-repair",
      "electrical-troubleshooting",
      "residential-electrical-services",
    ],
  },
  {
    slug: "electrical-troubleshooting",
    title: "Electrical Troubleshooting & Diagnostics",
    navLabel: "Electrical Troubleshooting",
    metaTitle: "Electrical Troubleshooting in Phoenix, AZ | APM Arizona Electric LLC",
    metaDescription:
      "Expert electrical troubleshooting in Phoenix, AZ: dead outlets, flickering lights, burning odors, and mystery power loss. Upfront diagnostic fee. Call (480) 806-1832.",
    h1: "Electrical Troubleshooting in Phoenix, AZ",
    short: "Pinpointing dead outlets, flickering lights, and complex electrical faults.",
    description:
      "From mystery power outages to intermittent flickering and burning smells, our experienced electricians systematically isolate and resolve tough electrical issues.",
    intro: [
      "Electrical problems rarely fix themselves, and mystery symptoms—like an outlet that suddenly stops working, lights that dim whenever the refrigerator starts, or a switch plate that feels warm—are warning signs of underlying wiring faults. Guessing or resetting breakers repeatedly can worsen the damage.",
      "We approach electrical troubleshooting methodically using advanced digital multimeters, circuit tracers, and insulation resistance testers. We track the fault to its exact origin, explain what happened in plain English, and provide a firm upfront price to repair it before beginning work.",
    ],
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1600&q=70",
    benefits: [
      "Flat diagnostic fee credited directly toward your repair upon approval",
      "Advanced circuit tracing without punching unnecessary holes in your drywall",
      "Clear, upfront written repair estimates before any work begins",
      "Immediate emergency guidance for burning smells or sparking devices",
    ],
    features: [
      "Dead receptacle and non-responsive lighting circuit tracing",
      "Open neutral and shared neutral circuit diagnostics",
      "Voltage drop and high-resistance connection measurements",
      "Investigation of burning odors, warm faceplates, and buzzing switches",
      "Identification and repair of failed backstabbed push-in connections",
      "Aluminum wiring and ungrounded circuit isolation and remediation",
    ],
    problems: [
      "Dead outlets even though the circuit breaker in the panel is not tripped",
      "Lights flickering or dimming intermittently across one room",
      "Burning odor or buzzing sound coming from an outlet or wall switch",
      "Power cutting out when multiple appliances run on the same branch",
    ],
    process: [
      {
        n: "01",
        t: "Listen & History",
        d: "We discuss what symptoms you noticed and when they first occurred.",
      },
      {
        n: "02",
        t: "Systematic Tracing",
        d: "Using digital testers and circuit toners, we isolate the fault location.",
      },
      {
        n: "03",
        t: "Upfront Written Quote",
        d: "We explain the root cause and provide an itemized repair cost before touching a wire.",
      },
      {
        n: "04",
        t: "Repair & Verification",
        d: "The fault is repaired, retested under full electrical load, and documented.",
      },
    ],
    whyUs: [
      "Transparent diagnostic fee structure: fee applies toward your repair",
      "Over 30 years of field troubleshooting experience in Phoenix homes",
      "Minimal drywall disruption: we locate the fault accurately before opening walls",
      "Honest assessments: if it's a simple tripped button, we tell you frankly",
    ],
    faqs: [
      {
        q: "How does your troubleshooting diagnostic fee work?",
        a: "We charge a straightforward flat diagnostic fee that covers our travel and the dedicated time required for our licensed electrician to test, trace, and isolate your electrical problem. Once we find the fault, we give you a written repair quote—and if you authorize the repair, our diagnostic fee is credited directly toward the work.",
      },
      {
        q: "Why is my wall outlet dead even though the breaker is turned on?",
        a: "In most cases, a dead outlet with an active breaker is caused by an upstream GFCI outlet that has tripped elsewhere in the house (like an outdoor outlet, garage, or bathroom), or a failed backstabbed push-in connection inside a neighboring outlet box that broke continuity along the circuit.",
      },
      {
        q: "I smell a faint burning plastic smell near an outlet or switch. What should I do?",
        a: "Immediately turn off the circuit breaker controlling that room at your main electrical panel and call us at (480) 806-1832. A burning smell indicates electrical arcing or overheating insulation and is a serious safety concern that requires prompt professional attention.",
      },
      {
        q: "Why do my lights dim briefly when our air conditioning unit turns on?",
        a: "A momentary flicker (less than a fraction of a second) when an AC compressor starts is normal due to initial inrush current. However, if lights dim significantly or remain dim for several seconds, it indicates high electrical resistance, a loose neutral wire, or an undersized service that should be evaluated.",
      },
    ],
    related: [
      "circuit-breaker-repair",
      "residential-electrical-services",
      "electrical-maintenance",
    ],
  },
  {
    slug: "ev-charger-installation",
    title: "EV Charger Installation & 240V Wiring",
    navLabel: "EV Charger Installation",
    metaTitle: "EV Charger Installation in Phoenix, AZ | APM Arizona Electric LLC",
    metaDescription:
      "Professional Level 2 EV charger installation in Phoenix, AZ. Tesla Wall Connector & universal chargers, SRP/APS rebates, 240V circuits. Call (480) 806-1832.",
    h1: "EV Charger Installation in Phoenix, AZ",
    short: "Level 2 & Tesla Wall Connector installations with dedicated 240V circuits.",
    description:
      "Fast, safe home electric vehicle charging tailored for Tesla, Rivian, Ford, and universal EVs with proper load calculations and municipal permits.",
    intro: [
      "Adding an Electric Vehicle (EV) to your Phoenix home transforms your daily driving experience, but plugging into a standard 120-volt wall outlet (Level 1) adds only 3 to 4 miles of range per hour. A dedicated Level 2 240-volt charging station delivers 30 to 45 miles of range per hour, charging your vehicle fully overnight while you sleep.",
      "At APM Arizona Electric LLC, our licensed electricians handle every aspect of your EV charger installation: calculating whole-home electrical load per NEC Article 220, installing dedicated 50A or 60A circuits, pulling City of Phoenix permits, and helping you document work for SRP ($250–$1,000) or APS EV charging rebates.",
    ],
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=70",
    benefits: [
      "Licensed ROC #341995 installation qualifying for SRP & APS utility rebates",
      "NEC Article 220 load calculation ensuring panel never overloads",
      "Dedicated 240V 50A/60A circuit with heavy-duty copper conductors",
      "Tesla Wall Connector, ChargePoint, JuiceBox & universal NEMA 14-50 installs",
    ],
    features: [
      "Hardwired Level 2 stations (up to 48A / 11.5kW charging speeds)",
      "NEMA 14-50 heavy-duty industrial receptacle installations",
      "Garage wall, pedestal, and exterior weather-tight charging setups",
      "Subpanel additions when main breaker panel spaces are exhausted",
      "Whole-home surge protection to shield vehicle battery electronics",
      "Coordination of municipal electrical building permits and utility inspections",
    ],
    problems: [
      "Painfully slow Level 1 charging taking 30+ hours for a full battery",
      "Main breaker panel full with zero open slots for a dedicated 240V circuit",
      "Nuisance breaker trips when charging vehicle simultaneously with air conditioning",
      "Melted cheap standard receptacles from sustained high-amperage EV loads",
    ],
    process: [
      {
        n: "01",
        t: "Consultation & Vehicle Specs",
        d: "We review your EV model, onboard charger limits, daily commute, and charger location.",
      },
      {
        n: "02",
        t: "NEC Load Calculation",
        d: "We assess your existing panel capacity to confirm it safely supports a 50A/60A load.",
      },
      {
        n: "03",
        t: "Dedicated 240V Circuit Run",
        d: "We run conduit, pull heavy-gauge copper conductors, and mount the charger cleanly.",
      },
      {
        n: "04",
        t: "Commissioning & Permit Sign-off",
        d: "We test charging output, verify grounding, and meet the city inspector for sign-off.",
      },
    ],
    whyUs: [
      "Experienced with Tesla, Rivian, Ford Lightning, Chevy, Hyundai, and universal EVs",
      "We use commercial-grade industrial receptacles (Bryant/Hubbell) that resist heat fatigue",
      "Transparent upfront pricing with utility rebate documentation support",
      "Permits pulled with Phoenix, Tempe, Mesa, Scottsdale, Chandler, and Glendale",
    ],
    faqs: [
      {
        q: "Do I need to upgrade my electrical panel to install an EV charger?",
        a: "Not always. We perform an NEC Article 220 load calculation based on your home's square footage, HVAC, and existing appliances. If your 200-amp panel has capacity, we add a dedicated breaker. If your panel is 100 amps or maxed out, we explain subpanel additions or panel upgrade options before any work starts.",
      },
      {
        q: "What is the difference between a hardwired charger and a NEMA 14-50 plug?",
        a: "A hardwired charger connects directly to your electrical panel, supporting up to 48 amps (11.5 kW) on a 60A circuit for the fastest possible home charging. A NEMA 14-50 plug-in unit is limited to 40 amps (9.6 kW) on a 50A circuit and requires a GFCI breaker per recent NEC code. Both are safe, but hardwired is faster and eliminates potential outlet wear.",
      },
      {
        q: "Are there SRP or APS utility rebates for EV charger installation in Arizona?",
        a: "Yes. Salt River Project (SRP) offers up to $250 for qualifying Level 2 smart chargers, and Arizona Public Service (APS) provides incentives for home charging equipment. Because APM Arizona Electric LLC is a licensed contractor (ROC #341995), our itemized invoices and city permits satisfy all utility rebate requirements.",
      },
      {
        q: "How long does a home EV charger installation take?",
        a: "Most residential EV charger installations take between 3 to 5 hours. If a subpanel addition or complex attic conduit run is required, it can take up to a full day. We test your vehicle charging before leaving.",
      },
    ],
    related: [
      "circuit-breaker-repair",
      "residential-electrical-services",
      "electrical-maintenance",
    ],
  },
  {
    slug: "electrical-panel-upgrades",
    title: "Electrical Panel Upgrades & Replacement",
    navLabel: "Panel Upgrades",
    metaTitle: "Electrical Panel Upgrades in Phoenix, AZ | APM Arizona Electric LLC",
    metaDescription:
      "Electrical panel upgrades & replacement in Phoenix, AZ. 100A to 200A/400A service changes, Zinsco & Federal Pacific replacements. Call (480) 806-1832.",
    h1: "Electrical Panel Upgrades in Phoenix, AZ",
    short: "Upgrade to a modern 200A/400A service to power modern AC, EV, and solar.",
    description:
      "Replace outdated, dangerous, or maxed-out electrical panels with modern 200-amp solar-ready Square D or Eaton panels with full city permitting.",
    intro: [
      "Your electrical panel is the central nervous system of your entire home. Many homes across Phoenix, Tempe, and Mesa built between the 1950s and 1980s still operate on original 100-amp or 125-amp services designed for an era before high-efficiency heat pumps, modern kitchen appliances, backyard pools, and electric vehicle chargers.",
      "Worse, thousands of Valley homes still contain documented fire hazard panels—notably Federal Pacific Electric (FPE) Stab-Lok and Zinsco/Sylvania panels—which have failure rates over 25% and are routinely flagged during home sales and insurance renewals. We replace obsolete services with clean, modern 200-amp solar-ready Square D QO or Eaton panels, pulling all municipal permits and coordinating utility power disconnects with SRP and APS.",
    ],
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1600&q=70",
    benefits: [
      "Full 200-amp modern capacity ready for EV charging, heat pumps & solar",
      "Replacement of dangerous Federal Pacific and Zinsco fire hazard panels",
      "City building permits pulled and SRP/APS meter disconnects handled",
      "Integrated whole-home Type 2 surge protection included on every panel",
    ],
    features: [
      "100A to 200A and 400A residential main service panel upgrades",
      "Meter-main combo (all-in-one) replacements and underground service changeouts",
      "Overhead service mast, weatherhead, and riser conduit replacements",
      "Secondary grounding rod driven and water pipe bonding brought to current NEC 250",
      "Subpanel installations for garages, workshops, casitas, and pool equipment",
      "Whole-home Type 2 surge protection device (SPD) installation",
    ],
    problems: [
      "Breakers tripping frequently when multiple appliances and AC run together",
      "Home insurance cancellation warning due to a Federal Pacific or Zinsco panel",
      "Panel completely full with zero open breaker spaces for home additions",
      "Buzzing, sizzling, or visible corrosion and heat scorching on the main bus bar",
    ],
    process: [
      {
        n: "01",
        t: "Load Calculation & Permitting",
        d: "We calculate whole-house demand and submit engineered permit drawings to your city.",
      },
      {
        n: "02",
        t: "Utility Disconnect Coordination",
        d: "We coordinate with SRP or APS for a morning meter pull to ensure minimal downtime.",
      },
      {
        n: "03",
        t: "Precision Panel Installation",
        d: "New enclosure mounted, circuits landed cleanly, and grounding brought to code.",
      },
      {
        n: "04",
        t: "City Inspection & Power Reconnection",
        d: "City inspector conducts on-site sign-off and utility re-energizes power the same day.",
      },
    ],
    whyUs: [
      "Over 30 years of experience coordinating with SRP and APS utility dispatchers",
      "We complete 99% of residential panel swaps in a single working day",
      "Clean, laser-straight wire management and permanent engraved circuit labels",
      "ROC #341995 licensed, bonded, and insured with full workmanship warranty",
    ],
    faqs: [
      {
        q: "How do I know if my Phoenix home needs a 200-amp panel upgrade?",
        a: "Common indicators include a main breaker rated under 150 amps, breakers tripping during peak summer cooling months, adding an EV charger or pool heat pump, or wanting solar power. If your panel has no empty slots, an upgrade or subpanel is required.",
      },
      {
        q: "Why won't insurance companies cover Federal Pacific or Zinsco panels?",
        a: "Independent laboratory testing found Federal Pacific Stab-Lok breakers fail to trip on short circuits up to 25% of the time, allowing wires to overheat and cause structure fires. Zinsco breakers frequently fuse to the aluminum bus bar. Most insurers require these panels to be replaced prior to issuing or renewing coverage.",
      },
      {
        q: "How long will my power be turned off during a panel replacement?",
        a: "Typically between 4 to 7 hours on the day of installation. We schedule early morning utility disconnects, install the new panel efficiently, and coordinate immediate city inspection so power is safely restored before evening.",
      },
      {
        q: "Do you pull municipal permits and coordinate with SRP or APS?",
        a: "Yes. Every panel upgrade requires a building permit from your city (Phoenix, Tempe, Mesa, Scottsdale, Chandler, or Glendale) and a coordinated disconnect/reconnect order with your electric utility (SRP or APS). We handle all scheduling and paperwork.",
      },
    ],
    related: [
      "circuit-breaker-repair",
      "residential-electrical-services",
      "electrical-maintenance",
    ],
  },
  {
    slug: "electrical-wiring-and-rewiring",
    title: "Electrical Wiring & Whole-Home Rewiring",
    navLabel: "Wiring & Rewiring",
    metaTitle: "Electrical Wiring & Rewiring in Phoenix, AZ | APM Arizona Electric LLC",
    metaDescription:
      "Expert electrical wiring & whole-home rewiring in Phoenix, AZ. Historic cloth-wire replacement, aluminum wire remediation, grounded circuits. Call (480) 806-1832.",
    h1: "Electrical Wiring & Rewiring in Phoenix, AZ",
    short: "Safe copper rewiring for historic cloth, ungrounded, and aluminum wiring.",
    description:
      "Protect your home and family with code-compliant copper rewiring, aluminum wiring remediation, and non-invasive wire fishing for older Valley properties.",
    intro: [
      "Wiring is the hidden infrastructure behind your walls. While fixtures and switches are replaced over the years, the branch wiring feeding them often remains original. In Phoenix historic districts like Encanto, Willo, and Coronado, as well as vintage homes in Glendale and Tempe, properties frequently run on deteriorated cloth-insulated conductors, knob-and-tube remnants, or ungrounded two-wire cables.",
      "Additionally, homes constructed between 1965 and 1973 often contain aluminum branch-circuit wiring, which expands at a rate 30% higher than copper, leading to loose terminal connections, oxidation, and dangerous electrical fires. We provide comprehensive whole-home and partial rewiring using modern Romex NM-B copper conductors, non-invasive wire-fishing techniques that preserve your plaster and drywall, and code-approved Copalum / AlumiConn aluminum remediation.",
    ],
    image:
      "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1600&q=70",
    benefits: [
      "Non-invasive wire fishing that preserves historic drywall, plaster & ceilings",
      "Elimination of hazardous aluminum, cloth-insulated, and ungrounded wiring",
      "Modern equipment ground added to every single outlet and switch in the home",
      "Insurance-compliant electrical safety certification upon completion",
    ],
    features: [
      "Whole-home and partial branch-circuit copper rewiring",
      "Aluminum branch wiring remediation using CPSC-approved AlumiConn connectors",
      "Two-wire ungrounded circuit replacement with modern grounded Romex cable",
      "Dedicated home office, entertainment center, and workshop circuit installations",
      "Attic and crawl space cable re-securing and junction box cleanouts",
      "Arc-Fault Circuit-Interrupter (AFCI) safety modernization per current NEC",
    ],
    problems: [
      "Ungrounded two-prong outlets that cannot safely power modern electronics",
      "Deteriorating cloth insulation crumbling and exposing bare copper inside junction boxes",
      "Outlets or switch faceplates that feel hot to the touch (common with aluminum wiring)",
      "Home purchase or insurance policy blocked due to outdated wiring types",
    ],
    process: [
      {
        n: "01",
        t: "Circuit & Attic Mapping",
        d: "We inspect your main panel, crawl spaces, and representative outlets to map all circuits.",
      },
      {
        n: "02",
        t: "Pathway Planning",
        d: "We plan precise cable fishing routes through attic bays to protect your historic drywall.",
      },
      {
        n: "03",
        t: "Copper Cable Pulling",
        d: "We pull new Romex NM-B copper conductors with dedicated equipment grounds.",
      },
      {
        n: "04",
        t: "Device Termination & Testing",
        d: "We install tamper-resistant outlets, AFCI/GFCI dual-function breakers, and test loop resistance.",
      },
    ],
    whyUs: [
      "Surgical wire-fishing techniques that minimize wall damage and messy drywall repairs",
      "Over 30 years of experience navigating Phoenix attics and vintage construction styles",
      "Written inspection compliance certificate for your insurance company",
      "ROC #341995 licensed, bonded, and insured with full workmanship warranty",
    ],
    faqs: [
      {
        q: "How do I know if my Phoenix home has aluminum wiring?",
        a: "Homes built in the Valley between 1965 and 1973 commonly used aluminum wiring. You can check exposed cables in the attic or panel for the word 'ALUMINUM' or 'AL' stamped on the outer sheath. If your outlets feel warm, switch plates discolor, or lights flicker, call us immediately for an inspection.",
      },
      {
        q: "Do I have to tear down my walls to rewire my older home?",
        a: "No. Our experienced electricians specialize in non-invasive wire-fishing techniques. We route new copper cables through attics, crawl spaces, and behind baseboards using specialized flex bits. Most rewires require only minimal drywall incisions that are easily patched.",
      },
      {
        q: "Why do insurance companies require rewiring or ungrounded outlet replacement?",
        a: "Ungrounded two-wire circuits and aged cloth insulation lack a low-impedance path to trip breakers during ground faults, creating substantial electric shock and fire hazards. Insurance carriers frequently demand either full rewiring or NEC-compliant GFCI remediation before issuing coverage.",
      },
      {
        q: "Can I rewire one room at a time (like a kitchen or master suite)?",
        a: "Yes. Partial rewiring is common during remodels or room additions. We isolate the specific branch circuit, run new grounded copper wiring back to the main panel, and install modern AFCI breakers while leaving untouched circuits undisturbed.",
      },
    ],
    related: [
      "circuit-breaker-repair",
      "residential-electrical-services",
      "kitchen-electrical-repairs",
    ],
  },
  {
    slug: "outlet-and-switch-repair",
    title: "Outlet & Switch Repair",
    navLabel: "Outlets & Switches",
    metaTitle: "Outlet & Switch Repair Phoenix, AZ | APM Arizona Electric LLC",
    metaDescription:
      "Licensed outlet and switch repair in Phoenix, AZ. Fixing loose plugs, buzzing dimmers, warm switches & burnt receptacles. Fast response: (480) 806-1832.",
    h1: "Outlet & Switch Repair in Phoenix, AZ",
    short: "Diagnose and repair faulty outlets, dead switches, buzzing dimmers, and loose wall plugs.",
    description:
      "From loose receptacles that spark when plugging in vacuums to discolored switch faceplates, our licensed electricians repair and replace worn electrical devices to current NEC code.",
    intro: [
      "In the desert climate of Greater Phoenix, wall receptacles and light switches endure significant mechanical and thermal wear. Plugs that slip out easily or outlets that feel warm indicate degraded contact tension inside the box, which generates high-resistance electrical arcing and creates a serious fire hazard.",
      "APM Arizona Electric LLC replaces cracked, buzzing, or non-functioning devices with commercial-grade, tamper-resistant receptacles and modern smart switches. We verify proper grounding, secure copper terminations, and make sure every box meets modern National Electrical Code standards.",
    ],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=70",
    benefits: [
      "Commercial-grade, tamper-resistant (TR) safety outlets",
      "Elimination of dangerous arcing and sparking hazards",
      "Modern smart switch, dimmer, and rocker upgrade options",
      "Full ground path verification on every replaced device",
    ],
    features: [
      "Loose receptacle contact tension replacement",
      "Buzzing, humming, and hot switch diagnostics and repair",
      "3-way and 4-way hallway and staircase switch wiring",
      "Smart WiFi switches, timers, and digital dimmers",
      "Tamper-resistant and child-safe receptacle installation",
      "Dedicated 20-amp appliance outlet installations",
    ],
    problems: [
      "Plugs sliding out of the wall on their own",
      "Outlets with brown, scorched, or melted plastic around slots",
      "Light switches that crackle or spark when toggled",
      "Switches that feel warm or hot to the touch during normal use",
    ],
    process: [
      {
        n: "01",
        t: "Circuit Isolation",
        d: "We identify the corresponding breaker, test for zero voltage, and safely de-energize the circuit.",
      },
      {
        n: "02",
        t: "Box & Wire Inspection",
        d: "We inspect conductors for brittle insulation, aluminum wiring, and improper back-stabbing.",
      },
      {
        n: "03",
        t: "Secure Installation",
        d: "We install heavy-duty, side-wired commercial-grade devices with proper grounding.",
      },
      {
        n: "04",
        t: "Load & Polarity Test",
        d: "Every receptacle is tested with a digital circuit analyzer for correct polarity and ground fault safety.",
      },
    ],
    whyUs: [
      "We strictly avoid weak push-in back-stab connections that cause future arcing",
      "ROC #341995 licensed, bonded, and insured electricians on every job",
      "Upfront pricing with no surprises or hidden material surcharges",
      "Full clean-up and respectful treatment of your home",
    ],
    faqs: [
      {
        q: "Why do my wall plugs keep falling out?",
        a: "Internal metal contact blades lose spring tension over years of use. Loose contacts create electrical resistance and arcing. The only safe solution is replacing the receptacle with a new commercial-grade unit.",
      },
      {
        q: "Why does my light switch feel warm when turned on?",
        a: "Standard on/off switches should never feel warm to the touch. Warmth indicates an overloaded switch or high-resistance loose wiring inside the wall box. Dimmer switches may be mildly warm, but should never be hot.",
      },
      {
        q: "Can I replace two-prong ungrounded outlets with three-prong outlets?",
        a: "You cannot simply swap a two-prong outlet for a three-prong outlet without a ground path. Per NEC code, you must either run a dedicated equipment ground wire, install a GFCI receptacle labeled 'No Equipment Ground', or update the circuit wiring.",
      },
    ],
    related: [
      "gfci-outlet-installation",
      "residential-electrical-services",
      "electrical-troubleshooting",
    ],
  },
  {
    slug: "gfci-outlet-installation",
    title: "GFCI Outlet Installation & Repair",
    navLabel: "GFCI Outlets",
    metaTitle: "GFCI Outlet Installation Phoenix, AZ | APM Arizona Electric LLC",
    metaDescription:
      "Code-compliant GFCI outlet installation & testing in Phoenix, AZ kitchens, bathrooms, garages & outdoor patios. Licensed electrician: (480) 806-1832.",
    h1: "GFCI Outlet Installation & Repair in Phoenix, AZ",
    short: "Protect your family from electrical shock near water sources with code-mandated GFCI receptacles.",
    description:
      "Ground Fault Circuit Interrupters (GFCI) protect against fatal electric shock by cutting power in milliseconds when moisture or ground faults occur. We install and service GFCI protection throughout Phoenix.",
    intro: [
      "Ground Fault Circuit Interrupter (GFCI) protection is mandated by the National Electrical Code in any area where electricity and moisture might meet: kitchens, bathrooms, garages, laundry rooms, crawlspaces, outdoor patios, and pool equipment areas.",
      "A faulty or outdated GFCI that will not reset leaves circuits dead, while a failed GFCI that fails closed poses a lethal shock hazard. APM Arizona Electric LLC tests, upgrades, and installs weather-resistant and tamper-resistant GFCI devices across the Valley to keep your home fully protected and code-compliant.",
    ],
    image:
      "https://images.unsplash.com/photo-1544724559-5622074591e6?auto=format&fit=crop&w=1600&q=70",
    benefits: [
      "Sub-second shutoff to prevent fatal electric shock",
      "Full compliance with City of Phoenix and NEC residential codes",
      "Weather-resistant (WR) outdoor enclosures that resist monsoon rain",
      "Protection for downstream outlets from a single line/load unit",
    ],
    features: [
      "Kitchen countertop GFCI circuit installation & daisy-chain testing",
      "Bathroom vanity GFCI replacement and dedicated 20-amp circuiting",
      "Outdoor weather-resistant (WR) GFCI receptacles with in-use bubble covers",
      "Garage, workshop, and unfinished basement GFCI additions",
      "Self-testing GFCI receptacles that run automatic internal diagnostics",
      "Dual-function AFCI/GFCI breaker installations at the panel",
    ],
    problems: [
      "GFCI reset button pops immediately when pressed",
      "Dead outlets in bathroom or kitchen with no obvious breaker tripped",
      "Outdoor outlets shorting out during summer monsoon rains",
      "Older home with standard non-GFCI receptacles within 6 feet of sinks",
    ],
    process: [
      {
        n: "01",
        t: "Fault Diagnostic",
        d: "We test whether the GFCI itself is defective or if real current leakage is occurring on downstream loads.",
      },
      {
        n: "02",
        t: "Line vs Load Verification",
        d: "We trace incoming hot/neutral wires to ensure line and load terminals are correctly paired.",
      },
      {
        n: "03",
        t: "Installation & Weatherproofing",
        d: "We install tamper-resistant (TR) and weather-rated (WR) units with heavy-duty moisture gaskets.",
      },
      {
        n: "04",
        t: "Trip Time Calibration",
        d: "We simulate ground faults using calibrated test meters to ensure sub-second trip response.",
      },
    ],
    whyUs: [
      "We use self-testing GFCI models that notify you if internal protection degrades",
      "Licensed Arizona contractor (ROC #341995) adhering to current NEC guidelines",
      "Properly wired line and load terminals to avoid dangerous false protection",
      "Clean, professional service with transparent upfront estimates",
    ],
    faqs: [
      {
        q: "Why won't my GFCI outlet reset when I push the button?",
        a: "A GFCI won't reset if there is no power reaching the unit, if line and load wires are reversed, if there is an active ground fault on the circuit, or if the internal sensing mechanism has failed from a power surge.",
      },
      {
        q: "Where does building code require GFCI outlets in Arizona?",
        a: "Per NEC guidelines adopted in Phoenix, GFCIs are required in kitchens (countertop receptacles), bathrooms, laundry rooms, garages, outdoors, crawl spaces, and within 6 feet of any sink or water source.",
      },
      {
        q: "What is the difference between a standard GFCI and an outdoor WR GFCI?",
        a: "Weather-resistant (WR) GFCIs are manufactured with UV-stabilized thermoplastics and corrosion-resistant nickel-plated contacts designed to survive intense Arizona heat and driving monsoon storms without corroding.",
      },
    ],
    related: [
      "outlet-and-switch-repair",
      "residential-electrical-services",
      "kitchen-electrical-repairs",
    ],
  },
  {
    slug: "whole-home-electrical-inspections",
    title: "Whole-Home Electrical Inspections",
    navLabel: "Electrical Inspections",
    metaTitle: "Whole-Home Electrical Inspection Phoenix, AZ | APM Arizona Electric LLC",
    metaDescription:
      "Comprehensive 50-point electrical safety inspections for Phoenix home buyers and owners. Panel checks, wiring evaluation & code compliance. Call (480) 806-1832.",
    h1: "Whole-Home Electrical Safety Inspections in Phoenix, AZ",
    short: "Uncover hidden electrical hazards, outdated panels, and ungrounded wiring before they cause fires.",
    description:
      "Whether buying a home in the Valley or evaluating an older property, our comprehensive 50-point electrical safety inspections identify hidden fire hazards, unpermitted work, and code violations.",
    intro: [
      "Electrical systems are largely hidden behind drywall and inside attics where problems develop unnoticed until a breaker fails to trip or a cable overheats. In Phoenix, where decades of rapid home construction have resulted in a mix of Zinsco panels, aluminum wiring, and unpermitted DIY renovations, an objective electrical inspection is essential.",
      "APM Arizona Electric LLC conducts rigorous, thorough electrical inspections for prospective home buyers, real estate transactions, insurance requirements, and safety-conscious homeowners. We provide a detailed written report with prioritized recommendations and upfront repair costs.",
    ],
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=70",
    benefits: [
      "Comprehensive 50-point safety checklist covering all electrical systems",
      "Written report with photos and clear repair priorities",
      "Inspection by licensed electricians (ROC #341995), not general inspectors",
      "Negotiating leverage during home purchases and real estate transactions",
    ],
    features: [
      "Main electrical panel and meter base inspection for heat damage and corrosion",
      "Circuit breaker rating versus wire gauge compliance checks",
      "Branch circuit evaluation: identifying knob & tube, cloth wiring, and aluminum branch circuits",
      "Grounding electrode system and bonding verification (water pipe and Ufer ground)",
      "GFCI and AFCI protection testing in all mandated locations",
      "Smoke and carbon monoxide detector code-compliance check",
    ],
    problems: [
      "Preparing to buy or sell a residential property in Greater Phoenix",
      "Home insurance company requesting an electrical certificate or panel verification",
      "Older home (built before 1990) that has never had an electrical evaluation",
      "Frequent breaker trips, flickering lights, or unexplained burning odors",
    ],
    process: [
      {
        n: "01",
        t: "Panel & Service Check",
        d: "We pull the main panel dead-front to inspect bussing, breaker condition, neutral bars, and grounding electrode connections.",
      },
      {
        n: "02",
        t: "Branch Circuit & Device Audit",
        d: "We test receptacles, switches, GFCI trip responses, and ceiling fixtures across every room of the home.",
      },
      {
        n: "03",
        t: "Attic & Major Appliance Review",
        d: "We evaluate junction boxes, cable routing in extreme heat zones, and dedicated AC/water heater disconnects.",
      },
      {
        n: "04",
        t: "Actionable Report",
        d: "You receive an itemized, clear report categorizing immediate safety hazards versus recommended upgrades.",
      },
    ],
    whyUs: [
      "We are licensed electrical contractors, not generalists who merely look at outlets",
      "Honest, unbiased evaluations without pressure tactics or exaggerated claims",
      "Accurate itemized estimates for any necessary code corrections",
      "Deep experience with historic Phoenix neighborhoods and Valley building practices",
    ],
    faqs: [
      {
        q: "How does an electrician's inspection differ from a standard home inspector?",
        a: "General home inspectors do a surface-level walkthrough and cannot remove panel components or conduct deep circuit diagnostics. Our licensed electricians open panels, test wire gauges against breaker amperage, examine grounding paths, and accurately diagnose hazards.",
      },
      {
        q: "What dangerous electrical panels are common in older Phoenix homes?",
        a: "Federal Pacific Electric (FPE) Stab-Lok panels and Zinsco/Sylvania panels are notorious for failing to trip during overcurrent conditions, creating severe fire risks. We verify panel brands and bussing conditions during every inspection.",
      },
      {
        q: "How long does a full home electrical inspection take?",
        a: "A typical 1,500 to 3,000 sq ft home inspection takes between 1.5 to 2.5 hours, depending on the age and complexity of the home.",
      },
    ],
    related: [
      "electrical-panel-upgrades",
      "electrical-wiring-and-rewiring",
      "electrical-maintenance",
    ],
  },
  {
    slug: "surge-protection-installation",
    title: "Whole-Home Surge Protection",
    navLabel: "Surge Protection",
    metaTitle: "Whole-Home Surge Protection Phoenix, AZ | APM Arizona Electric LLC",
    metaDescription:
      "Protect your AC compressor, smart appliances & electronics from Phoenix monsoon lightning and grid surges. Type 2 surge installation: (480) 806-1832.",
    h1: "Whole-Home Surge Protection in Phoenix, AZ",
    short: "Shield expensive HVAC units, smart appliances, and electronics from destructive voltage spikes.",
    description:
      "Phoenix summer monsoons bring intense lightning strikes, while power grid switching creates daily micro-surges that degrade electronics. We install commercial-grade Type 2 surge protectors directly at your main panel.",
    intro: [
      "Most homeowners believe standard power strips protect their investments. In reality, strip protectors only shield the single plugged-in item from minor spikes — leaving expensive HVAC compressors, variable-speed pool pumps, smart refrigerators, and home automation systems completely unprotected.",
      "Phoenix experiences severe lightning activity during monsoon season, along with heavy electrical utility grid switching as millions of air conditioners cycle on and off. A whole-home surge protective device (SPD) installed at your main electrical panel diverts dangerous excess voltage into the earth in nanoseconds.",
    ],
    image:
      "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?auto=format&fit=crop&w=1600&q=70",
    benefits: [
      "Whole-house coverage protecting HVAC, appliances, and electronics",
      "Type 2 panel-mounted SPD with industrial-grade surge suppression ratings",
      "Meets 2020/2023 NEC code requirements for modern residential service",
      "Manufacturer warranties backing connected home appliances",
    ],
    features: [
      "Type 1 and Type 2 Surge Protective Device (SPD) installations at the main panel",
      "High surge current capacity ratings (50kA to 100kA per phase)",
      "LED diagnostic status indicators showing active surge protection status",
      "Dedicated two-pole breaker installation for immediate surge diversion",
      "Grounding electrode system testing to ensure maximum surge dissipation",
      "Subpanel surge protection for detached workshops, casitas, and pool panels",
    ],
    problems: [
      "Frequent monsoon thunderstorms and lightning strikes across the Valley",
      "HVAC circuit boards or smart appliance control panels burning out prematurely",
      "High-dollar investments in electronics, home theaters, or EV chargers",
      "Unexplained electrical glitches or tripped sensitive electronics after grid blips",
    ],
    process: [
      {
        n: "01",
        t: "Panel Assessment",
        d: "We inspect your main electrical panel to verify available breaker space and measure service grounding resistance.",
      },
      {
        n: "02",
        t: "SPD Sizing",
        d: "We select the optimal surge current capacity based on your service size, geographic exposure, and equipment load.",
      },
      {
        n: "03",
        t: "Direct Bus Installation",
        d: "We mount the surge protector with the shortest possible conductor lengths directly adjacent to the main breaker.",
      },
      {
        n: "04",
        t: "Indicator Verification",
        d: "We power up the device, verify green diagnostic LED indicators, and document the manufacturer warranty details.",
      },
    ],
    whyUs: [
      "We install UL 1449 4th Edition listed commercial-grade surge suppression units",
      "Electricians maintain short lead lengths for maximum response time (<1 nanosecond)",
      "ROC #341995 licensed, bonded, and insured with verified Arizona track record",
      "We inspect your Ufer and ground rods to guarantee the surge has a low-resistance path to earth",
    ],
    faqs: [
      {
        q: "Why isn't a power strip surge protector enough?",
        a: "Power strips cannot protect 240V appliances like your air conditioner compressor, oven, heat pump, or electric water heater. They also react slower and have lower energy absorption capacity than panel-mounted Type 2 surge protectors.",
      },
      {
        q: "Does the current National Electrical Code require whole-home surge protection?",
        a: "Yes. Beginning with the 2020 NEC (Article 242.08), all new homes and service upgrades/panel replacements require an approved Surge Protective Device (SPD) to protect against transient overvoltages.",
      },
      {
        q: "How long does a whole-home surge protector last?",
        a: "Quality surge protective devices typically last 5 to 10 years, depending on the frequency and magnitude of local surges and lightning strikes. Most models feature LED indicator lights that change color when the internal metal oxide varistors (MOVs) are depleted.",
      },
    ],
    related: [
      "electrical-panel-upgrades",
      "electrical-maintenance",
      "residential-electrical-services",
    ],
  },
  {
    slug: "emergency-electrical-troubleshooting",
    title: "Emergency Electrical Troubleshooting",
    navLabel: "Emergency Electrical",
    metaTitle: "Emergency Electrical Troubleshooting Phoenix, AZ | APM Arizona Electric LLC",
    metaDescription:
      "Fast, licensed emergency electrical diagnostics in Phoenix, AZ. Burning smell, power outages, sparking panels & dead circuits. Call (480) 806-1832.",
    h1: "Emergency Electrical Troubleshooting in Phoenix, AZ",
    short: "Rapid electrical diagnostics when facing sudden power loss, burning odors, or sparking panels.",
    description:
      "Electrical emergencies can strike without warning — from melted breaker stabs to partial power loss during 115°F Phoenix heatwaves. We provide prompt diagnostics and code-compliant emergency repairs.",
    intro: [
      "An electrical emergency in the Arizona desert is more than an inconvenience — when your power fails during peak summer temperatures or an electrical panel emits a burning smell, it presents an immediate hazard to your family's safety and home.",
      "APM Arizona Electric LLC responds promptly to urgent electrical service calls throughout Phoenix, Tempe, Mesa, Scottsdale, Chandler, and Glendale. Our licensed electricians pinpoint root causes rapidly using specialized diagnostic instruments, eliminate fire hazards, and restore safe power.",
    ],
    image:
      "https://images.unsplash.com/photo-1544724559-5622074591e6?auto=format&fit=crop&w=1600&q=70",
    benefits: [
      "Rapid dispatch across the Phoenix metropolitan area",
      "ROC #341995 licensed electricians equipped with full diagnostic gear",
      "Immediate hazard isolation to protect against electrical fires",
      "Transparent emergency pricing with upfront repair authorization",
    ],
    features: [
      "Sudden partial or whole-house power outage troubleshooting",
      "Burning plastic odor and hot electrical panel diagnostics",
      "Main breaker buzzing, humming, or tripping under AC load",
      "Sparking outlets, switches, or junction box failures",
      "Coordination with APS and SRP for emergency service disconnects",
      "Temporary power restoration while awaiting major panel rebuilds",
    ],
    problems: [
      "Smell of burning plastic or ozone coming from the breaker box",
      "Half the power in your home is out while the other half works (lost leg of power)",
      "Main breaker tripped and will not reset, leaving your AC down in summer heat",
      "Loud buzzing, popping, or visible sparks from a wall receptacle or panel",
    ],
    process: [
      {
        n: "01",
        t: "Immediate Safety Advice",
        d: "When you call, we advise you on whether to shut down the main breaker or contact APS/SRP while an electrician is en route.",
      },
      {
        n: "02",
        t: "On-Site Root Cause Triage",
        d: "We utilize thermal imaging, multimeter voltage drop tests, and circuit tracers to find the exact fault location.",
      },
      {
        n: "03",
        t: "Hazard Isolation",
        d: "We isolate the damaged component to render the home safe from fire or shock before performing repairs.",
      },
      {
        n: "04",
        t: "Safe Power Restoration",
        d: "We replace defective breakers, repair melted neutral connections, or install emergency bypasses to restore vital circuits.",
      },
    ],
    whyUs: [
      "We never take advantage of an emergency with exploitative pricing",
      "Licensed and insured professionals who fix the underlying issue, not just symptoms",
      "Fully stocked service vans carrying common breakers, panels, and heavy-gauge wire",
      "Local Tempe-based shop ensuring quick response times across the East Valley and Phoenix",
    ],
    faqs: [
      {
        q: "What should I do if I smell burning plastic from my electrical panel?",
        a: "Immediately turn off the main breaker if it is safe to approach, evacuate the area if you see active smoke or flames, call 911, and contact our emergency dispatch at (480) 806-1832. Do not attempt to touch or remove the panel cover.",
      },
      {
        q: "Why is half of my house without power while the other half works?",
        a: "Homes in the US receive two 120-volt 'legs' of electricity from the utility. If one leg is lost — due to a blown utility transformer fuse, a severed underground feeder, or a burned main breaker stab — only half your 120V circuits and none of your 240V appliances (AC, dryer, oven) will operate.",
      },
      {
        q: "Is a buzzing circuit breaker considered an emergency?",
        a: "Yes. A loud buzzing or vibrating breaker often indicates an internal mechanical failure, severe arcing, or continuous overcurrent that hasn't tripped the thermal trip mechanism. This requires urgent professional evaluation.",
      },
    ],
    related: [
      "circuit-breaker-repair",
      "electrical-troubleshooting",
      "electrical-panel-upgrades",
    ],
  },
];

export type LocationProject = {
  title: string;
  neighborhood: string;
  description: string;
  tag: string;
};

export type LocationReview = {
  author: string;
  neighborhood: string;
  text: string;
  service: string;
  rating: number;
};

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
  projects: LocationProject[];
  reviews: LocationReview[];
  faqs: { q: string; a: string }[];
};

export const LOCATIONS: Location[] = [
  {
    slug: "phoenix-az",
    city: "Phoenix",
    navLabel: "Phoenix",
    metaTitle: "Electrician in Phoenix, AZ | APM Arizona Electric LLC",
    metaDescription:
      "Licensed residential electrician serving Phoenix, AZ from Arcadia to Desert Ridge. 200A panel upgrades, historic home rewiring, ceiling fans & EV chargers. Call (480) 806-1832.",
    h1: "Electrician in Phoenix, AZ",
    blurb:
      "Licensed residential electrical services across Phoenix — from historic cloth-wiring updates in Encanto to 200-amp service upgrades in Arcadia and smart lighting in Desert Ridge.",
    intro: [
      "Phoenix is not one uniform electrical market; it spans over seven decades of evolving building codes and architecture. A 1940s red-brick ranch in Encanto or the Willo Historic District often operates on ungrounded two-wire branch circuits, cloth insulation, and an original 60-amp fuse box or split-bus panel. Meanwhile, modern suburban builds in Desert Ridge and Norterra feature 200-amp services that are already maxed out with dual HVAC compressors, pool filtration equipment, and electric vehicle charging loads.",
      "At APM Arizona Electric LLC, our licensed electricians (ROC #341995) work directly within City of Phoenix jurisdiction daily. We pull municipal electrical permits, schedule and meet City of Phoenix inspectors on-site, and coordinate with Arizona Public Service (APS) and Salt River Project (SRP) for overhead and underground service entrance upgrades. Because our primary shop is minutes away in Tempe, central and north Phoenix homes are within our direct dispatch corridor.",
    ],
    landmarks: [
      "Arcadia",
      "Desert Ridge",
      "Encanto Historic District",
      "Camelback Corridor",
      "Biltmore",
      "Ahwatukee",
      "Downtown Phoenix",
      "Norterra",
    ],
    nearby: ["Tempe", "Scottsdale", "Glendale", "Paradise Valley", "Mesa"],
    availability: [
      "Priority dispatch for complete loss-of-power and burning odor emergencies",
      "City of Phoenix building permits pulled and inspector walkthroughs handled",
      "Scheduled morning appointments (7:00 AM – 7:00 PM) to beat extreme summer attic heat",
      "Coordination with APS and SRP for utility meter disconnects and service entrance upgrades",
    ],
    whyUs: [
      "ROC #341995 licensed, bonded, and insured with decades of field electrical contracting experience",
      "Deep familiarity with vintage Phoenix housing stock — from knob-and-tube mitigation to modern panel swaps",
      "Direct communication with master electrician Andres Portillo — no call-center runaround",
      "Transparent, upfront pricing provided before any tool touches a wire",
    ],
    responseTime:
      "Standard appointments scheduled Monday–Saturday within 24–48 hours; urgent loss-of-power calls prioritized based on active crew availability.",
    projects: [
      {
        title: "200-Amp Main Service Panel Upgrade",
        neighborhood: "Arcadia",
        description:
          "Upgraded an obsolete 100-amp split-bus Zinsco panel to a modern 200-amp solar-ready Square D QO panel with whole-home Type 2 surge protection. Coordinated utility disconnect with SRP and passed City of Phoenix municipal inspection on the first visit.",
        tag: "Panel Upgrade",
      },
      {
        title: "Ungrounded Two-Wire Circuit & GFCI Remediation",
        neighborhood: "Encanto Historic District",
        description:
          "Diagnosed ungrounded cloth-insulated wiring throughout a 1949 historic brick home. Safely installed upstream AFCI/GFCI dual-function breakers and labeled all downstream receptacles in compliance with NEC 406.4(D)(2), protecting sensitive electronics without damaging historic plaster.",
        tag: "Troubleshooting & Safety",
      },
      {
        title: "Dedicated 50A Level 2 EV Charger & Subpanel",
        neighborhood: "Desert Ridge",
        description:
          "Performed comprehensive whole-home load calculation, installed a 60-amp garage subpanel, and ran 6-gauge THHN conduit to support a high-speed Tesla Wall Connector with zero main-service overload risk.",
        tag: "EV Charger Installation",
      },
    ],
    reviews: [
      {
        author: "Hector Galvez",
        neighborhood: "Phoenix",
        text: "APM Arizona Electric did excellent work in our home. They even detected mistakes that our previous electrician had made and corrected them at no charge. They are pros and their customer service was impeccable.",
        service: "Circuit Breaker & Wiring Repair",
        rating: 5,
      },
      {
        author: "S R",
        neighborhood: "Central Phoenix",
        text: "Had a cut wire in my wall and it made my outlets all go out. Andres came and worked so hard to find the wire that wasn't working. He is an excellent electrician and the best that I've seen that will get the job done. So glad he was the one to fix our problem.",
        service: "Circuit Tracing & Rewiring",
        rating: 5,
      },
    ],
    faqs: [
      {
        q: "Do you pull City of Phoenix electrical permits for panel upgrades?",
        a: "Yes. Any main service panel replacement, service capacity upgrade, or major subpanel addition requires a City of Phoenix building permit. We prepare the load calculations, pull the permit, schedule the utility disconnect with APS or SRP, and meet the city inspector on-site for final sign-off.",
      },
      {
        q: "How quickly can an electrician arrive at my Phoenix home?",
        a: "For scheduled repairs, fan installations, and upgrades, we typically book within 24 to 48 hours. If you are experiencing a complete loss of power, a buzzing breaker, or a burning odor, call (480) 806-1832 immediately; we route urgent safety calls to the nearest available technician.",
      },
      {
        q: "What electrical challenges are common in older Phoenix homes like Arcadia and Encanto?",
        a: "Phoenix homes built between the 1940s and 1970s frequently suffer from deteriorated cloth-wrapped wiring, ungrounded two-prong outlets, undersized 60-to-100-amp service panels, and obsolete breaker brands like Zinsco and Federal Pacific. We provide non-invasive testing and code-compliant remediation that protects your home without unnecessary wall demolition.",
      },
      {
        q: "Do you service both North Phoenix and South Phoenix / Ahwatukee?",
        a: "Yes. We cover the entire Phoenix municipal area, including Arcadia, Desert Ridge, Norterra, Encanto, Willo, Camelback East, Ahwatukee Foothills, and Laveen.",
      },
    ],
  },
  {
    slug: "mesa-az",
    city: "Mesa",
    navLabel: "Mesa",
    metaTitle: "Electrician in Mesa, AZ | APM Arizona Electric LLC",
    metaDescription:
      "Trusted residential electrician serving Mesa, AZ from Dobson Ranch to Eastmark. Breaker panel replacements, EV chargers, patio fans & snowbird remote coordination. Call (480) 806-1832.",
    h1: "Electrician in Mesa, AZ",
    blurb:
      "Residential electrical repairs, breaker panel upgrades, and EV charger installations across Mesa — from established Dobson Ranch properties to growing Eastmark master-planned homes.",
    intro: [
      "Mesa’s residential electrical landscape divides distinctly between established neighborhoods in West and Central Mesa and booming modern developments in the East Valley. In communities like Dobson Ranch and Alta Mesa, homes built in the 1970s and 1980s frequently rely on aging 100-amp or 125-amp service panels, deteriorated outdoor disconnects, and ungrounded patio circuits that fail to satisfy modern electrical demand or safety standards.",
      "Conversely, in Eastmark, Mountain Bridge, and Las Sendas, homeowners need capacity additions: high-output Level 2 EV charging circuits, heavy-duty garage subpanels for workshops, outdoor landscape lighting systems, and vaulted patio ceiling fan installations. Furthermore, Mesa is home to thousands of seasonal winter residents. We routinely coordinate with out-of-state owners and property caretakers, providing full digital photo documentation, upfront itemized estimates, and secure remote invoicing.",
    ],
    landmarks: [
      "Eastmark",
      "Dobson Ranch",
      "Downtown Mesa",
      "Las Sendas",
      "Alta Mesa",
      "Superstition Springs",
      "Red Mountain",
      "Falcon Field",
    ],
    nearby: ["Tempe", "Gilbert", "Chandler", "Apache Junction", "Queen Creek"],
    availability: [
      "Detailed photo documentation and video walk-throughs for absentee snowbird owners",
      "City of Mesa electrical permitting, load calculations, and inspection coordination",
      "Same-week installation for EV chargers, patio ceiling fans, and circuit breaker replacements",
      "Comprehensive diagnostic inspections for 1970s–1980s electrical panels",
    ],
    whyUs: [
      "ROC #341995 licensed electrical contractor located just across the border on Hermosa Dr in Tempe",
      "Specialized experience troubleshooting 1970s and 1980s panels common in Dobson Ranch and Central Mesa",
      "Seamless remote management for winter visitors, HOA property managers, and second-home owners",
      "Honest recommendations: we only recommend full panel replacements when safety or capacity strictly requires it",
    ],
    responseTime:
      "Scheduled East Valley dispatch Monday–Saturday within 24–48 hours; remote coordination available for seasonal and out-of-state homeowners.",
    projects: [
      {
        title: "Obsolete 100A Panel Replacement & Surge Protection",
        neighborhood: "Dobson Ranch",
        description:
          "Replaced a failing 1978 Bryant split-bus electrical panel with a 200-amp exterior panel, installed whole-home surge suppression, and brought main grounding and bonding rods up to current NEC 250 standards under City of Mesa permit.",
        tag: "Panel Replacement",
      },
      {
        title: "Dual Level 2 EV Charger Installation & Garage Subpanel",
        neighborhood: "Eastmark",
        description:
          "Installed a 100-amp subpanel in a tandem garage, ran 1-inch EMT conduit along high ceiling lines, and wired two hardwired Level 2 vehicle charging stations with smart load sharing for a multi-EV household.",
        tag: "EV Charger & Subpanel",
      },
      {
        title: "Vaulted Patio Fan & GFCI Circuit Retrofit for Seasonal Owner",
        neighborhood: "Las Sendas",
        description:
          "Replaced two vibrating patio fans on an 18-foot covered patio using fan-rated structural ceiling boxes and installed weather-resistant GFCI outlets. Managed key access with the community caretaker and sent complete photo verification to the owner in Minnesota.",
        tag: "Ceiling Fan & Remote Service",
      },
    ],
    reviews: [
      {
        author: "Tom Stopski",
        neighborhood: "Mesa Area",
        text: "Andy was exceptionally polite and on time with his appointment, very knowledgeable and solved my problem within minutes of arriving. He took the time to explain to me what happened and map out on my breaker the information that wasn’t already filled out, will definitely be going to Andy again for any needs I have.",
        service: "Circuit Breaker Repair & Panel Labeling",
        rating: 5,
      },
      {
        author: "Teri Reichardt",
        neighborhood: "East Valley",
        text: "Andres came over to fix my electrical panel that kept tripping my water heater. I had previously had another electrician look at the panel and was told it was an issue with the 1 year old water heater. Andres was extremely thorough and found the wiring had incorrect gauge. He replaced the wires and breakers. Having Andres work makes me feel safe.",
        service: "Panel & Appliance Circuit Repair",
        rating: 5,
      },
    ],
    faqs: [
      {
        q: "Can you complete electrical work on my Mesa winter home while I am out of state?",
        a: "Yes. A significant portion of our Mesa clientele are seasonal residents. We coordinate access through your HOA lockbox, tenant, or property caretaker. Before commencing work, we provide a written estimate, and upon completion, we email high-resolution photos and diagnostic readouts with secure online payment options.",
      },
      {
        q: "Does my Dobson Ranch home need a 200-amp panel upgrade?",
        a: "Homes built in the 1970s and 1980s typically came with 100-amp or 125-amp services. If your panel is full, you are upgrading to a modern variable-speed heat pump, or adding an EV charger, a 200-amp upgrade is strongly recommended. We perform an NEC Article 220 load calculation to give you factual guidance before you spend a dime.",
      },
      {
        q: "Do you pull City of Mesa permits for electrical modifications?",
        a: "Yes, whenever required by municipal code — including main service changeouts, meter relocations, and new subpanels. We handle the permit application, coordinate the meter disconnect with the City of Mesa Electric Utility or SRP, and oversee city inspection.",
      },
      {
        q: "Do you service all of Mesa including Eastmark and Red Mountain?",
        a: "Yes. We service all Mesa zip codes from West Mesa (85201, 85202, 85210) through Central Mesa, Dobson Ranch (85203, 85204), and East Mesa / Eastmark (85206, 85207, 85209, 85212).",
      },
    ],
  },
  {
    slug: "scottsdale-az",
    city: "Scottsdale",
    navLabel: "Scottsdale",
    metaTitle: "Electrician in Scottsdale, AZ | APM Arizona Electric LLC",
    metaDescription:
      "Premier residential electrician serving Scottsdale, AZ from Old Town to Troon & DC Ranch. Architectural lighting, Lutron smart controls, panel upgrades & landscape power. Call (480) 806-1832.",
    h1: "Electrician in Scottsdale, AZ",
    blurb:
      "Precision electrical contracting for Scottsdale luxury homes — architectural recessed lighting, Lutron smart control integration, custom landscape illumination, and panel capacity expansions.",
    intro: [
      "Scottsdale residential electrical work demands a level of precision, clean execution, and aesthetic sensitivity that general rough-in contractors simply cannot deliver. In high-end custom homes throughout North Scottsdale, Troon, DC Ranch, and Silverleaf, electrical systems feature multi-scene lighting control systems, dedicated circuits for wine cellars and sub-zero refrigeration, integrated swimming pool subpanels, and multi-transformer architectural landscape lighting.",
      "In and around Old Town Scottsdale, McCormick Ranch, and Gainey Ranch, residential properties often require sophisticated updates: retrofitting older soffits with high-CRI recessed LED lighting, installing heavy designer chandeliers without damaging custom plaster or drywall, and modernizing electrical distribution panels to support high-draw induction cooktops and dual vehicle chargers. At APM Arizona Electric LLC, our licensed electricians treat your home with total respect — wearing boot covers, using drop cloths, and ensuring surgical, clean installations.",
    ],
    landmarks: [
      "Old Town Scottsdale",
      "DC Ranch",
      "Troon North",
      "Gainey Ranch",
      "McCormick Ranch",
      "Silverleaf",
      "McDowell Mountain Ranch",
      "Kierland",
    ],
    nearby: ["Paradise Valley", "Phoenix", "Tempe", "Fountain Hills", "Cave Creek"],
    availability: [
      "Clean-finish installations with drop cloths and floor protection for high-end interiors",
      "Smart lighting automation setup (Lutron Caséta, smart dimmers, and app-controlled scenes)",
      "Multi-zone architectural low-voltage landscape lighting design and troubleshooting",
      "Permitted 200A and 400A service upgrades for custom desert estates",
    ],
    whyUs: [
      "ROC #341995 licensed contractor with meticulous attention to detail and clean finishes",
      "Deep expertise in smart dimmer compatibility, low-voltage driver sizing, and LED flicker elimination",
      "Direct coordination with interior designers, landscape architects, and custom homebuilders",
      "Clear, itemized proposals detailing fixture mounting bracing, conduit routing, and circuit loading",
    ],
    responseTime:
      "White-glove scheduled service Monday–Saturday; punctuality guaranteed with designated arrival windows.",
    projects: [
      {
        title: "Architectural Recessed LED & Lutron Caséta Automation",
        neighborhood: "DC Ranch",
        description:
          "Replaced dated halogen eyeball fixtures with 28 glare-free, high-CRI 3000K recessed LED trims, installed Lutron Caséta smart dimmers across 6 living and dining zones, and programmed automated evening scenes via bridge integration.",
        tag: "Smart Lighting & Automation",
      },
      {
        title: "Multi-Zone Low-Voltage Landscape Lighting Overhaul",
        neighborhood: "Troon North",
        description:
          "Diagnosed voltage drop across an existing 300W landscape lighting system on a steep boulder lot. Installed dual stainless steel multi-tap transformers, re-trenched 12/2 direct burial cable, and illuminated desert specimen saguaros and pathway pavers with warm brass fixtures.",
        tag: "Landscape Lighting",
      },
      {
        title: "Designer Foyer Chandelier Installation & High-Ceiling Bracing",
        neighborhood: "Gainey Ranch",
        description:
          "Installed a 95-pound custom glass chandelier in a 20-foot two-story entry foyer. Built custom ceiling framing and installed an UL-listed heavy-duty steel fan/fixture support box with motorized lift integration for effortless future bulb maintenance.",
        tag: "Fixture Installation",
      },
    ],
    reviews: [
      {
        author: "Kristen Nash",
        neighborhood: "Scottsdale Area",
        text: "Andres was amazing! He took the time to find the electrical issue for my back patio light. In the recent remodel, the electrical technician didn’t connect the wiring to this light. He was patient and was able to not open the wall to find the concern. Other technicians would have given up but not this dude! He was awesome! Don’t think about it, this is your best call!",
        service: "Patio & Accent Lighting Troubleshooting",
        rating: 5,
      },
      {
        author: "Kristine Kramer",
        neighborhood: "Scottsdale / Valley",
        text: "Apm electric was referred to us and they truly did the most amazing job on switching out all of our ceiling fans, and they also installed a light fixture in our dining room! They are so kind, polite & professional... stayed patient while I ran to Home Depot to get the correct size. Really went above & beyond.",
        service: "Ceiling Fans & Dining Fixture",
        rating: 5,
      },
    ],
    faqs: [
      {
        q: "Can you eliminate LED buzzing and flickering on my smart dimmers?",
        a: "Yes. LED flicker usually stems from incompatible dimming protocols (forward-phase vs. reverse-phase ELV dimmers) or undersized minimum wattage loads. We match manufacturer-tested Lutron or Leviton smart controls specifically with your LED driver specifications to ensure silent, smooth dimming from 1% to 100%.",
      },
      {
        q: "Do you install high-end chandeliers in vaulted or two-story ceilings?",
        a: "Yes. We specialize in heavy fixture installations requiring engineered structural support boxes, attic joist bridging, and tall scaffold or A-frame ladder access. We ensure your fixture is securely hung and laser-leveled without scuffing high interior walls.",
      },
      {
        q: "Can you repair or extend our outdoor landscape lighting?",
        a: "We repair cut low-voltage lines, replace burnt-out transformers, rebalance multi-tap voltages to eliminate dim fixtures at the end of runs, and install photocell/astronomical smart timers that adjust automatically to Arizona sunset times.",
      },
      {
        q: "Do you pull City of Scottsdale permits for panel work?",
        a: "Yes. Any panel replacement, service expansion, or new dedicated exterior subpanel requires City of Scottsdale permitting and inspection. We manage the drawings, permit filing, and inspector walkthrough from start to finish.",
      },
    ],
  },
  {
    slug: "tempe-az",
    city: "Tempe",
    navLabel: "Tempe",
    metaTitle: "Electrician in Tempe, AZ | APM Arizona Electric LLC",
    metaDescription:
      "Licensed residential electrician headquartered in Tempe, AZ at 1216 W Hermosa Dr. Fastest response for repairs, panel upgrades, ASU rental turnovers & ceiling fans. Call (480) 806-1832.",
    h1: "Electrician in Tempe, AZ",
    blurb:
      "Local electrical service straight from our Tempe headquarters on W Hermosa Dr — fast response for neighborhood homeowners, student rental property managers, and mid-century renovations.",
    intro: [
      "Tempe is our hometown and physical headquarters. Located at 1216 W Hermosa Dr, Tempe, AZ 85282, our trucks and licensed electricians are based right in the heart of the city. Because we operate locally rather than dispatching from across the Valley, Tempe homeowners, landlords, and businesses consistently enjoy our fastest response times and flexible scheduling.",
      "Tempe's housing stock presents a unique mix: 1950s and 1960s block homes south of Broadway and around Daley Park with original two-wire wiring, high-turnover student rental properties near Arizona State University (ASU) needing rapid safety inspections and GFCI compliance, and modern townhomes and condos near Tempe Town Lake. Whether you need a rapid diagnostic for a dead kitchen circuit, a comprehensive rental turnover punch-list, or an upgraded 200-amp service panel, our team is right around the corner.",
    ],
    landmarks: [
      "ASU Main Campus",
      "Mill Avenue District",
      "Tempe Town Lake",
      "Daley Park",
      "Broadmor",
      "Warner Ranch",
      "Kiwanis Park",
      "South Tempe",
    ],
    nearby: ["Phoenix", "Mesa", "Chandler", "Guadalupe", "Scottsdale"],
    availability: [
      "Local Tempe base: fastest arrival times for neighborhood homeowners",
      "Landlord & property management turnover packages (GFCI testing, smoke alarms, breaker audit)",
      "City of Tempe building permit pulling and on-site inspection handling",
      "Same-day diagnostics for loss of power and safety concerns whenever crew schedule permits",
    ],
    whyUs: [
      "Registered Tempe business address: 1216 W Hermosa Dr, Tempe, AZ 85282",
      "ROC #341995 licensed, bonded, and insured with decades of community presence",
      "Proven experience working with ASU-area property managers and long-time Tempe homeowners",
      "Zero travel charges for Tempe residents — we are right down the street",
    ],
    responseTime:
      "Fastest dispatch Valley-wide — headquartered locally at 1216 W Hermosa Dr; same-day availability for urgent local calls.",
    projects: [
      {
        title: "Multi-Family Rental Turnover GFCI & Smoke Alarm Modernization",
        neighborhood: "ASU Campus Corridor",
        description:
          "Performed comprehensive electrical safety inspection on a four-unit student rental near Apache Blvd. Installed tamper-resistant GFCI receptacles in kitchens and bathrooms, interconnected hardwired smoke/CO alarms, and verified code compliance prior to new lease inception.",
        tag: "Rental Safety & Code Compliance",
      },
      {
        title: "Mid-Century Service Upgrade from 100A to 200A",
        neighborhood: "Broadmor / South of Broadway",
        description:
          "Upgraded an overburdened 1962 100-amp fuse box to a 200-amp outdoor breaker panel with integrated whole-house surge suppression. Coordinated utility service mast replacement with SRP and passed City of Tempe inspection.",
        tag: "Panel Upgrade",
      },
      {
        title: "Kitchen Dedicated Appliance Circuit & Disposal Wiring",
        neighborhood: "Daley Park",
        description:
          "Separated an overloaded 15-amp kitchen circuit that was causing nuisance tripping whenever the microwave and dishwasher ran simultaneously. Installed two dedicated 20-amp circuits with point-of-use GFCI protection.",
        tag: "Kitchen Electrical",
      },
    ],
    reviews: [
      {
        author: "John Mraz",
        neighborhood: "Tempe Area",
        text: "Andreas was very professional and quick in diagnosing an electrical problem with my water heater. Many other professionals had spent time working on it beforehand, including the maintenance people who work for my landlord. It seems everyone except Andreas could not fix it. Andy was in and out in 10 minutes and was able to fix my heater... I would highly recommend anyone who needs electrical work to come here.",
        service: "Water Heater Appliance Circuit Repair",
        rating: 5,
      },
      {
        author: "Natasha Crook",
        neighborhood: "Tempe",
        text: "Both times Andres came he did such a great job, was quick and efficient, and friendly! Would recommend.",
        service: "Residential Electrical Maintenance",
        rating: 5,
      },
    ],
    faqs: [
      {
        q: "Where is your Tempe electrical shop located?",
        a: "Our registered shop and business headquarters are located at 1216 W Hermosa Dr, Tempe, AZ 85282. We are situated near Broadway Rd and Priest Dr, giving us immediate access to the US-60, I-10, and Loop 202 to service any Tempe neighborhood in minutes.",
      },
      {
        q: "Do you offer electrical repairs and safety inspections for Tempe rental properties?",
        a: "Yes. We work directly with private landlords, real estate investors, and property management companies throughout the ASU and downtown Tempe area. We perform lease-turnover punch-lists, GFCI testing, smoke/CO detector certification, and emergency tenant repairs with clear digital billing.",
      },
      {
        q: "Can you upgrade ungrounded two-prong outlets in older Tempe homes?",
        a: "Yes. Many 1950s and 1960s homes south of University and Broadway feature two-wire branch circuits. Under NEC 406.4(D)(2), we can install GFCI protection at the panel or the first outlet in the run, giving you safe three-prong receptacle access without tearing open your interior walls.",
      },
      {
        q: "How quickly can you respond to an electrical emergency in Tempe?",
        a: "Because our technicians live and operate directly in Tempe, we can often dispatch same-day or within hours for urgent power outages, buzzing panels, or burning smells. Call (480) 806-1832 directly for immediate assistance.",
      },
    ],
  },
  {
    slug: "chandler-az",
    city: "Chandler",
    navLabel: "Chandler",
    metaTitle: "Electrician in Chandler, AZ | APM Arizona Electric LLC",
    metaDescription:
      "Licensed residential electrician serving Chandler, AZ from Ocotillo to Sun Lakes & Fulton Ranch. Full builder-panel upgrades, EV chargers, patio power & repairs. Call (480) 806-1832.",
    h1: "Electrician in Chandler, AZ",
    blurb:
      "Reliable residential electrical contracting across Chandler — builder-grade panel capacity additions, dual EV charger installations, Sun Lakes HOA-compliant repairs, and patio outdoor living circuits.",
    intro: [
      "Chandler has grown into a major technological hub with high-demand residential neighborhoods like Ocotillo, Fulton Ranch, and master-planned communities along the Price Corridor. While many Chandler homes are relatively new, their original electrical infrastructure was frequently installed with builder-grade minimums. As families add second electric vehicles, high-efficiency heat pumps, backyard pools, and covered patio entertainment centers, their 200-amp main panels quickly run out of physical breaker spaces and electrical capacity.",
      "Further south in communities like Sun Lakes and downtown Chandler, housing stock dates back to the 1980s and earlier, requiring dedicated panel modernization, GFCI retrofits, and aluminum wiring safety evaluations. At APM Arizona Electric LLC, we perform accurate NEC load calculations before recommending additions, handle City of Chandler permitting, and coordinate seamlessly with local HOA architectural review committees.",
    ],
    landmarks: [
      "Ocotillo",
      "Fulton Ranch",
      "Sun Lakes",
      "Downtown Chandler",
      "Price Road Corridor",
      "Chandler Fashion Center",
      "Tumbleweed Park",
    ],
    nearby: ["Gilbert", "Tempe", "Mesa", "Ahwatukee", "Sun Lakes"],
    availability: [
      "NEC Article 220 load calculations before EV charger and subpanel additions",
      "Subpanel additions for full builder-grade 200A panels",
      "HOA-compliant installation coordination for Sun Lakes and gated communities",
      "Weatherproof outdoor patio power, landscape circuits, and pool equipment feeds",
    ],
    whyUs: [
      "Licensed ROC #341995 electrical contractor located minutes away just north of the Chandler border",
      "Precise load calculation expertise preventing dangerous panel overloads or nuisance trips",
      "Clean conduit bending and neat garage runs that pass strict HOA inspections",
      "Honest, upfront written estimates with zero trip surcharges",
    ],
    responseTime:
      "Standard scheduling within 24 to 48 hours across all Chandler zip codes; convenient morning arrival windows.",
    projects: [
      {
        title: "Builder Panel Capacity Addition & 60A Subpanel",
        neighborhood: "Fulton Ranch",
        description:
          "Resolved a zero-breaker-space constraint on a 200A main panel by installing a 60-amp garage subpanel. Freed up breaker slots to power an added tankless water heater and Level 2 Tesla charging station without requiring an expensive utility service change.",
        tag: "Subpanel & Capacity Expansion",
      },
      {
        title: "Sun Lakes Electrical Safety Audit & GFCI Upgrade",
        neighborhood: "Sun Lakes",
        description:
          "Performed whole-home electrical audit for a seasonal resident. Replaced aging exterior GFCI receptacles with weather-resistant tamper-resistant devices, tightened loose panel neutral bus bars, and installed Type 2 whole-house surge protection.",
        tag: "Safety Audit & Surge Protection",
      },
      {
        title: "Covered Patio Electrical Package & Heavy-Duty Fan Bracing",
        neighborhood: "Ocotillo",
        description:
          "Installed two damp-rated outdoor ceiling fans with reinforced steel structural boxes on a 30-foot covered patio, added two in-use weatherproof GFCI outlets, and installed dedicated low-voltage wiring for patio step lighting.",
        tag: "Outdoor Patio Electrical",
      },
    ],
    reviews: [
      {
        author: "Dominic Berry",
        neighborhood: "Chandler Area",
        text: "Knowledgeable, professional, efficient, & good communicator. Explained and showed me how to manage voltage so my breaker wouldn’t trip. Very thorough explanations & friendly. Highly recommend.",
        service: "Voltage Load & Breaker Diagnostics",
        rating: 5,
      },
      {
        author: "Krysta Frost",
        neighborhood: "East Valley / Chandler",
        text: "The electrician that came to my house to help put in a different plug for my new washer and dryer was amazing. He was on time and communicated when he will be here. He talked me through everything he was doing and explained why he had to do what he was doing. When he was done he took the time to show me how the plug works.",
        service: "240V Dedicated Appliance Receptacle",
        rating: 5,
      },
    ],
    faqs: [
      {
        q: "My Chandler breaker panel has no empty slots left. Do I need a whole new panel?",
        a: "Not necessarily. In many cases, we can install an auxiliary subpanel or utilize UL-classified tandem/quad breakers to create additional circuits for an EV charger, hot tub, or remodel. We perform an NEC load calculation to confirm your existing service can safely handle the electrical demand.",
      },
      {
        q: "Do you pull City of Chandler electrical permits for EV chargers?",
        a: "Yes. The City of Chandler requires permits for dedicated 240V vehicle charging circuits and subpanels. We handle the permit application, provide the required load calculation sheet, and schedule the final inspection with City of Chandler inspectors.",
      },
      {
        q: "Do you service active adult communities like Sun Lakes?",
        a: "Yes, we regularly work in Sun Lakes. We understand community gate access protocols, quiet work hour rules, and specific electrical challenges common in homes from the late 1970s and 1980s.",
      },
      {
        q: "Can you install outdoor outlets and ceiling fans on my covered patio?",
        a: "Yes. All outdoor receptacles must have weather-resistant (WR) construction, GFCI protection, and 'while-in-use' weatherproof bubble covers per NEC 406.9. All outdoor ceiling fans are secured to heavy-duty fan-rated ceiling boxes.",
      },
    ],
  },
  {
    slug: "glendale-az",
    city: "Glendale",
    navLabel: "Glendale",
    metaTitle: "Electrician in Glendale, AZ | APM Arizona Electric LLC",
    metaDescription:
      "Licensed residential electrician serving Glendale, AZ from Historic Downtown to Arrowhead Ranch. Knob-and-tube rewiring, GFCI retrofits, panel repairs & no travel fees. Call (480) 806-1832.",
    h1: "Electrician in Glendale, AZ",
    blurb:
      "Experienced residential electrician serving Glendale and the West Valley — historic home rewiring, GFCI grounding solutions, panel replacements, and security lighting with zero travel surcharges.",
    intro: [
      "Glendale is a community of diverse electrical eras. In Historic Downtown Glendale and surrounding vintage neighborhoods near Catlin Court, homes built in the 1920s through 1950s often still contain original two-wire cloth branch circuits, ungrounded outlets, and deteriorating push-button or fuse panels. Modernizing these homes requires specialized knowledge of older building assemblies, careful wire-fishing techniques that preserve historic lath-and-plaster, and code-compliant grounding solutions like NEC 406.4(D)(2) GFCI retrofits.",
      "Further north in suburban communities like Arrowhead Ranch and around the Westgate Entertainment District, homes built from the 1990s onward face modern high-load challenges: aging 200-amp panels exposed to intense western desert heat, failing AC disconnects, and breaker tripping during peak summer cooling months. APM Arizona Electric LLC treats Glendale as an essential part of our core service area — we never charge West Valley travel surcharges, and our written estimates are always transparent and guaranteed.",
    ],
    landmarks: [
      "Historic Downtown Glendale",
      "Arrowhead Ranch",
      "Westgate Entertainment District",
      "Catlin Court",
      "State Farm Stadium",
      "Thunderbird Park",
      "Glendale Community College",
    ],
    nearby: ["Peoria", "Phoenix", "Sun City", "Surprise", "El Mirage"],
    availability: [
      "Two-wire ungrounded circuit diagnostics and safe GFCI retrofitting",
      "City of Glendale electrical permit pulling and inspector walkthroughs",
      "Zero West Valley travel fees or hidden destination charges",
      "Outdoor security floodlights and motion sensor fixture installations",
    ],
    whyUs: [
      "ROC #341995 licensed, bonded, and insured electrical contractor",
      "Gentle, non-invasive wire fishing techniques that protect historic walls and finishes",
      "Deep understanding of extreme heat degradation on West Valley exterior electrical panels",
      "Honest recommendations — we explain code options clearly so you can make informed decisions",
    ],
    responseTime:
      "Standard service scheduled Monday–Saturday within 24 to 48 hours; zero travel surcharges across all Glendale zip codes.",
    projects: [
      {
        title: "Historic Home Two-Wire GFCI & Grounding Retrofit",
        neighborhood: "Historic Downtown Glendale / Catlin Court",
        description:
          "Modernized an ungrounded 1948 bungalow without opening plaster walls. Installed dual-function AFCI/GFCI breakers at the main panel, replaced two-prong receptacles with three-prong outlets labeled 'No Equipment Ground' per NEC 406.4(D)(2), providing life-safety fault protection.",
        tag: "Historic Home Grounding",
      },
      {
        title: "Exterior AC Disconnect & Panel Heat Damage Repair",
        neighborhood: "Arrowhead Ranch",
        description:
          "Replaced a heat-scorched 60-amp air conditioning disconnect switch and charred aluminum conductors that were causing intermittent breaker tripping during 115°F summer peaks. Upgraded wiring to copper THHN with weather-tight seals.",
        tag: "AC Disconnect & Heat Repair",
      },
      {
        title: "Exterior LED Security Lighting & Motion Sensors",
        neighborhood: "Westgate / 59th Ave Corridor",
        description:
          "Installed high-efficiency commercial-grade bronze LED security floodlights with 180-degree motion sensors around the perimeter of a residential property, wired through weather-tight EMT conduit and photocell override switches.",
        tag: "Security Lighting",
      },
    ],
    reviews: [
      {
        author: "Peggy Nelson",
        neighborhood: "Glendale / West Valley",
        text: "When possible, we like to give small local companies our business. Today, is a perfect example of why. Andres made a last minute appointment happen... He informed us that our plug blew out because the plug was not GFI (under the sink), and it was only 15 amps to handle the dishwasher as well as the disposal. At the fuse box, it was a 20 amp, so he was able to reconfigure and put in a new plug that could handle both and was now GFI protected... Andres is careful, personable, knowledgeable, and his charges are quite fair.",
        service: "Kitchen GFCI & Circuit Reconfiguration",
        rating: 5,
      },
      {
        author: "Auryan",
        neighborhood: "Glendale Area",
        text: "Amazing service! Andy spent all day tracking down the disconnected circuit in my home. Had other companies come out before and they quoted me 10x what I paid with APM. Will definitely be calling them in the future.",
        service: "Circuit Tracing & Troubleshooting",
        rating: 5,
      },
    ],
    faqs: [
      {
        q: "Do you charge travel fees or trip surcharges to come out to Glendale?",
        a: "No. Glendale is within our standard primary service area. You receive the exact same straightforward pricing and labor rates whether you are in Downtown Glendale, Arrowhead Ranch, or right next to Westgate, with zero travel surcharges.",
      },
      {
        q: "Can you safely upgrade ungrounded two-prong outlets in older Glendale homes?",
        a: "Yes. Under National Electrical Code (NEC) 406.4(D)(2), we can install Ground Fault Circuit Interrupter (GFCI) breakers or receptacles on two-wire systems. This provides critical shock protection for your family and allows you to use three-prong cords safely without costly full-home rewiring.",
      },
      {
        q: "Do you pull City of Glendale permits for panel and electrical upgrades?",
        a: "Yes. Any panel replacement, service capacity upgrade, or major circuit addition is permitted through the City of Glendale Development Services Department. We handle the permit application, schedule the utility work, and meet the inspector.",
      },
      {
        q: "Why did my AC disconnect melt or trip in the Glendale summer heat?",
        a: "West-facing exterior electrical panels and AC disconnects in Glendale absorb intense afternoon solar radiation, often exceeding 140°F inside the metal enclosure. This heat, combined with loose lug connections or aged aluminum wiring, leads to resistance heating and melted breaker casings. We install heavy-duty disconnects with proper torque specifications and copper wiring.",
      },
    ],
  },
];

export const INDUSTRIES = [
  {
    t: "Home Electrical Repairs",
    d: "schedule your service for residential troubleshooting, outlets, switches and wiring concerns.",
  },
  {
    t: "Panel & Breaker Help",
    d: "Learn about panel upgrades, breaker troubleshooting and service capacity for your home.",
  },
  {
    t: "Lighting & Ceiling Fans",
    d: "Find residential help for fixtures, dimmers, fans, controls and outdoor home lighting.",
  },
  {
    t: "Kitchen Electrical",
    d: "Explore GFCI protection, appliance circuits, range wiring and under-cabinet lighting.",
  },
  {
    t: "EV Charger Wiring",
    d: "Ask our team about load calculations and a dedicated home charging circuit.",
  },
  {
    t: "Home Electrical Maintenance",
    d: "Review inspection and maintenance options for panels, devices, grounding and safety.",
  },
];

export const STATS = [
  { v: "30+", l: "Years Combined Field Experience" },
  { v: "5.0 ★", l: "Average Rating Across 200+ Reviews" },
  { v: "1,000+", l: "Valley Homes & Projects Serviced" },
  { v: "6", l: "Phoenix Metro Cities Served Daily" },
];

export const FAQS = [
  {
    q: "Are you licensed and insured in Arizona?",
    a: "Yes. APM Arizona Electric LLC is a fully licensed, bonded, and insured electrical contractor operating across the Phoenix Metro Area. All electrical work meets or exceeds National Electrical Code (NEC) and municipal building safety standards.",
  },
  {
    q: "Do your electricians perform the work directly?",
    a: "Yes. We are a direct, local electrical contractor—not a third-party lead broker. Our own experienced electricians handle your installation, repairs, and diagnostics from start to finish, and we stand completely behind our workmanship.",
  },
  {
    q: "Can I request an upfront estimate?",
    a: "Absolutely. Call (480) 806-1832 or submit an online request. We provide clear, itemized written pricing before starting any work so you approve costs upfront with zero hidden fees.",
  },
  {
    q: "How quickly can you respond to electrical emergencies?",
    a: "We prioritize urgent safety calls—including loss of power, sparking breakers, and burning odors. We provide prompt, reliable dispatch across Phoenix, Tempe, Mesa, Scottsdale, Chandler, and Glendale.",
  },
  {
    q: "What areas do you serve?",
    a: "We provide residential electrical services throughout Phoenix, Tempe, Mesa, Scottsdale, Chandler, Glendale, and surrounding Valley communities from our central location at 1216 W Hermosa Dr in Tempe.",
  },
  {
    q: "How much does electrical work typically cost?",
    a: "Cost depends on the scope of the project. We evaluate your system and provide an upfront written estimate before performing any work, so there are never unexpected surprises on your final invoice.",
  },
  {
    q: "Do you pull municipal permits with the city?",
    a: "Yes. Panel upgrades, service changes, new circuit installations, and major rewiring projects require permits and city inspections. We pull the permits and meet the inspector on-site.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, debit cards, cash, checks, and electronic payments upon project completion.",
  },
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
  "@type": "Electrician",
  "@id": `${SITE.url}/#electrician`,
  name: BUSINESS.name,
  url: SITE.url,
  image:
    "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=70",
  telephone: BUSINESS.phoneSchema,
  email: BUSINESS.email,
  priceRange: "$$",
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "State Contractor License",
    name: "Arizona Registrar of Contractors ROC #341995",
    recognizedBy: {
      "@type": "Organization",
      name: "Arizona Registrar of Contractors",
      url: "https://roc.az.gov",
    },
  },
  sameAs: ["https://maps.google.com/?cid=10922687133758385908", "https://roc.az.gov"],
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.street,
    addressLocality: BUSINESS.addressLocality,
    addressRegion: "AZ",
    postalCode: BUSINESS.postalCode,
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 33.4074, longitude: -111.9564 },
  areaServed: LOCATIONS.map((l) => ({ "@type": "City", name: `${l.city}, AZ` })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "07:00",
      closes: "19:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "210",
    bestRating: "5",
  },
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
