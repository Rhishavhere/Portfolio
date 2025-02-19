'use client'
import Image from "next/image"
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);
import FlowingMenu from "./ui/FlowingMenu";

export default function Skills(){

  useGSAP(()=>{
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

  const demoItems = [
    { 
      link: '', 
      text: 'python', 
      image: 'https://images.unsplash.com/photo-1601370552761-d129028bd833?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      projects: ['selenium', 'hugging face', 'automation', 'pytorch', 'langchain','flask']
    },
    { 
      link: '', 
      text: 'javascript', 
      image: 'https://images.unsplash.com/photo-1601370552761-d129028bd833?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      projects: ['p5.js', 'canvas', 'node.js','express']
    },
    { 
      link: '', 
      text: 'Web Development', 
      image: 'https://images.unsplash.com/photo-1601370552761-d129028bd833?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      projects: ['react', 'mongoDB', 'tailwind','next']
    },
    { 
      link: '', 
      text: 'AI Engineering', 
      image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      projects: ['sckitlearn', 'transformer', 'pytorch','LLMs']
    },
    { 
      link: '', 
      text: 'Automations', 
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      projects: ['scripting', 'AI agents', 'scheduling']
    },
    { 
      link: '', 
      text: 'Data Structures and Algorithms', 
      image: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      projects: ['Sorting Algorithms', 'Data Handling', 'Dynamic Programming']
    }
  ];

  return(
    <div className="flex flex-col justify-center items-center">
      <div className="relative w-screen h-[500px] font-oswald">
        <FlowingMenu items={demoItems} />
      </div>
    </div>
  )
}