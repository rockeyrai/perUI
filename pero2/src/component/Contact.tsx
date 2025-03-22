"use client"
import React, { useState } from 'react';
import { MessageSquare, Mail, Phone, MapPin, X } from 'lucide-react';
import DarkToggle from './DarkToggle';

type Service = 'Website design' | 'UX design' | 'User research' | 'Content creation' | 'Strategy & consulting' | 'Other';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    services: [] as Service[],
  });

  const handleServiceToggle = (service: Service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen  py-12 px-4 dark:bg-blue-500 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-end mb-6">
          <DarkToggle />
        </div>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-red-600 dark:text-red-300  mb-4">Contact our team</h1>
          <p className="text-lg text-white dark:text-gray-300 max-w-2xl mx-auto">
            Got any questions about the product or scaling on our platform? We're here to help.
            Chat to our friendly team 24/7 and get onboard in less than 5 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="mb-8">
                <span className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-3">Services</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['Website design', 'UX design', 'User research', 'Content creation', 'Strategy & consulting', 'Other'].map((service) => (
                    <label
                      key={service}
                      className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
                        formData.services.includes(service as Service)
                          ? 'bg-blue-50 dark:bg-blue-900 border-2 border-blue-500'
                          : 'border-2 border-gray-200 dark:border-gray-600 hover:border-blue-200 dark:hover:border-blue-400'
                      }`}
                    >
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={formData.services.includes(service as Service)}
                        onChange={() => handleServiceToggle(service as Service)}
                      />
                      <span className="text-sm dark:text-gray-200">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-black dark:bg-white text-white dark:text-black py-3 px-6 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium"
              >
                Send message
              </button>
            </form>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 dark:text-white">Chat with us</h3>
                  <div className="space-y-4">
                    <button className="w-full flex items-center justify-center gap-2 py-2 px-4 border-2 border-black dark:border-white rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors dark:text-white">
                      <MessageSquare className="w-5 h-5" />
                      <span>Start a live chat</span>
                    </button>
                    <button className="w-full flex items-center justify-center gap-2 py-2 px-4 border-2 border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors dark:text-white">
                      <Mail className="w-5 h-5" />
                      <span>Send us an email</span>
                    </button>
                    <button className="w-full flex items-center justify-center gap-2 py-2 px-4 border-2 border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors dark:text-white">
                      <X className="w-5 h-5" />
                      <span>Message us on X</span>
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4 dark:text-white">Call us</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Call our team Mon-Fri from 8am to 5pm.</p>
                  <a
                    href="tel:+1555000000"
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+1 (555) 000-0000</span>
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4 dark:text-white">Visit us</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Chat to us in person at our Melbourne HQ.</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    <MapPin className="w-5 h-5" />
                    <span>100 Smith Street, Collingwood VIC 3066</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;