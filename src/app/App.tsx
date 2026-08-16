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
    <div className="bg-background text-foreground min-h-screen relative overflow-x-hidden">
      {/* Subtle grid background */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto w-full px-4 sm:px-6 lg:px-8">
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
        <main className="flex flex-col gap-4 pb-24 relative z-20">
          <Introduction />
          <Services />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}