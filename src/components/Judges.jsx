import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

// 1. IMAGES IMPORT
import judge1Img from "../assets/hod3.png";
import judge2Img from "../assets/j2.png";
import judge3Img from "../assets/illam_khan3.png";

export default function Judges() {
  const judges = [
    {
      name: "Dr. A. Meenakshi, M.E., Ph.D.,",
      role: "Professor & Head",
      company: "KCET",
      expertise: "Big Data analytics, Machine learning, Data warehousing and Data mining",
      image: judge1Img 
    },
    {
      name: "Mr. Mohamed Arsath",
      role: "Director of Operation",
      company: "Tarcin",
      expertise: "Full Stack, Business Management, Project Handling",
      image: judge2Img
    },
    {
      name: "Mr. Mohammed Ilham Khan",
      role: "Chief Architect",
      company: "Tarcin",
      expertise: "Data Science, Networking, DevOps",
      image: judge3Img
    }
  ];

  return (
   <section id="judges" className="py-32 bg-white text-slate-900 relative overflow-hidden border-b-0 font-sans">
      
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
        <div className="mb-24 text-left">
          
          <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
            <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
              <Star size={14} className="text-[#004aad] fill-[#004aad]" />
            </motion.div>
            <h2 className="text-slate-900 uppercase tracking-[0.2em] font-bold text-[11px]">
              Evaluation Panel
            </h2>
          </div>
          
          <div className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none flex flex-wrap items-baseline gap-x-4">
            {/* DISTINGUISHED (Black) */}
            <div className="flex">
              {["D", "I", "S", "T", "I", "N", "G", "U", "I", "S", "H", "E", "D"].map((letter, i) => (
                <motion.span
                  key={`dist-${i}`}
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

            {/* JUDGES (Radial Blue Gradient Applied Here) */}
            <div className="flex">
              {["J", "U", "D", "G", "E", "S"].map((letter, i) => (
                <motion.span
                  key={`judge-${i}`}
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
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "130px" }}
            transition={{ duration: 0.8 }}
            className="h-[6px] bg-[#004aad] mt-8 rounded-full" 
          />
        </div>

        {/* JUDGES GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {judges.map((judge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -15 }}
              className="group relative p-[2px] rounded-[40px] overflow-visible"
            >
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-[#0070f3] via-[#ffffff] to-[#004aad] opacity-0 group-hover:opacity-100 blur-[20px] transition-all duration-700 -z-10" />
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-tr from-[#004aad] via-[#00c6ff] to-white opacity-20 group-hover:opacity-100 transition-all duration-500 shadow-sm" />

              <div className="relative bg-white p-10 rounded-[38px] flex flex-col items-center text-center overflow-hidden h-full transition-all duration-500">
                <div className="relative mb-8 flex justify-center w-full">
                  <div className="absolute inset-0 bg-[#004aad]/5 blur-3xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="w-40 h-40 rounded-full border-[6px] border-slate-50 group-hover:border-[#004aad]/10 shadow-xl transition-all duration-500 relative z-10 overflow-hidden bg-slate-100 group-hover:scale-105">
                    <img
                      src={judge.image}
                      alt={judge.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>

                <div className="relative z-10 flex flex-col flex-grow w-full">
                  <span className="text-[10px] font-black text-[#004aad] uppercase tracking-[0.3em] mb-3 block opacity-80">
                    {judge.company}
                  </span>
                  <h3 className="text-2xl font-black tracking-tight text-slate-800 mb-2 group-hover:text-[#004aad] transition-colors leading-tight">
                    {judge.name}
                  </h3>
                  <p className="text-slate-500 text-[12px] font-bold uppercase tracking-widest mb-6">
                    {judge.role}
                  </p>
                  <div className="h-[1px] w-12 bg-slate-100 mx-auto mb-8 group-hover:w-full group-hover:bg-[#004aad]/20 transition-all duration-700" />
                  <div className="bg-slate-50/50 group-hover:bg-white p-5 rounded-3xl border border-slate-100 group-hover:border-[#004aad]/10 transition-all duration-300 mt-auto">
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black mb-2">
                      Field Expertise
                    </p>
                    <p className="text-[13px] text-slate-700 font-bold leading-relaxed">
                      {judge.expertise}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          className="text-center mt-24"
        >
          <p className="text-slate-400 text-[10px] uppercase tracking-[0.6em] font-bold mb-4">
            Blind Judging Process • Innovation Metric • Scalability Score
          </p>
          <div className="inline-block h-[1px] w-20 bg-gradient-to-r from-transparent via-[#004aad]/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}