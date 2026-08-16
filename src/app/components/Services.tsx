import { motion } from 'motion/react';
import { useInView } from '@/app/hooks/useInView';
import { Sparkles, Code, Palette, MessageCircle, Layout, ShoppingCart, TrendingUp, Zap, FileText, Server } from 'lucide-react';

const services = [
  {
    title: 'Full-Stack Development',
    description: 'Building fast, scalable web apps that actually work under pressure.',
    icon: Code,
  },
  {
    title: 'Web Design',
    description: 'Crafting sleek, user-focused designs that grab attention and drive action.',
    icon: Palette,
  },
  {
    title: 'Automation & Workflow',
    description: 'Streamlining processes with smart automation to save time and cut errors.',
    icon: Zap,
  },
  {
    title: 'API & Backend Integration',
    description: 'Seamlessly connecting apps with reliable backend systems and services.',
    icon: Server,
  },
  {
    title: 'E-commerce Solutions',
    description: 'Creating secure, lightning-fast online stores optimized to convert.',
    icon: ShoppingCart,
  },
  {
    title: 'SEO & Performance',
    description: 'Boosting site visibility, speed, and engagement to dominate search results.',
    icon: TrendingUp,
  },
];

export function Services() {
  const { ref, isInView } = useInView();

  return (
    <section 
      id="services"
      ref={ref}
      className="flex items-center justify-start px-6 md:px-12 py-12 relative scroll-mt-28"
    >
      <div className="max-w-6xl w-full">
        <div className="relative mb-20">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '4rem' } : { width: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="h-[2px] bg-primary mb-6"
          />
          
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-foreground"
          >
            Services
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ 
                  duration: 0.8, 
                  ease: "easeOut",
                  delay: index * 0.1 
                }}
                className="group relative p-8 border border-border hover:border-primary/50 transition-all duration-500 bg-card hover:shadow-[0_0_15px_rgba(79,209,197,0.15)] rounded-xl"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 mb-6 rounded-lg bg-primary/10 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/20">
                    <Icon 
                      className="w-6 h-6 text-primary" 
                      strokeWidth={1.5}
                    />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl mb-3 font-semibold tracking-tight text-foreground">
                    {service.title}
                  </h3>
                  
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}