import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title text-gray-800">About MD-SO EMS</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-red-600 mb-4">
              Your Trusted Partner in Emergency Medical Services
            </h3>
            <p className="text-gray-700 mb-4">
              MD-SO Emergency Medical Services has been serving the Lusikisiki community and surrounding areas with dedication and professionalism. As a private ambulance service, we understand the critical importance of timely and reliable medical transport.
            </p>
            <p className="text-gray-700 mb-6">
              Our team consists of qualified paramedics and emergency medical technicians who are committed to providing the highest standard of care during transport. We pride ourselves on our rapid response times and compassionate service.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-red-600 text-xl mr-3">✓</span>
                <div>
                  <h4 className="font-bold text-gray-800">Professional Team</h4>
                  <p className="text-gray-600">Qualified paramedics and EMTs with extensive experience</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-red-600 text-xl mr-3">✓</span>
                <div>
                  <h4 className="font-bold text-gray-800">Modern Fleet</h4>
                  <p className="text-gray-600">Well-maintained ambulances with latest medical equipment</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-red-600 text-xl mr-3">✓</span>
                <div>
                  <h4 className="font-bold text-gray-800">Community Focused</h4>
                  <p className="text-gray-600">Deep understanding of local healthcare needs and challenges</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-red-600 text-xl mr-3">✓</span>
                <div>
                  <h4 className="font-bold text-gray-800">24/7 Availability</h4>
                  <p className="text-gray-600">Round-the-clock service, every day of the year</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats/Image Section */}
          <div className="bg-gradient-to-br from-red-50 to-blue-50 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600">24/7</div>
                <div className="text-gray-700">Emergency Service</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600">15+</div>
                <div className="text-gray-700">Medical Staff</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600">5+</div>
                <div className="text-gray-700">Ambulances</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600">1000+</div>
                <div className="text-gray-700">Patients Served</div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1587745418805-3c8cfec0a502?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Ambulance"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4">
                <p className="font-bold text-red-600">Serving Lusikisiki</p>
                <p className="text-sm text-gray-600">Since 2015</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
