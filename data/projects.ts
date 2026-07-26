export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  date: string;
  duration: string;
  price: string;
  platform: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AutoVids",
    subtitle: "Script in, finished documentary out.",
    description:
      "Paste a script or upload a voiceover, and AutoVids assembles a fully narrated video — complete with archival footage, pacing, and sound — no editing timeline required.",
    tags: ["Python", "ElevenLabs", "OpenAI TTS", "ffmpeg", "Next.js"],
    image: "/projects/autovids_banner.png",
    date: "April 2026",
    duration: "1–3 Months",
    price: "$1500–$2500",
    platform: "Desktop",
    liveUrl: "https://render.umrabdulllah.com/",
  },
  {
    id: 2,
    title: "Channel Sync",
    subtitle: "Every channel. One pulse.",
    description:
      "Pulls every YouTube channel you run — across any Google account — into one dashboard. Daily snapshots, cross-channel charts, and plain-English AI insights about what's actually working.",
    tags: ["Next.js", "Tailwind", "Youtube Data Api"],
    image: "/projects/channelsync_banner.png",
    date: "june 2026",
    duration: "7-30 Days",
    price: "$500–$1000",
    platform: "Desktop & Web",
    liveUrl: "https://channelsync.io/",
  },
  {
    id: 3,
    title: "Ascend Together",
    subtitle: "Gym Tracking App",
    description:
      "A powerful gym tracking app that helps users stay consistent and reach fitness goals. Log workouts, monitor progress, connect with friends, and import/export routines across devices.",
    tags: ["Flutter", "Firebase", "iOS", "Android"],
    image: "/projects/ascend.jpg",
    date: "Feb 2025",
    duration: "1–3 Months",
    price: "$1000–$2500",
    platform: "iOS & Android",
    liveUrl: "https://apps.apple.com/pk/app/ascend-together-gym-tracking/id6615076231",
  },
  {
    id: 4,
    title: "WebTools",
    subtitle: "All the tools. One place.",
    description:
      "A single dashboard for the whole creator toolkit — AI image generation, thumbnail pipelines, YouTube analytics, and channel tracking, all behind one login.",
    tags: ["Next.js", "Tailwind", "Youtube Data Api", "GPT Image 2", "Flux"],
    image: "/projects/webtools_banner.png",
    date: "May 2026",
    duration: "1-3 Months",
    price: "$1500–$2500",
    platform: "Desktop & Web",
    liveUrl: "https://webtools-beta.vercel.app/",
  },
  {
    id: 5,
    title: "Island Crush SXM",
    subtitle: "Location-Based Dating App",
    description:
      "A dating app built exclusively for the island of Saint Martin. Browse profiles worldwide, but liking, matching, and chatting unlock only when you're physically on the island — GPS verified.",
    tags: ["FlutterFlow", "Firebase", "GPS", "Real-time Chat"],
    image: "/projects/islandcrush.jpg",
    date: "March 2026",
    duration: "7–30 Days",
    price: "$800–$1000",
    platform: "iOS & Android",
  },
  {
    id: 6,
    title: "Personal Finance & Digital Banking App",
    subtitle: "Smart banking, better living",
    description:
      "A simple and secure way to manage your finances, track expenses, monitor account balances, and analyze spending habits.",
    tags: ["FlutterFlow", "Firebase", "Flutter"],
    image: "/projects/finaceApp.png",
    date: "March 2026",
    duration: "1–3 Months",
    price: "$800–$1000",
    platform: "iOS & Android",
  },
  {
    id: 7,
    title: "Money Watch",
    subtitle: "Watch & Earn Mobile App",
    description:
      "The app allows users to watch videos, earn rewards, and withdraw their earnings securely through multiple payment methods such as PayPal and bank transfer.",
    tags: ["Firebase", "Flutter"],
    image: "/projects/earnmoney.png",
    date: "March 2026",
    duration: "7-30 Days",
    price: "$600–$800",
    platform: "iOS & Android",
  },
  {
    id: 8,
    title: "LITTLE JOY CLUB",
    subtitle: "Self-Love & Mental Wellness Mobile App",
    description:
      "The app helps users build healthy habits through guided affirmations, journaling, mindfulness exercises, mood tracking, and daily self-love activities.",
    tags: ["Firebase", "Flutter", "Dart"],
    image: "/projects/littlejoyclub.png",
    date: "March 2026",
    duration: "7-30 Days",
    price: "$600–$800",
    platform: "iOS & Android",
  },
];

// ✅ To add a new project in future:
// Just copy one object above, change the values,
// add your image to /public/projects/, done.
