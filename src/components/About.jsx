import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative py-12 md:py-20 bg-white overflow-hidden">
      {/* Coded Logo Watermark Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url('/logo.jpg')`,
          backgroundSize: '150px',
          backgroundRepeat: 'repeat',
          filter: 'grayscale(100%)',
        }}
      />

      <div className="container-custom relative z-10 px-4 md:px-6">
        <h2 className="section-title text-gray-800 text-center md:text-left mb-10">About MD-SO EMS</h2>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Content - Left side */}
          <div className="space-y-6 md:space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl">
              <h3 className="text-xl md:text-2xl font-bold text-red-600 mb-4">
                Your Trusted Partner in Emergency Medical Services
              </h3>
              <p className="text-gray-700 text-sm md:text-base mb-4">
                MD-SO Emergency Medical Services has been serving the Lusikisiki community and surrounding areas with dedication and professionalism. 
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { title: "Professional Team", desc: "Qualified paramedics & EMTs" },
                  { title: "Modern Fleet", desc: "Latest medical equipment" },
                  { title: "Community Focused", desc: "Local healthcare experts" },
                  { title: "24/7 Availability", desc: "Round-the-clock service" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <span className="text-red-600 font-bold mr-2">✓</span>
                    <div>
                      <h4 className="font-bold text-gray-800 text-xs md:text-sm">{item.title}</h4>
                      <p className="text-gray-600 text-[10px] md:text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* FIXED: Team Image - Now fully visible on mobile */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 group">
                <img 
                  src="/team-2.jpg" 
                  alt="MD-SO EMS Team" 
                  // Using h-auto and aspect-video ensures the full width/height is respected
                  className="w-full h-auto aspect-video md:aspect-auto object-contain bg-slate-100 transition-transform duration-500 group-hover:scale-[1.02]"
                />
                {/* Subtle caption for mobile, hidden if screen is too small */}
                <div className="bg-slate-900 px-4 py-2 md:py-3">
                  <p className="text-white text-xs md:text-sm font-medium italic text-center">
                    "Dedicated to saving lives, every single day."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map / Stats Section - Right side */}
          <div className="space-y-6 md:space-y-8 lg:sticky lg:top-24">
            {/* Stats Grid */}
            <div className="bg-gradient-to-br from-red-600 to-blue-900 rounded-2xl p-6 md:p-8 text-white shadow-xl">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="text-center border-r border-white/10 pb-2">
                  <div className="text-2xl md:text-4xl font-black">24/7</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-80">Emergency</div>
                </div>
                <div className="text-center pb-2">
                  <div className="text-2xl md:text-4xl font-black">15+</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-80">Medical Staff</div>
                </div>
                <div className="text-center border-r border-white/10 pt-2">
                  <div className="text-2xl md:text-4xl font-black">5+</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-80">Ambulances</div>
                </div>
                <div className="text-center pt-2">
                  <div className="text-2xl md:text-4xl font-black">1000+</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-80">Patients Served</div>
                </div>
              </div>
            </div>

            {/* Map Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 md:border-4 border-[#1a1a1a]">
              <iframe
                title="Lusikisiki Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13554.444444444444!2d29.5750!3d-31.3667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e5f8f3b8f8f8f8f%3A0x8f8f8f8f8f8f8f8f!2sLusikisiki!5e0!3m2!1sen!2sza!4v1615631234567!5m2!1sen!2sza"
                width="100%"
                height="300"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%)' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>

              <div className="absolute bottom-3 left-3 right-3 bg-slate-900/95 backdrop-blur-md border border-white/10 rounded-lg p-3 flex justify-between items-center">
                <div className="pr-2">
                  <p className="font-bold text-white text-[11px] md:text-sm">Lusikisiki Central</p>
                  <p className="text-[9px] text-red-400 uppercase tracking-tighter font-bold">24hr Active Response</p>
                </div>
                <div className="flex-shrink-0 h-6 w-6 bg-red-600 rounded-full flex items-center justify-center animate-pulse shadow-[0_0_10px_rgba(220,38,38,0.5)]">
                  <div className="h-1.5 w-1.5 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;