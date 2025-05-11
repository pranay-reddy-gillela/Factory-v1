import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

function Products() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((category) => (
            <Link 
              key={category.id}
              to={`/products/${category.type}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-50 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <span className="text-blue-600 font-semibold">View Details →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;