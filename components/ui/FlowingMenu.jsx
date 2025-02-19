// /*
// 	jsrepo 1.38.0
// 	Installed from https://reactbits.dev/tailwind/
// 	19-2-2025
// */

// import React from 'react';
// import { gsap } from 'gsap';

// function FlowingMenu({ items = [] }) {
//   return (
//     <div className="w-full h-full overflow-hidden">
//       <nav className="flex flex-col h-full m-0 p-0">
//         {items.map((item, idx) => (
//           <MenuItem key={idx} {...item} />
//         ))}
//       </nav>
//     </div>
//   );
// }

// function MenuItem({ link, text, image, projects }) {
//   const itemRef = React.useRef(null);
//   const marqueeRef = React.useRef(null);
//   const marqueeInnerRef = React.useRef(null);

//   const animationDefaults = { duration: 0.6, ease: 'expo' };

//   const findClosestEdge = (mouseX, mouseY, width, height) => {
//     const topEdgeDist = (mouseX - width / 2) ** 2 + mouseY ** 2;
//     const bottomEdgeDist = (mouseX - width / 2) ** 2 + (mouseY - height) ** 2;
//     return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
//   };

//   const handleMouseEnter = (ev) => {
//     if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
//     const rect = itemRef.current.getBoundingClientRect();
//     const edge = findClosestEdge(
//       ev.clientX - rect.left,
//       ev.clientY - rect.top,
//       rect.width,
//       rect.height
//     );

//     gsap.timeline({ defaults: animationDefaults })
//       .set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' })
//       .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' })
//       .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' });
//   };

//   const handleMouseLeave = (ev) => {
//     if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
//     const rect = itemRef.current.getBoundingClientRect();
//     const edge = findClosestEdge(
//       ev.clientX - rect.left,
//       ev.clientY - rect.top,
//       rect.width,
//       rect.height
//     );

//     gsap.timeline({ defaults: animationDefaults })
//       .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' })
//       .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' });
//   };

//   const repeatedMarqueeContent = Array.from({ length: 4 }).map((_, idx) => (
//     <React.Fragment key={idx}>
//       <div
//         className="w-[200px] h-[7vh] my-[2em] mx-[2vw] p-[1em_0] rounded-[50px] bg-cover bg-center"
//         style={{ backgroundImage: `url(${image})` }}
//       />
//       <div className="flex items-center justify-center">
//         <span className="text-[#060606] text-[2vh] whitespace-nowrap">
//           {projects?.[idx % projects.length]}
//         </span>
//       </div>
//     </React.Fragment>
//   ));

//   return (
//     <div className="flex-1 relative overflow-hidden text-center shadow-[0_-1px_0_0_#fff]" ref={itemRef}>
//       <p
//         className="flex items-center justify-center h-full relative font-poppins tracking-widest cursor-pointer no-underline text-white text-3xl hover:text-[#060606] focus:text-white focus-visible:text-[#060606]"
//         // href={link}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         {text}
//       </p>
//       <div
//         className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-white translate-y-[101%]"
//         ref={marqueeRef}
//       >
//         <div className="h-full w-[200%] flex" ref={marqueeInnerRef}>
//           <div className="flex items-center relative h-full w-[200%] will-change-transform animate-marquee">
//             {repeatedMarqueeContent}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FlowingMenu;

import React, { useRef, useCallback, useMemo } from 'react';
import { gsap } from 'gsap';

const FlowingMenu = ({ items = [] }) => (
  <div className="w-full h-full overflow-hidden">
    <nav className="flex flex-col h-full m-0 p-0">
      {items.map((item, idx) => (
        <MenuItem key={idx} {...item} />
      ))}
    </nav>
  </div>
);

const MenuItem = ({ link, text, image, projects = [] }) => {
  const itemRef = useRef(null);
  const marqueeRef = useRef(null);
  const marqueeInnerRef = useRef(null);

  const animationDefaults = { duration: 0.6, ease: 'expo' };

  // Determines whether the cursor is closer to the top or bottom edge.
  const findClosestEdge = useCallback((mouseX, mouseY, width, height) => {
    const topEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY, 2);
    const bottomEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY - height, 2);
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
  }, []);

  // Helper to run the marquee vertical animation.
  const animateMarquee = useCallback(
    (edge, isEntering) => {
      if (!marqueeRef.current || !marqueeInnerRef.current) return;

      const tl = gsap.timeline({ defaults: animationDefaults });
      if (isEntering) {
        tl.set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' })
          .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' })
          .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' });
      } else {
        tl.to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' })
          .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' });
      }
    },
    [animationDefaults]
  );

  const handleMouseEnter = useCallback(
    (ev) => {
      if (!itemRef.current) return;
      const rect = itemRef.current.getBoundingClientRect();
      const mouseX = ev.clientX - rect.left;
      const mouseY = ev.clientY - rect.top;
      const edge = findClosestEdge(mouseX, mouseY, rect.width, rect.height);
      animateMarquee(edge, true);
    },
    [findClosestEdge, animateMarquee]
  );

  const handleMouseLeave = useCallback(
    (ev) => {
      if (!itemRef.current) return;
      const rect = itemRef.current.getBoundingClientRect();
      const mouseX = ev.clientX - rect.left;
      const mouseY = ev.clientY - rect.top;
      const edge = findClosestEdge(mouseX, mouseY, rect.width, rect.height);
      animateMarquee(edge, false);
    },
    [findClosestEdge, animateMarquee]
  );

  // Memoize the marquee content.
  const repeatedMarqueeContent = useMemo(() => {
    const projectList = projects.length ? projects : ['Project'];
    return Array.from({ length: 4 }).map((_, idx) => (
      <React.Fragment key={idx}>
        <div
          className="w-[200px] h-[7vh] my-[2em] mx-[2vw] py-[1em] rounded-[50px] bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="flex items-center justify-center">
          <span className="text-[#060606] text-[2vh] whitespace-nowrap">
            {projectList[idx % projectList.length]}
          </span>
        </div>
      </React.Fragment>
    ));
  }, [image, projects]);

  return (
    <div
      className="flex-1 relative overflow-hidden text-center shadow-[0_-1px_0_0_#fff]"
      ref={itemRef}
    >
      <p
        className="flex items-center justify-center h-full relative font-poppins tracking-widest cursor-pointer no-underline text-white text-3xl hover:text-[#060606] focus:text-white focus-visible:text-[#060606]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </p>
      {/* Marquee container */}
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-white translate-y-[101%]"
        ref={marqueeRef}
      >
        <div className="flex w-[200%] animate-marquee" ref={marqueeInnerRef}>
          {/* Duplicate the content for a seamless marquee effect */}
          <div className="flex items-center justify-center w-1/2">
            {repeatedMarqueeContent}
          </div>
          <div className="flex items-center justify-center w-1/2">
            {repeatedMarqueeContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowingMenu;



