'use client'
import Image from "next/image"

export default function Home() {
  return (
    <div>
      <div className="fixed left-16 flex flex-col gap-5">
        <a href="/">
          <Image src='self_logo.svg' width={70} height={70} className="fixed top-14"/>
        </a>
        <div className="fixed bottom-20 flex flex-col gap-8">
          <a href="https://www.instagram.com/rhishh__" target="_blank">
            <Image src='instagram.svg' width={20} height={20} />
          </a>
          <a href="https://twitter.com/rhishavhere" target="_blank">
            <Image src='twitter.svg' width={20} height={20} />
          </a>
          <a href="https://github.com/rhishavhere" target="_blank">
            <Image src='github.svg' width={20} height={20} />
          </a>
        </div>
      </div>
      <div className="fixed right-16 flex flex-col gap-2
       text-[#aa9d89] font-bebas top-20 text-md">
        <p>SKILLS</p>
        <p>PROJECTS</p>
        <p>CONTACT</p>
      </div>
        <img src='potrait.png' width={2000} height={2000} className="-z-10 absolute -top-28 -left-28"/>
      <main className="flex flex-col justify-center items-center font-anton mt-28 text-9xl">
        <p className="text-[#aa9d89] text-xl font-bebas mb-4">RHISHAV &ensp; DHALI</p>
        <div className="ml-48">
          <p className="text-[#aa9d89] ml-36">MAKING</p>
          <p className="text-white/70 ml-36 text-3xl font-anton">MY <span className="text-[#ec5938] text-9xl font-anton">PASSIONS</span></p>
          <p className="text-[#aa9d89]">COLLIDE ./</p>
          <p className="text-white/50 text-2xl font-anton mt-36">code. design. and the boundless digital frontier</p>
        </div>
        
        
      </main>
    </div>
  )
}
