import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
        {/* Background Video & Overlays */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1587745418805-3c8cfec0a502?auto=format&fit=crop&w=1950&q=80"
          >
            <source src="/background-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Primary Overlay: Darkens the whole video for text readability */}
          <div className="absolute inset-0 bg-black/40 z-10" />
          
          {/* Top Gradient: Specifically ensures Navbar links are visible against the video */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-transparent to-transparent h-40" />
        </div>

        {/* Content Container */}
        <div className="container-custom relative z-20 text-center text-white px-4 pt-24 md:pt-32 pb-12 md:pb-12">
          
          {/* Main Heading */}
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-7xl font-black mb-6 animate-fade-in tracking-tight leading-[1.1]">
              MD-SO Emergency <br className="hidden md:block" /> Medical Services
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-bold text-red-500 uppercase tracking-widest">
              Lusikisiki Frontline Care
            </p>
            <p className="text-lg md:text-xl mb-8 md:mb-12 max-w-2xl mx-auto opacity-90 leading-relaxed">
              Providing reliable private ambulance transport to all hospitals in the Eastern Cape with 24/7 dedicated support.
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg shadow-red-900/20"
            >
              Request Ambulance
            </a>
            <a 
              href="tel:0837688431" 
              className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/20 hover:bg-white/20 text-white rounded-xl font-bold transition-all transform hover:scale-105"
            >
              📞 Emergency: 083 768 8431
            </a>
          </div>
          
          {/* Stats Grid - Desktop Only */}
          {!isMobile && (
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto border-t border-white/10 pt-12">
              <div className="flex flex-col items-center">
                <div className="text-4xl font-black text-red-500 mb-1">24/7</div>
                <div className="text-sm uppercase tracking-widest font-medium opacity-80">Emergency Service</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-black text-red-500 mb-1">100+</div>
                <div className="text-sm uppercase tracking-widest font-medium opacity-80">Patients Transported</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-black text-red-500 mb-1">ALL</div>
                <div className="text-sm uppercase tracking-widest font-medium opacity-80">Hospital Coverage</div>
              </div>
            </div>
          )}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <a href="#services" className="text-white/60 hover:text-white transition-colors">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Mobile Stats Section - Separate from Hero */}
      {isMobile && (
        <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-12">
          <div className="container-custom px-4">
            <h3 className="text-center text-white/60 text-sm uppercase tracking-widest mb-6">
              Our Impact Numbers
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {/* Stat Card 1 */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-5xl font-black text-red-500 mb-2">24/7</div>
                    <div className="text-white/80 font-medium">Emergency Service</div>
                  </div>
                  <div className="text-5xl opacity-20">🚑</div>
                </div>
              </div>

              {/* Stat Card 2 */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-5xl font-black text-red-500 mb-2">100+</div>
                    <div className="text-white/80 font-medium">Patients Transported</div>
                  </div>
                  <div className="text-5xl opacity-20">❤️</div>
                </div>
              </div>

              {/* Stat Card 3 */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-5xl font-black text-red-500 mb-2">ALL</div>
                    <div className="text-white/80 font-medium">Hospital Coverage</div>
                  </div>
                  <div className="text-5xl opacity-20">🏥</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Hero;