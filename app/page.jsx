'use client'
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react"
import dynamic from "next/dynamic";
import waves from "@/public/waves.svg"
import waves2 from "@/public/waves2.svg"
import Cursor from "@/components/Cursor"
import Links from "@/components/Links";
import Nav from "@/components/Nav";
import Main from "@/components/Main";
import Info from "@/components/Info";
import Skills from "@/components/Skills";
// import AiProj from "@/components/AiProj";

import LoadingAnimation from "@/components/LoadingAnimation";
import SplitText from "@/components/ui/SplitText";

// const DynamicAiProj = dynamic(() => import("@/components/AiProj"), {
//   ssr: false
// });

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingAnimation onComplete={() => setLoading(false)} />}

        <Nav/>
      <div className="bg-[#f3efec] mb-36 text-xl text-black font-poppins w-screen h-screen flex flex-col justify-center items-center relative">
        <div data-cursor-hover>
          <p>hello. I am Rhishav</p>
          <p className="italic text-2xl">welcome to this journey</p>
        </div>
      </div>
      
      

      <div className="overflow-x-hidden">
        <Cursor/>
        <Links/>
        <div className=" absolute -bottom-48 z-[100]">
        <Image src={waves2} className="w-screen"/>
      </div>
        <Main/>
        <Info/>
        {/* <Skills/> */}
        {/* <AiProj/> */}
        {/* <DynamicAiProj/> */}
        
        <div className="text-black">
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
        </div>
      </div>
    </>
  )
}
