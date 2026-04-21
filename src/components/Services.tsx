import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Code2, 
  Cpu, 
  Globe, 
  Palette, 
  Video, 
  PencilRuler, 
  WalletCards,
  Layout, 
  PenTool,
  Database
} from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollAnimations';

const technicalServices = [
  {
    title: 'Frontend Development',
    description: 'Crafting responsive and interactive user interfaces using modern frameworks.',
    icon: <Globe className="text-blue-400" size={32} />,
    skills: ['React', 'Tailwind CSS'],
    color: 'blue'
  },
  {
    title: 'Backend Engineering',
    description: 'Building scalable and robust server-side architectures and APIs.',
    icon: <Database className="text-purple-400" size={32} />,
    skills: ['Node.js', 'Spring Boot', 'PHP', 'Python'],
    color: 'purple'
  },
  {
    title: 'Software Development',
    description: 'Custom software solutions tailored to your specific business needs.',
    icon: <Cpu className="text-orange-400" size={32} />,
    skills: ['Java', 'Python', 'JDBC', 'REST APIs'],
    color: 'orange'
  },
  {
    title: 'Web Systems',
    description: 'Developing high-performance web applications with seamless integration.',
    icon: <Code2 className="text-cyan-400" size={32} />,
    skills: ['Fullstack', 'API Integration'],
    color: 'cyan'
  }
];

const creativeServices = [
  {
    title: 'UI/UX Design',
    description: 'User-centric designs that are intuitive, engaging, and visually stunning.',
    icon: <Layout className="text-pink-400" size={32} />,
    skills: ['Figma', 'Prototyping', 'User Research'],
    color: 'pink'
  },
  {
    title: 'Branding & Identity',
    description: 'Creating unique visual identities that resonate with your target audience.',
    icon: <PenTool className="text-yellow-400" size={32} />,
    skills: ['Logo Design', 'Typography', 'Business Cards'],
    color: 'yellow'
  },
  {
    title: 'Image &Video Production',
    description: 'High-quality video editing and motion graphics for social and web.',
    icon: <Video className="text-red-400" size={32} />,
    skills: ['Editing', 'Motion Graphics', 'Color Grading', 'Animation'],
    color: 'red'
  },
  {
    title: 'Visual Design',
    description: 'Impactful marketing materials including posters, billboards, and more.',
    icon: <Palette className="text-indigo-400" size={32} />,
    skills: ['Poster Design', 'Social Media Assets', 'Invitation Cards'],
    color: 'indigo'
  },
  {
    title: 'Power Point Presentation',
    description: 'Creating engaging and professional PowerPoint presentations.',
    icon: <PencilRuler className="text-cyan-400" size={32} />,
    skills: ['Animation', 'Presentation Design', 'Infographics'],
    color: 'cyan'
  },
  {
    title: 'Flyers & Brochure Design',
    description: 'Designing eye-catching flyers and brochures to effectively promote your business.',
    icon: < WalletCards className="text-purple-400" size={32} />,
    skills: ['Flyer Design', 'Brochure Design', 'Marketing Materials'],
    color: 'purple'
  }
];

const colorMap: Record<string, { border: string; glow: string; skill: string }> = {
  blue: { border: 'from-blue-500/30 to-blue-600/10', glow: 'rgba(59,130,246,0.15)', skill: 'bg-blue-500/10 text-blue-300' },
  purple: { border: 'from-purple-500/30 to-purple-600/10', glow: 'rgba(139,92,246,0.15)', skill: 'bg-purple-500/10 text-purple-300' },
  orange: { border: 'from-orange-500/30 to-orange-600/10', glow: 'rgba(249,115,22,0.15)', skill: 'bg-orange-500/10 text-orange-300' },
  cyan: { border: 'from-cyan-500/30 to-cyan-600/10', glow: 'rgba(6,182,212,0.15)', skill: 'bg-cyan-500/10 text-cyan-300' },
  pink: { border: 'from-pink-500/30 to-pink-600/10', glow: 'rgba(236,72,153,0.15)', skill: 'bg-pink-500/10 text-pink-300' },
  yellow: { border: 'from-yellow-500/30 to-yellow-600/10', glow: 'rgba(234,179,8,0.15)', skill: 'bg-yellow-500/10 text-yellow-300' },
  red: { border: 'from-red-500/30 to-red-600/10', glow: 'rgba(239,68,68,0.15)', skill: 'bg-red-500/10 text-red-300' },
  indigo: { border: 'from-indigo-500/30 to-indigo-600/10', glow: 'rgba(99,102,241,0.15)', skill: 'bg-indigo-500/10 text-indigo-300' },
};

const ServiceCard = ({ service, index }: { service: any, index: number }) => {
  const colors = colorMap[service.color] || colorMap.blue;
  
  return (
    <StaggerItem type="fade-up">
      <motion.div
        whileHover={{ y: -12, scale: 1.03 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="group glass p-8 rounded-3xl flex flex-col h-full relative overflow-hidden cursor-pointer"
      >
        {/* Animated border on hover */}
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${colors.glow}, transparent 50%)`,
          }}
        />
        
        {/* Animated line at top */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{
            background: `linear-gradient(90deg, transparent, ${colors.glow}, transparent)`,
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
        />

        <div className="relative z-10">
          <motion.div
            className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:bg-white/10 transition-colors duration-300 relative"
            whileHover={{ rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.5 }}
          >
            {service.icon}
            {/* Icon glow */}
            <motion.div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ boxShadow: `0 0 30px ${colors.glow}` }}
            />
          </motion.div>
          <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient transition-all duration-300">{service.title}</h3>
          <p className="text-slate-400 mb-6 flex-grow leading-relaxed">
            {service.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {service.skills.map((skill: string, i: number) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + i * 0.05 + 0.5 }}
                className={`text-xs font-medium px-3 py-1 rounded-full ${colors.skill} transition-all duration-300`}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </StaggerItem>
  );
};

const Services = () => {
  const [activeTab, setActiveTab] = useState<'technical' | 'creative'>('technical');
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="services" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)',
            left: '10%',
            top: '20%',
          }}
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)',
            right: '5%',
            bottom: '10%',
          }}
          animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <ScrollReveal type="blur" duration={1}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Our Expertise</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We bridge the gap between technical complexity and creative brilliance.
            </p>
          </div>
        </ScrollReveal>

        {/* Option Tabs Switcher with Smooth Animation */}
        <div className="flex justify-center mb-16">
          <div className="p-1.5 rounded-full bg-slate-900/80 backdrop-blur-xl border border-white/10 flex items-center relative z-20">
            {/* Active Pill Indicator */}
            <motion.div
              className="absolute inset-y-1.5 rounded-full z-0 bg-gradient-to-r"
              style={{
                left: activeTab === 'technical' ? '6px' : 'calc(50% + 2px)',
                right: activeTab === 'technical' ? 'calc(50% + 2px)' : '6px',
                backgroundImage: activeTab === 'technical' 
                  ? 'linear-gradient(to right, #3b82f6, #2563eb)' 
                  : 'linear-gradient(to right, #db2777, #8b5cf6)'
              }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            />

            {/* Option A button */}
            <button
              onClick={() => setActiveTab('technical')}
              className={`relative z-10 px-8 py-3 text-sm font-semibold rounded-full transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'technical' ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Code2 size={18} className={activeTab === 'technical' ? 'animate-pulse' : ''} />
              <span>Technical Services (Option A)</span>
            </button>

            {/* Option B button */}
            <button
              onClick={() => setActiveTab('creative')}
              className={`relative z-10 px-8 py-3 text-sm font-semibold rounded-full transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'creative' ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Palette size={18} className={activeTab === 'creative' ? 'animate-pulse' : ''} />
              <span>Creative Services (Option B)</span>
            </button>
          </div>
        </div>

        {/* Tab content switching layout */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === 'technical' ? (
              <motion.div
                key="tech"
                initial={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-4 mb-12">
                  <h3 className="text-2xl font-bold text-blue-400 flex items-center gap-2">
                    <Code2 size={24} className="animate-spin-slow" />
                    Technical Frameworks & Solutions
                  </h3>
                  <div className="h-px flex-grow bg-gradient-to-r from-blue-500/50 to-transparent" />
                </div>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
                  {technicalServices.map((service, index) => (
                    <ServiceCard key={service.title} service={service} index={index} />
                  ))}
                </StaggerContainer>
              </motion.div>
            ) : (
              <motion.div
                key="creative"
                initial={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-4 mb-12">
                  <h3 className="text-2xl font-bold text-pink-400 flex items-center gap-2">
                    <Palette size={24} className="animate-bounce" />
                    Creative Design & Branding
                  </h3>
                  <div className="h-px flex-grow bg-gradient-to-r from-pink-500/50 to-transparent" />
                </div>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
                  {creativeServices.map((service, index) => (
                    <ServiceCard key={service.title} service={service} index={index} />
                  ))}
                </StaggerContainer>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Services;
