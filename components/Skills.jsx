'use client'
import Image from "next/image"
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);

export default function Skills(){

  useGSAP(()=>{
    gsap.from(".logo",{
      scrollTrigger:{
        trigger:".logo",
        toggleActions:"restart none none reverse"
      },
      opacity:0,
      delay:0.5,
      stagger:0.2,
    }),
    gsap.from(".card",{
      scrollTrigger:{
        trigger:".card",
        toggleActions:"restart none none reverse"
      },
      opacity:0,
      scale:0.5,
      delay:0.5,
      stagger:0.2,
    })
  })


  return(
    <>
    <div className="flex justify-center items-center m-20 mt-48 mb-36 gap-36">
      <Image className="logo" src="python.svg" width={40} height={40} />
      <Image className="logo" src="node.svg" width={40} height={40} />
      <Image className="logo" src="react.svg" width={40} height={40} />
      <Image className="logo" src="tensorflow.svg" width={40} height={40} />
      <Image className="logo" src="adobe.svg" width={40} height={40} />
      <Image className="logo" src="blender.svg" width={40} height={40} />
    </div>
    <div className="flex gap-4 justify-center items-center ml-20 mr-20">
      <div className="card bg-[#181715] text-1 font-poppins w-[350px] h-[200px] flex flex-col justify-center text-left p-10 pl-8 ">
        <p className="text-1/50">01</p>
        <p className="text-3xl mb-2">WEB DESIGN</p>
        <p className="text-sm text-1/50">I craft visually stunning and user-centric web experiences that seamlessly blend aesthetics and functionality.</p>
      </div>
      <div className="card bg-[#181715] text-1 font-poppins w-[350px] h-[200px] flex flex-col justify-center text-left p-10 pl-8">
        <p className="text-1/50">02</p>
        <p className="text-3xl mb-2">DEVELOPMENT</p>
        <p className="text-sm text-1/50">I&apos;m desire to build innovative and impactful software solutions that solve real-world problems.</p>
      </div>
      <div className="card bg-[#181715] text-1 font-poppins w-[350px] h-[200px] flex flex-col justify-center text-left p-10 pl-8">
        <p className="text-1/50">03</p>
        <p className="text-3xl mb-2">DSA</p>
        <p className="text-sm text-1/50">My understanding of DSA allows me to write clean, maintainable, and performant code to handle computational tasks.</p>
      </div>
      

    </div>
    </>
  )
}