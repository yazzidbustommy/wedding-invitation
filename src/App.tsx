import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import EventDetails from './components/EventDetails';
import Gallery from './components/Gallery';
import Timeline from './components/Timeline';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import { coupleInfo } from './data/weddingData';

function App() {
  useEffect(() => {
    // Update page title
    document.title = `Wedding of ${coupleInfo.groomShortName} & ${coupleInfo.brideShortName}`;
  }, []);

  return (
    <div className="font-sans text-gray-800 antialiased">
      <Header />
      <main>
        <Hero />
        <Countdown />
        <EventDetails />
        <Gallery />
        <Timeline />
        <RSVP />
      </main>
      <Footer />
    </div>
  );
}

export default App;