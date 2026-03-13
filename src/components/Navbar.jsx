import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#coverage', label: 'Coverage Area' },
    { href: '#about', label: 'About Us' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className={`text-2xl font-bold ${isScrolled ? 'text-red-600' : 'text-white'}`}>
              MD-SO EMS
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium hover:text-red-600 transition ${isScrolled ? 'text-gray-700' : 'text-white'}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Emergency Contact - Desktop */}
          <div className="hidden md:block">
            <a
              href="tel:+27123456789"
              className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition animate-pulse"
            >
              🚑 Emergency: 123-456-789
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-xl p-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-red-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <a
                href="tel:+27123456789"
                className="block w-full bg-red-600 text-white text-center px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
              >
                🚑 Emergency: 123-456-789
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
