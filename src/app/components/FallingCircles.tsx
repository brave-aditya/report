"use client";
import React, { useEffect, useRef } from 'react';


const FallingCircles = () => {
  const numCircles = 100;
  const circlesRef = useRef([] as { id: number; rw: number; ra: number; rd: number; }[]);

  useEffect(() => {
    const createCircles = () => {
      circlesRef.current = Array.from({ length: numCircles }, (_, i) => {
        const rw = Math.floor(Math.random() * 10) + 1; // Random width/height
        const ra = Math.floor(Math.random() * 20) + 10; // Random animation duration
        const rd = Math.floor(Math.random() * 10) + 1; // Random animation delay
        //const rc = Math.floor(Math.random() * 10) + 90; // Random color lightness

        return {
          id: i,
          rw,
          ra,
          rd,
          //rc,
        };
      });
    };

    createCircles(); // Create circles on mount

    return () => {
      // Cleanup if needed (e.g., clear intervals)
    };
  }, []);

  return (
    <div className="falling-circles-container">
      {circlesRef.current.map((circle) => (
        <div
          key={circle.id}
          className="falling-circle"
          style={{
            width: `${circle.rw}px`,
            height: `${circle.rw}px`,
            marginLeft: `${(100 / numCircles) * circle.id}%`, // Percentage-based margin
            //background: `hsl(0, 0%, ${circle.rc}%, 0.8)`, // Use hsl for color
            //boxShadow: `0 0 15px 10px hsl(0, 0%, ${circle.rc}%, 0.5)`,
            animation: `fall ${circle.ra}s ${circle.rd}s infinite`,
          }}
        />
      ))}
    </div>
  );
};


export default FallingCircles;