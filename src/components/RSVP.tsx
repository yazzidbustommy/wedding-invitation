import React, { useState } from 'react';
import type { RSVPFormData } from '../types';

const RSVP: React.FC = () => {
  const [formData, setFormData] = useState<RSVPFormData>({
    name: '',
    email: '',
    attending: true,
    numberOfGuests: 1,
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: checkbox.checked }));
    } else if (name === 'numberOfGuests') {
      setFormData(prev => ({ ...prev, [name]: parseInt(value) || 0 }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        attending: true,
        numberOfGuests: 1,
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="rsvp" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-gray-800 mb-2">RSVP</h2>
            <p className="text-gray-600">Please let us know if you will be joining us</p>
            <div className="w-16 h-0.5 bg-pink-300 mx-auto mt-4"></div>
          </div>
          
          {submitted ? (
            <div className="text-center bg-green-50 rounded-lg p-8">
              <h3 className="font-serif text-xl text-gray-800 mb-3">Thank You!</h3>
              <p className="text-gray-600">Your RSVP has been submitted. We look forward to celebrating with you!</p>
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit}
              className="bg-pink-50 rounded-lg p-8 shadow-sm"
            >
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-pink-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-300 focus:border-pink-300"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-pink-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-300 focus:border-pink-300"
                />
              </div>
              
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id="attending"
                    name="attending"
                    checked={formData.attending}
                    onChange={handleChange}
                    className="h-4 w-4 text-pink-500 focus:ring-pink-300 border-gray-300 rounded"
                  />
                  <label htmlFor="attending" className="ml-2 block text-sm text-gray-700">
                    I will attend the wedding
                  </label>
                </div>
              </div>
              
              {formData.attending && (
                <div className="mb-6">
                  <label htmlFor="numberOfGuests" className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Guests <span className="text-pink-500">*</span>
                  </label>
                  <select
                    id="numberOfGuests"
                    name="numberOfGuests"
                    value={formData.numberOfGuests}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-300 focus:border-pink-300"
                  >
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
              )}
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message to the Couple
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-300 focus:border-pink-300"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className={`w-full px-6 py-3 ${
                  loading 
                    ? 'bg-gray-400' 
                    : 'bg-pink-400 hover:bg-pink-500'
                } text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-300`}
              >
                {loading ? 'Submitting...' : 'Submit RSVP'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default RSVP;