import { motion } from 'framer-motion';

const GridBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Animated scan line */}
      <motion.div
        className="absolute left-0 right-0 h-[1px]"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.15), rgba(139,92,246,0.15), transparent)',
        }}
        animate={{
          top: ['0%', '100%'],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Horizontal gradient pulse lines */}
      {[20, 40, 60, 80].map((top, i) => (
        <motion.div
          key={`hline-${i}`}
          className="absolute left-0 right-0 h-[1px]"
          style={{ top: `${top}%` }}
          animate={{
            opacity: [0, 0.03, 0],
            scaleX: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 8,
            delay: i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        </motion.div>
      ))}

      {/* Vertical gradient pulse lines */}
      {[25, 50, 75].map((left, i) => (
        <motion.div
          key={`vline-${i}`}
          className="absolute top-0 bottom-0 w-[1px]"
          style={{ left: `${left}%` }}
          animate={{
            opacity: [0, 0.03, 0],
            scaleY: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 10,
            delay: i * 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="w-full h-full bg-gradient-to-b from-transparent via-purple-500/30 to-transparent" />
        </motion.div>
      ))}

      {/* Grid intersection dots */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(139,92,246,0.8) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
    </div>
  );
};

export default GridBackground;
