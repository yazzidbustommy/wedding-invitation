import React from 'react';
import { timelineEvents } from '../data/weddingData';

const Timeline: React.FC = () => {
  return (
    <section id="story" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl text-gray-800 mb-2">Our Love Story</h2>
          <p className="text-gray-600 max-w-lg mx-auto">The journey that led us to forever</p>
          <div className="w-16 h-0.5 bg-pink-300 mx-auto mt-4"></div>
        </div>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-pink-100"></div>
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div 
                key={event.id} 
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                }`}
              >
                {/* Timeline content */}
                <div className="w-5/12"></div>
                
                {/* Circle marker */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-pink-300 z-10"></div>
                
                {/* Content */}
                <div 
                  className={`w-5/12 bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg ${
                    index % 2 === 0 ? 'text-right mr-8' : 'ml-8'
                  }`}
                >
                  <span className="inline-block px-3 py-1 bg-pink-50 text-pink-500 text-xs rounded mb-2">
                    {event.date}
                  </span>
                  <h3 className="font-serif text-xl text-gray-800 mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;