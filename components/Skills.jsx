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
      image: 'https://i.pinimg.com/736x/c3/1c/43/c31c4380b08d0fbbd57284e0fc659bf2.jpg',
      projects: ['selenium', 'hugging face', 'automation', 'pytorch', 'langchain','flask']
    },
    { 
      link: '', 
      text: 'javascript', 
      image: 'https://i.pinimg.com/736x/a8/17/12/a81712c575e8d7203310b97454fe6d29.jpg',
      projects: ['p5.js', 'canvas', 'node.js','express']
    },
    { 
      link: '', 
      text: 'Web Development', 
      image: 'https://i.pinimg.com/736x/46/0e/f7/460ef74e6e4f2c55a892d5db7cb35113.jpg',
      projects: ['react', 'mongoDB', 'tailwind','next']
    },
    { 
      link: '', 
      text: 'AI Engineering', 
      image: 'https://i.pinimg.com/736x/c8/64/65/c86465c994d2d520a0a9ef02dac784e4.jpg',
      projects: ['sckitlearn', 'transformer', 'pytorch','LLMs']
    },
    { 
      link: '', 
      text: 'Automations', 
      image: 'https://i.pinimg.com/736x/56/ca/b4/56cab4b61a7add5c47a51a77fe00b050.jpg',
      projects: ['scripting', 'AI agents', 'scheduling']
    },
    { 
      link: '', 
      text: 'Data Algorithms', 
      image: 'https://i.pinimg.com/736x/d5/9c/04/d59c043c7e22beebce750b1ac704765e.jpg',
      projects: ['Sorting Algorithms', 'Data Handling', 'Dynamic Programming']
    },
    { 
      link: '', 
      text: 'Designing', 
      image: 'https://i.pinimg.com/736x/d5/9c/04/d59c043c7e22beebce750b1ac704765e.jpg',
    },
    { 
      link: '', 
      text: 'Film Making', 
      image: 'https://i.pinimg.com/736x/d5/9c/04/d59c043c7e22beebce750b1ac704765e.jpg',
    },
    { 
      link: '', 
      text: 'Visual Arts', 
      image: 'https://i.pinimg.com/736x/d5/9c/04/d59c043c7e22beebce750b1ac704765e.jpg',
    },
  ];

  return(
    <div className="flex flex-col justify-center items-center min-h-screen mb-36">
      <div className="relative w-screen h-[1000px] font-oswald">
        <FlowingMenu items={demoItems} />
      </div>
    </div>
  )
}