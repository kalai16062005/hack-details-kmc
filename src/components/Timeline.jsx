import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserCheck,
  Mic,
  Lightbulb,
  Code,
  Utensils,
  Cpu,
  Upload,
  Gavel,
  Trophy,
  ChevronRight,
  Star
} from "lucide-react";

export default function HackathonTimeline() {
  const [active, setActive] = useState(0);

  const timeline = [
    { title: "Registration", desc: "Teams arrival, badge collection, and kit distribution at the main lobby.", icon: UserCheck },
    { title: "Inauguration", desc: "Keynote speeches from industry leaders and official lighting of the lamp.", icon: Mic },
    { title: "Release", desc: "Unveiling the problem statements and selection of technical tracks.", icon: Lightbulb },
    { title: "Hacking Begins", desc: "Clock starts. Teams move to their designated bays to begin development.", icon: Code },
    { title: "Lunch Break", desc: "Gourmet lunch served in the networking lounge. Mentors available for chat.", icon: Utensils },
    { title: "Development", desc: "Deep-work session. First round of internal technical mentorship begins.", icon: Cpu },
    { title: "Submission", desc: "Git repositories freeze. Documentation and final builds uploaded to portal.", icon: Upload },
    { title: "Evaluation", desc: "Jury presentation. Live demo of prototypes and technical assessment.", icon: Gavel },
    { title: "Awards", desc: "Grand finale, results announcement, and networking dinner.", icon: Trophy }
  ];

  const activeItem = timeline[active];
  const ActiveIcon = activeItem.icon;
  const splitText = (text) => text.split("");

  return (
    <section id="timeline" className="py-32 bg-white text-slate-900 relative overflow-hidden font-sans border-b-0">

      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#004aad 1.5px, transparent 1.5px), linear-gradient(90deg, #004aad 1.5px, transparent 1.5px)`,
          backgroundSize: "40px 40px"
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6">
          <div className="text-left">

            {/* ⭐ Badge */}
            <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
              <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                <Star size={14} className="text-[#004aad] fill-[#004aad]" />
              </motion.div>
              <h2 className="text-slate-900 uppercase tracking-[0.2em] font-bold text-[11px]">
                Execution plan
              </h2>
            </div>

            {/* Selective Gradient Title */}
            <div className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none flex flex-wrap items-baseline gap-x-4">
              
              {/* EVENT (Black) */}
              <div className="flex">
                {splitText("EVENT").map((letter, i) => (
                  <motion.span
                    key={`event-${i}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    className="inline-block text-slate-900"
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>

              {/* SCHEDULE (Radial Blue Gradient) */}
              <div className="flex">
                {splitText("SCHEDULE").map((letter, i) => (
                  <motion.span
                    key={`schedule-${i}`}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.04 }}
                    className="inline-block bg-[radial-gradient(circle,_#2563eb_0%,_#1e3a8a_40%,_#0b1f5e_100%)] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(37,99,235,0.3)]"
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Underline */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              transition={{ duration: 1 }}
              className="h-2 bg-gradient-to-r from-[#004aad] via-[#1e40af] to-[#3b82f6] mt-6 rounded-full shadow-lg shadow-blue-200/50"
            />
          </div>

          <div className="hidden md:block text-right text-slate-400 font-bold uppercase tracking-widest text-xs">
            <span className="text-[#004aad] font-black">Live Track</span>
          </div>
        </div>

        {/* TIMELINE INTERACTION */}
        <div className="relative flex items-center justify-between before:absolute before:h-[2px] before:w-full before:bg-slate-100 before:top-1/2 before:-translate-y-1/2 before:z-0 px-4 mb-20">
          {timeline.map((item, index) => {
            const Icon = item.icon;
            const isActive = active === index;
            const isTopFill = index % 2 === 0;

            return (
              <div key={index} className="relative z-10">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onMouseEnter={() => setActive(index)}
                  className="group flex flex-col items-center gap-3 focus:outline-none"
                >
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center border-2 border-slate-100 bg-white shadow-xl transition-all duration-500 overflow-hidden relative ${isActive ? "border-[#004aad] shadow-blue-100 scale-110" : "hover:border-slate-200"}`}>
                    <motion.div
                      initial={{ y: isTopFill ? "-100%" : "100%" }}
                      animate={{ y: isActive ? "0%" : (isTopFill ? "-100%" : "100%") }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="absolute inset-0 z-0 bg-gradient-to-r from-[#004aad] via-[#1e40af] to-[#3b82f6]"
                    />
                    <Icon className={`w-5 h-5 md:w-6 md:h-6 relative z-10 transition-colors duration-500 ${isActive ? "text-white drop-shadow-lg" : "text-slate-300 group-hover:text-[#004aad]"}`} />
                  </div>
                </motion.button>
              </div>
            );
          })}
        </div>

        {/* DETAIL CARD */}
        <div className="grid lg:grid-cols-12 rounded-[3rem] overflow-hidden border border-slate-100 bg-white shadow-2xl shadow-blue-900/5">
          <div className="lg:col-span-5 bg-gradient-to-br from-[#004aad] via-[#1e40af] to-[#3b82f6] relative p-12 text-white">
            <div className="absolute inset-0 opacity-10">
              <ActiveIcon className="w-full h-full scale-150 rotate-12" />
            </div>
            <div className="relative z-10">
              <motion.h3
                key={active}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-4xl font-black uppercase tracking-tighter leading-[0.8]"
              >
                {activeItem.title}
              </motion.h3>
            </div>
            <div className="relative z-10 flex gap-1.5 mt-12">
              {timeline.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-500 ${i === active ? "w-10 bg-white shadow-lg" : "w-2 bg-white/30"}`}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-slate-600 text-xl mb-12 leading-relaxed font-medium">
                  "{activeItem.desc}"
                </p>
                <div className="flex items-center justify-between gap-6">
                  <div className="h-[1px] flex-1 bg-slate-50" />
                  <button
                    onClick={() => setActive((prev) => (prev + 1) % timeline.length)}
                    className="group flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-[#004aad] hover:text-[#1e40af] transition-all duration-300"
                  >
                    Explore Next
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Footer Rules */}
        <div className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-4 opacity-30">
          {["Formal Attire", "Strict Timings", "Identity Card Mandatory", "Wifi Available"].map((rule, idx) => (
            <span key={idx} className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
              • {rule}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}