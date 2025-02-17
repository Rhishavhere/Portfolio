'use client'
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react"
import dynamic from "next/dynamic";

import Cursor from "@/components/Cursor"
import Links from "@/components/Links";
import Nav from "@/components/Nav";
import Main from "@/components/Main";
import Info from "@/components/Info";
import Skills from "@/components/Skills";
// import AiProj from "@/components/AiProj";

const DynamicAiProj = dynamic(() => import("@/components/AiProj"), {
  ssr: false
});

export default function Home() {
  return (
    <div className="overflow-x-hidden">
    <Cursor/>
    <Links/>
    <Nav/>
        
    <Main/>
    <Info/>
    <Skills/>
    {/* <AiProj/> */}
    <DynamicAiProj/>
        
  
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
  )
}
