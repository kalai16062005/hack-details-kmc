import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaUsers, FaGift, FaChartBar } from "react-icons/fa";
import { FiCode } from "react-icons/fi";
import { Star } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-white text-slate-900 py-24 sm:py-32 overflow-hidden font-sans border-b-0"
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#004aad 1px, transparent 1px), linear-gradient(90deg, #004aad 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Main Container Wrapper */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
          <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <Star size={14} className="text-[#004aad] fill-[#004aad]" />
          </motion.div>
          <h2 className="text-slate-900 uppercase tracking-[0.2em] font-bold text-[11px]">
            About The Event
          </h2>
        </div>

        {/* MAIN HEADING */}
        <div className="text-5xl md:text-6xl font-black tracking-tighter uppercase mb-12 text-slate-900 leading-tight">
          <div className="flex flex-wrap justify-start items-baseline gap-x-3">
            <div className="flex">
              {["W", "h", "a", "t", "\u00A0", "i", "s"].map((letter, i) => (
                <motion.span
                  key={`what-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            <div className="flex flex-wrap">
              {["T", "e", "c", "h", "\u00A0", "C", "h", "a", "l", "l", "e", "n", "g", "e", "\u00A0", "2", "k", "2", "5", "?"].map((letter, i) => (
                <motion.span
                  key={`tech-${i}`}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.04 }}
                  className={`inline-block ${
                    letter === "\u00A0" 
                      ? "w-2 md:w-4" 
                      : "bg-[radial-gradient(circle,_#2563eb_0%,_#1e3a8a_40%,_#0b1f5e_100%)] bg-clip-text text-transparent"
                  }`}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            className="h-2 bg-gradient-to-r from-[#1e3a8a] to-[#004aad] mt-4 rounded-full shadow-lg shadow-blue-200/50"
          />
        </div>

        {/* VISION SECTION - UPDATED CONTENT */}
        <div className="relative group mb-12">
          <div className="absolute -inset-4 bg-sky-500 rounded-[2.5rem] blur-[50px] opacity-0 group-hover:opacity-40 transition-all duration-700 -z-10"></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="relative bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-[2.5rem] p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-500 z-10"
          >
            <h3 className="flex items-center gap-3 text-2xl font-black text-slate-800 uppercase tracking-tight mb-6">
              <motion.div 
                className="p-2 rounded-xl bg-white border-2 border-blue-200 shadow-lg group-hover:bg-gradient-to-r group-hover:from-[#004aad] group-hover:to-[#1e40af] transition-all duration-500"
                whileHover={{ scale: 1.2, rotate: 180 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <FaBullseye className="text-[#004aad] group-hover:text-white text-lg drop-shadow-lg" />
              </motion.div>
              Vision & Mission
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg max-w-4xl">
              Organized by the <span className="font-bold text-slate-800">Department of CSE, Kamaraj College of Engineering & Technology</span> in association with <span className="font-bold text-[#004aad]">Tarcin & ISTE</span>, Tech Challenge 2k25 aims to foster "Crack the Logics" mindset. Our vision is to map technical innovation with <span className="font-bold">SDG 4 (Quality Education)</span> and <span className="font-bold">SDG 9 (Industry & Innovation)</span>.
            </p>
          </motion.div>
        </div>

        {/* FEATURE CARDS - UPDATED CONTENT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<FiCode />} 
            title="Technical Excellence" 
            desc="Deep dive into 'Crack the Logics' to solve complex algorithmic challenges and real-world industrial problems using CSE core concepts." 
          />
          <FeatureCard 
            icon={<FaUsers />} 
            title="Team Spirit" 
            desc="Collaborate in teams of 2-3 members, bringing together diverse perspectives to build sustainable solutions under SDG guidelines." 
          />
          <FeatureCard 
            icon={<FaGift />} 
            title="Grand Awards" 
            desc="Win exciting prizes, medals, and certificates. Top performers earn prestigious Free Internships at AICTE in association with TARCIN Robotics." 
          />
        </div>

        {/* IMPACT - UPDATED CONTENT */}
        <div className="relative group mt-16">
          <div className="absolute -inset-4 bg-blue-500 rounded-[2.5rem] blur-[50px] opacity-0 group-hover:opacity-35 transition-all duration-700 -z-10"></div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[2.5rem] p-10 border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 text-center z-10"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1e3a8a] to-[#1d4ed8] text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-lg">
              Empowering Innovation
            </div>
            <h3 className="flex justify-center items-center gap-2 text-xl font-black text-slate-800 uppercase tracking-tight mb-4">
              <motion.div 
                className="p-2 rounded-xl border-2 border-blue-200 bg-white shadow-lg hover:border-transparent hover:bg-gradient-to-r hover:from-[#004aad] hover:to-[#1d4ed8] transition-all duration-500"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <FaChartBar className="text-[#004aad] hover:text-white transition-all duration-300 drop-shadow-lg" />
              </motion.div>
              Impact at Tech Challenge
            </h3>
            <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
              This hackathon bridges the gap between academia and industry, providing a platform for students to gain professional recognition and direct exposure to AICTE-standard technical internships.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="relative group">
      <div className="absolute -inset-4 bg-sky-400 rounded-[2rem] blur-[40px] opacity-0 group-hover:opacity-40 transition-all duration-700 -z-10"></div>
      <motion.div
        whileHover={{ y: -12, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative h-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-[2rem] p-8 shadow-sm hover:shadow-2xl transition-all duration-500 z-10"
      >
        <motion.div 
          className="w-14 h-14 flex items-center justify-center rounded-2xl border-2 border-blue-200 bg-white shadow-lg group-hover:border-transparent group-hover:bg-gradient-to-r group-hover:from-[#004aad] group-hover:to-[#1e40af] transition-all duration-500 hover:shadow-xl"
          whileHover={{ scale: 1.3, rotate: 360 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <div className="text-[#004aad] group-hover:text-white text-2xl transition-all duration-500 drop-shadow-2xl">
            {React.cloneElement(icon, { className: "drop-shadow-xl" })}
          </div>
        </motion.div>
        <h3 className="text-xl font-black text-slate-800 uppercase tracking-tight mb-3 mt-4">
          {title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          {desc}
        </p>
      </motion.div>
    </div>
  );
}