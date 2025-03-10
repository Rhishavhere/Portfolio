import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import CountUp from './ui/CountUp';

/**
 * Component: LoadingAnimation
 * 
 * Displays a fake loading animation with:
 * - A progress bar that shrinks only from the right (because the left side is anchored).
 * - A white ball that "sits" on the bar and then falls with a bounce once the bar has shrunk enough.
 * 
 * @param {Function} onComplete - Callback fired when the animation completes.
 */
function LoadingAnimation({ onComplete }) {
  const containerRef = useRef(null);
  const barRef = useRef(null);
  const ballRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (typeof onComplete === 'function') {
          onComplete();
        }
      }
    });

    // STEP 1: Animate the bar "loading" using a scaleX animation so it shrinks only from the right.
    tl.to(barRef.current, {
      scaleX: 0.1, // Scale the bar horizontally to 10% of its original size.
      duration: 4,
      ease: "linear",
      transformOrigin: "left" // ensures the left side stays fixed, so the bar shrinks from the right.
    });

    // STEP 2: Animate the ball falling with a bounce; start just before the bar finishes (adjust as desired).
    tl.to(
      ballRef.current,
      {
        y: 400, // moves the ball downward by 300px; adjust as needed
        duration: 1.5,
        ease: "bounce.out"
      },
      "-=1.8" // overlap so the ball drop starts when the bar is nearly (or fully) shrunk.
    );

    // STEP 3: Animate the ball scaling up and fading out.
    tl.to(
      ballRef.current,
      {
        scale: 100, // scale factor large enough to cover the whole screen
        opacity: 1,
        duration: 0.8,
        ease: "power2.in",
      },
      "-=0.5"
    );

    // STEP 4: Fade out the entire loading container.
    tl.to(
      containerRef.current,
      {
        opacity: 0,
        duration: 0.8,
        delay:1,
        onComplete: () => {
          if (onComplete) onComplete();
        }
      },
      "-=0.3"
    );

    // Cleanup GSAP timeline on component unmount.
    return () => tl.kill();
  }, [onComplete]);

  return (
    <>
    
    <div
      ref={containerRef}
      className="fixed inset-0 bg-black z-[1000] flex flex-col items-center justify-center"
    >
     
      <div className="relative flex flex-col items-center">
        {/* The progress bar */}
        <div
          ref={barRef}
          className="bg-white/30 h-[2px] w-64 rounded-md origin-left mt-[36px] absolute"
        />
        {/* The ball – positioned to overlap the bar */}
          <div
            ref={ballRef}
            className="bg-white rounded-full w-8 h-8"
          />
          {/* <div className="bg-white rounded-full w-6 h-6"></div>
          <div className="bg-white rounded-full w-4 h-4"></div>
          <div className="bg-white rounded-full w-2 h-2"></div> */}
          
          
      </div>
      {/* <p className='font-poppins itlatic mt-10 bg-white/20 p-2 pr-4 pl-4 rounded-lg'>loading ...</p>  */}
      <CountUp
        from={0}
        to={100}
        separator=""
        direction="up"
        duration={1}
        className="count-up-text text-[300px] absolute left-20 bottom-0 font-bebas text-white/30"
      />
    </div>
    </>
  );
}

export default LoadingAnimation; 