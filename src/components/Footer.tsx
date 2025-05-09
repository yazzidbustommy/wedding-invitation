import React from 'react';
import { Heart } from 'lucide-react';
import { coupleInfo } from '../data/weddingData';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-4">
            <Heart className="w-5 h-5 text-pink-400 mr-2" />
            <h3 className="font-serif text-xl">
              {coupleInfo.groomShortName} & {coupleInfo.brideShortName}
            </h3>
          </div>
          
          <nav className="mb-6">
            <ul className="flex space-x-6">
              {['Home', 'Events', 'Gallery', 'Story', 'RSVP'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} • {coupleInfo.groomFullName} & {coupleInfo.brideFullName}</p>
            <p className="mt-1">
              With love and joy as we begin our journey together
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;