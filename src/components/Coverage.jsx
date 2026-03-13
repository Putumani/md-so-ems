import React from 'react';
import { MapPin, Building2, Globe2, PhoneCall, ChevronRight } from 'lucide-react';

const Coverage = () => {
  const hospitals = [
    { name: "St. Patrick's Hospital", area: "Lusikisiki" },
    { name: "Holy Cross Hospital", area: "Flagstaff" },
    { name: "Zithulele Hospital", area: "Mqanduli" },
    { name: "Nelson Mandela Academic Hospital", area: "Mthatha" },
    { name: "Bedford Orthopaedic Hospital", area: "Mthatha" },
    { name: "Greenville Hospital", area: "Tabankulu" }
  ];

  return (
    <section id="coverage" className="py-24 bg-white relative">
      <div className="container-custom">
        {/* Header Section */}
        <div className="mb-16 border-l-4 border-red-600 pl-6">
          <span className="text-red-600 font-bold tracking-widest uppercase text-sm">Strategic Reach</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#000080] mt-2 uppercase tracking-tight">Coverage Area</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-0 border border-slate-200 shadow-2xl">
          
          {/* Left: Interactive/Visual Map Section */}
          <div className="bg-[#000080] p-8 md:p-12 text-white relative overflow-hidden">
             {/* Abstract Grid Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg width="100%" height="100%"><pattern id="grid-coverage" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="0.5"/></pattern><rect width="100%" height="100%" fill="url(#grid-coverage)" /></svg>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <Globe2 className="text-red-500 w-8 h-8" />
                <h3 className="text-2xl font-bold uppercase tracking-tighter">Regional Hub: Lusikisiki</h3>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 mb-8">
                <p className="text-slate-300 leading-relaxed mb-6">
                  Strategically positioned in <span className="text-white font-bold">Lusikisiki</span>, we provide rapid-response emergency services locally while facilitating medical transfers across the entire Eastern Cape and beyond.
                </p>
                <div className="flex items-center gap-4 text-red-500 font-bold">
                  <div className="h-px flex-1 bg-white/20"></div>
                  <span className="text-xs uppercase tracking-widest">National Transfer Capacity</span>
                  <div className="h-px flex-1 bg-white/20"></div>
                </div>
              </div>

              <div className="space-y-4">
                {["Mthatha", "East London", "Durban", "Gqeberha"].map((city) => (
                  <div key={city} className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-slate-400 font-medium">To {city}</span>
                    <ChevronRight className="w-4 h-4 text-red-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 md:p-12">
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <Building2 className="text-[#000080] w-5 h-5" />
                <h3 className="text-lg font-bold text-[#000080] uppercase tracking-wide">Key Medical Facilities</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
                {hospitals.map((hospital, index) => (
                  <div key={index} className="bg-white p-4 hover:bg-red-50 transition-colors group">
                    <h4 className="font-bold text-[#000080] text-sm group-hover:text-red-600 transition-colors">{hospital.name}</h4>
                    <p className="text-slate-500 text-xs mt-1 uppercase tracking-wider">{hospital.area}</p>
                  </div>
                ))}
              </div>
            </div>         
          </div>

        </div>
      </div>
    </section>
  );
};

export default Coverage;