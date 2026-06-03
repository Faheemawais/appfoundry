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
    title: "Pattern Lab",
    subtitle: "AI Self-Awareness App",
    description:
      "A self-awareness and dating-pattern tracker. Users log interactions, track emotional and behavioral patterns, and unlock AI-generated insights with practical suggestions to move forward with clarity.",
    tags: ["Flutter", "Firebase", "AI", "Data Insights"],
    image: "/projects/patternlab.jpg",
    date: "2026",
    duration: "1–2 Months",
    price: "Custom Quote",
    platform: "iOS & Android",
  },
];

// ✅ To add a new project in future:
// Just copy one object above, change the values,
// add your image to /public/projects/, done.
