import React from 'react';

const Services = () => {
  const services = [
    {
      icon: "🚑",
      title: "Emergency Response",
      description: "Rapid response medical emergency services available 24/7 with fully equipped ambulances and trained paramedics."
    },
    {
      icon: "🏥",
      title: "Hospital Transfers",
      description: "Safe and comfortable inter-hospital patient transfers to all medical facilities in the region."
    },
    {
      icon: "👴",
      title: "Non-Emergency Transport",
      description: "Reliable transport for scheduled medical appointments, check-ups, and routine hospital visits."
    },
    {
      icon: "💉",
      title: "Basic Life Support",
      description: "Professional basic life support services with trained emergency medical technicians."
    },
    {
      icon: "⚕️",
      title: "Advanced Life Support",
      description: "Advanced medical care during transport with paramedics and specialized equipment."
    },
    {
      icon: "🤝",
      title: "Event Medical Coverage",
      description: "On-site medical support for community events, gatherings, and special occasions."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title text-gray-800">Our Services</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Comprehensive emergency medical services tailored to meet the needs of our community in Lusikisiki and surrounding areas.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-red-600 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Emergency Notice */}
        <div className="mt-12 bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-3xl">🚨</span>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-bold text-red-800">24/7 Emergency Response</h4>
              <p className="text-red-700">
                For immediate assistance, call our emergency line: 
                <a href="tel:+27123456789" className="font-bold ml-2 hover:underline">123-456-789</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
