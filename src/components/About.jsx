import { Award, Users, Clock, Heart } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Award,
      title: 'Expert Care',
      description: 'Our team of highly qualified dentists brings years of experience and expertise.',
    },
    {
      icon: Users,
      title: 'Patient-Focused',
      description: 'We prioritize your comfort and wellbeing throughout every treatment.',
    },
    {
      icon: Clock,
      title: 'Flexible Hours',
      description: 'Convenient appointment times to fit your busy schedule.',
    },
    {
      icon: Heart,
      title: 'Gentle Approach',
      description: 'We use the latest techniques to ensure pain-free, comfortable treatments.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Welcome to Sky Dental
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted dental practice in North London, committed to delivering
            exceptional care and outstanding results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/3845630/pexels-photo-3845630.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Dental team consultation"
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Excellence in Dental Care Since Day One
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              At Sky Dental, we believe everyone deserves access to premium dental
              care. Our modern clinic combines advanced technology with a warm,
              welcoming atmosphere to ensure you feel comfortable and confident
              throughout your visit.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Whether you need a routine check-up, cosmetic enhancement, or
              complex dental treatment, our experienced team is here to help you
              achieve optimal oral health and a beautiful smile you'll love to
              show off.
            </p>
            <button
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-all transform hover:scale-105 font-medium"
            >
              Schedule a Visit
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-teal-50 to-cyan-50 hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
                  <Icon className="text-teal-600" size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
