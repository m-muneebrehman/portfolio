import { motion } from 'motion/react';
import { useInView } from '@/app/hooks/useInView';
import { ExternalLink } from 'lucide-react';

const projects = [ 
    {
    title: 'DataMind',
    description: 'An AI-powered web platform that helps non-technical users understand and analyze business datasets with ease. Users can upload data and instantly receive automated insights, feature summaries, outlier detection, and clear explanations through an AI chat interface.',
    tags: ['React', 'AI', 'Data Analytics'],
    liveUrl: 'https://lnkd.in/dTp6QPAa',
  },
  {
    title: 'SoCal Prime Homes',
    description: 'A Next.js app with built-in CMS for lead generation in the field of real estate.',
    tags: ['Next.js', 'CMS', 'Real Estate'],
    liveUrl: 'https://www.socalprimehomes.com/',
  },
 
  {
    title: 'Yappify',
    description: 'A translation tool with options to translate plain text or even files.',
    tags: ['Translation', 'File Processing', 'Web App'],
    liveUrl: 'https://yappify-delta.vercel.app/',
  },
  {
    title: 'Fast Fuel',
    description: 'A web-based e-commerce platform that provides users with the facility to order fuel and car parts.',
    tags: ['E-commerce', 'Web App', 'Fuel Delivery'],
    liveUrl: 'https://lnkd.in/da7PwgZk',
  },
];

export function Projects() {
  const { ref, isInView } = useInView();

  return (
    <section 
      id="projects"
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
              className="group relative border border-border hover:border-primary/50 transition-all duration-500 bg-card hover:shadow-[0_0_15px_rgba(79,209,197,0.15)] overflow-hidden rounded-xl"
            >
              <div className="p-6 md:p-8 relative z-10">
                <h3 className="text-xl md:text-2xl mb-3 font-semibold tracking-tight text-foreground">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full border border-border text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors bg-secondary/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-4 mt-auto">
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-foreground hover:text-primary transition-colors"
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
