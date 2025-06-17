import React from 'react';
import { events } from '../data/weddingData';
import { Calendar, Clock, MapPin, ChevronDown, ExternalLink } from 'lucide-react';

const EventDetails: React.FC = () => {
  const scrollToRSVP = () => {
    const rsvpSection = document.getElementById('rsvp');
    if (rsvpSection) {
      rsvpSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="events" className="py-16 bg-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl text-gray-800 mb-2">Rangkaian Acara</h2>
          <p className="text-gray-600 max-w-lg mx-auto mb-4">
            Kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri rangkaian acara pernikahan kami
          </p>
          <div className="w-16 h-0.5 bg-pink-300 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
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
              
              {/* Button Buka Peta hanya untuk resepsi */}
              {event.id !== 'akad' && (
                <button
                  onClick={() => window.open(event.mapsUrl, '_blank')}
                  className="w-full mt-4 px-4 py-2 bg-pink-400 hover:bg-pink-500 text-white rounded-md transition-colors flex items-center justify-center"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Buka Peta
                </button>
              )}
            </div>
          ))}
        </div>
        
        {/* Button scroll ke RSVP */}
        <div className="text-center">
          <button 
            onClick={scrollToRSVP}
            className="px-8 py-3 bg-pink-400 hover:bg-pink-500 text-white rounded-sm transition-all duration-300 flex items-center justify-center mx-auto group"
          >
            <span className="mr-2">Kirim Ucapan dan Doa</span>
            <ChevronDown className="w-5 h-5 group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;