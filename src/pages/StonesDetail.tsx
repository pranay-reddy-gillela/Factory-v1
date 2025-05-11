import React from 'react';

const stones = [
  {
    title: "Hectometer Stone (HM)",
    description: "Distance marker placed every 200 meters",
    specifications: [
      "Placed every 200 meters",
      "4 HM stones per 1 KM",
      "Durable construction",
      "Standard government specifications"
    ],
    price: "₹600 - ₹900",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqNpYCAxbj7wvElw658Ge6Kv6V2XJsXYupdQ&s"
  },
  {
    title: "Kilometer Stone (KM)",
    description: "Major distance marker for every kilometer",
    specifications: [
      "Placed every 1 kilometer",
      "Larger size than HM stones",
      "Durable construction",
      "Standard government specifications"
    ],
    price: "₹800",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLsXgZETcgTmNVZzJqBDnjwbHlY8iJ185ZCw&s"
  }
];

function StonesDetail() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Distance Marker Stones</h1>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {stones.map((stone, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={stone.image}
                alt={stone.title}
                className="w-full  "
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{stone.title}</h3>
                <p className=" mb-4">{stone.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Description:</h4>
                  <ul className="list-disc list-inside space-y-1 ">
                    {stone.specifications.map((spec, i) => (
                      <li key={i}>{spec}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <span className="text-sm text-gray-500">Price:</span>
                  <p className="font-semibold text-blue-600">{stone.price}</p>
                </div>
                <a
                  href="#contact"
                  className="block w-full bg-green-600 text-white text-center py-2  hover:bg-blue-700 transition"
                >
                  Get Quotation
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StonesDetail;