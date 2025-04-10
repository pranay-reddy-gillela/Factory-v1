import React from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  specifications: string[];
  priceRange: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  specifications,
  priceRange,
  image,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Specifications:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            {specifications.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <span className="text-sm text-gray-500">Price Range:</span>
          <p className="font-semibold text-blue-600">{priceRange}</p>
        </div>
        <button
          onClick={() => window.location.href = '#contact'}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Get Quotation
        </button>
      </div>
    </div>
  );
};

export default ProductCard;