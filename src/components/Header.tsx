import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Heart className={`w-5 h-5 ${isScrolled ? 'text-pink-400' : 'text-white'}`} />
            <span className={`ml-2 font-serif text-xl ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              Yazid & Tifa
            </span>
          </div>
          
          <nav>
            <ul className="flex space-x-6">
              {['Home', 'Events', 'Gallery', 'Story', 'RSVP'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className={`text-sm font-medium transition-colors hover:text-pink-400 ${
                      isScrolled ? 'text-gray-600' : 'text-white'
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;