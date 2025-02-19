"use client";
import React, { useEffect, useState } from 'react';

interface CircleConfig {
  id: number;
  size: number;
  duration: number;
  delay: number;
  left: number;
  top: number;
}

const FallingCircles = () => {
  const [circles, setCircles] = useState<CircleConfig[]>([]);

  useEffect(() => {
    const calculateNumCircles = () => {
      // Adjust the number of circles based on screen width
      if (window.innerWidth < 768) { // Mobile devices
        return 30; // Fewer circles for mobile
      } else { // Desktop devices
        return 100; // More circles for desktop
      }
    };

    const generateCircles = () => {
      const numCircles = calculateNumCircles();
      const newCircles = Array.from({ length: numCircles }, (_, i) => ({
        id: i,
        size: Math.random() * 10 + 5, // 5-15px
        duration: Math.random() * 5 + 5, // 5-10s
        delay: Math.random() * 5, // 0-5s
        left: Math.random() * 100, // 0-100% of container width
        top: Math.random() * -200 - 100, // Start at random positions above the container
      }));
      setCircles(newCircles);
    };

    generateCircles();

    // Re-generate circles on window resize
    const handleResize = () => {
      generateCircles();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="falling-circles-container">
      {circles.map((circle) => (
        <div
          key={circle.id}
          className="falling-circle"
          style={{
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            left: `${circle.left}%`,
            top: `${circle.top}px`,
            animation: `fall ${circle.duration}s ${circle.delay}s linear infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default FallingCircles;