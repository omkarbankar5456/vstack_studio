import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Users, Target, Rocket, Zap, Award, Clock, Heart } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem, Parallax, CountUp, TextReveal } from './ScrollAnimations';

const features = [
  {
    icon: <Users className="text-blue-400" />,
    title: 'Collaborative Spirit',
    description: 'We work closely with you as an extension of your team to ensure perfection.'
  },
  {
    icon: <Target className="text-purple-400" />,
    title: 'Result Driven',
    description: 'We focus on delivering measurable impact and achieving your business goals.'
  },
  {
    icon: <Rocket className="text-orange-400" />,
    title: 'Scalable Solutions',
    description: 'Our technologies are built to grow alongside your expanding business.'
  },
  {
    icon: <Zap className="text-yellow-400" />,
    title: 'Agile Workflow',
    description: 'Fast iterations and rapid deployment without compromising on quality.'
  }
];

const stats = [
  { icon: <Award className="text-blue-400" size={28} />, value: 50, suffix: '+', label: 'Projects Delivered' },
  { icon: <Clock className="text-purple-400" size={28} />, value: 3, suffix: '+', label: 'Years Experience' },
  { icon: <Heart className="text-orange-400" size={28} />, value: 100, suffix: '%', label: 'Client Satisfaction' },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const contentY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Pulsing rings */}
        <motion.div
          className="absolute rounded-full border border-blue-500/5"
          style={{ width: 600, height: 600, left: '50%', top: '50%', marginLeft: -300, marginTop: -300 }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute rounded-full border border-purple-500/5"
          style={{ width: 400, height: 400, left: '50%', top: '50%', marginLeft: -200, marginTop: -200 }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute rounded-full border border-orange-500/5"
          style={{ width: 200, height: 200, left: '50%', top: '50%', marginLeft: -100, marginTop: -100 }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
            animate={{ y: [0, -40, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 8 + i * 2, delay: i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            background: 'radial-gradient(circle at 30% 40%, rgba(59,130,246,0.3), transparent 50%), radial-gradient(circle at 70% 60%, rgba(139,92,246,0.3), transparent 50%)',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Stats Row */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24" staggerDelay={0.15}>
          {stats.map((stat) => (
            <StaggerItem key={stat.label} type="scale">
              <motion.div
                whileHover={{ y: -5, scale: 1.03 }}
                className="glass p-8 rounded-3xl text-center group relative overflow-hidden"
              >
                {/* Background glow on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(59,130,246,0.05), transparent 70%)',
                  }}
                />
                <div className="relative z-10">
                  <div className="flex justify-center mb-4">
                    <motion.div
                      className="p-3 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {stat.icon}
                    </motion.div>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                    <CountUp end={stat.value} suffix={stat.suffix} duration={2.5} />
                  </div>
                  <p className="text-slate-400 text-sm">{stat.label}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side with Parallax */}
          <Parallax speed={0.15} direction="up">
            <ScrollReveal type="fade-right" duration={0.8}>
              <div className="relative">
                <motion.div
                  style={{ y: imageY }}
                  className="aspect-square rounded-3xl overflow-hidden glass relative z-10"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                    alt="Our Team" 
                    className="w-full h-full object-cover opacity-80"
                  />
                  {/* Overlay shimmer */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 5, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
                  />
                </motion.div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />
                
                {/* Floating stats card */}
                <ScrollReveal type="zoom-in" delay={0.4}>
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="absolute -bottom-8 -right-8 glass p-6 rounded-2xl shadow-2xl z-20"
                  >
                    <div className="text-3xl font-bold text-blue-500">
                      <CountUp end={50} suffix="+" />
                    </div>
                    <div className="text-sm text-slate-400">Projects Completed</div>
                  </motion.div>
                </ScrollReveal>

                {/* Available badge */}
                <ScrollReveal type="zoom-in" delay={0.6}>
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    className="absolute -top-4 -left-4 glass px-4 py-3 rounded-xl shadow-2xl z-20"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-sm text-slate-300">Available for hire</span>
                    </div>
                  </motion.div>
                </ScrollReveal>
              </div>
            </ScrollReveal>
          </Parallax>

          {/* Text Side */}
          <motion.div style={{ y: contentY }}>
            <ScrollReveal type="fade-left" duration={0.8}>
              <TextReveal
                text="We are the engine behind your digital success."
                className="text-4xl md:text-5xl font-bold mb-6"
                delay={0.2}
              />
            </ScrollReveal>

            <ScrollReveal type="fade-up" delay={0.4}>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                VStack Studio was founded on a simple principle: technical excellence should never come at the cost of creative expression. We bring together the best engineers and designers to build products that don't just work, but inspire.
              </p>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-8" staggerDelay={0.12}>
              {features.map((feature) => (
                <StaggerItem key={feature.title} type="fade-up">
                  <motion.div
                    whileHover={{ x: 8, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="flex gap-4 group p-4 rounded-2xl cursor-pointer"
                  >
                    <motion.div
                      className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <div>
                      <h4 className="font-bold mb-1 group-hover:text-gradient transition-all duration-300">{feature.title}</h4>
                      <p className="text-sm text-slate-400 leading-snug">{feature.description}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
