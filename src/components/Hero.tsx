import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useRef } from 'react';
import ParticleNetwork from './ParticleNetwork';
import FloatingElements from './FloatingElements';
import AuroraWave from './AuroraWave';
import { TextReveal, Magnetic } from './ScrollAnimations';

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const logoY = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
  const logoRotate = useTransform(scrollYProgress, [0, 1], [0, 15]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Layer 1: Animated Grid (subtle) */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Layer 2: Gradient base */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange-500/5 rounded-full blur-[128px]" />
      </div>

      {/* Layer 3: Aurora Waves */}
      <AuroraWave />

      {/* Layer 4: Particle Network */}
      <ParticleNetwork />

      {/* Layer 5: Floating Elements */}
      <FloatingElements />

      {/* Content with parallax */}
      <motion.div
        style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
        className="container mx-auto px-6 relative z-10 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-blue-400 mb-8"
        >
          <Sparkles size={16} className="animate-pulse" />
          <span>Next-Gen Digital Solutions</span>
        </motion.div>

        <TextReveal
          text="VStack Studio"
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 justify-center"
          delay={0.3}
        />

        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          It's blend technical precision with creative excellence to build 
          exceptional digital experiences for ambitious brands.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.5, ease: [0.25, 0.4, 0.25, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Magnetic strength={0.15}>
            <a href="#contact" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 text-lg py-4 px-8 group inline-block text-center">
              Contact Us
            </a>
          </Magnetic>
          <Magnetic strength={0.15}>
            <a href="#portfolio" className="btn-secondary w-full sm:w-auto text-lg py-4 px-8 inline-block text-center">
              View Portfolio
            </a>
          </Magnetic>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-500 uppercase tracking-widest">Scroll to explore</span>
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-1.5"
            animate={{ borderColor: ['rgba(100,116,139,0.5)', 'rgba(59,130,246,0.5)', 'rgba(100,116,139,0.5)'] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-1.5 bg-blue-400 rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#030712] to-transparent z-10" />
    </section>
  );
};

export default Hero;
