import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import EventDetails from './components/EventDetails';
import Timeline from './components/Timeline';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import WelcomeScreen from './components/WelcomeScreen';
import { coupleInfo } from './data/weddingData';

function App() {
  const [guestName, setGuestName] = useState<string>('');
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Function to extract guest name from URL parameter ?to=nama_tamu
    const extractGuestName = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const nameFromUrl = urlParams.get('to') || '';
      
      if (nameFromUrl) {
        // Decode URL encoding
        let processedName = decodeURIComponent(nameFromUrl);
        
        // Replace hyphens and underscores with spaces
        processedName = processedName.replace(/[-_]/g, ' ');
        
        // Capitalize first letter of each word
        processedName = processedName.replace(/\b\w/g, l => l.toUpperCase());
        
        // Clean up extra spaces
        processedName = processedName.replace(/\s+/g, ' ').trim();
        
        return processedName;
      }
      
      return '';
    };

    const extractedName = extractGuestName();
    setGuestName(extractedName);

    // Debug logging
    console.log('URL Analysis:', {
      fullUrl: window.location.href,
      search: window.location.search,
      toParameter: new URLSearchParams(window.location.search).get('to'),
      extractedName: extractedName
    });

    // Update page title
    document.title = `Wedding of ${coupleInfo.groomShortName} & ${coupleInfo.brideShortName}`;
  }, []);

  const handleOpenInvitation = () => {
    setShowWelcome(false);
  };

  if (showWelcome) {
    return <WelcomeScreen guestName={guestName} onOpenInvitation={handleOpenInvitation} />;
  }

  return (
    <div className="font-sans text-gray-800 antialiased">
      <Header />
      <main>
        <Hero guestName={guestName} />
        <Countdown />
        <EventDetails />
        <Timeline />
        <RSVP guestName={guestName} />
      </main>
      <Footer />
    </div>
  );
}

export default App;