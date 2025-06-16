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
    // Get guest name from URL parameters or hash
    const urlParams = new URLSearchParams(window.location.search);
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    
    // Try to get name from different URL formats
    let nameFromUrl = '';
    
    // Method 1: Query parameter (?nama=John-Doe)
    nameFromUrl = urlParams.get('nama') || urlParams.get('name') || '';
    
    // Method 2: Hash parameter (#nama=John-Doe)
    if (!nameFromUrl) {
      nameFromUrl = hashParams.get('nama') || hashParams.get('name') || '';
    }
    
    // Method 3: Path parameter (/John-Doe)
    if (!nameFromUrl) {
      const path = window.location.pathname;
      const nameFromPath = path.substring(1); // Remove leading slash
      if (nameFromPath && nameFromPath !== '' && !nameFromPath.includes('.')) {
        nameFromUrl = nameFromPath;
      }
    }
    
    if (nameFromUrl) {
      // Decode URL and replace hyphens/underscores with spaces
      const decodedName = decodeURIComponent(nameFromUrl)
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase()); // Capitalize first letter of each word
      setGuestName(decodedName);
    }

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