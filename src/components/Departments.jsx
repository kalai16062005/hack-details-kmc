import React from "react";
import { motion } from "framer-motion";
import { Monitor, Code2, GraduationCap, Users, Star } from "lucide-react";

const DepartmentFocus = () => {
  const cseStats = {
    name: "Computer Science and Engineering",
    shortName: "CSE",
    totalPoints: "14,073",
    tasksCompleted: "457",
    activeTeams: "19",
    participation: "100%"
  };

  return (
    <section id="department" className="bg-white py-24 px-6 relative overflow-hidden font-sans border-b-0">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `linear-gradient(#004aad 1px, transparent 1px), linear-gradient(90deg, #004aad 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <div className="mb-20 text-left">
          
          <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
            <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
              <Star size={14} className="text-[#004aad] fill-[#004aad]" />
            </motion.div>
            <h2 className="text-slate-900 uppercase tracking-[0.2em] font-bold text-[11px]">
              Departmental Analytics
            </h2>
          </div>

          <div className="text-5xl md:text-6xl font-black tracking-tighter uppercase leading-none flex flex-wrap items-baseline gap-x-4">
            {/* TOP (Black) */}
            <div className="flex">
              {["T", "O", "P"].map((letter, i) => (
                <motion.span
                  key={`top-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="inline-block text-slate-900"
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* PERFORMERS (Radial Blue Gradient Applied Here) */}
            <div className="flex">
              {["P", "E", "R", "F", "O", "R", "M", "E", "R", "S"].map((letter, i) => (
                <motion.span
                  key={`perf-${i}`}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.04 }}
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

        {/* CONTENT SECTION */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* LEFT: Stats Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative w-full"
          >
            <div className="relative z-10 bg-gradient-to-br from-blue-600 to-sky-500 p-8 md:p-10 rounded-[40px] shadow-2xl shadow-blue-200 text-white overflow-hidden group">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors" />
              
              <div className="flex justify-between items-start mb-12 relative z-10">
                <Monitor size={48} className="opacity-80" />
                <span className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  Primary Participant
                </span>
              </div>
              
              <h2 className="text-5xl font-black tracking-tighter mb-2 uppercase italic leading-none relative z-10">
                {cseStats.shortName}
              </h2>
              <p className="text-blue-50 font-bold text-sm tracking-wide uppercase mb-8 relative z-10">
                {cseStats.name}
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/20 relative z-10">
                <div>
                  <p className="text-blue-100 text-[9px] uppercase font-bold tracking-widest mb-1">Total Score</p>
                  <p className="text-3xl font-black italic">{cseStats.totalPoints}</p>
                </div>
                <div>
                  <p className="text-blue-100 text-[9px] uppercase font-bold tracking-widest mb-1">Participation</p>
                  <p className="text-3xl font-black italic">{cseStats.participation}</p>
                </div>
              </div>
            </div>
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hidden md:block z-20"
            >
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-2xl text-green-600">
                  <code2 size={24} />
                </div>
                <div>
                  <p className="text-slate-900 font-black italic text-xl">{cseStats.tasksCompleted}</p>
                  <p className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">Tasks Finished</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Text Content */}
          <div className="flex-1 space-y-8 text-left">
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-blue-600 font-bold tracking-[0.3em] text-[10px] uppercase mb-4">
                Centre of Excellence
              </p>
              <h3 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase leading-[0.9] mb-6">
                Departmental <span className="bg-gradient-to-r from-[#004aad] to-[#3b82f6] bg-clip-text text-transparent">Strength</span>
              </h3>
              <p className="text-slate-500 mt-4 leading-relaxed font-medium text-base">
                The Computer Science department led the 2K25 challenge with maximum participation, demonstrating top-tier skills in modern web technologies and problem-solving.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <Users size={18} />, label: "Active Teams", val: cseStats.activeTeams },
                { icon: <GraduationCap size={18} />, label: "Campus", val: "Kamaraj College" },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ 
                    y: -5,
                    backgroundColor: "#f0f7ff", 
                    borderColor: "#004aad"      
                  }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 cursor-pointer shadow-sm group"
                >
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="text-blue-600 bg-white p-2.5 rounded-xl shadow-sm border border-slate-100 group-hover:border-blue-200 transition-colors"
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-0.5 group-hover:text-blue-400 transition-colors">
                      {item.label}
                    </p>
                    <p className="text-slate-900 font-black text-sm group-hover:text-[#004aad] transition-colors">
                      {item.val}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentFocus;