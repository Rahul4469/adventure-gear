'use client';

import { motion, HTMLMotionProps, Variants } from 'framer-motion';
import { 
  fadeInUp, 
  fadeInDown, 
  fadeInLeft, 
  fadeInRight,
  scaleIn,
  staggerContainer,
  staggerItem 
} from '@/lib/animations';

// TYPE DEFINITIONS

type AnimationType = 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn';

interface MotionWrapperProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
}

interface ScrollRevealProps extends MotionWrapperProps {
  once?: boolean;
  margin?: string;
}

// Animation variant map
const animationVariants: Record<AnimationType, Variants> = {
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
};

// MOTION WRAPPER
export function MotionDiv({ 
  children, 
  animation = 'fadeInUp',
  delay = 0,
  className = '',
  ...props 
}: MotionWrapperProps) {
  const variants = animationVariants[animation];
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        ...variants,
        visible: {
          ...variants.visible,
          transition: {
            ...(variants.visible as any).transition,
            delay,
          }
        }
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// SCROLL REVEAL
export function ScrollReveal({ 
  children, 
  animation = 'fadeInUp',
  delay = 0,
  once = true,
  margin = '-50px',
  className = '',
  ...props 
}: ScrollRevealProps) {
  const variants = animationVariants[animation];
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
      variants={{
        ...variants,
        visible: {
          ...variants.visible,
          transition: {
            ...(variants.visible as any).transition,
            delay,
          }
        }
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// STAGGER CONTAINER
interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  onScroll?: boolean;
}

export function StaggerContainer({ 
  children, 
  className = '',
  delay = 0.1,
  staggerDelay = 0.1,
  onScroll = false,
}: StaggerContainerProps) {
  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerDelay,
      }
    }
  };

  if (onScroll) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={variants}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// STAGGER ITEM
interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
}

export function StaggerItem({ children, className = '' }: StaggerItemProps) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}

// HOVER CARD
/**
 * Card with hover lift effect
 */
interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
}

export function HoverCard({ children, className = '' }: HoverCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// MAGNETIC BUTTON
import { useState, useRef } from 'react';

interface MagneticProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export function Magnetic({ children, className = '', strength = 0.3 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;
    
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// TEXT REVEAL
interface TextRevealProps {
  text: string;
  className?: string;
  by?: 'word' | 'letter';
  delay?: number;
}

export function TextReveal({ 
  text, 
  className = '', 
  by = 'word',
  delay = 0 
}: TextRevealProps) {
  const items = by === 'word' ? text.split(' ') : text.split('');
  const separator = by === 'word' ? '\u00A0' : ''; // Non-breaking space for words

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: by === 'word' ? 0.08 : 0.03,
          }
        }
      }}
      className={className}
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          style={{ display: 'inline-block' }}
        >
          {item}{separator}
        </motion.span>
      ))}
    </motion.span>
  );
}