'use client'
import Image from "next/image";
import ScrollVelocity from "./ui/ScrollVelocity";
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);
import Spline from '@splinetool/react-spline';

import Projects from "./Projects";

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
    <>
    
    <div id="projects" className="min-h-screen">

      <ScrollVelocity
        texts={['projects', '2023 2024 2025']} 
        velocity={100} 
        className="custom-scroll-text font-poppins font-extralight"
      />
      <div className="relative">
        <Spline scene="https://prod.spline.design/r11oixtU3czw4BBW/scene.splinecode" 
          className="mt-20"
        />
        <div className="w-40 h-10 bg-[#E3E3E3] absolute bottom-4 right-5 flex justify-center items-center text-black font-poppins font-medium tracking-widest">BLENDER-SPLINE</div>
        <div className="absolute top-72 left-72 text-black text-6xl font-poppins">
          <div data-cursor-hover>
            <div className="flex items-center gap-6">
              <p className="tracking-widest">Aura.ai</p>
              <a href="https://github.com/Rhishavhere/Aura.v1" target='_blank' className="bg-black/5 p-2 rounded-full">
                <Image src='/link.svg' width={30} height={30}/>
              </a>
            </div>
              <p className="text-xl text-4/90">my multimodal AI system</p>
          </div>
          <p className="mt-[8vh] text-[2vh] font-light text-black/30 w-[500px]">backed by highly capable finetuned LLama (aura) - powers Aura.v1, a multitasking multimodal ai agent that is aware of vision and local system while operating on user terminal to an extent from searching the internet to making changes in your directories.</p>
          
          
        </div>
      </div>
    </div>

    <div className="min-h-screen p-36">
      <Projects 
        number="02"
        title="greenMind"
        githubLink="https://github.com/Rhishavhere/GreenMind-Backend"
        description="a machine learning model to accurately predict household power consumption and identify peak usage times alerting users"
      />
      <Projects 
        number="03"
        title="infoAsk"
        githubLink="https://github.com/Rhishavhere/AI-webfetch"
        description="using selenium as its engine, this model scraps the web and finds you info with minimum efforts and maximum time efficiency"
      />
      <Projects 
        number="04"
        title="wappHi"
        githubLink="https://github.com/Rhishavhere/whatsAgent-2.0"
        description="a Python-LLM based chat automation tool that integrates with WhatsApp and uses AI to generate conversational responses"
      />
      <Projects 
        number="05"
        title="gravity_Sim"
        githubLink=" "
        description="a machine learning model to accurately predict household power consumption and identify peak usage times alerting users"
      />
      <Projects 
        number="06"
        title="evolving_ants"
        githubLink=" "
        description="a machine learning model to accurately predict household power consumption and identify peak usage times alerting users"
      />
    </div>
    </>
  )
}