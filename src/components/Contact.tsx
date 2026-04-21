import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Send, Mail, MapPin, Phone, MessageSquare } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem, Magnetic } from './ScrollAnimations';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const formY = useTransform(scrollYProgress, [0, 1], [60, -30]);

  return (
    <section id="contact" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, rgba(139,92,246,0.04) 40%, transparent 70%)',
            left: '50%',
            top: '50%',
            marginLeft: -300,
            marginTop: -300,
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
          <motion.line
            x1="10%" y1="20%" x2="90%" y2="80%"
            stroke="rgba(59,130,246,1)"
            strokeWidth="1"
            animate={{ opacity: [0.03, 0.08, 0.03] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.line
            x1="90%" y1="20%" x2="10%" y2="80%"
            stroke="rgba(139,92,246,1)"
            strokeWidth="1"
            animate={{ opacity: [0.02, 0.06, 0.02] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
        </svg>

        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 3) * 30}%`,
              backgroundColor: i % 3 === 0 ? 'rgba(59,130,246,0.15)' : i % 3 === 1 ? 'rgba(139,92,246,0.15)' : 'rgba(249,115,22,0.12)',
            }}
            animate={{ scale: [1, 2, 1], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 4 + i, delay: i * 0.7, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

        <div
          className="absolute inset-0 opacity-[0.01]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <ScrollReveal type="blur" duration={1}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Let's Build Something Great</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Ready to start your next project? Reach out to us and let's make it happen.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <ScrollReveal type="fade-right" delay={0.2}>
              <div className="glass p-8 rounded-3xl relative overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                  <div className="space-y-6">
                    <Magnetic strength={0.1}>
                      <motion.div
                        className="flex items-center gap-4 group/item"
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover/item:bg-blue-500/20 transition-colors"
                          whileHover={{ rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 0.4 }}
                        >
                          <Mail size={24} />
                        </motion.div>
                        <div>
                          <p className="text-sm text-slate-400">Email us at</p>
                          <p className="font-medium">hello@vstackstudio.com</p>
                        </div>
                      </motion.div>
                    </Magnetic>
                    <Magnetic strength={0.1}>
                      <motion.div
                        className="flex items-center gap-4 group/item"
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover/item:bg-purple-500/20 transition-colors"
                          whileHover={{ rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 0.4 }}
                        >
                          <Phone size={24} />
                        </motion.div>
                        <div>
                          <p className="text-sm text-slate-400">Call us</p>
                          <p className="font-medium">+1 (555) 123-4567</p>
                        </div>
                      </motion.div>
                    </Magnetic>
                    <Magnetic strength={0.1}>
                      <motion.div
                        className="flex items-center gap-4 group/item"
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400 group-hover/item:bg-orange-500/20 transition-colors"
                          whileHover={{ rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 0.4 }}
                        >
                          <MapPin size={24} />
                        </motion.div>
                        <div>
                          <p className="text-sm text-slate-400">Visit us</p>
                          <p className="font-medium">Digital Nomad, Worldwide</p>
                        </div>
                      </motion.div>
                    </Magnetic>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal type="fade-right" delay={0.4}>
              <div className="glass p-8 rounded-3xl group">
                <h3 className="text-2xl font-bold mb-4">Quick Message</h3>
                <p className="text-slate-400 mb-6">
                  Have a quick question? Drop us a message and we'll get back to you shortly.
                </p>
                <Magnetic strength={0.1}>
                  <motion.button
                    className="btn-secondary w-full flex items-center justify-center gap-2 group"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageSquare size={18} className="group-hover:animate-bounce" /> Start Chat
                  </motion.button>
                </Magnetic>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form with sequential field reveals */}
          <motion.div style={{ y: formY }} className="lg:col-span-2">
            <ScrollReveal type="fade-left" delay={0.3}>
              <div className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/5 to-transparent rounded-tr-full" />

                <StaggerContainer
                  className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6"
                  staggerDelay={0.1}
                >
                  <StaggerItem type="fade-up">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300 ml-1">Full Name</label>
                      <motion.input
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/[0.07] transition-all duration-300"
                        whileFocus={{ scale: 1.01, borderColor: 'rgba(59,130,246,0.5)' }}
                      />
                    </div>
                  </StaggerItem>
                  <StaggerItem type="fade-up">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
                      <motion.input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/[0.07] transition-all duration-300"
                        whileFocus={{ scale: 1.01, borderColor: 'rgba(59,130,246,0.5)' }}
                      />
                    </div>
                  </StaggerItem>
                  <StaggerItem type="fade-up">
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-medium text-slate-300 ml-1">Subject</label>
                      <motion.input
                        type="text"
                        placeholder="What are you interested in?"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/[0.07] transition-all duration-300"
                        whileFocus={{ scale: 1.01, borderColor: 'rgba(59,130,246,0.5)' }}
                      />
                    </div>
                  </StaggerItem>
                  <StaggerItem type="fade-up">
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-medium text-slate-300 ml-1">Message</label>
                      <motion.textarea
                        rows={5}
                        placeholder="Tell us about your project..."
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/[0.07] transition-all duration-300 resize-none"
                        whileFocus={{ scale: 1.01, borderColor: 'rgba(59,130,246,0.5)' }}
                      />
                    </div>
                  </StaggerItem>
                  <StaggerItem type="fade-up">
                    <div className="md:col-span-2">
                      <motion.button
                        type="submit"
                        className="btn-primary w-full py-4 flex items-center justify-center gap-2 text-lg group relative overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </span>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity"
                        />
                      </motion.button>
                    </div>
                  </StaggerItem>
                </StaggerContainer>
              </div>
            </ScrollReveal>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
