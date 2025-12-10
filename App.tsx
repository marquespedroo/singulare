import React, { useEffect, useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Menu from './components/Menu';
import Hero from './components/Hero';
import ConceptSection from './components/ConceptSection';
import LocationSection from './components/LocationSection';
import InteriorsSection from './components/InteriorsSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Check if device is desktop for custom cursor
    const checkDevice = () => {
      setIsDesktop(window.matchMedia("(min-width: 1024px)").matches);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return (
    <div className="relative bg-ice-white text-graphite selection:bg-bronze selection:text-white min-h-screen">
      {isDesktop && <CustomCursor />}
      
      <Menu />

      <main>
        <Hero />
        <ConceptSection />
        <LocationSection />
        <InteriorsSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;