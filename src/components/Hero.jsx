import { Calendar, Phone, MapPin, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-20">
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://dermatology.pk/wp-content/uploads/2025/01/Cosmetic-and-Family-Dentistry.webp"
        >
          <source
            src="https://videos.pexels.com/video-files/3844790/3844790-sd_640_360_30fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#031225]/85 via-[#06203a]/70 to-[#023047]/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">
          <div className="text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-md">
              <Sparkles size={18} className="text-cyan-300" />
              <span className="text-sm font-semibold text-white">Premium Dental Care in London</span>
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
              Your Smile Deserves the{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-200 bg-clip-text text-transparent">
                Best Care
              </span>
            </h1>

            <p className="mb-10 max-w-xl text-lg leading-relaxed text-slate-100 sm:text-xl">
              Experience premium dental treatments with expert dentists in North London. Modern facilities, compassionate care, and guaranteed results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={scrollToContact}
                className="group flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-600 px-8 py-4 text-lg font-bold text-white shadow-2xl shadow-cyan-700/30 transition-all hover:-translate-y-0.5 hover:from-cyan-600 hover:to-sky-700 sm:px-10"
              >
                <Calendar size={24} className="group-hover:rotate-12 transition-transform" />
                Book Appointment Now
              </button>
              <a
                href="tel:02088881002"
                className="group flex items-center justify-center gap-3 rounded-xl border-2 border-white/90 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 sm:px-10"
              >
                <Phone size={24} className="group-hover:animate-pulse" />
                Call Now
              </a>
            </div>

            <div className="flex flex-col gap-8 text-gray-200 sm:flex-row">
              <div className="flex items-start gap-3">
                <MapPin size={24} className="mt-1 flex-shrink-0 text-cyan-300" />
                <div>
                  <p className="font-semibold text-white">Visit Us</p>
                  <span className="text-sm">94 Turnpike Ln, London N8 0PH</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={24} className="mt-1 flex-shrink-0 text-cyan-300" />
                <div>
                  <p className="font-semibold text-white">Contact</p>
                  <span className="text-sm">020 8888 1002</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://dfaesthetics.com/wp-content/uploads/2021/04/Why-is-Preventative-Dental-Care-Important.jpg"
                  alt="Dental treatment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 mt-8">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8tsIg4Px_8ie9-mjjBAAY1krAgCZRkMBDHQ&s"
                  alt="Dental clinic"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 mt-8">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYePxYETakiazNeLaWZej8pZ5dgmW7Ak2qkQ&s"
                  alt="Smile consultation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlPXrQv-i-p1Wl7ykKwVB2M9OO9NDXNyLysw&s"
                  alt="Happy patient"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
