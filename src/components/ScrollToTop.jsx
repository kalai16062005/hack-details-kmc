import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; 

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

 
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-full shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-110 active:scale-95 animate-bounce"
        >
          
          <ArrowUp size={24} strokeWidth={3} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;