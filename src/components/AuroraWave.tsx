import { motion } from 'framer-motion';

const AuroraWave: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Wave 1 - Blue/Purple */}
      <motion.div
        className="absolute w-[200%] h-[40%] left-[-50%] opacity-[0.07]"
        style={{
          bottom: '10%',
          background: 'linear-gradient(180deg, transparent 0%, rgba(59,130,246,0.4) 30%, rgba(139,92,246,0.3) 60%, transparent 100%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
        }}
        animate={{
          x: ['-5%', '5%', '-5%'],
          y: [0, -20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Wave 2 - Purple/Orange */}
      <motion.div
        className="absolute w-[200%] h-[35%] left-[-50%] opacity-[0.05]"
        style={{
          bottom: '25%',
          background: 'linear-gradient(180deg, transparent 0%, rgba(139,92,246,0.3) 30%, rgba(249,115,22,0.2) 60%, transparent 100%)',
          borderRadius: '50%',
          filter: 'blur(50px)',
        }}
        animate={{
          x: ['5%', '-5%', '5%'],
          y: [0, 15, 0],
          scale: [1.02, 0.98, 1.02],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Wave 3 - Cyan subtle */}
      <motion.div
        className="absolute w-[200%] h-[30%] left-[-50%] opacity-[0.04]"
        style={{
          bottom: '40%',
          background: 'linear-gradient(180deg, transparent 0%, rgba(6,182,212,0.3) 40%, transparent 100%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
        }}
        animate={{
          x: ['-3%', '7%', '-3%'],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Top aurora */}
      <motion.div
        className="absolute w-[150%] h-[25%] left-[-25%] opacity-[0.06]"
        style={{
          top: '5%',
          background: 'linear-gradient(180deg, rgba(59,130,246,0.3) 0%, rgba(139,92,246,0.2) 50%, transparent 100%)',
          borderRadius: '50%',
          filter: 'blur(50px)',
        }}
        animate={{
          x: ['3%', '-3%', '3%'],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Shooting star / light streak */}
      <motion.div
        className="absolute h-[1px] w-[200px]"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.4), rgba(255,255,255,0.6), rgba(139,92,246,0.3), transparent)',
          top: '30%',
          left: '-200px',
        }}
        animate={{
          left: ['-200px', '110vw'],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 4,
          delay: 5,
          repeat: Infinity,
          repeatDelay: 8,
          ease: 'easeIn',
        }}
      />

      <motion.div
        className="absolute h-[1px] w-[150px]"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.3), rgba(255,255,255,0.5), rgba(139,92,246,0.3), transparent)',
          top: '55%',
          left: '-150px',
        }}
        animate={{
          left: ['-150px', '110vw'],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 3.5,
          delay: 12,
          repeat: Infinity,
          repeatDelay: 10,
          ease: 'easeIn',
        }}
      />
    </div>
  );
};

export default AuroraWave;
