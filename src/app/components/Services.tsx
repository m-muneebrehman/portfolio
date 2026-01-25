import { motion } from 'motion/react';
import { useInView } from '@/app/hooks/useInView';
import { Sparkles, Code, Palette, MessageCircle, Layout, ShoppingCart, TrendingUp, Zap, FileText, Server } from 'lucide-react';

const services = [
{
  title: 'Web Design',
  description: 'Crafting sleek, user-focused designs that grab attention and drive action.',
  icon: Palette,
  color: '#a78bfa',
},
{
  title: 'Development',
  description: 'Building fast, scalable web apps that actually work under pressure.',
  icon: Code,
  color: '#ec4899',
},
{
  title: 'E-commerce Solutions',
  description: 'Creating secure, lightning-fast online stores optimized to convert.',
  icon: ShoppingCart,
  color: '#10b981',
},
{
  title: 'SEO & Performance',
  description: 'Boosting site visibility, speed, and engagement to dominate search results.',
  icon: TrendingUp,
  color: '#3b82f6',
},
{
  title: 'Automation & Workflow',
  description: 'Streamlining processes with smart automation to save time and cut errors.',
  icon: Zap,
  color: '#f97316',
},
{
  title: 'API & Backend Integration',
  description: 'Seamlessly connecting apps with reliable backend systems and services.',
  icon: Server,
  color: '#ef4444',
},
];

export function Services() {
  const { ref, isInView } = useInView();

  return (
    <section 
      id="services"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 md:px-12 py-24 relative"
    >
      <div className="max-w-6xl w-full">
        <div className="relative mb-20">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '4rem' } : { width: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="h-[2px] bg-gradient-to-r from-[#a78bfa] to-[#ec4899] mb-8"
          />
          
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-6xl tracking-tight font-light bg-gradient-to-r from-white to-[#a78bfa] bg-clip-text text-transparent"
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
                className="group relative p-8 border border-[#333333] hover:border-[#a78bfa]/50 transition-all duration-500 bg-gradient-to-br from-transparent to-[#a78bfa]/5 hover:to-[#a78bfa]/10"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#a78bfa]/0 to-[#ec4899]/0 group-hover:from-[#a78bfa]/5 group-hover:to-[#ec4899]/5 transition-all duration-500 pointer-events-none" />
                
                <div className="relative z-10">
                  <Icon 
                    className="w-10 h-10 mb-6 transition-all duration-500 group-hover:scale-110" 
                    style={{ color: service.color }}
                    strokeWidth={1.5}
                  />
                  
                  <h3 className="text-2xl md:text-3xl mb-4 tracking-tight font-light transition-colors group-hover:text-white">
                    {service.title}
                  </h3>
                  
                  <p className="text-lg text-[#b0b0b0] leading-relaxed font-light group-hover:text-[#d0d0d0] transition-colors">
                    {service.description}
                  </p>
                </div>

                {/* Decorative corner */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                  className="absolute top-0 right-0 w-20 h-20 border-t border-r border-[#a78bfa]/20 group-hover:border-[#a78bfa]/50 transition-colors"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}