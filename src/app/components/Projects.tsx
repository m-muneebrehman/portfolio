import { motion } from 'motion/react';
import { useInView } from '@/app/hooks/useInView';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of your project and the technologies used.',
    tags: ['React', 'TypeScript', 'Tailwind'],
    liveUrl: '#',
  },
  {
    title: 'Project Two',
    description: 'A brief description of your project and the technologies used.',
    tags: ['Next.js', 'Node.js', 'MongoDB'],
    liveUrl: '#',
  },
  {
    title: 'Project Three',
    description: 'A brief description of your project and the technologies used.',
    tags: ['Python', 'FastAPI', 'PostgreSQL'],
    liveUrl: '#',
  },
  {
    title: 'Project Four',
    description: 'A brief description of your project and the technologies used.',
    tags: ['Vue.js', 'Firebase', 'Stripe'],
    liveUrl: '#',
  },
];

export function Projects() {
  const { ref, isInView } = useInView();

  return (
    <section 
      id="projects"
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
            Projects
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut",
                delay: index * 0.1 
              }}
              className="group relative border border-[#333333] hover:border-[#a78bfa]/50 transition-all duration-500 bg-gradient-to-br from-transparent to-[#a78bfa]/5 hover:to-[#a78bfa]/10 overflow-hidden"
            >
              <div className="p-6 md:p-8 relative z-10">
                <h3 className="text-2xl md:text-3xl mb-3 tracking-tight font-light transition-colors group-hover:text-white">
                  {project.title}
                </h3>
                
                <p className="text-[#999999] leading-relaxed mb-4 font-light">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs tracking-wider uppercase px-3 py-1 border border-[#444444] text-[#b0b0b0] hover:border-[#a78bfa]/50 hover:text-[#a78bfa] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-4">
                  <a 
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-sm tracking-wider uppercase text-[#b0b0b0] hover:text-[#a78bfa] transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
