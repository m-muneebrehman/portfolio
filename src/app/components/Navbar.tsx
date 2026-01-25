import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';

export function Navbar() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  
  const navOpacity = useTransform(scrollY, [100, 200], [0, 1]);
  const navY = useTransform(scrollY, [100, 200], [-20, 0]);

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsVisible(latest > 100);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <motion.nav
      style={{ opacity: navOpacity, y: navY }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#1a1a1a]/80 border-b border-[#333333]/50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-2xl tracking-tight font-light hover:text-[#a78bfa] transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          Muneeb
        </motion.button>

        <div className="flex gap-8 md:gap-12">
          {[
            { id: 'about', label: 'About' },
            { id: 'services', label: 'Services' },
            { id: 'contact', label: 'Contact' },
          ].map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm tracking-wider uppercase text-[#b0b0b0] hover:text-[#a78bfa] transition-colors relative group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#a78bfa] group-hover:w-full transition-all duration-300" />
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
