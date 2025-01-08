import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);
import { useRef } from "react"
import Image from "next/image";
import ShinyText from "./ui/ShinyText";

export default function Main(){

  useGSAP(()=>{
    gsap.from(".textin",{
      translateX:20,
      opacity:0,
      duration:1,
      stagger: 0.2
    }),
    gsap.from(".bgin",{
      translateX:-20,
      opacity:0,
      duration:1,
      stagger:0.5
    })
  })

  return(
    <div className="overflow-hidden main">
    <Image src='/potraitfg.png' width={2000} height={2000} className="bgin -z-10 absolute -top-24 -left-20 object-cover"
      style={{
        width: '1500px',
        height: '844px',
      }}/>
    <Image src='/potraitbg.png' width={2000} height={2000} className="bgin -z-30 absolute -top-24 -left-20 object-cover"
      style={{
        width: '1500px',
        height: '843px',
      }}/>
    <main className="flex flex-col justify-center items-center font-mont font-anton pt-40 text-9xl cursor-default relative">
      <p className="text-[#aa9d89] text-xl font-bebas">RHISHAV &ensp; DHALI</p>
      <div data-cursor-hover className="ml-60 mt-12">
        <p className="text-[#aa9d89] ml-36 p-2 textin">Making</p>
        <p className="text-white/70 ml-36 text-3xl text-nowrap p-2 textin">my <span className="text-[#ec5938] text-9xl">PASSIONS</span></p>
        <p className="text-[#aa9d89] mb-20 p-2 textin">COLLIDE ./</p>
      </div>
    </main>

    <div className="bg-white/5 p-2  w-[100vw] flex justify-center">
      <ShinyText text="code, design, and the boundless digital frontier" disabled={false} speed={2} className='text-white/50 text-2xl font-script tracking-widest' />
    </div>

    </div>
  )
}