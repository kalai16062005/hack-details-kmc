import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Star } from "lucide-react";

// Images import
import Rank1Img from "../assets/1.jpeg"; 
import Rank2Img from "../assets/2.jpeg";
import Rank3Img from "../assets/3.jpeg";

export default function Teams() {
  const eliteTeams = [
    {
      name: "METAMINDS",
      lead: "Sanjhai M L, Keerthivaasan V G",
      info: "69 Projects Completed",
      college: "Kamaraj College (KCET)",
      points: 2153,
      status: "Rank 2",
      rank: 2,
      order: "order-2 md:order-1", 
      image: Rank2Img,
      featured: false
    },
    {
      name: "ALGO_TRACKERS",
      lead: "Vishali S, Vaira Selvi S, Mohana Priya K",
      info: "70 Projects Completed",
      college: "Kamaraj College (KCET)",
      points: 2317,
      status: "Rank 1",
      rank: 1,
      featured: true,
      order: "order-1 md:order-2", 
      image: Rank1Img
    },
    {
      name: "TRIUNE SPIRITS",
      lead: "Ramya Sri V, Shyamala Rose J, Sajeetha R",
      info: "64 Projects Completed",
      college: "Kamaraj College (KCET)",
      points: 2047,
      status: "Rank 3",
      rank: 3,
      order: "order-3 md:order-3", 
      image: Rank3Img,
      featured: false
    }
  ];

  const leaderboardTeams = [
    { rank: "#4", name: "SHERLOCK'D", points: 1836, tasks: "59 Projects" },
    { rank: "#5", name: "PYHUNTERS", points: 1745, tasks: "55 Projects" },
    { rank: "#6", name: "INTELNOVA", points: 1667, tasks: "56 Projects" },
    { rank: "#7", name: "THE XFORCE", points: 1126, tasks: "35 Projects" },
    { rank: "#8", name: "ARISEMINDS", points: 306, tasks: "10 Projects" },
    { rank: "#9", name: "SYNTAX SQUADS", points: 223, tasks: "8 Projects" },
    { rank: "#10", name: "DEBUGGERS", points: 161, tasks: "5 Projects" },
  ];

  return (
   <section id="teams" className="py-24 bg-white text-slate-900 relative overflow-hidden font-sans border-b-0">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `linear-gradient(#004aad 1px, transparent 1px), linear-gradient(90deg, #004aad 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="mb-20 text-left">
          
          <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
            <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
              <Star size={14} className="text-[#004aad] fill-[#004aad]" />
            </motion.div>
            <h2 className="text-slate-900 uppercase tracking-[0.2em] font-bold text-[11px]">
              Live Hackathon Standings
            </h2>
          </div>

          <div className="text-5xl md:text-6xl font-black tracking-tighter uppercase leading-none flex flex-wrap items-baseline gap-x-4">
            {/* ELITE (Black) */}
            <div className="flex">
              {["E", "L", "I", "T", "E"].map((letter, i) => (
                <motion.span
                  key={`elite-${i}`}
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

            {/* SQUADRONS (Radial Blue Gradient Applied Here) */}
            <div className="flex">
              {["S", "Q", "U", "A", "D", "R", "O", "N", "S"].map((letter, i) => (
                <motion.span
                  key={`squad-${i}`}
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

          {/* Underline */}
          <motion.div 
            initial={{ width: 0 }} 
            whileInView={{ width: "130px" }} 
            transition={{ duration: 1, ease: "easeOut" }} 
            className="h-[6px] bg-[#004aad] mt-8 rounded-full" 
          />
        </div>

        {/* Elite Teams Grid */}
        <div className="flex flex-col md:flex-row items-end justify-center gap-8 lg:gap-10 mb-32">
          {eliteTeams.map((team, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -15 }} 
              className={`group relative p-[2px] rounded-[40px] w-full md:w-1/3 transition-all duration-500 ${team.order}`}
            >
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-[#0070f3] via-[#ffffff] to-[#004aad] opacity-0 group-hover:opacity-100 blur-[20px] transition-all duration-700 -z-10" />
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-tr from-[#004aad] via-[#00c6ff] to-white opacity-10 group-hover:opacity-100 transition-all duration-500" />

              <div className={`relative bg-white/95 backdrop-blur-sm rounded-[38px] p-6 flex flex-col items-center h-full border border-white/50 shadow-sm overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(0,112,243,0.15)] ${
                team.featured ? "min-h-[550px]" : "min-h-[510px]"
              }`}>
                <div className={`w-full ${team.featured ? "h-64" : "h-56"} mb-6 overflow-hidden rounded-[25px] bg-slate-100 relative group-hover:scale-[1.02] transition-transform duration-500`}>
                  <img src={team.image} alt={team.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#004aad]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <h2 className="text-3xl font-black text-center mb-1 uppercase tracking-tight text-slate-800 group-hover:text-[#004aad] transition-colors">
                  {team.name}
                </h2>
                <p className="text-[#004aad] text-[10px] font-bold tracking-widest uppercase mb-6 text-center">
                  {team.college}
                </p>

                <div className="w-1/2 h-[1px] bg-slate-100 mb-6 group-hover:w-full transition-all duration-500" />

                <div className="space-y-2 text-center mb-8">
                  <p className="text-slate-500 text-sm font-semibold">{team.info}</p>
                  <p className="text-slate-400 text-[11px] italic font-medium">{team.lead}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 w-full mt-auto">
                  <div className="text-center bg-slate-50/50 group-hover:bg-white p-4 rounded-3xl border border-slate-100 shadow-sm transition-all duration-300">
                    <p className="text-xl font-black text-[#004aad]">{team.points.toLocaleString()}</p>
                    <p className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">Points</p>
                  </div>
                  <div className="text-center bg-slate-50/50 group-hover:bg-[#004aad] p-4 rounded-3xl border border-slate-100 shadow-sm transition-all duration-300 group-hover:border-transparent">
                    <p className="text-xs font-black text-[#004aad] group-hover:text-white uppercase">{team.status}</p>
                    <p className="text-[9px] uppercase tracking-widest text-slate-400 group-hover:text-blue-100 font-bold">Standing</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leaderboard Section */}
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-black tracking-tight text-slate-800 uppercase">Leaderboard</h2>
          </div>

          {leaderboardTeams.map((team, index) => (
            <motion.div key={index} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 10, scale: 1.01 }}
              className="group flex items-center justify-between bg-white px-8 py-5 rounded-[25px] border border-slate-100 transition-all cursor-default shadow-sm hover:shadow-md hover:border-[#004aad]/20 relative overflow-hidden"
            >
              <div className="flex items-center gap-6 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-xs font-black italic text-slate-400 group-hover:bg-[#004aad] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                  {team.rank}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-[#004aad] transition-colors uppercase">{team.name}</h3>
                  <p className="text-xs text-slate-400 font-medium italic">Kamaraj College</p>
                </div>
              </div>

              <div className="flex gap-12 text-right relative z-10">
                <div className="hidden sm:block">
                  <p className="text-[9px] uppercase tracking-widest text-slate-400 font-bold mb-1">Activity</p>
                  <div className="flex items-center gap-2 justify-end">
                    <Zap className="w-3 h-3 text-[#004aad]" />
                    <span className="font-bold text-slate-700 text-sm uppercase">{team.tasks}</span>
                  </div>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-slate-400 font-bold mb-1">Total Score</p>
                  <p className="text-lg font-black text-[#004aad]">{team.points.toLocaleString()}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}