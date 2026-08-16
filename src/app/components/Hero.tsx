import { motion, MotionValue } from 'motion/react';

interface HeroProps {
  isLoaded: boolean;
  heroOpacity: MotionValue<number>;
  heroScale: MotionValue<number>;
  heroY: MotionValue<number>;
}

export function Hero({ isLoaded, heroOpacity, heroScale, heroY }: HeroProps) {
  return (
    <section className="h-screen flex items-center justify-center relative pointer-events-none overflow-hidden">
      <div className="relative">
        {/* Glowing backdrop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isLoaded ? 0.15 : 0, scale: isLoaded ? 1 : 0.8 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[400px] sm:h-[600px] bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/50 via-primary/10 to-transparent -z-10 rounded-full blur-2xl pointer-events-none"
          style={{
            opacity: heroOpacity,
            scale: heroScale,
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            opacity: heroOpacity,
            y: heroY,
          }}
          className="flex justify-center mb-6"
        >
          <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium tracking-wide uppercase shadow-[0_0_15px_rgba(79,209,197,0.15)]">
            Full-Stack Developer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          style={{
            opacity: heroOpacity,
            scale: heroScale,
            y: heroY,
          }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground text-center"
        >
          Muhammad Muneeb ur Rehman
        </motion.h1>

        {/* Subtitle that fades in after name */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          style={{ opacity: heroOpacity }}
          className="text-center mt-8 text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed"
        >
          I don’t write code. I make ideas work.
        </motion.p>


      </div>
    </section>
  );
}