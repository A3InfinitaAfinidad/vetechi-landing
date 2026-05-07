'use client';

import { useEffect, useRef } from 'react';
import { animate } from 'framer-motion';

interface AnimatedCounterProps {
  value: string;
  duration?: number;
}

export default function AnimatedCounter({ value, duration = 2 }: AnimatedCounterProps) {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    // Remove non-numeric chars except . and +
    const cleanStr = value.replace(/[^0-9.]/g, '');
    const numericValue = parseFloat(cleanStr);
    
    // If not a number, just render the text
    if (isNaN(numericValue) || value.includes('/')) {
      node.textContent = value;
      return;
    }

    const hasPlus = value.includes('+');
    const isDecimal = value.includes('.');

    const controls = animate(0, numericValue, {
      duration,
      delay: 0.5,
      ease: "easeOut",
      onUpdate(currentValue) {
        if (isDecimal) {
          node.textContent = currentValue.toFixed(1) + (hasPlus ? '+' : '');
        } else {
          node.textContent = Math.round(currentValue) + (hasPlus ? '+' : '');
        }
      },
    });

    return () => controls.stop();
  }, [value, duration]);

  return <span ref={nodeRef}>{value}</span>;
}
