import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'emergency',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us. We will respond shortly.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title text-gray-800">Contact Us</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-red-600">Request Ambulance</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Email (Optional)</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Service Type</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                >
                  <option value="emergency">Emergency Transport</option>
                  <option value="non-emergency">Non-Emergency Transport</option>
                  <option value="hospital">Hospital Transfer</option>
                  <option value="event">Event Coverage</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Message / Location</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Please provide your location and any specific requirements..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
              >
                Submit Request
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
              <h3 className="text-2xl font-bold mb-6 text-red-600">Emergency Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-red-600 text-2xl mr-4">📞</span>
                  <div>
                    <p className="text-gray-600">Emergency Line</p>
                    <a href="tel:+27123456789" className="text-xl font-bold text-gray-800 hover:text-red-600">
                      123-456-789
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <span className="text-red-600 text-2xl mr-4">📱</span>
                  <div>
                    <p className="text-gray-600">Office Line</p>
                    <a href="tel:+27987654321" className="text-gray-800 hover:text-red-600">
                      987-654-321
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <span className="text-red-600 text-2xl mr-4">✉️</span>
                  <div>
                    <p className="text-gray-600">Email</p>
                    <a href="mailto:info@mdso-ems.co.za" className="text-gray-800 hover:text-red-600">
                      info@mdso-ems.co.za
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <span className="text-red-600 text-2xl mr-4">📍</span>
                  <div>
                    <p className="text-gray-600">Address</p>
                    <p className="text-gray-800">123 Main Street<br />Lusikisiki, 4820<br />Eastern Cape</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-red-600">Operating Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Emergency Services:</span>
                  <span className="font-bold text-gray-800">24/7</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Office Hours:</span>
                  <span className="font-bold text-gray-800">Mon - Fri: 8am - 5pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday:</span>
                  <span className="font-bold text-gray-800">9am - 1pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday:</span>
                  <span className="font-bold text-gray-800">Closed (Emergency only)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
