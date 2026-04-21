import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Maximize2 } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollAnimations';

const projects = [
  {
    title: 'Nova Fintech App',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    link: '#',
    color: 'from-blue-500/20 to-purple-500/20',
    accent: '#3b82f6',
  },
  {
    title: 'Quantum SaaS Platform',
    category: 'Frontend Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    link: '#',
    color: 'from-purple-500/20 to-pink-500/20',
    accent: '#8b5cf6',
  },
  {
    title: 'Ethereal Branding',
    category: 'Visual Identity',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
    link: '#',
    color: 'from-orange-500/20 to-red-500/20',
    accent: '#f97316',
  },
  {
    title: 'Vertex Motion Design',
    category: 'Video Production',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
    link: '#',
    color: 'from-cyan-500/20 to-blue-500/20',
    accent: '#06b6d4',
  },
  {
    title: 'Atlas E-commerce',
    category: 'Fullstack Web',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    link: '#',
    color: 'from-emerald-500/20 to-cyan-500/20',
    accent: '#10b981',
  },
  {
    title: 'Nebula Social App',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
    link: '#',
    color: 'from-indigo-500/20 to-purple-500/20',
    accent: '#6366f1',
  }
];

const PortfolioCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <StaggerItem type="scale">
      <motion.div
        ref={cardRef}
        whileHover={{ y: -12 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="group relative overflow-hidden rounded-3xl aspect-[4/5] glass cursor-pointer"
      >
        {/* Animated border line that draws in */}
        <motion.div
          className="absolute inset-0 rounded-3xl z-20 pointer-events-none"
          style={{
            boxShadow: `inset 0 0 0 1px ${project.accent}33`,
          }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />

        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700"
          initial={{ scale: 1.2 }}
          animate={isInView ? { scale: 1 } : { scale: 1.2 }}
          transition={{ duration: 1.2, delay: index * 0.1 }}
          whileHover={{ scale: 1.1 }}
        />

        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 z-10"
          style={{
            background: `linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)`,
          }}
          initial={{ opacity: 0.5 }}
          whileHover={{ opacity: 0.95 }}
          transition={{ duration: 0.4 }}
        />

        {/* Animated accent line at bottom */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] z-20"
          style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Category badge - slides in from left */}
        <motion.div
          className="absolute top-6 left-6 z-20"
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
        >
          <span
            className="text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10"
            style={{ backgroundColor: `${project.accent}20`, color: project.accent }}
          >
            {project.category}
          </span>
        </motion.div>

        {/* Content - slides up on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-3 transform group-hover:translate-y-0 transition-transform">
              {project.title}
            </h3>
            <motion.p
              className="text-slate-400 text-sm mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300"
            >
              A showcase of modern design and development excellence.
            </motion.p>
            <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
              <motion.button
                className="p-2.5 rounded-full backdrop-blur-md border border-white/10 text-white transition-colors"
                style={{ backgroundColor: `${project.accent}15` }}
                whileHover={{ scale: 1.15, backgroundColor: `${project.accent}30` }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={18} />
              </motion.button>
              <motion.button
                className="p-2.5 rounded-full backdrop-blur-md border border-white/10 text-white transition-colors"
                style={{ backgroundColor: `${project.accent}15` }}
                whileHover={{ scale: 1.15, backgroundColor: `${project.accent}30` }}
                whileTap={{ scale: 0.95 }}
              >
                <Maximize2 size={18} />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 z-5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 100%, ${project.accent}15, transparent 60%)`,
          }}
        />
      </motion.div>
    </StaggerItem>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-[200%] h-[1px]"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.1), transparent)',
            left: '-50%',
          }}
          animate={{ top: ['0%', '100%'], rotate: [15, 15] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)',
            right: '0%',
            top: '30%',
          }}
          animate={{ y: [0, -40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(249,115,22,0.04) 0%, transparent 70%)',
            left: '5%',
            bottom: '20%',
          }}
          animate={{ y: [0, 30, 0], x: [0, 15, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <ScrollReveal type="blur" duration={1}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Featured Works</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A curated selection of our most impactful projects, spanning design, development, and creative direction.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.12}>
          {projects.map((project, index) => (
            <PortfolioCard key={project.title} project={project} index={index} />
          ))}
        </StaggerContainer>

        {/* View All Button */}
        <ScrollReveal type="fade-up" delay={0.5} className="mt-16 text-center">
          <motion.button
            className="btn-secondary px-10 py-4 text-lg group relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">View All Projects</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-orange-500/10"
              initial={{ x: '-100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.4 }}
            />
          </motion.button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Portfolio;
