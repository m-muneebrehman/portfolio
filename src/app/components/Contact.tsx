import { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from '@/app/hooks/useInView';
import { Send, Mail, Github, Linkedin } from 'lucide-react';

export function Contact() {
  const { ref, isInView } = useInView();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isFocused, setIsFocused] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:umuhammadmuneeb@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:umuhammadmuneeb@gmail.com' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/m-muneebrehman' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/muhammad-muneeb-rehman/' },
  ];

  return (
    <section 
      id="contact"
      ref={ref}
      className="flex items-center justify-start px-6 md:px-12 py-12 relative scroll-mt-28"
    >
      <div className="max-w-3xl w-full">
        <div className="relative mb-16">
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
            className="text-4xl md:text-5xl mb-4 font-bold tracking-tight text-foreground"
          >
            Let's Work Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Have a project in mind? Get in touch and let's create something extraordinary.
          </motion.p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-8 mb-16"
        >
          <div className="relative">
            <label htmlFor="name" className="block text-sm mb-2 text-muted-foreground font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-card/50 border border-border rounded-lg px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all"
            />
          </div>

          <div className="relative">
            <label htmlFor="email" className="block text-sm mb-2 text-muted-foreground font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-card/50 border border-border rounded-lg px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all"
            />
          </div>

          <div className="relative">
            <label htmlFor="message" className="block text-sm mb-2 text-muted-foreground font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full bg-card/50 border border-border rounded-lg px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all resize-none"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group w-full md:w-auto px-10 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_20px_rgba(79,209,197,0.3)] transition-all duration-300 flex items-center justify-center gap-3"
          >
            Send Message
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.form>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="flex gap-6 justify-center mb-16"
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="w-12 h-12 rounded-lg border border-border hover:border-primary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 group"
                aria-label={social.label}
              >
                <Icon className="w-5 h-5" strokeWidth={1.5} />
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="pt-12 border-t border-border text-center"
        >
          <p className="text-sm text-muted-foreground">
            © 2026 Muneeb. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}