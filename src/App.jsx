import { ReactLenis } from 'lenis/react';
import { LanguageProvider } from './contexts/LanguageContext';
import styles from './App.module.css';
import { Analytics } from "@vercel/analytics/react"

import HeroSection from './components/HeroSection/HeroSection';
import GallerySection from './components/GallerySection/GallerySection';
import AboutSection from './components/AboutSection/AboutSection';
import CharacterShowcaseSection from './components/CharacterShowcaseSection/CharacterShowcaseSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <LanguageProvider>
      <Analytics />
      <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
        <div className={styles.appContainer}>
          <HeroSection />
          <GallerySection />
          <AboutSection />
          <CharacterShowcaseSection />
          <Footer />
        </div>
      </ReactLenis>
    </LanguageProvider>
  );
}

export default App;
