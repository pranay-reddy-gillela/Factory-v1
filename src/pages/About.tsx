import { Building2 } from 'lucide-react';

function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1590086782957-93c06ef21604?auto=format&fit=crop&q=80"
              alt="Factory"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Sri Sai Balaji Spun Pipes Industries has been at the forefront of RCC pipe manufacturing in Telangana. 
              Founded with a vision to provide high-quality infrastructure solutions, we have grown to become one of the 
              region's most trusted manufacturers of RCC pipes and related products.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our state-of-the-art manufacturing facility in Mahabubnagar is equipped with modern machinery and staffed 
              by skilled professionals who ensure that every product meets the highest quality standards.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Quality Commitment</h3>
            <p className="text-gray-600">
              Every product undergoes rigorous testing procedures, including load testing and water testing, 
              ensuring compliance with industry standards and government specifications.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Infrastructure</h3>
            <p className="text-gray-600">
              Our facility spans across a vast area, housing modern machinery, testing equipment, and 
              storage facilities to maintain consistent production quality and timely delivery.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Expert Team</h3>
            <p className="text-gray-600">
              Our team of experienced and skilled workers ensures precision in manufacturing 
              and maintains the highest quality standards in every product.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Manufacturing Excellence</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Raw Materials</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Premium quality cement (50kg bags)</li>
                <li>High-grade iron rods and wire</li>
                <li>Carefully selected sand and metal aggregates</li>
                <li>Precise material proportions for different pipe specifications</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quality Control</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Regular load testing for NP3 and NP4 pipes</li>
                <li>Water testing for pressure pipes</li>
                <li>Supervision by experienced engineers</li>
                <li>Compliance with government specifications</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 text-xl font-semibold text-blue-900">
            <Building2 size={24} />
            <span>Led by D Tirumaleshwar Reddy</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;