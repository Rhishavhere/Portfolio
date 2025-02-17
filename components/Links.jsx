'use client'
import Image from "next/image"

export default function Links(){
  return(
    <div className="fixed left-16 flex flex-col gap-5 z-[999]">
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
  )
}