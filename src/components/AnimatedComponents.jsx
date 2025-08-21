import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
  staggerItem,
  cardHover,
  buttonHover,
  floatingAnimation,
  morphingBlob,
  scrollFadeIn,
  scrollSlideIn,
  scrollScaleIn
} from '../utils/animations';

// Animated Section Wrapper
export const AnimatedSection = ({ children, className = '', animation = 'fadeInUp', delay = 0 }) => {
  const { elementRef, hasIntersected } = useIntersectionObserver();
  
  const animations = {
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    scrollFadeIn,
    scrollSlideIn,
    scrollScaleIn
  };

  return (
    <motion.div
      ref={elementRef}
      className={className}
      initial={animations[animation].initial}
      animate={hasIntersected ? animations[animation].animate || animations[animation].whileInView : animations[animation].initial}
      transition={{ ...animations[animation].transition, delay }}
    >
      {children}
    </motion.div>
  );
};

// Animated Card Component
export const AnimatedCard = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      className={`card ${className}`}
      variants={staggerItem}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay }}
      {...cardHover}
    >
      {children}
    </motion.div>
  );
};

// Animated Button Component
export const AnimatedButton = ({ children, className = '', onClick, ...props }) => {
  return (
    <motion.button
      className={className}
      onClick={onClick}
      {...buttonHover}
      {...props}
    >
      {children}
    </motion.button>
  );
};

// Staggered Container for lists
export const StaggeredContainer = ({ children, className = '' }) => {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

// Floating Element
export const FloatingElement = ({ children, className = '' }) => {
  return (
    <motion.div
      className={className}
      {...floatingAnimation}
    >
      {children}
    </motion.div>
  );
};

// Morphing Blob Background
export const MorphingBlob = ({ className = '', size = 'w-64 h-64' }) => {
  return (
    <motion.div
      className={`${size} bg-gradient-to-r from-primary-400 to-primary-600 opacity-20 ${className}`}
      {...morphingBlob}
    />
  );
};

// Animated Progress Bar
export const AnimatedProgressBar = ({ percentage, label, icon, delay = 0 }) => {
  const { elementRef, hasIntersected } = useIntersectionObserver();

  return (
    <div ref={elementRef} className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {icon && <span className="text-lg">{icon}</span>}
          <span className="font-medium text-secondary-900">{label}</span>
        </div>
        <motion.span
          className="text-sm font-semibold text-primary-600"
          initial={{ opacity: 0 }}
          animate={hasIntersected ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: delay + 0.5, duration: 0.5 }}
        >
          {percentage}%
        </motion.span>
      </div>
      <div className="w-full bg-secondary-200 rounded-full h-2 overflow-hidden">
        <motion.div
          className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={hasIntersected ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ delay, duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

// Animated Counter
export const AnimatedCounter = ({ end, duration = 2, suffix = '', prefix = '' }) => {
  const { elementRef, hasIntersected } = useIntersectionObserver();
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!hasIntersected) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [hasIntersected, end, duration]);

  return (
    <span ref={elementRef}>
      {prefix}{count}{suffix}
    </span>
  );
};

// Typewriter Effect
export const TypewriterText = ({ text, speed = 100, delay = 0 }) => {
  const [displayText, setDisplayText] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const { elementRef, hasIntersected } = useIntersectionObserver();

  React.useEffect(() => {
    if (!hasIntersected) return;

    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }
    }, currentIndex === 0 ? delay : speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, delay, hasIntersected]);

  return (
    <span ref={elementRef} className="inline-block">
      {displayText}
      <motion.span
        className="inline-block w-0.5 h-6 bg-current ml-1"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </span>
  );
};

// Particle Background
export const ParticleBackground = ({ particleCount = 50 }) => {
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-white/10 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [-20, -100, -20],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Magnetic Button Effect
export const MagneticButton = ({ children, className = '', ...props }) => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const buttonRef = React.useRef(null);

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) * 0.15;
    const deltaY = (e.clientY - centerY) * 0.15;
    
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={buttonRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

// Reveal Text Animation
export const RevealText = ({ children, className = '', delay = 0 }) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

// Scroll Progress Indicator
export const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600 z-50"
      style={{ width: `${scrollProgress}%` }}
      initial={{ width: 0 }}
      animate={{ width: `${scrollProgress}%` }}
      transition={{ duration: 0.1 }}
    />
  );
};