import { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from '@/app/hooks/useInView';
import { Send, Mail, Github, Linkedin, Twitter } from 'lucide-react';

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
    window.location.href = `mailto:hello@muneeb.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:hello@muneeb.com' },
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
  ];

  return (
    <section 
      id="contact"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 md:px-12 py-24 relative"
    >
      <div className="max-w-3xl w-full">
        <div className="relative mb-16">
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
            className="text-5xl md:text-6xl mb-6 tracking-tight font-light bg-gradient-to-r from-white to-[#a78bfa] bg-clip-text text-transparent"
          >
            Let's Work Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-lg text-[#b0b0b0] font-light"
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
            <label htmlFor="name" className="block text-sm mb-3 text-[#b0b0b0] font-light">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setIsFocused({ ...isFocused, name: true })}
              onBlur={() => setIsFocused({ ...isFocused, name: false })}
              required
              className="w-full bg-transparent border border-[#333333] px-4 py-3 focus:border-[#a78bfa] focus:outline-none transition-colors"
            />
            {isFocused.name && (
              <motion.div
                layoutId="input-border"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#a78bfa] to-[#ec4899]"
              />
            )}
          </div>

          <div className="relative">
            <label htmlFor="email" className="block text-sm mb-3 text-[#b0b0b0] font-light">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setIsFocused({ ...isFocused, email: true })}
              onBlur={() => setIsFocused({ ...isFocused, email: false })}
              required
              className="w-full bg-transparent border border-[#333333] px-4 py-3 focus:border-[#a78bfa] focus:outline-none transition-colors"
            />
            {isFocused.email && (
              <motion.div
                layoutId="input-border"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#a78bfa] to-[#ec4899]"
              />
            )}
          </div>

          <div className="relative">
            <label htmlFor="message" className="block text-sm mb-3 text-[#b0b0b0] font-light">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setIsFocused({ ...isFocused, message: true })}
              onBlur={() => setIsFocused({ ...isFocused, message: false })}
              required
              rows={6}
              className="w-full bg-transparent border border-[#333333] px-4 py-3 focus:border-[#a78bfa] focus:outline-none transition-colors resize-none"
            />
            {isFocused.message && (
              <motion.div
                layoutId="input-border"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#a78bfa] to-[#ec4899]"
              />
            )}
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group w-full md:w-auto px-12 py-4 bg-gradient-to-r from-[#a78bfa] to-[#ec4899] text-white hover:shadow-lg hover:shadow-[#a78bfa]/25 transition-all duration-300 flex items-center justify-center gap-3"
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
                className="w-12 h-12 border border-[#333333] hover:border-[#a78bfa] flex items-center justify-center text-[#b0b0b0] hover:text-[#a78bfa] transition-all duration-300 group"
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
          className="pt-12 border-t border-[#333333]/50 text-center"
        >
          <p className="text-sm text-[#666666] font-light">
            © 2026 Muneeb. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}