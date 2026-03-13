import React from 'react';
import { Truck, ShieldPlus, Activity, HeartPulse, UserRound, Users, ChevronRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Local Emergency Response",
      description: "Immediate 24/7 medical response for accidents and emergencies within Lusikisiki and a 50km surrounding radius."
    },
    {
      icon: <HeartPulse className="w-8 h-8" />,
      title: "Inter-Hospital Transfers",
      description: "Professional patient transport from Lusikisiki facilities to any hospital or specialist center in South Africa."
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Advanced Life Support",
      description: "Critical care transport featuring specialized paramedics and ICU-level monitoring equipment for serious cases."
    },
    {
      icon: <UserRound className="w-8 h-8" />,
      title: "Non-Emergency Transport",
      description: "Reliable, pre-booked transport for Lusikisiki residents to scheduled clinic check-ups and medical appointments."
    },
    {
      icon: <ShieldPlus className="w-8 h-8" />,
      title: "Basic Life Support",
      description: "Professional monitoring and care for stable patients requiring medical supervision during their journey."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Local Event Coverage",
      description: "On-site medical standby services for community events, sports, and gatherings in the Lusikisiki area."
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <span className="text-red-600 font-bold tracking-widest uppercase text-sm">
            Lusikisiki's Trusted Partner
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#000080] mt-2 mb-6 uppercase tracking-tight">
            Medical Excellence
          </h2>
          <div className="h-1 w-24 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                group relative bg-white rounded-none p-8 
                border border-slate-200 shadow-sm 
                hover:shadow-xl active:shadow-xl
                transition-all duration-300 
                hover:-translate-y-1 active:-translate-y-1 
                active:scale-[1.02]   /* subtle press feedback */
                overflow-hidden touch-manipulation   /* improves touch response */
              "
            >
              {/* Decorative Accent Bar - fills on hover or active */}
              <div 
                className="
                  absolute top-0 left-0 w-0 h-1 bg-red-600 
                  transition-all duration-500 
                  group-hover:w-full group-active:w-full
                " 
              />

              {/* Icon Box */}
              <div 
                className="
                  w-14 h-14 bg-slate-100 rounded-none flex items-center justify-center mb-6 
                  group-hover:bg-[#000080] group-active:bg-[#000080]
                  transition-colors duration-500 
                  text-[#000080] group-hover:text-white group-active:text-white
                "
              >
                {service.icon}
              </div>

              <h3 
                className="
                  text-xl font-bold text-[#000080] mb-4 
                  group-hover:text-red-600 group-active:text-red-600 
                  transition-colors duration-300 uppercase
                "
              >
                {service.title}
              </h3>

              <p className="text-slate-600 leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Reveal "Contact for Quote" on hover/active */}
              <div 
                className="
                  mt-6 flex items-center text-red-600 font-bold text-xs uppercase tracking-wider 
                  opacity-0 group-hover:opacity-100 group-active:opacity-100 
                  transition-opacity duration-300
                "
              >
                Contact for Quote 
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;