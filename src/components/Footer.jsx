import React from 'react';
import tarcinLogo from '../assets/tarcinblue.png';


const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 font-sans border-t border-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
<div className="flex flex-wrap justify-center items-center gap-8 mb-10">
  <img 
    src={tarcinLogo} 
    alt="Tarcin Robotics Logo" 
    className="h-10 md:h-12 w-auto object-contain" 
  />
  
</div>

        {/* Main Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black tracking-[0.2em] mb-2">TECH CHALLENGE-2K25</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-400 text-sm md:text-base tracking-wide uppercase">
            Department of Computer Science |Kamaraj College of Engineering and Technology , Madurai
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center w-full max-w-5xl mb-12 border-b border-gray-800 pb-12">
          <div className="space-y-2">
            <h3 className="text-blue-500 font-bold text-xs uppercase tracking-[0.15em]">Principal</h3>
            <p className="font-semibold text-lg text-gray-100">Dr.S.Senthil, M.E.,Ph.D.,</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-blue-500 font-bold text-xs uppercase tracking-[0.15em]">Head of Department</h3>
            <div className="space-y-1">
              <p className="font-semibold text-lg text-gray-100">Dr.A.Meenakshi, M.E., Ph.D.,</p>
              <p className="font-medium text-md text-gray-400"> Prof & Head</p>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-blue-500 font-bold text-xs uppercase tracking-[0.15em]">Coordinators</h3>
            <div className="space-y-1">
              <p className="font-semibold text-lg text-gray-100">Mrs.S.Athilakshmi,AP-CSE</p>
              <p className="font-semibold text-lg text-gray-100">Ms.S.Janani,AP-CSE</p>
              <p className="font-semibold text-lg text-gray-100">Mr.S.Ram Prasath,AP-CSE</p>
            </div>
          </div>
        </div>

        {/* Bottom Collaboration Text */}
        <div className="text-center space-y-3">
          <p className="text-gray-400 text-xs md:text-sm tracking-wide">
            In Collaboration with <span className="text-white">Tarcin </span> | Institution Innovation Council (IIC)
          </p>
          <p className="text-gray-400 text-xs md:text-sm tracking-wide">
            KCET, Madurai — 25 Years of Excellence
          </p>
          <div className="pt-6">
            <p className="text-gray-600 text-[10px] uppercase tracking-widest">
              All Rights Reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;