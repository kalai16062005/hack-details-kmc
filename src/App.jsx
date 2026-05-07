import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Teams from "./components/Teams";
import Departments from "./components/Departments";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";
import Milestones from "./components/Milestones"; 
import EvaluationCriteria from "./components/EvaluationCriteria"; 
import Judges from "./components/Judges"; 
import VideoGallery from "./components/VideoGallery"; 
import ScrollToTop from "./components/ScrollToTop"; 

function App() {
  return (
    <div className="relative min-h-screen antialiased selection:bg-blue-500/40 selection:text-white">
      
      {/* 🟢 STEP 1: VIDEO LAYER (Fixed & Sharp) */}
      <div className="fixed inset-0 z-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/videos/animation6.mp4" type="video/mp4" />
        </video>
        
        {/* Light Overlay: Video theliva theriyum, text padikka help pannum */}
        <div className="absolute inset-0 bg-white/5 z-0" />
      </div>

      {/* 🔵 STEP 2: CONTENT LAYER (Sharp Text, No Blur) */}
      <div className="relative z-10 isolate">
        
        {/* Magic CSS: Ella section-la irukkura bg-white-ah transparent-ah mathum 
            Appo thaan video pinnadi theliva theriyum */}
        <style dangerouslySetInnerHTML={{ __html: `
          section, main { background-color: transparent !important; }
        ` }} />

        <main className="w-full"> 
          <Navbar />

          <section id="home">
            <Hero />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="highlights">
            <VideoGallery />
          </section>
          
          <section id="timeline">
            <Timeline />
          </section>

          <section id="evaluation">
            <EvaluationCriteria />
          </section>
          
          <section id="teams">
            <Teams />
          </section>

          <section id="judges">
            <Judges />
          </section>
          
          <section id="departments">
            <Departments />
          </section>

          <section id="milestones">
            <Milestones />
          </section>
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;