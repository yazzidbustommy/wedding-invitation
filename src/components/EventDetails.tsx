import React from 'react';
import { events } from '../data/weddingData';
import { Calendar, Clock, MapPin } from 'lucide-react';

const EventDetails: React.FC = () => {
  return (
    <section id="events" className="py-16 bg-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl text-gray-800 mb-2">Wedding Events</h2>
          <p className="text-gray-600 max-w-lg mx-auto">Join us as we celebrate our special day with family and friends</p>
          <div className="w-16 h-0.5 bg-pink-300 mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div 
              key={event.id} 
              className="bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-serif text-xl text-gray-800 mb-4">{event.title}</h3>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-pink-400 mr-3" />
                  <span className="text-gray-700">{event.date}</span>
                </div>
                
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-pink-400 mr-3" />
                  <span className="text-gray-700">{event.time}</span>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-pink-400 mr-3" />
                  <span className="text-gray-700">{event.location}</span>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;