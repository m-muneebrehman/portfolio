import { motion } from 'motion/react';
import { useInView } from '@/app/hooks/useInView';

export function Introduction() {
  const { ref, isInView } = useInView();

  return (
    <section 
      id="about"
      ref={ref}
      className="flex items-center justify-start px-6 md:px-12 py-12 relative scroll-mt-28"
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
            className="h-[2px] bg-primary mb-6"
          />
          
          <h2 className="text-4xl md:text-5xl mb-12 font-bold tracking-tight text-foreground">
            About
          </h2>
        </div>
        
        <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground mb-8">
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
              className="px-5 py-2.5 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/50 bg-card/50 transition-colors cursor-default text-sm font-medium"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}