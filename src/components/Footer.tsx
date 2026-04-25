import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollAnimations';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#030712] border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-blue-500/3 via-purple-500/2 to-transparent rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16" staggerDelay={0.1}>
          {/* Brand */}
          <StaggerItem type="fade-up" className="md:col-span-2">
            <motion.div
              className="flex items-center gap-2 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-500/30">
                V
              </div>
              <span className="text-xl font-bold tracking-tight">
                VStack <span className="text-blue-500">Studio</span>
              </span>
            </motion.div>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              Empowering brands through cutting-edge technology and exceptional design. 
              Your partner in digital evolution.
            </p>
            {/* Social Icons with magnetic effect */}
            {/*<div className="flex gap-4">*/}
            {/*  {['Twitter', 'LinkedIn', 'Instagram', 'Dribbble'].map((platform, i) => (*/}
            {/*    <Magnetic key={platform} strength={0.2}>*/}
            {/*      <motion.a*/}
            {/*        href="#"*/}
            {/*        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all"*/}
            {/*        whileHover={{ scale: 1.1, rotate: 5 }}*/}
            {/*        initial={{ opacity: 0, y: 20 }}*/}
            {/*        whileInView={{ opacity: 1, y: 0 }}*/}
            {/*        viewport={{ once: true }}*/}
            {/*        transition={{ delay: i * 0.1 }}*/}
            {/*      >*/}
            {/*        <span className="sr-only">{platform}</span>*/}
            {/*        <div className="w-5 h-5 bg-current rounded-sm opacity-50" />*/}
            {/*      </motion.a>*/}
            {/*    </Magnetic>*/}
            {/*  ))}*/}
            {/*</div>*/}
          </StaggerItem>

          {/* Quick Links */}
          <StaggerItem type="fade-up">
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Services', 'Portfolio', 'About', 'Contact'].map((link, i) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-slate-400 hover:text-blue-400 transition-colors relative group inline-block"
                  >
                    {link}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-400 group-hover:w-full transition-all duration-300" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </StaggerItem>

          {/* Contact Info */}
          <StaggerItem type="fade-up">
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              {[
                { label: 'vstackstudio@gmail.com', href: 'mailto:vstackstudio@gmail.com' },
                { label: 'Worldwide Remote', href: '#' },
              ].map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-blue-400 transition-colors relative group inline-block text-sm"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-400 group-hover:w-full transition-all duration-300" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </StaggerItem>
        </StaggerContainer>

        {/* Bottom Bar */}
        <ScrollReveal type="fade-up" delay={0.3}>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {currentYear} VStack Studio. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm text-slate-500">
              <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
