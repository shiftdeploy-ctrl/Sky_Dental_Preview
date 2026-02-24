import { Award, GraduationCap } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Principal Dentist & Cosmetic Specialist',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600',
      qualifications: 'BDS (London), MJDF RCS (Eng)',
      specialization: 'Cosmetic Dentistry & Smile Makeovers',
      bio: 'With over 15 years of experience, Dr. Mitchell specializes in transformative cosmetic procedures and has helped thousands of patients achieve their dream smiles.',
    },
    {
      name: 'Dr. James Roberts',
      role: 'General & Restorative Dentist',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj6zv4wXJtn3Vcb9NXkv3hacPzbhdZ8O6ZGg&s',
      qualifications: 'BDS (Manchester), MFDS RCS (Ed)',
      specialization: 'Restorative Dentistry & Implants',
      bio: 'Dr. Roberts brings expertise in complex restorative cases and dental implants, ensuring patients receive the highest standard of care with lasting results.',
    },
    {
      name: 'Dr. Emily Chen',
      role: 'Orthodontist & Pediatric Specialist',
      image: 'https://images.pexels.com/photos/6627439/pexels-photo-6627439.jpeg?auto=compress&cs=tinysrgb&w=600',
      qualifications: 'BDS, MOrth RCS (Eng)',
      specialization: 'Orthodontics & Children\'s Dentistry',
      bio: 'Passionate about creating beautiful smiles for all ages, Dr. Chen specializes in modern orthodontic treatments and making dental visits fun for children.',
    },
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our highly qualified dentists are dedicated to providing exceptional
            care with a gentle, personalized approach.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-teal-600 font-semibold mb-3">{member.role}</p>

                <div className="flex items-start gap-2 mb-3">
                  <GraduationCap className="text-teal-600 mt-0.5 flex-shrink-0" size={18} />
                  <p className="text-sm text-gray-600">{member.qualifications}</p>
                </div>

                <div className="flex items-start gap-2 mb-4">
                  <Award className="text-teal-600 mt-0.5 flex-shrink-0" size={18} />
                  <p className="text-sm text-gray-600">{member.specialization}</p>
                </div>

                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg"
          >
            Book with Our Team
          </button>
        </div>
      </div>
    </section>
  );
}
