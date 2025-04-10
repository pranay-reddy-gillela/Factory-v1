import React from 'react';
import { Building2, MapPin, Phone, Mail, Navigation } from 'lucide-react';

function Contact() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <form className="space-y-6">
              <div>
                <label className="block mb-2 font-medium">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Phone</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Message</label>
                <textarea 
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 h-32"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Building2 className="text-blue-600" size={24} />
                  <div>
                    <h3 className="font-semibold">Company</h3>
                    <p className="text-gray-600">Sri Sai Balaji Spun Pipes Industries Pvt Ltd</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="text-blue-600" size={24} />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600">Nawabpet Road, Mahabubnagar,<br />Telangana, India</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-blue-600" size={24} />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">+91 9999999999</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-blue-600" size={24} />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">contact@srisaibalajipi.com</p>
                  </div>
                </div>
              </div>
              

              <div className="mt-8">
                <h3 className="font-semibold mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={() => window.open('https://maps.google.com/?q=sri+sai+balaji+spun+pipes+mahabubnagar', '_blank')}
                className="w-full bg-gray-800 text-white py-3 rounded font-semibold hover:bg-gray-900 transition flex items-center justify-center gap-2"
              >
                <Navigation size={18} />
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;