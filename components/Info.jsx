import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);

import MagnetLines from "./ui/MagnetLines";

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
        markers:true,
        pin:true
      }
    })
  })

  return(
    <div className="parent bg-[#0d0d0d] font-mont font-bold flex flex-col m-20 pl-36">
      <p className="text-2xl mb-8 font-poppins font-normal text-1">About Me</p>
      
      <div className="relative p-3 w-fit">
        <p className="text-7xl mr-20 text-orange-200">
        I&apos;m a <span className="text-2">programmer</span> skilled at </p>
        <div className="box absolute mix-blend-color bg-black w-full h-full left-0 top-0"></div>
      </div>
      
      <div className="relative p-3">
        <p className="text-7xl mr-20 text-orange-200">creating experiences using code</p>
        <div className="box absolute mix-blend-color bg-black w-full h-full left-0 top-0"></div>
      </div>
      
      <div className="relative p-3">
        <p className="text-7xl mr-20 text-orange-200"> and tech.</p>
        <div className="box absolute mix-blend-color bg-black w-full h-full left-0 top-0"></div>
      </div>

      <MagnetLines
        rows={7}
        columns={9}
        containerSize="100%"
        lineColor="tomato"
        lineWidth="0.4vmin"
        lineHeight="5vmin"
        baseAngle={0}
        style={{ marginTop: "50px", height:"100vmin"}}
      />
    
    </div>
  )
}