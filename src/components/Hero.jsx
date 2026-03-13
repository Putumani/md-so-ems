import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
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
      </div>

      <div className="container-custom relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
          MD-SO Emergency Medical Services
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Your Trusted Private Ambulance Service in Lusikisiki
        </p>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Providing reliable patient transport to all hospitals in the Eastern Cape
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-primary inline-block">
            Request Ambulance
          </a>
          <a href="tel:+27123456789" className="btn-secondary inline-block">
            📞 Emergency Call
          </a>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-500">24/7</div>
            <div className="text-lg">Emergency Service</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-500">100+</div>
            <div className="text-lg">Patients Transported</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-500">All Hospitals</div>
            <div className="text-lg">Coverage Area</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#services" className="text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;