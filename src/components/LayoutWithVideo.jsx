import React from "react";

export default function LayoutWithVideo({ children }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover -z-10 pointer-events-none"
      >
        
        <source src="/videos/animation3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

     
      <div className="relative z-10 min-h-screen">
        {children}
      </div>
    </div>
  );
}