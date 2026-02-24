import { useState, useEffect } from 'react';
import { X, Calendar, Check, AlertCircle } from 'lucide-react';

export default function AppointmentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferred_date: '',
    preferred_time: '',
    service_type: 'General Check-up',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    const today = new Date().toISOString().split('T')[0];

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!phoneRegex.test(formData.phone)) newErrors.phone = 'Invalid phone format';
    if (!formData.preferred_date) newErrors.preferred_date = 'Date is required';
    else if (formData.preferred_date < today) newErrors.preferred_date = 'Cannot book past dates';
    if (!formData.preferred_time) newErrors.preferred_time = 'Time is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        preferred_date: '',
        preferred_time: '',
        service_type: 'General Check-up',
      });

      setTimeout(() => {
        setIsOpen(false);
        setSubmitStatus(null);
      }, 3000);
    } catch (error) {
      setSubmitStatus('error');
      console.error('Submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-teal-600 to-cyan-600 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Calendar size={28} />
            Quick Appointment
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:bg-white/20 p-2 rounded-full transition"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {submitStatus === 'success' ? (
            <div className="text-center py-8">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Booking Submitted!</h3>
              <p className="text-gray-600">We'll contact you soon to confirm your appointment.</p>
            </div>
          ) : submitStatus === 'error' ? (
            <div className="text-center py-8">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="text-red-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Error Submitting</h3>
              <p className="text-gray-600 mb-4">Please try again or call us at 020 8888 1002</p>
              <button
                onClick={() => setSubmitStatus(null)}
                className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition"
              >
                Try Again
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:border-teal-600 transition ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:border-teal-600 transition ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:border-teal-600 transition ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="020 8888 1002"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Type
                </label>
                <select
                  name="service_type"
                  value={formData.service_type}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-600 transition"
                >
                  <option>General Check-up</option>
                  <option>Teeth Cleaning</option>
                  <option>Cosmetic Dentistry</option>
                  <option>Root Canal Treatment</option>
                  <option>Teeth Whitening</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="preferred_date"
                  value={formData.preferred_date}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:border-teal-600 transition ${
                    errors.preferred_date ? 'border-red-500' : 'border-gray-300'
                  }`}
                  min={new Date().toISOString().split('T')[0]}
                />
                {errors.preferred_date && (
                  <p className="text-red-500 text-sm mt-1">{errors.preferred_date}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Preferred Time
                </label>
                <select
                  name="preferred_time"
                  value={formData.preferred_time}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:border-teal-600 transition ${
                    errors.preferred_time ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select a time</option>
                  <option>09:00 AM</option>
                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
                  <option>02:00 PM</option>
                  <option>03:00 PM</option>
                  <option>04:00 PM</option>
                </select>
                {errors.preferred_time && (
                  <p className="text-red-500 text-sm mt-1">{errors.preferred_time}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-3 rounded-lg font-bold hover:from-teal-700 hover:to-cyan-700 transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Submitting...' : 'Confirm Appointment'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
