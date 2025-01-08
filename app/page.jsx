'use client'
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react"

import Cursor from "@/components/Cursor"
import Links from "@/components/Links";
import Nav from "@/components/Nav";
import Main from "@/components/Main";

export default function Home() {
  return (
    <>
    <Cursor/>
    <Links/>
    <Nav/>
        
    <Main/>

    
        
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
