import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);
import { useRef } from "react"
import Image from "next/image";

export default function Main(){

  const scale=useRef();

  useGSAP(()=>{
    gsap.to(scale.current,{
      scale:15,
      scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        scrub:2,
        start:"top top",
        pin:true
      }
    })
  })

  return(
    <div id="main">
    <Image src='/potraitbg.png' width={2000} height={2000} className="-z-30 absolute -top-24 -left-20 object-cover"
      style={{
        width: '1500px',
        height: '843px',
      }}/>
    <Image src='/potraitfg.png' width={2000} height={2000} className="-z-10 absolute -top-24 -left-20 object-cover"
      style={{
        width: '1500px',
        height: '844px',
      }}/>
    <main className="flex flex-col justify-center items-center font-anton pt-40 text-9xl cursor-default overflow-hidden relative">
      <div ref={scale} className="w-8 h-8 bg-[#ec5938] rounded-full -z-20 absolute -ml-80"></div>
      <p className="text-[#aa9d89] text-xl font-bebas">RHISHAV &ensp; DHALI</p>
      <div data-cursor-hover className="ml-60 mt-12">
        <p className="text-[#aa9d89] ml-36 p-2">Making</p>
        <p className="text-white/70 ml-36 text-3xl text-nowrap p-2">my <span className="text-[#ec5938] text-9xl">PASSIONS</span></p>
        <p className="text-[#aa9d89] mb-20 p-2">COLLIDE ./</p>
      </div>
    </main>
    </div>
  )
}