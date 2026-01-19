import { useState } from 'react';
import Navbar from './Navbar';

const Contact = () => {
  const [formData, setFormData] = useState({
    enquiryType: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `${formData.enquiryType} - Contact from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Enquiry Type: ${formData.enquiryType}

Message:
${formData.message}
    `.trim();

    const mailtoLink = `mailto:kwameafranienyantakyi@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-50 min-h-screen py-16">
      <Navbar />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Contact Me</h1>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Enquiry Type */}
            <div>
              <label htmlFor="enquiryType" className="block text-gray-700 text-sm font-bold mb-2">
                Enquiry Type <span className="text-red-500">*</span>
              </label>
              <select
                id="enquiryType"
                name="enquiryType"
                value={formData.enquiryType}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select an enquiry type</option>
                <option value="Book Kwame for Speaking At Event">Book Kwame for Speaking At Event</option>
                <option value="Consulting">Consulting</option>
                <option value="Mentoring">Mentoring</option>
                <option value="Other">Other</option>
              </select>
            </div>
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                Telephone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number (Optional)"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Your Message"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-600 text-sm">
              The form will open your default email client. Alternatively, you can email directly at{' '}
              <a href="mailto:kwameafranienyantakyi@gmail.com" className="text-blue-600 hover:text-blue-800 font-medium">
                kwameafranienyantakyi@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
