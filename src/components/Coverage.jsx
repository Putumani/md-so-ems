import React from 'react';

const Coverage = () => {
  const hospitals = [
    { name: "St. Patrick's Hospital", area: "Lusikisiki" },
    { name: "Holy Cross Hospital", area: "Flagstaff" },
    { name: "Zithulele Hospital", area: "Mqanduli" },
    { name: "Nelson Mandela Academic Hospital", area: "Mthatha" },
    { name: "Bedford Orthopaedic Hospital", area: "Mthatha" },
    { name: "Greenville Hospital", area: "Tabankulu" }
  ];

  const areas = [
    "Lusikisiki", "Flagstaff", "Mthatha", "Port St Johns",
    "Libode", "Ngqeleni", "Qumbu", "Mount Frere",
    "Mount Ayliff", "Tabankulu", "Mqanduli", "Elliotdale"
  ];

  return (
    <section id="coverage" className="py-20 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title text-gray-800">Coverage Area</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map Representation */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-6 text-red-600">Service Coverage</h3>
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
              <div className="p-4 bg-gradient-to-br from-red-50 to-blue-50 h-full">
                <div className="relative w-full h-full">
                  {/* Simple map representation */}
                  <svg viewBox="0 0 400 300" className="w-full h-full">
                    {/* Eastern Cape outline (simplified) */}
                    <path
                      d="M50,50 L350,50 L350,250 L50,250 Z"
                      fill="none"
                      stroke="#dc2626"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                    {/* Lusikisiki (center) */}
                    <circle cx="200" cy="150" r="8" fill="#dc2626" />
                    <text x="210" y="140" fontSize="12" fill="#1f2937">Lusikisiki</text>
                    
                    {/* Hospital locations */}
                    <circle cx="150" cy="100" r="5" fill="#3b82f6" />
                    <text x="160" y="90" fontSize="10" fill="#1f2937">St. Patrick's</text>
                    
                    <circle cx="280" cy="120" r="5" fill="#3b82f6" />
                    <text x="290" y="110" fontSize="10" fill="#1f2937">Holy Cross</text>
                    
                    <circle cx="220" cy="200" r="5" fill="#3b82f6" />
                    <text x="230" y="190" fontSize="10" fill="#1f2937">Zithulele</text>
                    
                    <circle cx="320" cy="180" r="5" fill="#3b82f6" />
                    <text x="330" y="170" fontSize="10" fill="#1f2937">Nelson Mandela</text>
                  </svg>
                </div>
              </div>
            </div>
            <p className="mt-4 text-gray-600 text-sm">
              * Map is for illustrative purposes. We serve all areas within the Eastern Cape region.
            </p>
          </div>

          {/* Coverage Details */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-red-600">Hospitals We Serve</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {hospitals.map((hospital, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow hover:shadow-md transition">
                  <h4 className="font-bold text-gray-800">{hospital.name}</h4>
                  <p className="text-gray-600">{hospital.area}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-6 text-red-600">Service Areas</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {areas.map((area, index) => (
                <div key={index} className="bg-white rounded-lg p-2 text-center shadow-sm">
                  <span className="text-gray-700">{area}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 rounded-lg p-6">
              <h4 className="font-bold text-blue-800 mb-2">Extended Coverage Available</h4>
              <p className="text-blue-700">
                Need transport to hospitals beyond our standard coverage? Contact us for special arrangements.
                We can facilitate transport to hospitals in East London, Port Elizabeth, and other major centers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
