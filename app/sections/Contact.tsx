"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/xwvjeanb", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) { setStatus("sent"); form.reset(); }
      else setStatus("error");
    } catch { setStatus("error"); }
  }

  return (
    <section id="contact" className="py-32 bg-brand-dark relative overflow-hidden">

      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-orange/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-2xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Start Your Project
          </h2>
          <p className="text-white/40">
            Tell us what you want to build and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-brand-card border border-white/5 rounded-2xl p-8 flex flex-col gap-4"
        >
          <input
            name="name" required placeholder="Your name"
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-orange transition-colors"
          />
          <input
            name="email" type="email" required placeholder="Your email"
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-orange transition-colors"
          />
          <textarea
            name="message" required rows={4} placeholder="Tell us about your project..."
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand-orange transition-colors resize-none"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-brand-orange hover:bg-orange-500 disabled:opacity-50 text-white font-semibold py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,107,53,0.3)]"
          >
            {status === "sending" ? "Sending..." : "Send Message →"}
          </button>
          {status === "sent"  && <p className="text-green-400 text-sm text-center">✓ Message sent! We'll reply soon.</p>}
          {status === "error" && <p className="text-red-400 text-sm text-center">Something went wrong. Try again.</p>}
        </motion.form>

        {/* Footer */}
        <p className="text-center text-white/20 text-sm mt-10">
          © {new Date().getFullYear()} App Foundry · Built with ❤️
        </p>
      </div>
    </section>
  );
}
