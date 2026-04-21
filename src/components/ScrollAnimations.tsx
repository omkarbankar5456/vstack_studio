import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, type Variant } from 'framer-motion';

// ─── Scroll Progress Bar ─────────────────────────────────────────
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[100] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #f97316, #3b82f6)',
        backgroundSize: '200% 100%',
      }}
      animate={{
        backgroundPosition: ['0% 0%', '200% 0%'],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
};

// ─── Animation Variants Map ───────────────────────────────────────
type AnimationType = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'blur' | 'rotate' | 'flip-up' | 'slide-up' | 'zoom-in';

const getVariants = (type: AnimationType): { hidden: Variant; visible: Variant } => {
  switch (type) {
    case 'fade-up':
      return { hidden: { opacity: 0, y: 80 }, visible: { opacity: 1, y: 0 } };
    case 'fade-down':
      return { hidden: { opacity: 0, y: -80 }, visible: { opacity: 1, y: 0 } };
    case 'fade-left':
      return { hidden: { opacity: 0, x: -80 }, visible: { opacity: 1, x: 0 } };
    case 'fade-right':
      return { hidden: { opacity: 0, x: 80 }, visible: { opacity: 1, x: 0 } };
    case 'scale':
      return { hidden: { opacity: 0, scale: 0.6 }, visible: { opacity: 1, scale: 1 } };
    case 'blur':
      return { hidden: { opacity: 0, filter: 'blur(20px)' }, visible: { opacity: 1, filter: 'blur(0px)' } };
    case 'rotate':
      return { hidden: { opacity: 0, rotate: -15, scale: 0.9 }, visible: { opacity: 1, rotate: 0, scale: 1 } };
    case 'flip-up':
      return { hidden: { opacity: 0, rotateX: 40, y: 40 }, visible: { opacity: 1, rotateX: 0, y: 0 } };
    case 'slide-up':
      return { hidden: { opacity: 0, y: 120 }, visible: { opacity: 1, y: 0 } };
    case 'zoom-in':
      return { hidden: { opacity: 0, scale: 0.3 }, visible: { opacity: 1, scale: 1 } };
    default:
      return { hidden: { opacity: 0, y: 80 }, visible: { opacity: 1, y: 0 } };
  }
};

// ─── ScrollReveal ─────────────────────────────────────────────────
interface ScrollRevealProps {
  children: ReactNode;
  type?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  type = 'fade-up',
  delay = 0,
  duration = 0.7,
  className = '',
  once = true,
  threshold = 0.15,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });
  const variants = getVariants(type);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ─── Stagger Container ────────────────────────────────────────────
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
  threshold?: number;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  className = '',
  staggerDelay = 0.1,
  once = true,
  threshold = 0.1,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ─── Stagger Item ─────────────────────────────────────────────────
interface StaggerItemProps {
  children: ReactNode;
  type?: AnimationType;
  className?: string;
  duration?: number;
}

export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  type = 'fade-up',
  className = '',
  duration = 0.6,
}) => {
  const variants = getVariants(type);

  return (
    <motion.div
      variants={{
        hidden: variants.hidden,
        visible: {
          ...variants.visible,
          transition: {
            duration,
            ease: [0.25, 0.4, 0.25, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ─── Parallax Wrapper ─────────────────────────────────────────────
interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const Parallax: React.FC<ParallaxProps> = ({
  children,
  speed = 0.3,
  className = '',
  direction = 'up',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const multiplier = direction === 'down' || direction === 'right' ? speed : -speed;
  const y = useTransform(scrollYProgress, [0, 1], [100 * multiplier, -100 * multiplier]);
  const x = useTransform(scrollYProgress, [0, 1], [100 * multiplier, -100 * multiplier]);

  const style = direction === 'left' || direction === 'right' ? { x } : { y };

  return (
    <motion.div ref={ref} style={style} className={className}>
      {children}
    </motion.div>
  );
};

// ─── CountUp Animation ────────────────────────────────────────────
interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  once?: boolean;
}

export const CountUp: React.FC<CountUpProps> = ({
  end,
  duration = 2,
  suffix = '',
  prefix = '',
  className = '',
  once = true,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
};

// ─── Text Reveal (word by word) ───────────────────────────────────
interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className = '',
  delay = 0,
  once = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: 0.3 });
  const words = text.split(' ');

  return (
    <div ref={ref} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.08,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="mr-2 inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

// ─── Magnetic Hover Effect ────────────────────────────────────────
interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export const Magnetic: React.FC<MagneticProps> = ({
  children,
  className = '',
  strength = 0.3,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'translate(0px, 0px)';
    ref.current.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.4, 0.25, 1)';
  };

  const handleMouseEnter = () => {
    if (!ref.current) return;
    ref.current.style.transition = 'transform 0.15s ease-out';
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className={className}
    >
      {children}
    </div>
  );
};

// ─── Scroll To Top Button ─────────────────────────────────────────
export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      setIsVisible(v > 0.15);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.5,
        y: isVisible ? 0 : 20,
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-110 transition-shadow"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg
        className="w-5 h-5 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </motion.button>
  );
};

// ─── Scroll-Linked Rotate ─────────────────────────────────────────
interface ScrollRotateProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export const ScrollRotate: React.FC<ScrollRotateProps> = ({
  children,
  className = '',
  speed = 360,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, speed]);

  return (
    <motion.div ref={ref} style={{ rotate }} className={className}>
      {children}
    </motion.div>
  );
};

// ─── Horizontal Scroll Section ────────────────────────────────────
interface HorizontalScrollProps {
  children: ReactNode;
  className?: string;
}

export const HorizontalScroll: React.FC<HorizontalScrollProps> = ({
  children,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);

  return (
    <motion.div ref={ref} style={{ x }} className={className}>
      {children}
    </motion.div>
  );
};

// ─── Draw Line on Scroll ──────────────────────────────────────────
interface DrawLineProps {
  className?: string;
  color?: string;
  direction?: 'horizontal' | 'vertical';
}

export const DrawLine: React.FC<DrawLineProps> = ({
  className = '',
  color = 'rgba(59,130,246,0.3)',
  direction = 'horizontal',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scaleY = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scaleX = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={{
          scaleY: direction === 'vertical' ? scaleY : 1,
          scaleX: direction === 'horizontal' ? scaleX : 1,
          transformOrigin: direction === 'horizontal' ? 'left' : 'top',
          background: color,
        }}
        className={direction === 'horizontal' ? 'h-[1px] w-full' : 'w-[1px] h-full'}
      />
    </div>
  );
};

// ─── Reveal Number with label ─────────────────────────────────────
interface RevealStatProps {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
}

export const RevealStat: React.FC<RevealStatProps> = ({
  value,
  suffix = '+',
  label,
  className = '',
}) => {
  return (
    <ScrollReveal type="scale" delay={0.2} className={`text-center ${className}`}>
      <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
        <CountUp end={value} suffix={suffix} />
      </div>
      <p className="text-slate-400 text-sm">{label}</p>
    </ScrollReveal>
  );
};
