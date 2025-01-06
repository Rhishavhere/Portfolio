'use client'
import Image from "next/image"
import Cursor from "@/components/Cursor"

export default function Home() {
  return (
    <>
    <Cursor/>

    {/*LEFT AND RIGHT LINKS*/}

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
      text-[#aa9d89] font-bebas top-20 text-md tracking-widest cursor-pointer">
      <p>SKILLS</p>
      <p>PROJECTS</p>
      <p>CONTACT</p>
    </div>
    <div>
      

    {/*BACKGROUND IMAGES*/}


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
        

    {/*MAIN SECTION-INTRO*/}

    <main className="flex flex-col justify-center items-center font-anton pt-40 text-9xl cursor-default overflow-hidden relative">
      <div className="w-20 h-20 bg-[#ec5938] rounded-full -z-20 absolute -ml-80 transform scale-[1]"></div>
      <p className="text-[#aa9d89] text-xl font-bebas">RHISHAV &ensp; DHALI</p>
      <div data-cursor-hover className="ml-60 mt-12">
        <p className="text-[#aa9d89] ml-36 p-2">Making</p>
        <p className="text-white/70 ml-36 text-3xl text-nowrap p-2">my <span className="text-[#ec5938] text-9xl">PASSIONS</span></p>
        <p className="text-[#aa9d89] mb-20 p-2">COLLIDE ./</p>
      </div>

    </main>


    <div className="bg-white/10 p-2 w-[100vw] flex justify-center">
      <p className="text-white/50 text-2xl font-script tracking-widest">code, design, and the boundless digital frontier</p>
    </div>
        
        
    </div>
    </>
  )
}
