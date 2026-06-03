"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    icon: "📱",
    title: "Mobile Apps",
    desc: "iOS & Android apps built with Flutter. Fast, beautiful, and ready for the App Store.",
  },
  {
    icon: "🔥",
    title: "Firebase & Backend",
    desc: "Real-time databases, auth, push notifications, and cloud functions — fully integrated.",
  },
  {
    icon: "🤖",
    title: "AI Integration",
    desc: "Add AI-powered features to your app — insights, recommendations, chat, and more.",
  },
  {
    icon: "🌐",
    title: "Web Apps",
    desc: "React and Next.js web applications. Clean, fast, and optimized for SEO.",
  },
  {
    icon: "⚡",
    title: "FlutterFlow",
    desc: "Rapid app development using FlutterFlow for faster delivery without sacrificing quality.",
  },
  {
    icon: "🛡️",
    title: "Admin Dashboards",
    desc: "Custom admin panels to manage your users, content, and data with ease.",
  },
];

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="services" className="py-32 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Our Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, borderColor: "rgba(255,107,53,0.4)" }}
              className="bg-brand-card border border-white/5 rounded-2xl p-7 cursor-default transition-colors duration-300"
            >
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
