'use client'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);
import Image from "next/image";
import ShinyText from "./ui/ShinyText";
import { useRef, useState, useEffect } from "react"

export default function Main(){

  const [currentColor, setCurrentColor] = useState(0);
  const [isItalic, setIsItalic] = useState(false)
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const colors = ['#aa9d89', '#ec5938'];
  const phrases = [
    { main: "DREAMS", end: "passion" },
    { main: "STORIES", end: "pixels"},
    { main: "ENGINEERING", end: "0s and 1s" },
    { main: "WORLDS", end: "imagination" },
    { main: "SYSTEMS", end: "logic" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColor(prev => !prev);
      setIsItalic(italic => !italic);
      gsap.to(".phrase",{
        y: -10,
        opacity: 0,
        duration: 0.8,
        onComplete:()=>{
          setCurrentPhrase(prev => (prev + 1) % phrases.length);
        }
      })
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useGSAP(()=>{
    gsap.from(".textin",{
      translateX:20,
      opacity:0,
      duration:1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".textin",
        start: "top 90%",
        toggleActions: "restart none none reverse",
      }
    });
    gsap.from(".bgin",{
      translateX:-20,
      opacity:0,
      duration:1,
      stagger:0.5,
      scrollTrigger: {
        trigger: ".bgin",
        start: "top 90%",
        toggleActions: "restart none none reverse",
      }
    });
  });
  useGSAP(()=>{
    gsap.fromTo(".phrase", 
    { 
      y: 10,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
    })
    }, [currentPhrase]);

  return(
    <div className="relative overflow-hidden main">
    <Image src='/potraitfg.png' width={2000} height={2000} className="bgin -z-10 absolute -top-24 -left-28 object-cover"
      style={{
        width: '1500px',
        height: '844px',
      }}/>
    <Image src='/potraitbg.png' width={2000} height={2000} className="bgin -z-30 absolute -top-24 -left-20 object-cover"
      style={{
        width: '1500px',
        height: '843px',
      }}/>
    <main className="flex flex-col justify-center items-center font-poppins pt-40 text-9xl cursor-default relative">
      <p className="text-1 text-xl font-bebas">RHISHAV &ensp; DHALI</p>
      <div data-cursor-hover className=" mt-12 ml-[200px] relative" style={{ width: '500px' }}>
        <div className=" top-0 left-0 w-full flex flex-col justify-center">
        <p className="text-1 text-7xl p-2 textin tracking-tighter" style={{ 
          // color: colors[currentColor],
          // fontStyle: isItalic ? 'italic' : 'normal' 
          }}>building</p>
          
          <div className="flex items-end textin">
            {/* <p className="text-white/70 ml-36 text-3xl text-nowrap p-2 textin">blocks of</p> */}
            <p className="text-[#ec5938] text-[180px] ml-10 text-left font-bebas phrase">{phrases[currentPhrase].main}</p>
          </div>
          <div className="flex items-end">
            <p className="text-1/40 text-7xl mb-20 p-2 textin tracking-tighter">with</p>
            <p className="text-1 text-7xl mb-20 p-2 textin tracking-tighter phrase italic">{phrases[currentPhrase].end}</p>
          </div>
      </div>
      </div>
    </main>

    <div className="bg-white/5 p-2  w-[100vw] flex justify-center">
      <ShinyText text="code, design, and the boundless digital frontier" disabled={false} speed={2} className='text-white/50 text-2xl font-script tracking-widest' />
    </div>

    </div>
  )
}