import type {
  Category,
  ProcessStep,
  Property,
  Service,
  StatsItem,
  Testimonial,
  WhyItem,
} from "./types";

export const WHATSAPP_NUMBER = "+919876543210";
export const PHONE_NUMBER = "+919876543210";

export const CATEGORIES: Category[] = [
  {
    id: "commercial",
    name: "Commercial Leasing",
    icon: "Building2",
    description:
      "Prime retail and commercial spaces in high-footfall corridors",
    listingCount: 24,
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    color: "#C7A66A",
  },
  {
    id: "franchise",
    name: "Franchise Spaces",
    icon: "Store",
    description: "Pre-vetted high-street locations for franchise expansion",
    listingCount: 18,
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    color: "#C7A66A",
  },
  {
    id: "office",
    name: "Office Spaces",
    icon: "Briefcase",
    description: "Modern plug-and-play offices at key commercial nodes",
    listingCount: 31,
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    color: "#C7A66A",
  },
  {
    id: "industrial",
    name: "Industrial & Warehouse",
    icon: "Warehouse",
    description:
      "Large-format industrial spaces with full utility infrastructure",
    listingCount: 12,
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
    color: "#C7A66A",
  },
];

export const SERVICES: Service[] = [
  {
    id: "1",
    title: "Commercial Leasing",
    description:
      "End-to-end lease management — site identification to agreement execution with zero friction.",
    icon: "Building2",
    imageUrl:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
    tag: "Core Service",
  },
  {
    id: "2",
    title: "Franchise Spaces",
    description:
      "Curated high-street locations pre-vetted for franchise expansion with right footfall and terms.",
    icon: "Store",
    imageUrl:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
    tag: "High Demand",
  },
  {
    id: "3",
    title: "Restaurants & Cafes",
    description:
      "Premium F&B locations across Udaipur's high-footfall corridors with kitchen load potential.",
    icon: "UtensilsCrossed",
    imageUrl:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
    tag: "F&B Specialist",
  },
  {
    id: "4",
    title: "Hotels & Hospitality",
    description:
      "Hotel properties and hospitality assets ready-to-operate with existing licenses.",
    icon: "Hotel",
    imageUrl:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    tag: "Hospitality",
  },
  {
    id: "5",
    title: "Warehouses",
    description:
      "Industrial-grade warehousing across Udaipur's logistics zones with high clear heights.",
    icon: "Warehouse",
    imageUrl:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80",
    tag: "Industrial",
  },
  {
    id: "6",
    title: "Office Spaces",
    description:
      "Modern, plug-and-play offices at Udaipur's key commercial nodes from startup to corporate.",
    icon: "Briefcase",
    imageUrl:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    tag: "Workspace",
  },
  {
    id: "7",
    title: "Industrial Properties",
    description:
      "Manufacturing plots and industrial units in approved zones with highway connectivity.",
    icon: "Factory",
    imageUrl:
      "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?w=600&q=80",
    tag: "Manufacturing",
  },
];

export const PROPERTIES: Property[] = [
  {
    id: "1",
    title: "Prime Restaurant Space",
    type: "Restaurant & Cafe",
    category: "commercial",
    location: "Hiran Magri, Udaipur",
    area: "1,200 sq ft",
    price: "\u20b945,000",
    priceUnit: "/month",
    availability: "Available",
    availabilityStatus: "available",
    description:
      "Well-positioned ground floor commercial space in the heart of Hiran Magri. High footfall zone with excellent road visibility. Fully fitted with electrical load suitable for restaurant operations. Ample parking and easy access from main road. Ideal for quick service restaurants, cafes, or dining establishments looking to capture Udaipur's growing food market.",
    tags: ["Available", "Commercial Use", "High Footfall"],
    features: [
      "Corner Unit",
      "High Footfall",
      "Ground Floor",
      "Ample Parking",
      "3-Phase Power",
    ],
    images: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      "https://images.unsplash.com/photo-1560053608-13721e0e04c4?w=800&q=80",
    ],
  },
  {
    id: "2",
    title: "Franchise Ready Showroom",
    type: "Showroom / Retail",
    category: "franchise",
    location: "Madhuban, Udaipur",
    area: "2,500 sq ft",
    price: "\u20b980,000",
    priceUnit: "/month",
    availability: "Available",
    availabilityStatus: "available",
    description:
      "Premium ground floor showroom in Madhuban's main commercial corridor. Corner plot with triple-side visibility and double-height ceiling. Purpose-built for franchise expansion — structured layout, strong electrical infrastructure, and signage rights included. Suitable for retail chains, fashion brands, electronics, and national franchise operators.",
    tags: ["Prime Location", "Franchise Ready", "Corner Plot"],
    features: [
      "Triple-Side Visibility",
      "Double-Height Ceiling",
      "Signage Rights",
      "Corner Plot",
    ],
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&q=80",
    ],
  },
  {
    id: "3",
    title: "Commercial Warehouse",
    type: "Warehouse / Storage",
    category: "industrial",
    location: "Industrial Area, Udaipur",
    area: "8,000 sq ft",
    price: "\u20b91,20,000",
    priceUnit: "/month",
    availability: "Available",
    availabilityStatus: "available",
    description:
      "Large-format industrial warehouse in the dedicated industrial zone with easy NH-access. 30-foot clear height, reinforced flooring for heavy loads, and dedicated loading docks. Three-phase power supply with 100kW sanctioned load. Suitable for FMCG distribution, cold chain operations, manufacturing ancillaries, and e-commerce fulfillment.",
    tags: ["Available", "Industrial Zone", "Heavy Load"],
    features: [
      "30ft Clear Height",
      "Loading Docks",
      "100kW Power",
      "NH Access",
      "Heavy Flooring",
    ],
    images: [
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
      "https://images.unsplash.com/photo-1565793979728-ddb2b7c7e0e6?w=800&q=80",
    ],
  },
  {
    id: "4",
    title: "Boutique Hotel Property",
    type: "Hospitality",
    category: "commercial",
    location: "City Palace Road, Udaipur",
    area: "15 Rooms",
    price: "\u20b92,50,000",
    priceUnit: "/month",
    availability: "Limited",
    availabilityStatus: "limited",
    description:
      "Boutique hotel property on the prestigious City Palace Road, Udaipur's premium hospitality corridor. 15 furnished rooms with city and lake views, operational kitchen, and reception. Fully licensed with fire NOC and hospitality clearances in place. Ideal for boutique hotel chains, heritage operators, or hospitality investors.",
    tags: ["Prime Location", "Hospitality", "Licensed"],
    features: [
      "Lake Views",
      "15 Rooms",
      "Fire NOC",
      "Operational Kitchen",
      "City Palace Road",
    ],
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    ],
  },
  {
    id: "5",
    title: "Modern Office Space",
    type: "Office",
    category: "office",
    location: "Chetak Circle, Udaipur",
    area: "800 sq ft",
    price: "\u20b935,000",
    priceUnit: "/month",
    availability: "Available",
    availabilityStatus: "available",
    description:
      "Modern plug-and-play office space at Udaipur's premier commercial hub at Chetak Circle. Open floor plan with modular partition options, high-speed fiber connectivity, and dedicated parking. 24x7 security and power backup. Walking distance to banks, hotels, and transport hubs. Perfect for tech companies, consulting firms, and growing enterprises.",
    tags: ["Commercial Use", "Plug & Play", "Central Location"],
    features: [
      "Fiber Internet",
      "Power Backup",
      "Dedicated Parking",
      "24x7 Security",
      "Central Location",
    ],
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=80",
    ],
  },
  {
    id: "6",
    title: "Industrial Plot",
    type: "Industrial / Plot",
    category: "industrial",
    location: "Sukher, Udaipur",
    area: "5,000 sq ft",
    price: "\u20b995,000",
    priceUnit: "/month",
    availability: "Available",
    availabilityStatus: "available",
    description:
      "Flat industrial-use plot in Sukher's expanding industrial corridor, 8km from city center with direct highway connectivity. Clear title with RIICO approval. Suitable for manufacturing units, warehousing, fabrication yards, or build-to-suit construction. Three-phase power readily available.",
    tags: ["Available", "RIICO Approved", "Industrial Use"],
    features: [
      "RIICO Approved",
      "Clear Title",
      "Boundary Wall",
      "3-Phase Power",
      "Highway Access",
    ],
    images: [
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?w=800&q=80",
    ],
  },
  {
    id: "7",
    title: "Corner Retail Unit",
    type: "Retail Shop",
    category: "commercial",
    location: "Sector 14, Udaipur",
    area: "650 sq ft",
    price: "\u20b928,000",
    priceUnit: "/month",
    availability: "Available",
    availabilityStatus: "available",
    description:
      "Corner retail unit in Sector 14's busy commercial market. Ground floor with double-side road visibility and existing foot traffic. Ideal for clothing boutiques, electronics shops, pharmacies, or food kiosks. Clean handover with no tenant in place. Ready for immediate fitout and possession.",
    tags: ["Available", "Corner Unit", "Retail"],
    features: [
      "Corner Unit",
      "Double Visibility",
      "Ground Floor",
      "Ready Possession",
    ],
    images: [
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&q=80",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    ],
  },
  {
    id: "8",
    title: "Premium Office Floor",
    type: "Office",
    category: "office",
    location: "Bhupalpura, Udaipur",
    area: "3,200 sq ft",
    price: "\u20b91,10,000",
    priceUnit: "/month",
    availability: "Limited",
    availabilityStatus: "limited",
    description:
      "Full floor office space in a Grade-A commercial building in Bhupalpura. Well-connected neighborhood with premium building facilities — lobby, lift, generator backup, and visitor parking. Open floor plan suitable for 40-50 workstations. Ideal for corporate offices, BPOs, software companies, or large consulting teams.",
    tags: ["Prime Location", "Grade-A Building", "Full Floor"],
    features: [
      "Full Floor",
      "Grade-A Building",
      "40-50 Seats",
      "Generator Backup",
      "Visitor Parking",
    ],
    images: [
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote:
      "Grow Big helped us find our restaurant location in Hiran Magri within 3 weeks. The team understood our requirement for kitchen load and footfall precisely. No time wasted on irrelevant options.",
    name: "Rajesh Sharma",
    role: "Managing Director",
    company: "Spice Route Restaurants",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "We were expanding our franchise network in Rajasthan. Grow Big gave us three shortlisted options in Udaipur within days. The Madhuban location has exceeded our sales projections.",
    name: "Priya Agarwal",
    role: "Franchise Head",
    company: "FashionPlus Retail Chain",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "Excellent coordination and deep knowledge of the local commercial market. They handled the entire lease negotiation for our warehouse in the industrial area. Professional, fast, and trustworthy.",
    name: "Vikram Singh",
    role: "Operations Director",
    company: "BlueStar Distribution",
    rating: 5,
  },
  {
    id: "4",
    quote:
      "Found our office at Chetak Circle through Grow Big's network. The space was exactly what we needed — modern, central, and within budget. The process from inquiry to possession took under 4 weeks.",
    name: "Ankit Mehta",
    role: "Co-Founder",
    company: "Nexus Tech Consulting",
    rating: 5,
  },
  {
    id: "5",
    quote:
      "We've worked with Grow Big for two properties now. Their understanding of commercial lease structures in Udaipur is unmatched locally. They protect both parties and ensure clean documentation.",
    name: "Suresh Kothari",
    role: "CEO",
    company: "Kothari Hospitality Group",
    rating: 5,
  },
];

export const STATS: StatsItem[] = [
  {
    label: "Commercial Spaces",
    value: 200,
    suffix: "+",
    description: "Active listings across Udaipur",
  },
  {
    label: "Business Clients",
    value: 500,
    suffix: "+",
    description: "Happy businesses served",
  },
  {
    label: "Leasing Deals",
    value: 350,
    suffix: "+",
    description: "Successful transactions",
  },
  {
    label: "Expansion Opportunities",
    value: 150,
    suffix: "+",
    description: "Curated growth spaces",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Share Requirement",
    description:
      "Tell us your space requirement — type, location, size, and budget. A 2-minute WhatsApp message is all it takes.",
    icon: "MessageSquare",
    emoji: "\ud83d\udcac",
  },
  {
    step: 2,
    title: "Get Curated Options",
    description:
      "We filter our active inventory and present 3-5 matched options within 24 hours. No spam, no irrelevant listings.",
    icon: "ListChecks",
    emoji: "\ud83d\udccb",
  },
  {
    step: 3,
    title: "Visit Locations",
    description:
      "We coordinate site visits at your convenience. Our team accompanies you and answers all commercial questions.",
    icon: "MapPin",
    emoji: "\ud83d\udccd",
  },
  {
    step: 4,
    title: "Finalize Quickly",
    description:
      "Once you select, we manage negotiations, agreement drafting, and smooth possession. Most deals close in 1-2 weeks.",
    icon: "CheckCircle2",
    emoji: "\u2705",
  },
];

export const WHY_ITEMS: WhyItem[] = [
  {
    title: "Fast Coordination",
    description:
      "Most inquiries get matched options within 24 hours. No delays, no bureaucracy.",
    icon: "Zap",
    emoji: "\u26a1",
    accentColor: "#C7A66A",
  },
  {
    title: "Strong Local Network",
    description:
      "Deep relationships with property owners across all of Udaipur's commercial zones.",
    icon: "Network",
    emoji: "\ud83e\udd1d",
    accentColor: "#C7A66A",
  },
  {
    title: "Commercial Expertise",
    description:
      "We specialise exclusively in commercial leasing. No residential dilution, no divided focus.",
    icon: "Building2",
    emoji: "\ud83c\udfe2",
    accentColor: "#C7A66A",
  },
  {
    title: "Verified Opportunities",
    description:
      "Every property is site-verified with clear legal title and confirmed availability before listing.",
    icon: "ShieldCheck",
    emoji: "\u2714",
    accentColor: "#C7A66A",
  },
  {
    title: "Business Growth Focus",
    description:
      "We think about your business first — matching spaces that support your operations and expansion.",
    icon: "TrendingUp",
    emoji: "\ud83d\udcc8",
    accentColor: "#C7A66A",
  },
];

export const TRUST_PILLS = [
  "4.9\u2605 Rating",
  "500+ Happy Clients",
  "Fast Response",
  "Verified Listings",
];
