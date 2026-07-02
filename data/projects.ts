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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
