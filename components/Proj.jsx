'use client'
import ScrollVelocity from "./ui/ScrollVelocity";
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);
import Spline from '@splinetool/react-spline';

export default function Proj(){

  useGSAP(()=>{
    gsap.from(".cards",{
      scrollTrigger:{
        trigger:".cards",
        toggleActions:"restart none none reverse"
      },
      opacity:0,
      delay:1
    })
  })

  return(
    <div id="projects" className="min-h-screen">

      <ScrollVelocity
        texts={['projects', '2024 2025']} 
        velocity={100} 
        className="custom-scroll-text font-poppins font-extralight"
      />
      <div className="relative">
        <Spline scene="https://prod.spline.design/r11oixtU3czw4BBW/scene.splinecode" 
          className="mt-20"
        />
        <div className="w-40 h-10 bg-[#E3E3E3] absolute bottom-4 right-5 flex justify-center items-center text-black font-poppins font-medium tracking-widest">BLENDER-SPLINE</div>
      </div>
    </div>
  )
}