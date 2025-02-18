'use client'
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react"
import dynamic from "next/dynamic";
import waves from "@/public/waves.svg"
import Cursor from "@/components/Cursor"
import Links from "@/components/Links";
import Nav from "@/components/Nav";
import Main from "@/components/Main";
import Info from "@/components/Info";
import Skills from "@/components/Skills";
// import AiProj from "@/components/AiProj";

import LoadingAnimation from "@/components/LoadingAnimation";

// const DynamicAiProj = dynamic(() => import("@/components/AiProj"), {
//   ssr: false
// });

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Show the loading animation until it completes */}
      {/* {loading && <LoadingAnimation onComplete={() => setLoading(false)} />} */}

      <div className="bg-white text-2xl text-black font-poppins w-screen h-screen flex flex-col justify-center items-center relative">
        <p>hello</p>
        <p className="italic">welcome to my journey</p>
        <div className="absolute bottom-0 left-0">
          <Image src={waves}/>
        </div>
      </div>

      <div className="overflow-x-hidden">
        <Cursor/>
        <Links/>
        <Nav/>
        
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
