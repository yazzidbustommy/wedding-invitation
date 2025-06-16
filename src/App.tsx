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
    // Function to extract and process guest name from URL
    const extractGuestName = () => {
      let nameFromUrl = '';
      
      // Method 1: Query parameter (?nama=John-Doe or ?name=John-Doe)
      const urlParams = new URLSearchParams(window.location.search);
      nameFromUrl = urlParams.get('nama') || urlParams.get('name') || '';
      
      // Method 2: Hash parameter (#nama=John-Doe or #name=John-Doe)
      if (!nameFromUrl && window.location.hash) {
        const hashContent = window.location.hash.substring(1); // Remove #
        
        // Check if it's a parameter format (#nama=value)
        if (hashContent.includes('=')) {
          const hashParams = new URLSearchParams(hashContent);
          nameFromUrl = hashParams.get('nama') || hashParams.get('name') || '';
        } else {
          // Direct hash format (#JohnDoe)
          nameFromUrl = hashContent;
        }
      }
      
      // Method 3: Path parameter (/John-Doe)
      if (!nameFromUrl) {
        const path = window.location.pathname;
        const nameFromPath = path.substring(1); // Remove leading slash
        
        // Only use path if it's not empty and doesn't contain file extensions
        if (nameFromPath && 
            nameFromPath !== '' && 
            !nameFromPath.includes('.') && 
            !nameFromPath.includes('/')) {
          nameFromUrl = nameFromPath;
        }
      }
      
      // Process the name if found
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
      pathname: window.location.pathname,
      search: window.location.search,
      hash: window.location.hash,
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