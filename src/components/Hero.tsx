import React, { useEffect, useState } from 'react';
import { coupleInfo } from '../data/weddingData';

interface HeroProps {
  guestName?: string;
}

const Hero: React.FC<HeroProps> = ({ guestName }) => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{ 
        backgroundImage: 'url(https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' 
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-16 h-16 opacity-60 animate-float-slow">
          <div className="w-full h-full rounded-full border border-white"></div>
        </div>
        <div className="absolute bottom-20 right-20 w-24 h-24 opacity-40 animate-float-medium">
          <div className="w-full h-full rounded-full border border-white"></div>
        </div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 opacity-30 animate-float-fast">
          <div className="w-full h-full rounded-full border border-white"></div>
        </div>
      </div>
      
      <div className="relative z-10 text-center px-4">
        <div 
          className={`transform transition-all duration-1000 ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {guestName && (
            <div className="mb-6">
              <p className="text-pink-200 text-lg">Kepada Yth.</p>
              <p className="text-white text-2xl font-medium">{guestName}</p>
              <div className="w-16 h-0.5 bg-pink-300 mx-auto mt-2"></div>
            </div>
          )}
          
          <p className="text-white text-xl mb-2 font-light">Undangan Pernikahan</p>
          <h1 className="font-serif text-white text-4xl md:text-6xl mb-4">
            {coupleInfo.groomFullName}
            <br />&<br />
            {coupleInfo.brideFullName}
          </h1>
          <div className="w-24 h-0.5 bg-pink-300 mx-auto mb-6"></div>
          <p className="text-white text-xl font-light">
            {new Date(coupleInfo.weddingDate).toLocaleDateString('id-ID', { 
              day: 'numeric', 
              month: 'long', 
              year: 'numeric'
            })}
          </p>
          <button className="mt-8 px-8 py-3 bg-white bg-opacity-20 hover:bg-opacity-30 text-white border border-white transition-all duration-300 rounded-sm">
            <a href="#rsvp">Konfirmasi Kehadiran</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;