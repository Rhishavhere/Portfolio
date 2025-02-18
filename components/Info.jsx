'use client'
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);

// import MagnetLines from "./ui/MagnetLines";
import dynamic from 'next/dynamic';

const TextPressure = dynamic(() => import('@/components/ui/TextPressure'), {
  ssr: false
});

export default function Info(){

  useGSAP(()=>{
    gsap.to(".box",{
      translateX: (index, element) => {
        return element.parentElement.offsetWidth;
      },
      stagger:0.5,
      scrollTrigger:{
        trigger:'.parent',
        scroller:'body',
        start:'-=80 top',
        end:'+=1500',
        scrub:0.5,
        pin:true
      }
    })
  })

  return(
    <div className="parent bg-[#0e0e0e] font-mont mt-28 mb-20 ">
      <div className="flex flex-col justify-center items-center">

      <p className="text-2xl mb-8 font-poppins font-normal text-1">About Me</p>
      
      <div className="relative p-3 w-fit flex flex-col justify-center items-center mb-10"> 
        <p className="text-7xl text-orange-200/80 font-poppins ">
        I&apos;m a <span className="text-2">programmer</span> skilled at creating </p>
        <div className="box absolute mix-blend-color bg-[#0e0e0e] w-full h-full left-0 top-0"></div>
      </div>
      </div>
      
      <div data-cursor-hover style={{position: 'relative', height: '500px', marginLeft:'20px', marginRight:'20px'}}>
        <TextPressure
          text="Experiences"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={false}
          textColor="#f3f3f3"
          strokeColor="#f3f3f3"
          minFontSize={36}
        />
      </div>
      
      <div className="flex flex-col justify-center items-center">

      <div className="relative p-3 w-fit bg-stone-700/30 ">
        <p className="text-4xl text-orange-200/80 font-poppins text-center">using code and tech.</p>
        <div className="absolute mix-blend-color bg-[#0e0e0e] w-full h-full left-0 top-0"></div>
      </div>
      </div>
    </div>

      
    
  )
}