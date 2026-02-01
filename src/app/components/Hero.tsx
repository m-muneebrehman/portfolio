import { motion, MotionValue } from 'motion/react';

interface HeroProps {
  isLoaded: boolean;
  heroOpacity: MotionValue<number>;
  heroScale: MotionValue<number>;
  heroY: MotionValue<number>;
}

export function Hero({ isLoaded, heroOpacity, heroScale, heroY }: HeroProps) {
  return (
    <section className="h-screen flex items-center justify-center sticky top-0 pointer-events-none">
      <div className="relative">
        {/* Glowing backdrop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isLoaded ? 0.3 : 0, scale: isLoaded ? 1 : 0.8 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 blur-3xl bg-gradient-to-r from-[#a78bfa]/20 to-[#ec4899]/20 -z-10"
          style={{
            opacity: heroOpacity,
            scale: heroScale,
          }}
        />
        
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            opacity: heroOpacity,
            scale: heroScale,
            y: heroY,
          }}
          className="text-4xl sm:text-5xl md:text-6xl tracking-tight font-light bg-gradient-to-br from-white via-[#e0e0e0] to-[#a78bfa] bg-clip-text text-transparent"
        >
          Muhammad Muneeb ur Rehman
        </motion.h1>

        {/* Subtitle that fades in after name */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          style={{ opacity: heroOpacity }}
          className="text-center mt-6 text-lg md:text-xl tracking-widest uppercase text-[#b0b0b0] font-light"
        >
          I don’t write code. I make ideas work.
        </motion.p>

        {/* Scroll indicator */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          style={{ opacity: heroOpacity }}
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 pointer-events-auto"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border border-[#666666] rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-[#a78bfa] rounded-full"
            />
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  );
}