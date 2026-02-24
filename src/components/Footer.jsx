import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-teal-400 mb-4">Sky Dental</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Your trusted dental practice in North London, providing exceptional
              care for beautiful, healthy smiles.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('team')}
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  Our Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>General Dentistry</li>
              <li>Cosmetic Dentistry</li>
              <li>Restorative Dentistry</li>
              <li>Orthodontics</li>
              <li>Pediatric Dentistry</li>
              <li>Emergency Care</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="text-teal-400 flex-shrink-0 mt-1" size={18} />
                <p className="text-gray-400">94 Turnpike Ln, London N8 0PH</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-teal-400 flex-shrink-0 mt-1" size={18} />
                <a
                  href="tel:02088881002"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  020 8888 1002
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="text-teal-400 flex-shrink-0 mt-1" size={18} />
                <a
                  href="mailto:Dental.v04824@nhs.net"
                  className="text-gray-400 hover:text-teal-400 transition-colors break-all"
                >
                  Dental.v04824@nhs.net
                </a>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h5 className="font-semibold text-sm mb-2">Opening Hours</h5>
              <p className="text-xs text-gray-400">Mon-Fri: 9:00 AM - 6:00 PM</p>
              <p className="text-xs text-gray-400">Sat: 9:00 AM - 2:00 PM</p>
              <p className="text-xs text-gray-400">Sun: Closed</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              {currentYear} Sky Dental. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
