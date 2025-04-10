import React from 'react';
import { useParams } from 'react-router-dom';
import { productDetails } from '../data/productDetails';

function ProductDetail() {
  const { type } = useParams();
  const details = productDetails[type || ''] || [];

  if (!details.length) {
    return <div>Product not found</div>;
  }

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">{type?.toUpperCase()} Pipes</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {details.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Specifications:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {product.specifications.map((spec, i) => (
                      <li key={i}>{spec}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <span className="text-sm text-gray-500">Price:</span>
                  <p className="font-semibold text-blue-600">{product.price}</p>
                </div>
                <a
                  href="#contact"
                  className="block w-full bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 transition"
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

export default ProductDetail;