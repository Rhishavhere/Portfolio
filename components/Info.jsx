'use client'
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);

// import MagnetLines from "./ui/MagnetLines";
import dynamic from 'next/dynamic';
import ShinyText from "./ui/ShinyText";

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
        start:'-=10 top',
        end:'+=10 top',
        scrub:0.5,
        pin:false
      }
    })
  })

  return(
    <div id="info" className="parent bg-[#0e0e0e] font-mont mt-28 mb-20 ">
      <div className="flex flex-col justify-center items-center">

      <p className="text-2xl mb-8 font-poppins font-normal text-white/30">About Me</p>
      
      <div className="relative p-3 w-fit flex flex-col justify-center items-center"> 
        <p className="text-6xl text-white font-poppins font-extralight ">
        I&apos;m a <span className="text-[#69b0f7]">programmer</span> skilled at creating </p>
        {/* <div className="box absolute mix-blend-color bg-[#0e0e0e] w-full h-full left-0 top-0"></div> */}
      </div>
      </div>
      
      <div data-cursor-hover style={{position: 'relative', height: '400px', marginLeft:'20px', marginRight:'20px', cursor:'none'}}>
        <TextPressure
          text="Experiences"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={false}
          textColor="#f3efec"
          strokeColor="#f3efec"
          minFontSize={36}
        />
      </div>
      
      <div className="flex flex-col justify-center items-center">

      <div className="relative p-3 w-fit bg-stone-700/30 mt-10 mb-32">
        <ShinyText text="using code and tech." font="poppins" disabled={false} speed={2} className='text-2xl text-orange-200/80 font-poppins text-center' />
        <div className="absolute mix-blend-color bg-[#0e0e0e] w-full h-full left-0 top-0"></div>
      </div>
      </div>
    </div>

      
    
  )
}