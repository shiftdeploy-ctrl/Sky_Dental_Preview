import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle, Loader } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferred_date: '',
    preferred_time: '',
    service_type: '',
    additional_notes: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const serviceTypes = [
    'General Check-up',
    'Teeth Cleaning',
    'Cosmetic Dentistry',
    'Dental Implants',
    'Orthodontics',
    'Emergency Dental',
    'Other',
  ];

  const timeSlots = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
  ];

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.preferred_date) {
      newErrors.preferred_date = 'Preferred date is required';
    } else {
      const selectedDate = new Date(formData.preferred_date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.preferred_date = 'Please select a future date';
      }
    }

    if (!formData.preferred_time) {
      newErrors.preferred_time = 'Preferred time is required';
    }

    if (!formData.service_type) {
      newErrors.service_type = 'Please select a service type';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        preferred_date: '',
        preferred_time: '',
        service_type: '',
        additional_notes: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-cyan-50/50 pointer-events-none"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Book Your Appointment Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start your journey to a healthier, brighter smile. Our team is ready to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="font-semibold text-green-900 mb-1">
                      Booking Request Submitted!
                    </h4>
                    <p className="text-green-700 text-sm">
                      Thank you for choosing Sky Dental. We've received your appointment
                      request and will contact you shortly to confirm your booking.
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                  <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="font-semibold text-red-900 mb-1">
                      Submission Failed
                    </h4>
                    <p className="text-red-700 text-sm">
                      We couldn't process your request. Please try again or call us
                      directly at 020 8888 1002.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all`}
                      placeholder="John Smith"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all`}
                      placeholder="john.smith@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all`}
                    placeholder="07XXX XXXXXX"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="preferred_date"
                      value={formData.preferred_date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full px-4 py-3 border ${
                        errors.preferred_date ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all`}
                    />
                    {errors.preferred_date && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.preferred_date}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Time <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="preferred_time"
                      value={formData.preferred_time}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${
                        errors.preferred_time ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all`}
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                    {errors.preferred_time && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.preferred_time}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="service_type"
                    value={formData.service_type}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${
                      errors.service_type ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all`}
                  >
                    <option value="">Select a service</option>
                    {serviceTypes.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service_type && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.service_type}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    name="additional_notes"
                    value={formData.additional_notes}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="Any specific concerns or questions?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white px-8 py-4 rounded-xl hover:from-teal-700 hover:to-teal-800 transition-all transform hover:scale-105 font-bold text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="animate-spin" size={20} />
                      Submitting...
                    </>
                  ) : (
                    'Request Appointment'
                  )}
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">94 Turnpike Ln, London N8 0PH</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a
                      href="tel:02088881002"
                      className="text-teal-600 hover:text-teal-700"
                    >
                      020 8888 1002
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a
                      href="mailto:Dental.v04824@nhs.net"
                      className="text-teal-600 hover:text-teal-700 break-all"
                    >
                      Dental.v04824@nhs.net
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="text-teal-600" size={24} />
                Opening Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-semibold text-gray-900">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-semibold text-gray-900">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-semibold text-red-600">Closed</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Emergency Care</h3>
              <p className="text-teal-50 mb-4">
                Dental emergencies? We're here to help. Call us immediately for
                urgent dental care.
              </p>
              <a
                href="tel:02088881002"
                className="inline-block bg-white text-teal-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
