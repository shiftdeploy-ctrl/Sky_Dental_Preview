import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Our Team', id: 'team' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-white/60 bg-white/90 shadow-lg shadow-cyan-900/10 backdrop-blur-md'
          : 'bg-white/70 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold text-cyan-700 transition-colors hover:text-cyan-800"
            >
              Sky Dental
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-slate-700 hover:text-cyan-700 font-medium transition-colors"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="rounded-full bg-gradient-to-r from-cyan-500 to-sky-600 px-6 py-2.5 font-semibold text-white shadow-lg shadow-cyan-600/25 transition-all hover:-translate-y-0.5 hover:shadow-cyan-700/35"
            >
              Book Now
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-700 hover:text-cyan-700"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200/80 bg-white/95 shadow-lg backdrop-blur-md">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full py-2 text-left font-medium text-slate-700 hover:text-cyan-700"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full rounded-full bg-gradient-to-r from-cyan-500 to-sky-600 px-6 py-3 font-semibold text-white"
            >
              Book Now
            </button>
            <a
              href="tel:02088881002"
              className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-cyan-600 px-6 py-3 font-semibold text-cyan-700 transition-colors hover:bg-cyan-50"
            >
              <Phone size={18} />
              020 8888 1002
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
