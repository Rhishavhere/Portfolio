'use client'
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react"
import dynamic from "next/dynamic";
import waves2 from "@/public/waves2.svg"
import down from "@/public/down.svg"
import Cursor from "@/components/Cursor"
import Links from "@/components/Links";
import Nav from "@/components/Nav";
import Main from "@/components/Main";
import Info from "@/components/Info";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Proj from "@/components/Proj";

import LoadingAnimation from "@/components/LoadingAnimation";
import SplitText from "@/components/ui/SplitText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// const DynamicProj = dynamic(() => import("@/components/Proj"), {
//   ssr: false
// });

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isPhone, setIsPhone] = useState(true);
  const [isProceeded, setIsProceeded] = useState(false);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);

  useEffect(() => {
    setIsPhone(window.innerWidth < 1500);
  }, []);

  useGSAP(() => {
    gsap.to(".down-arrow", {
      y: 10,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 1
    });
  }, []);

  return (
    <>
      {isPhone && !isProceeded && (
        <div className="fixed inset-0 font-poppins text-[#f3efec] bg-[#0e0e0e] z-[9999] flex flex-col items-center justify-center p-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Mobile Warning</h2>
          <p className="mb-8">This portfolio is best viewed on desktop as of now.<br/>Proceed on mobile at your own experience's risk.</p>
          <button 
            onClick={() => setIsProceeded(true)}
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Proceed Anyway
          </button>
        </div>
      )}

      {(isProceeded || !isPhone) && loading && (
        <LoadingAnimation onComplete={() => setLoading(false)} />
      )}
      
      
        <Nav/>
        <div id="top" className="bg-[#f3efec] mb-36 text-xl text-black font-poppins w-screen h-screen flex flex-col justify-center items-center relative">
          <div data-cursor-hover className="p-10 cursor-pointer z-10">
            <motion.p style={{ scale: scale }}>
              hi
            </motion.p>
            <motion.p style={{ scale: scale }} className="text-4xl">
              Rhishav here.
            </motion.p>
          </div>
          <div className="absolute top-[60%]">
            <Image src={down} width={20} height={20} className="down-arrow"></Image>
          </div>
        </div>
      
      

      <div className="overflow-x-hidden">
        <Cursor/>
        <Links/>
        <div className=" absolute -bottom-48 z-[100]">
          <Image src={waves2} className="w-screen"/>
        </div>
        <Info/>
        <Main/>
        <AboutMe/>
        <Skills/>
        <Proj/>
        
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
