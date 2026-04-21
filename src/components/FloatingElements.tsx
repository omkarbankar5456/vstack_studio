import { motion } from 'framer-motion';

const floatingItems = [
  { symbol: '</>', x: '10%', y: '15%', delay: 0, duration: 25, size: 28, color: 'text-blue-500/20' },
  { symbol: '{ }', x: '85%', y: '20%', delay: 2, duration: 30, size: 24, color: 'text-purple-500/15' },
  { symbol: '( )', x: '75%', y: '70%', delay: 4, duration: 22, size: 20, color: 'text-cyan-500/15' },
  { symbol: '=>', x: '20%', y: '75%', delay: 1, duration: 28, size: 22, color: 'text-orange-500/15' },
  { symbol: '[ ]', x: '50%', y: '10%', delay: 3, duration: 35, size: 18, color: 'text-blue-400/10' },
  { symbol: 'fn', x: '90%', y: '45%', delay: 5, duration: 20, size: 20, color: 'text-purple-400/10' },
  { symbol: '&&', x: '5%', y: '50%', delay: 2.5, duration: 32, size: 16, color: 'text-indigo-500/12' },
  { symbol: '01', x: '40%', y: '85%', delay: 1.5, duration: 27, size: 18, color: 'text-emerald-500/10' },
  { symbol: '/*', x: '65%', y: '30%', delay: 3.5, duration: 24, size: 16, color: 'text-yellow-500/10' },
  { symbol: '++', x: '30%', y: '45%', delay: 4.5, duration: 26, size: 20, color: 'text-blue-500/12' },
];

const geometricShapes = [
  { type: 'circle', x: '15%', y: '30%', delay: 0, duration: 20, size: 60, color: 'border-blue-500/8' },
  { type: 'square', x: '80%', y: '60%', delay: 2, duration: 25, size: 40, color: 'border-purple-500/8' },
  { type: 'triangle', x: '60%', y: '15%', delay: 4, duration: 30, size: 50, color: 'border-orange-500/8' },
  { type: 'circle', x: '90%', y: '80%', delay: 1, duration: 22, size: 30, color: 'border-cyan-500/8' },
  { type: 'square', x: '5%', y: '80%', delay: 3, duration: 28, size: 35, color: 'border-blue-400/6' },
  { type: 'circle', x: '45%', y: '55%', delay: 5, duration: 35, size: 45, color: 'border-purple-400/6' },
];

const FloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Floating Code Symbols */}
      {floatingItems.map((item, i) => (
        <motion.div
          key={`code-${i}`}
          className={`absolute ${item.color} font-mono font-bold select-none`}
          style={{
            left: item.x,
            top: item.y,
            fontSize: item.size,
          }}
          animate={{
            y: [0, -30, 10, -20, 0],
            x: [0, 15, -10, 20, 0],
            rotate: [0, 10, -5, 15, 0],
            opacity: [0.3, 0.6, 0.4, 0.7, 0.3],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {item.symbol}
        </motion.div>
      ))}

      {/* Geometric Shapes */}
      {geometricShapes.map((shape, i) => (
        <motion.div
          key={`shape-${i}`}
          className={`absolute ${shape.color}`}
          style={{
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size,
            borderRadius: shape.type === 'circle' ? '50%' : shape.type === 'square' ? '4px' : '0',
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: 'inherit',
          }}
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Glowing Orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, rgba(139,92,246,0.04) 40%, transparent 70%)',
          left: '60%',
          top: '10%',
        }}
        animate={{
          x: [0, 50, -30, 40, 0],
          y: [0, -40, 30, -20, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(249,115,22,0.06) 0%, rgba(139,92,246,0.03) 40%, transparent 70%)',
          left: '10%',
          top: '50%',
        }}
        animate={{
          x: [0, -40, 60, -20, 0],
          y: [0, 30, -50, 40, 0],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
};

export default FloatingElements;
