import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, MapPin, Phone } from 'lucide-react';
import { clients } from '../data/clients';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-r from-blue-700 to-green-400">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">Sri Sai Balaji Spun Pipes</h1>
          <p className="text-xl mb-6">Telangana's Leading RCC Manufacturing Industry</p>
          <div className="flex gap-4">
            <Link to="/products" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition">
              View Products
            </Link>
            <Link to="/contact" className="bg-white text-blue-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Quality Assurance</h3>
              <p className="text-gray-600">All our products undergo rigorous testing and meet industry standards.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Government Approved</h3>
              <p className="text-gray-600">Trusted supplier for major government infrastructure projects.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Expert Support</h3>
              <p className="text-gray-600">Our team provides technical guidance and after-sales support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3">
              <Building2 className="text-blue-600" />
              <span className="font-medium">D Tirumaleshwar Reddy (Owner)</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-blue-600" />
              <span>+91 9490127350</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-blue-600" />
              <span>Nawabpet Road, Mahabubnagar, Telangana, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* Major Clients Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Major Clients</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-3">{client.name}</h3>
                  <p className="text-gray-600">{client.description}</p>
                  <p className="text-gray-500 mt-2">{client.projectDetails}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;