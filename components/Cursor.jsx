'use client'
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const onMouseMove = (e) => {
      // Get the element directly under the cursor
      const targetElement = document.elementFromPoint(e.clientX, e.clientY);
      
      // Check if the element or its parents are interactive
      const isHovering = targetElement?.closest('[data-cursor-hover]');
      const isHovering2 = targetElement?.closest('[data-cursor-tool]');
      // Animate cursor position
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        scale: isHovering ? 20 : isHovering2 ? 5 : 1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 rounded-full mix-blend-difference bg-white pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
      style={{zIndex:999}}
    />
  );
};

export default Cursor;