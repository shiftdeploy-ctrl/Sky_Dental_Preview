import { Smile, Shield, Sparkles, Stethoscope, Crown, Baby } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Stethoscope,
      title: 'General Dentistry',
      description:
        'Comprehensive check-ups, cleanings, fillings, and preventive care to maintain your oral health.',
      features: ['Dental Examinations', 'Professional Cleaning', 'Cavity Fillings', 'X-Rays'],
    },
    {
      icon: Sparkles,
      title: 'Cosmetic Dentistry',
      description:
        'Transform your smile with our advanced cosmetic treatments designed to enhance your appearance.',
      features: ['Teeth Whitening', 'Veneers', 'Bonding', 'Smile Makeovers'],
    },
    {
      icon: Crown,
      title: 'Restorative Dentistry',
      description:
        'Restore damaged or missing teeth with crowns, bridges, dentures, and implants.',
      features: ['Dental Crowns', 'Bridges', 'Dentures', 'Dental Implants'],
    },
    {
      icon: Shield,
      title: 'Preventive Care',
      description:
        'Protect your teeth and gums with our comprehensive preventive dental services.',
      features: ['Fluoride Treatment', 'Sealants', 'Gum Disease Prevention', 'Oral Cancer Screening'],
    },
    {
      icon: Smile,
      title: 'Orthodontics',
      description:
        'Achieve a perfectly aligned smile with modern orthodontic solutions.',
      features: ['Braces', 'Clear Aligners', 'Retainers', 'Bite Correction'],
    },
    {
      icon: Baby,
      title: 'Pediatric Dentistry',
      description:
        'Gentle, child-friendly dental care to ensure healthy smiles from an early age.',
      features: ['Children\'s Check-ups', 'Preventive Care', 'Education', 'Gentle Treatments'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Dental Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive dental care tailored to your unique needs, from routine
            check-ups to advanced treatments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border-t-4 border-teal-600"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-teal-100 rounded-full mb-4">
                  <Icon className="text-teal-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() =>
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="text-teal-600 font-semibold hover:text-teal-700 transition-colors inline-flex items-center"
                >
                  Book Consultation
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg"
          >
            Schedule Your Appointment Today
          </button>
        </div>
      </div>
    </section>
  );
}
