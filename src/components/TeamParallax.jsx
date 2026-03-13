import React, { useEffect, useState } from 'react';
import { ShieldCheck, Clock } from 'lucide-react';

const TeamParallax = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Handle scroll for parallax effect on desktop
    const handleScroll = () => {
      if (!isMobile) {
        setScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

  // Calculate parallax offset for desktop
  const parallaxOffset = scrollY * 0.5;

  return (
    <section className="relative h-auto min-h-[40vh] md:min-h-[65vh] overflow-hidden flex items-center justify-center border-y border-slate-200 bg-[#000080]">
      
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          backgroundImage: `url('/team-1.jpg')`,
          backgroundSize: isMobile ? 'cover' : 'cover',
          backgroundPosition: isMobile 
            ? 'center 30%' // Fixed position on mobile, slightly adjusted for better composition
            : `center ${50 - parallaxOffset * 0.1}%`, // Subtle parallax on desktop
          backgroundAttachment: isMobile ? 'scroll' : 'fixed', // No fixed on mobile
          backgroundRepeat: 'no-repeat',
          transition: isMobile ? 'none' : 'background-position 0.1s ease-out',
        }}
      />

      {/* Overlay - stronger on mobile for better text contrast */}
      <div 
        className={`absolute inset-0 z-10 ${
          isMobile 
            ? 'bg-[#000080]/70' // Stronger overlay on mobile
            : 'bg-gradient-to-r from-[#000080]/90 via-[#000080]/40 to-transparent'
        }`} 
      />

      {/* Content */}
      <div className="container-custom relative z-20 w-full py-12 md:py-0">
        <div className="max-w-2xl border-l-4 md:border-l-8 border-red-600 pl-6 md:pl-8 py-2 md:py-4">
          <span className="text-red-500 font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase text-[10px] md:text-xs mb-3 block">
            Lusikisiki Frontline
          </span>
          <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6 md:mb-8">
            Advanced Fleet. <br className="hidden md:block" /> Expert Care.
          </h2>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <div className="flex items-center gap-3 text-white">
              <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg">
                <ShieldCheck className="text-red-500 w-4 h-4 md:w-5 md:h-5" />
              </div>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">SAPC Certified</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg">
                <Clock className="text-red-500 w-4 h-4 md:w-5 md:h-5" />
              </div>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">24/7 Dispatch</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamParallax;