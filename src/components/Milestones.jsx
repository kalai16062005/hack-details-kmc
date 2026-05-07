import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Code2, CheckCircle2, Zap, Rocket, Star } from "lucide-react";

const milestones = [
  { number: 19, suffix: "", title: "Active Teams", icon: <Users size={28} /> },
  { number: 457, suffix: "", title: "Total Submissions", icon: <CheckCircle2 size={28} /> },
  { number: 14073, suffix: "", title: "Cumulative Points", icon: <Zap size={28} /> },
  { number: 37, suffix: "", title: "Highest Project Score", icon: <Code2 size={28} /> },
  { number: 3, suffix: "", title: "Elite Podium Teams", icon: <Rocket size={28} /> },
];

function useCountUp(target, inView) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 20);
    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);
    return () => clearInterval(counter);
  }, [target, inView]);
  return count;
}

export default function Milestones() {
  return (
    <section className="relative bg-white text-slate-900 py-24 overflow-hidden border-b border-slate-100 font-sans">
      
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ 
          backgroundImage: `linear-gradient(#004aad 1px, transparent 1px), linear-gradient(90deg, #004aad 1px, transparent 1px)`, 
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER SECTION */}
        <div className="mb-20 text-left">
          
          <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
            <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
              <Star size={14} className="text-[#004aad] fill-[#004aad]" />
            </motion.div>
            <h2 className="text-slate-900 uppercase tracking-[0.2em] font-bold text-[11px]">
              Impact Tracker
            </h2>
          </div>
          
          <div className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none flex flex-wrap items-baseline gap-x-4">
            {/* HACKATHON (Black) */}
            <div className="flex">
              {["H", "A", "C", "K", "A", "T", "H", "O", "N"].map((letter, i) => (
                <motion.span
                  key={`hack-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="inline-block text-slate-900"
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* MILESTONES (Radial Blue Gradient Applied Here) */}
            <div className="flex">
              {["M", "I", "L", "E", "S", "T", "O", "N", "E", "S"].map((letter, i) => (
                <motion.span
                  key={`mile-${i}`}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.04 }}
                  className="inline-block bg-[radial-gradient(circle,_#2563eb_0%,_#1e3a8a_40%,_#0b1f5e_100%)] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(37,99,235,0.3)]"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "130px" }}
            transition={{ duration: 0.8 }}
            className="h-[6px] bg-[#004aad] mt-8 rounded-full" 
          />
        </div>

        {/* Milestone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {milestones.map((item, index) => {
            const ref = React.useRef(null);
            const inView = useInView(ref, { once: true, margin: "-50px" });
            const count = useCountUp(item.number, inView);

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -15 }}
                className="group relative h-full p-[2px] rounded-[40px] overflow-visible"
              >
                <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-[#0070f3] via-[#ffffff] to-[#004aad] opacity-0 group-hover:opacity-100 blur-[15px] transition-all duration-700 -z-10" />
                <div className="absolute inset-0 rounded-[40px] bg-gradient-to-tr from-[#004aad] via-[#00c6ff] to-white opacity-10 group-hover:opacity-100 transition-all duration-500" />

                <div className="relative bg-white/95 backdrop-blur-sm rounded-[38px] p-8 text-center h-full flex flex-col items-center border border-white/50 shadow-sm overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(0,112,243,0.2)]">
                  <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#004aad]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="flex justify-center mb-6 relative">
                    <div className="absolute inset-0 rounded-full bg-[#004aad]/10 group-hover:scale-150 group-hover:opacity-0 transition-all duration-700" />
                    <div className="relative z-10 text-[#004aad] transform group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                  </div>

                  <h3 className="text-4xl font-black italic tracking-tighter mb-2 bg-gradient-to-b from-slate-900 to-slate-500 bg-clip-text text-transparent group-hover:from-[#004aad] group-hover:to-[#0070f3] transition-all duration-300">
                    {count.toLocaleString()}{item.suffix}
                  </h3>

                  <p className="text-[10px] font-black uppercase tracking-widest leading-relaxed text-slate-400 group-hover:text-slate-700 transition-colors duration-300 mt-auto">
                    {item.title}
                  </p>

                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#004aad]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}