import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info & Logo */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-6 bg-white/5 p-3 rounded-xl border border-white/10">
              <img 
                src="/logo.jpg" 
                alt="MD-SO EMS Logo" 
                className="h-12 w-auto rounded-lg object-contain"
              />
              <div>
                <h3 className="text-xl font-black leading-none tracking-tight text-white">MD-SO EMS</h3>
                <span className="text-[10px] uppercase text-red-500 font-bold tracking-widest">Emergency Care</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your trusted private ambulance service in Lusikisiki. Providing rapid response and professional medical transport across the Eastern Cape.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600 transition-all group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="https://wa.me/27837688431" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-green-600 transition-all group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.45-1.272.61-1.447c.159-.175.346-.219.462-.219l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.087-.177.181-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087.159.058 1.01.476 1.184.562.174.087.29.13.332.202.043.072.043.419-.101.824z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:pl-8">
            <h3 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-4 bg-red-600 rounded-full"></span>
              Navigation
            </h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-red-500 transition-colors text-sm">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-red-500 transition-colors text-sm">Our Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-red-500 transition-colors text-sm">About MD-SO</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-red-500 transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-4 bg-red-600 rounded-full"></span>
              Our Services
            </h3>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">Emergency Response</li>
              <li className="text-gray-400 text-sm">Inter-Hospital Transfers</li>
              <li className="text-gray-400 text-sm">Event Medical Standby</li>
              <li className="text-gray-400 text-sm">Basic Life Support</li>
            </ul>
          </div>

          {/* Emergency Contact */}
          <div className="bg-red-600/10 border border-red-600/20 rounded-2xl p-6">
            <h3 className="text-red-500 font-bold mb-4 uppercase tracking-tighter">Emergency 24/7</h3>
            <a 
              href="tel:0837688431" 
              className="text-2xl font-black text-white hover:text-red-500 transition-colors block mb-2"
            >
              083 768 8431
            </a>
            <p className="text-xs text-gray-400 mb-4">Click to call for immediate assistance</p>
            <div className="pt-4 border-t border-white/5">
              <p className="text-sm font-bold text-white">Location:</p>
              <p className="text-sm text-gray-400">Lusikisiki, Eastern Cape</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs text-center md:text-left">
              © {new Date().getFullYear()} MD-SO Emergency Medical Services. Developed for the Lusikisiki Community.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white text-[11px] uppercase tracking-widest font-bold">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-white text-[11px] uppercase tracking-widest font-bold">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
