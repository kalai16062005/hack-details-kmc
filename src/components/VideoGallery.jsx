import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Clapperboard } from "lucide-react"; 
import logo from "../assets/tect2.png";

export default function VideoGallery() {
  const videos = [
    { 
      id: 1,
      title: "Inaugural Ceremony",
      category: "Grand Opening",
      description: "Official commencement of Tech Challenge 2025 featuring keynote speakers.",
      thumbnail: "/gallery/img1.jpeg",
      src: "/videos/video12.mp4"
    },
    { 
      id: 2,
      title: "The Grand Finale",
      category: "Awards & Closing",
      description: "Recognizing excellence and celebrating the innovative spirit of participants.",
      thumbnail: "/gallery/1.jpeg",
      src: "/videos/video21.mp4"
    }
  ];

  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="relative min-h-screen bg-[#f0f7ff] py-24 px-6 overflow-hidden">
      
      {/* Grid dots */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none"
        style={{ 
          backgroundImage: `radial-gradient(#1e293b 1px, transparent 1px)`, 
          backgroundSize: '30px 30px' 
        }} 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="text-left mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/50 border border-slate-200 px-4 py-1.5 rounded-full mb-6 shadow-sm"
          >
            <Clapperboard size={14} className="text-slate-600" />
            <p className="text-[10px] tracking-[0.3em] text-slate-600 uppercase font-black">
              Cinematic Gallery
            </p>
          </motion.div>

          {/* TITLE */}
          <div className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-slate-900">
            <div className="flex flex-wrap justify-start">
              
              {/* EVENT */}
              {["E", "v", "e", "n", "t"].map((letter, i) => (
                <motion.span
                  key={`event-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="inline-block mr-[2px]"
                >
                  {letter}
                </motion.span>
              ))}

              <span className="inline-block w-4"></span>

              {/* 🔥 HIGHLIGHTS (RADIAL DARK BLUE) */}
              {["H", "i", "g", "h", "l", "i", "g", "h", "t", "s"].map((letter, i) => (
                <motion.span
                  key={`highlights-${i}`}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.04 }}
                  className="inline-block mx-[1px] 
                  bg-[radial-gradient(circle,_#2563eb_0%,_#1e3a8a_40%,_#0b1f5e_100%)] 
                  bg-clip-text text-transparent 
                  drop-shadow-[0_0_12px_rgba(37,99,235,0.4)]"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>

          {/* UNDERLINE */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            className="h-2 bg-gradient-to-r from-[#2563eb] to-[#3b82f6] mt-6 rounded-full shadow-lg shadow-blue-200/50"
          />
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <VideoCard video={videos[0]} side="left" setSelectedVideo={setSelectedVideo} />

          {/* CENTER LOGO */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-4 flex flex-col items-center gap-8 py-10"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-black/5 blur-3xl rounded-full animate-pulse" />
              <img
                src={logo}
                alt="KCET Logo"
                className="relative w-48 md:w-64 drop-shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="h-24 w-[1px] bg-gradient-to-b from-black to-transparent hidden lg:block" />
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.5em] hidden lg:block">
              Innovation • Excellence
            </p>
          </motion.div>

          <VideoCard video={videos[1]} side="right" setSelectedVideo={setSelectedVideo} />
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl flex items-center justify-center z-[100] p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-6xl aspect-video bg-black rounded-3xl overflow-hidden relative border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-6 right-6 z-50 bg-white/10 hover:bg-black p-3 rounded-full border border-white/20"
                onClick={() => setSelectedVideo(null)}
              >
                <X className="text-white" size={24} />
              </button>

              <video
                src={selectedVideo.src}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* VIDEO CARD */
function VideoCard({ video, side, setSelectedVideo }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="lg:col-span-4 group relative cursor-pointer"
      onClick={() => setSelectedVideo(video)}
    >
      <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-[#0070f3] via-[#ffffff] to-[#004aad] opacity-0 group-hover:opacity-100 blur-[20px] transition-all duration-700 -z-10" />
      <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-tr from-[#004aad] via-[#00c6ff] to-white opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />

      <div className="relative p-2 bg-white/40 border border-white/60 rounded-[2.8rem] shadow-sm transition-all duration-500 group-hover:bg-white group-hover:shadow-2xl z-10">
        <div className="relative rounded-[2.5rem] overflow-hidden">
          
          <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-transparent transition-all duration-[1200ms] z-10" />

          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1.5 }}
            src={video.thumbnail}
            className="w-full h-[450px] object-cover grayscale group-hover:grayscale-0 transition-all duration-[1500ms]"
          />

          <div className="absolute inset-0 flex flex-col justify-end p-8 z-20 bg-gradient-to-t from-black/90 via-transparent to-transparent">
            
            <div className="relative w-14 h-14 rounded-full flex items-center justify-center border border-white/40 mb-4 overflow-hidden group-hover:border-black transition-colors duration-500">
              <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
              <Play className="relative z-10 fill-white text-white ml-1" size={24} />
            </div>

            <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em] mb-1 opacity-0 group-hover:opacity-100 transition-all duration-700">
              {video.category}
            </p>

            <h2 className="text-2xl font-bold text-white uppercase tracking-tight transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
              {video.title}
            </h2>
          </div>
        </div>
      </div>
    </motion.div>
  );
}