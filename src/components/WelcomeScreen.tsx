import React, { useEffect, useState } from 'react';
import { Heart, Mail } from 'lucide-react';
import { coupleInfo } from '../data/weddingData';

interface WelcomeScreenProps {
  guestName: string;
  onOpenInvitation: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ guestName, onOpenInvitation }) => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
    
    // Debug information
    const urlParams = new URLSearchParams(window.location.search);
    const toParam = urlParams.get('to');
    
    console.log('Welcome Screen Debug:', {
      url: window.location.href,
      search: window.location.search,
      toParameter: toParam,
      guestName: guestName
    });
  }, [guestName]);

  return (
    <div 
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative overflow-hidden"
      style={{ 
        backgroundImage: 'url(https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' 
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Floating decorative elements */}
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
      
      <div className="relative z-10 text-center px-4 max-w-md mx-auto">
        <div 
          className={`transform transition-all duration-1000 ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="mb-8">
            <Heart className="w-12 h-12 text-pink-300 mx-auto mb-4" />
            <h1 className="font-serif text-white text-2xl mb-2">Undangan Pernikahan</h1>
            <div className="w-16 h-0.5 bg-pink-300 mx-auto"></div>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 mb-8">
            <h2 className="font-serif text-white text-3xl mb-4">
              {coupleInfo.groomShortName} & {coupleInfo.brideShortName}
            </h2>
            
            <div className="mb-6">
              <p className="text-pink-200 text-lg mb-2">Kepada Yth.</p>
              {guestName ? (
                <div>
                  <p className="text-white text-xl font-medium bg-white bg-opacity-20 rounded-lg py-3 px-4 border border-white border-opacity-30">
                    {guestName}
                  </p>
                  <p className="text-green-300 text-xs mt-2 flex items-center justify-center">
                    <span className="w-2 h-2 bg-green-300 rounded-full mr-2"></span>
                    Undangan Personal
                  </p>
                </div>
              ) : (
                <div>
                  <p className="text-white text-lg bg-white bg-opacity-20 rounded-lg py-3 px-4 border border-white border-opacity-30">
                    Bapak/Ibu/Saudara/i
                  </p>
                  <p className="text-yellow-300 text-xs mt-2 flex items-center justify-center">
                    <span className="w-2 h-2 bg-yellow-300 rounded-full mr-2"></span>
                    Undangan Umum
                  </p>
                </div>
              )}
            </div>
            
            <p className="text-white text-sm mb-6 leading-relaxed">
              Tanpa mengurangi rasa hormat, kami mengundang untuk hadir di acara pernikahan kami
            </p>
          </div>
          
          <button 
            onClick={onOpenInvitation}
            className="group bg-white bg-opacity-20 hover:bg-opacity-30 text-white border border-white px-8 py-3 rounded-sm transition-all duration-300 flex items-center justify-center mx-auto hover:scale-105 transform"
          >
            <Mail className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            Buka Undangan
          </button>
          
          {/* Instructions for personalization */}
          <div className="mt-6 text-xs text-pink-200 opacity-75 bg-black bg-opacity-20 rounded-lg p-3">
            <p className="font-medium mb-1">💡 Cara membuat undangan personal:</p>
            <p className="font-mono text-pink-100">
              ?to=Nama-Tamu
            </p>
            <p className="mt-1 text-pink-300">
              Contoh: ?to=Budi-Santoso
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;