import { motion } from 'framer-motion';

interface SectionDividerProps {
  variant?: 'blue' | 'purple' | 'orange' | 'gradient';
}

const SectionDivider: React.FC<SectionDividerProps> = ({ variant = 'gradient' }) => {
  const gradients = {
    blue: 'from-blue-500/30 via-blue-400/10 to-transparent',
    purple: 'from-purple-500/30 via-purple-400/10 to-transparent',
    orange: 'from-orange-500/30 via-orange-400/10 to-transparent',
    gradient: 'from-blue-500/20 via-purple-500/20 to-orange-500/20',
  };

  return (
    <div className="relative h-24 w-full overflow-hidden">
      <motion.div
        className={`absolute left-0 right-0 h-[1px] mx-auto max-w-4xl bg-gradient-to-r ${gradients[variant]}`}
        style={{ top: '50%' }}
        animate={{
          scaleX: [0.3, 0.8, 0.3],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className={`absolute h-[2px] w-16 bg-gradient-to-r ${gradients[variant]} rounded-full mx-auto`}
        style={{ top: 'calc(50% - 0.5px)', left: '50%', marginLeft: '-32px' }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

export default SectionDivider;
