import { motion } from 'motion/react';
import { useInView } from '@/app/hooks/useInView';

export function Introduction() {
  const { ref, isInView } = useInView();

  return (
    <section 
      id="about"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 md:px-12 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl"
      >
        <div className="relative">
          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '4rem' } : { width: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="h-[2px] bg-gradient-to-r from-[#a78bfa] to-[#ec4899] mb-8"
          />
          
          <h2 className="text-5xl md:text-6xl mb-12 tracking-tight font-light bg-gradient-to-r from-white to-[#a78bfa] bg-clip-text text-transparent">
            About
          </h2>
        </div>
        
        <p className="text-xl md:text-2xl leading-relaxed text-[#b0b0b0] font-light mb-8">
          I build software that's fast, functional, and actually useful. From full-stack web apps to automation and AI-powered tools, I turn ideas into systems that scale and don't break.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap gap-4 mt-12"
        >
          {['Design', 'Development','Full-stack development', 'Web apps', 'Automation'].map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="px-6 py-3 border border-[#a78bfa]/30 text-[#a78bfa] hover:bg-[#a78bfa]/10 transition-colors cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}