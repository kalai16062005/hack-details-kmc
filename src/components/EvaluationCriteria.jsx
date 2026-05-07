import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const EvaluationCriteria = () => {
  const criteria = [
    { title: "Functional Correctness", score: 20 },
    { title: "Logical Structure", score: 10 },
    { title: "Code Quality & Readability", score: 10 },
    { title: "Optimization / Innovation", score: 5 },
    { title: "Documentation / Insights", score: 5 },
    { title: "Total Score", score: 50, subtext: "Maximum marks per problem" },
  ];

  const splitText = (text) => text.split("");

  return (
    // 'border-b border-slate-100' remove panniyaachu
    <section className="bg-white py-24 px-6 font-sans relative overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ 
          backgroundImage: `linear-gradient(#004aad 1px, transparent 1px), linear-gradient(90deg, #004aad 1px, transparent 1px)`, 
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER SECTION - PILL BADGE ADDED */}
        <div className="mb-20 text-left">
          
          {/* Pill Style Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
            <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
              <Star size={14} className="text-[#004aad] fill-[#004aad]" />
            </motion.div>
            <h2 className="text-slate-900 uppercase tracking-[0.2em] font-bold text-[11px]">
              Grading System
            </h2>
          </div>

          <div className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none flex flex-wrap items-baseline gap-x-4">
            
            {/* EVALUATION (Black) */}
            <div className="flex">
              {splitText("EVALUATION").map((letter, i) => (
                <motion.span
                  key={`eval-${i}`}
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

            {/* CRITERIA (Radial Blue Gradient) */}
            <div className="flex">
              {splitText("CRITERIA").map((letter, i) => (
                <motion.span
                  key={`crit-${i}`}
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

          {/* Blue Underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "130px" }}
            transition={{ duration: 0.8 }}
            className="h-[6px] bg-[#004aad] mt-8 rounded-full shadow-lg shadow-blue-100"
          />
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {criteria.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -12 }} 
              className="group relative p-[2px] rounded-[40px] transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-[#0070f3] via-[#ffffff] to-[#004aad] opacity-0 group-hover:opacity-100 blur-[15px] transition-all duration-700 -z-10" />
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-tr from-[#004aad] via-[#00c6ff] to-white opacity-10 group-hover:opacity-100 transition-all duration-500" />

              <div className="relative bg-white/95 backdrop-blur-sm p-10 rounded-[38px] shadow-sm flex flex-col justify-between min-h-[260px] overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(0,112,243,0.1)]">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#004aad]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <h3 className="text-6xl font-black mb-3 text-[#004aad] group-hover:scale-105 transition-transform duration-300 origin-left">
                    {item.score}
                  </h3>
                  <p className="text-slate-900 text-xl font-black leading-tight mb-2 group-hover:text-[#004aad] transition-colors duration-300">
                    {item.title}
                  </p>
                  <p className="text-slate-400 text-[11px] font-bold uppercase tracking-[0.2em]">
                    {item.subtext || "out of 50 pts"}
                  </p>
                </div>

                <div className="mt-8 relative z-10">
                  <div className="h-[8px] w-full bg-slate-100 rounded-full overflow-hidden border border-slate-50">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(item.score / 50) * 100}%` }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-[#004aad] to-[#00c6ff] group-hover:from-[#0070f3] group-hover:to-[#00c6ff]"
                    />
                  </div>
                </div>

                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#004aad]/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EvaluationCriteria;