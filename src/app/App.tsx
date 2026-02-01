import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Navbar } from '@/app/components/Navbar';
import { Hero } from '@/app/components/Hero';
import { Introduction } from '@/app/components/Introduction';
import { Services } from '@/app/components/Services';
import { Projects } from '@/app/components/Projects';
import { Contact } from '@/app/components/Contact';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();
  
  // Transform values for the hero name animation
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.4]);
  const heroY = useTransform(scrollY, [0, 300], [0, -200]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="bg-[#1a1a1a] text-[#e0e0e0] min-h-screen relative overflow-x-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#a78bfa]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ec4899]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero 
        isLoaded={isLoaded}
        heroOpacity={heroOpacity}
        heroScale={heroScale}
        heroY={heroY}
      />

      {/* Main Content */}
      <div className="relative z-10">
        <Introduction />
        <Services />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}