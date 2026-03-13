import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative py-20 bg-white overflow-hidden">
      {/* Coded Logo Watermark Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url('/logo.jpg')`,
          backgroundSize: '180px', // Size of each logo stamp
          backgroundRepeat: 'repeat',
          filter: 'grayscale(100%)',
        }}
      />

      <div className="container-custom relative z-10">
        <h2 className="section-title text-gray-800 text-center md:text-left">About MD-SO EMS</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content - Left side */}
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl">
            <h3 className="text-2xl font-bold text-red-600 mb-4">
              Your Trusted Partner in Emergency Medical Services
            </h3>
            <p className="text-gray-700 mb-4">
              MD-SO Emergency Medical Services has been serving the Lusikisiki community and surrounding areas with dedication and professionalism. 
            </p>
            <p className="text-gray-700 mb-6">
              Our team consists of qualified paramedics and emergency medical technicians committed to providing the highest standard of care during transport.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Professional Team", desc: "Qualified paramedics & EMTs" },
                { title: "Modern Fleet", desc: "Latest medical equipment" },
                { title: "Community Focused", desc: "Local healthcare experts" },
                { title: "24/7 Availability", desc: "Round-the-clock service" }
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm">{item.title}</h4>
                    <p className="text-gray-600 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map / Stats Section - Right side */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="bg-gradient-to-br from-red-600 to-blue-900 rounded-2xl p-8 text-white shadow-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-black">24/7</div>
                  <div className="text-xs uppercase tracking-widest opacity-80">Emergency</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black">15+</div>
                  <div className="text-xs uppercase tracking-widest opacity-80">Medical Staff</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black">5+</div>
                  <div className="text-xs uppercase tracking-widest opacity-80">Ambulances</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black">1000+</div>
                  <div className="text-xs uppercase tracking-widest opacity-80">Patients Served</div>
                </div>
              </div>
            </div>

            {/* Dark Styled Map Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#1a1a1a]">
              <iframe
                title="Lusikisiki Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114959.647054062!2d29.476!3d-31.368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e641a4b5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sLusikisiki%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus"
                width="100%"
                height="350"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%)' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>

              {/* Map Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-xl p-3 flex justify-between items-center">
                <div>
                  <p className="font-bold text-white text-sm">Serving Lusikisiki</p>
                  <p className="text-[10px] text-red-400 uppercase tracking-tighter font-bold">Rapid Response Zone</p>
                </div>
                <div className="h-8 w-8 bg-red-600 rounded-full flex items-center justify-center animate-pulse">
                  <div className="h-2 w-2 bg-white rounded-full"></div>
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