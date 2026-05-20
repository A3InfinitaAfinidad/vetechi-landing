'use client';

import { ReactNode, useRef, useState } from 'react';

interface Parallax3DImageProps {
  children: ReactNode;
  intensity?: number;
  scale?: number;
}

export default function Parallax3DImage({
  children,
  intensity = 25,
  scale = 1.06
}: Parallax3DImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotationX = ((y - centerY) / centerY) * intensity;
    const rotationY = ((x - centerX) / centerX) * -intensity;

    setRotation({ x: rotationX, y: rotationY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1200px',
        transformStyle: 'preserve-3d'
      }}
      className="relative"
    >
      <div
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.4s cubic-bezier(0.23, 1, 0.320, 1)'
        }}
        className="w-full h-full"
      >
        <div
          style={{
            transform: `scale(${1 + (Math.abs(rotation.x) + Math.abs(rotation.y)) / 1000 * (scale - 1)}) translateZ(20px)`,
            transformStyle: 'preserve-3d',
            transition: 'transform 0.4s cubic-bezier(0.23, 1, 0.320, 1)'
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
