import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import ImageSequenceAnimation from './components/ImageSequenceAnimation';
import Stats from './components/Stats';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import QuoteSection from './components/QuoteSection';
import BucketList from './components/BucketList';
import LoveLetters from './components/LoveLetters';
import Dedication from './components/Dedication';
import MusicPlayer from './components/MusicPlayer';
import WelcomeScreen from './components/WelcomeScreen';
import SecretMessages from './components/SecretMessages';
import MemoryDiary from './components/MemoryDiary';
import LoveMailbox from './components/LoveMailbox';
import UpcomingEvents from './components/UpcomingEvents';
import LoveGames from './components/LoveGames';
import { Heart } from 'lucide-react';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-rose-50 font-sans text-gray-800 selection:bg-rose-200 selection:text-rose-900">
      <AnimatePresence>
        {showWelcome && <WelcomeScreen onComplete={() => {
          setShowWelcome(false);
          setIsMusicPlaying(true);
        }} />}
      </AnimatePresence>
      <Hero />
      <ImageSequenceAnimation />
      <Stats />
      <UpcomingEvents />
      <SecretMessages />
      <Timeline />
      <Gallery />
      <LoveGames />
      <MemoryDiary />
      <QuoteSection />
      <BucketList />
      <LoveMailbox />
      <LoveLetters />
      <Dedication />
      <MusicPlayer autoPlay={isMusicPlaying} />

      <footer className="bg-white py-12 text-center text-gray-500 text-sm border-t border-rose-100">
        <p className="flex items-center justify-center gap-2 mb-2 font-medium">
          Hecho con <Heart size={16} className="text-rose-500 fill-rose-500 animate-pulse" /> para timi amor -Sergio
        </p>
        <p className="opacity-60">© {new Date().getFullYear()} Sergio y Karen</p>
      </footer>
    </div>
  );
}

export default App;
