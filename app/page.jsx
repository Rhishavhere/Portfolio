'use client'
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react"

import Cursor from "@/components/Cursor"
import Links from "@/components/Links";
import Nav from "@/components/Nav";
import Background from "@/components/Background";
import Main from "@/components/Main";

export default function Home() {

  const { scrollY } = useScroll();

  const circleScale = useTransform(scrollY, [0, 400], [0, 14]);

  return (
    <>
    <Cursor/>
    <Links/>
    <Nav/>
        
    <Main/>

    <div className="bg-white/10 p-2 w-[100vw] flex justify-center">
      <p className="text-white/50 text-2xl font-script tracking-widest">code, design, and the boundless digital frontier</p>
    </div>
        
    <div>
      <p className="text-8xl">HELLO</p>
      <p className="text-8xl">HELLO</p>
      <p className="text-8xl">HELLO</p>
      <p className="text-8xl">HELLO</p>
      <p className="text-8xl">HELLO</p>
      <p className="text-8xl">HELLO</p>
      <p className="text-8xl">HELLO</p>
      <p className="text-8xl">HELLO</p>
      <p className="text-8xl">HELLO</p>
      <p className="text-8xl">HELLO</p>
      <p className="text-8xl">HELLO</p>
      <p className="text-8xl">HELLO</p>
      <p className="text-8xl">HELLO</p>
      <p className="text-8xl">HELLO</p>
      <p className="text-8xl">HELLO</p>
      <p className="text-8xl">HELLO</p>
      <p className="text-8xl">HELLO</p>
    </div>   
    
    </>
  )
}
