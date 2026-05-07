import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Calendar,
  Users,
  Trophy,
  MapPin,
  CalendarDays
} from "lucide-react";

import trophy from "../assets/trophy1.png";

const localHackathonData = {
  title: "TECH CHALLENGE 2025",
  tagline: "Build Real-World Solutions through Innovation and Teamwork",
  eventDate: "2025-09-26T09:00:00",
  location: "KCET Campus",
  stats: { submissions: "457", days: "10", teams: "19", winners: "3" }
};

const CountUp = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const finalValue = parseInt(String(end).replace(/,/g, ""));
    const increment = finalValue / (duration * 60);

    const timer = setInterval(() => {
      start += increment;
      if (start >= finalValue) {
        setCount(finalValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
};

export default function Home() {
  const { stats, tagline, location } = localHackathonData;

  const letterAnimation = {
    initial: { y: 80, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }),
  };

  return (
    <section id="home" className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col items-center justify-center relative overflow-hidden font-sans">
      
     

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        {/* TROPHY */}
        <motion.div
          animate={{ y: [0, -12, 0], rotateY: [0, 360] }}
          transition={{
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotateY: { duration: 15, repeat: Infinity, ease: "linear" },
          }}
          className="mb-8 relative"
        >
          <img
            src={trophy}
            alt="Hackathon Trophy"
            className="w-[180px] md:w-[240px] mx-auto drop-shadow-[0_20px_50px_rgba(37,99,235,0.2)]"
          />
        </motion.div>

        {/* Branding */}
        <div className="inline-flex items-center gap-2 bg-white border border-blue-50 px-5 py-2 rounded-full mb-8 shadow-sm">
          <p className="text-[11px] tracking-[0.2em] text-slate-500 uppercase font-semibold">
            In Collaboration With{" "}
            <span className="text-blue-600 font-bold ml-1">TARCIN</span>
          </p>
        </div>

        {/* --- ANIMATED HEADING START --- */}
        <div className="flex flex-col items-center leading-none">

          {/* TECH */}
          <div className="flex overflow-hidden pb-1">
            {"Tech".split("").map((char, i) => (
              <motion.span
                key={`tech-${i}`}
                custom={i}
                variants={letterAnimation}
                initial="initial"
                animate="animate"
                className="text-6xl md:text-9xl font-extrabold tracking-tighter text-slate-900 uppercase inline-block"
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* CHALLENGE 2K25 → RADIAL DARK BLUE */}
          <div className="flex flex-wrap justify-center overflow-hidden">
            {"Challenge 2K25".split("").map((char, i) => (
              <motion.span
                key={`chall-${i}`}
                custom={i + 4}
                variants={letterAnimation}
                initial="initial"
                animate="animate"
                className={`text-5xl md:text-8xl font-black tracking-tight uppercase inline-block ${
                  char === " "
                    ? "w-4 md:w-8"
                    : "bg-[radial-gradient(circle,_#2563eb_0%,_#1e3a8a_40%,_#0b1f5e_100%)] bg-clip-text text-transparent"
                }`}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </div>
        {/* --- ANIMATED HEADING END --- */}

        <p className="mt-8 text-slate-500 font-medium tracking-wide text-sm md:text-base max-w-xl mx-auto px-4 leading-relaxed">
          {tagline}
        </p>

        {/* Info Bar */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-slate-600 text-[12px] font-semibold tracking-wider bg-white py-4 px-10 rounded-2xl border border-slate-200 shadow-md">
          <span className="flex items-center gap-2 uppercase">
            <CalendarDays size={16} className="text-blue-500" /> 26 SEP 2025
          </span>
          <div className="hidden md:block w-px h-4 bg-slate-200" />
          <span className="flex items-center gap-2 text-slate-800 uppercase">
            <MapPin size={16} className="text-blue-500" /> {location}
          </span>
        </div>
      </motion.div>

      {/* --- STAT CARDS --- */}
      <div className="absolute inset-0 pointer-events-none">
        <StatCard position="left-[6%] top-[25%]" delay={0.2} icon={<Zap size={28} className="text-blue-500" />} label="Total Submissions" value={stats.submissions} isCount />
        <StatCard position="left-[6%] bottom-[12%]" delay={0.4} icon={<Calendar size={28} className="text-blue-500" />} label="Days Hackathon" value={stats.days} />
        <StatCard position="right-[6%] top-[25%]" delay={0.6} icon={<Users size={28} className="text-blue-500" />} label="Teams Joined" value={stats.teams} isCount />
        <StatCard position="right-[6%] bottom-[12%]" delay={0.8} icon={<Trophy size={28} className="text-blue-500" />} label="Final Winners" value={stats.winners} />
      </div>
    </section>
  );
}

function StatCard({ position, delay, icon, label, value, isCount = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      whileHover={{ y: -15 }}
      className={`hidden xl:flex flex-col items-center justify-center absolute ${position} 
      p-[2px] rounded-[2.5rem] w-60 h-44 cursor-default group overflow-visible z-20 pointer-events-auto`}
    >
      <div className="absolute inset-0 rounded-[2.5rem] bg-blue-400 opacity-0 group-hover:opacity-30 blur-[30px] transition-all duration-700 -z-10" />
      <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
        <motion.div
          className="absolute inset-[-150%] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 50%, #0b1f5e 75%, #1e3a8a 90%, transparent 100%)",
            filter: "blur(4px)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <div className="relative bg-white rounded-[2.4rem] p-6 w-[calc(100%-4px)] h-[calc(100%-4px)] flex flex-col items-center justify-center text-center shadow-sm z-10">
        <div className="relative z-20">
          <div className="mb-3 flex justify-center text-blue-500 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <h3 className="text-4xl font-black italic tracking-tighter text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
            {isCount ? <CountUp end={value} /> : value}
          </h3>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mt-2">
            {label}
          </p>
        </div>
      </div>
    </motion.div>
  );
}