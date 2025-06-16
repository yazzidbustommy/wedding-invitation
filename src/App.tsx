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
    // Get guest name from URL path
    const path = window.location.pathname;
    const nameFromPath = path.substring(1); // Remove leading slash
    
    if (nameFromPath) {
      // Decode URL and replace hyphens/underscores with spaces
      const decodedName = decodeURIComponent(nameFromPath)
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