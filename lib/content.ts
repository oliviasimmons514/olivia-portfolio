export type PortfolioItem = {
  title: string;
  category: string;
  description: string;
  goal: string;
  stats: string;
  accent: string;
  videoLabel: string;
  mediaSrc: string;
};

export const navigationItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" }
];

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Social Content",
    category: "Social Media",
    description:
      "Short-form videos built to feel native, polished, and easy to watch.",
    goal: "Engagement and stronger brand presence.",
    stats: "Hooks • Pacing • Editing",
    accent: "from-[#f5d8ca] via-[#f7efe8] to-white",
    videoLabel: "Brand reel",
    mediaSrc: "/videos/wedding-content.mp4"
  },
  {
    title: "Wedding Content",
    category: "Weddings",
    description:
      "Modern wedding coverage that captures the emotion, movement, and feel of the day.",
    goal: "Storytelling couples want to rewatch and share.",
    stats: "Emotion • Energy • Detail",
    accent: "from-[#ede0d5] via-[#f6f3ee] to-white",
    videoLabel: "Wedding reel",
    mediaSrc: "/videos/church-content.mp4"
  },
  {
    title: "Church Content",
    category: "Church",
    description:
      "Content for church life, events, and young adults that feels warm, current, and real.",
    goal: "Share culture and help people connect.",
    stats: "Events • Recaps • Young Adults",
    accent: "from-[#ddd7cb] via-[#f4f2ed] to-white",
    videoLabel: "Church recap",
    mediaSrc: "/videos/social-content.mp4"
  },
  {
    title: "Ad Content",
    category: "Ads",
    description:
      "Clean ad creative made to stop the scroll and communicate clearly.",
    goal: "Promotion, reach, and brand growth.",
    stats: "Offers • Product • Promotion",
    accent: "from-[#f1c8ba] via-[#f7efe8] to-white",
    videoLabel: "Ad spot",
    mediaSrc: "/videos/ad-content.mov"
  }
];

export const services = [
  {
    title: "Content Creation",
    description:
      "Filming and editing premium short-form videos for brands, ministries, and couples that need content with taste and momentum."
  },
  {
    title: "Social Media Strategy",
    description:
      "Creative direction shaped around trends, audience behavior, and platform style."
  },
  {
    title: "Ad Creation",
    description:
      "Ad assets that look polished and communicate clearly."
  },
  {
    title: "Event & Wedding Coverage",
    description:
      "Fast, polished coverage for weddings, church events, and live moments."
  }
];

export const results = [
  {
    value: "High-retention",
    label: "Content built to stop the scroll and keep attention."
  },
  {
    value: "Brand growth",
    label: "Creative that feels aligned, current, and worth following."
  },
  {
    value: "Story-first",
    label: "Visuals with emotion, clarity, and a real point of view."
  },
  {
    value: "Metric-ready",
    label: "Placeholders for views, reach, saves, bookings, and clicks."
  }
];

export const experience = [
  {
    title: "Freelance Content Creator",
    detail:
      "Creating video content for businesses, social campaigns, and client-facing brand moments with a polished editorial feel."
  },
  {
    title: "Freedom Life Church",
    detail:
      "Worked on the main account and helped lead the creative team for the church's young adults presence, shaping event and culture-driven storytelling."
  },
  {
    title: "Wedding Content Creation",
    detail:
      "Captured wedding days with a modern, emotional style for couples looking for social-ready highlights and memorable coverage."
  },
  {
    title: "Oola Bowls Intercourse",
    detail:
      "Produced branded content with a fresh social look tailored for audience attention, visual appeal, and local brand growth."
  }
];

export const skills = [
  "iPhone Videography",
  "Video Editing",
  "Storytelling",
  "Social Media Trends",
  "Creative Direction",
  "Short-Form Strategy"
];

export const tools = ["CapCut", "Adobe Premiere Pro", "Lightroom", "Canva", "Instagram", "TikTok"];
