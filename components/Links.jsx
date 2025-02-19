'use client'
import Image from "next/image"
import { useState, useEffect } from "react"
import Mute from "@/public/Mute.svg"
import Unmute from "@/public/Unmute.svg"


export default function Links(){

  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const audio = document.getElementById('background-music');
    audio.play();
    setIsPlaying(true);
  }, []);

  const toggleMusic = () => {
    const audio = document.getElementById('background-music');
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return(
    <div className="fixed flex flex-col gap-5 z-[900]">
      <a href="/">
        <Image data-cursor-tool src='self_logo.svg' width={70} height={70} className="fixed top-20 left-16"/>
      </a>
      <div className="fixed bottom-20 flex flex-col gap-8 left-16">
        <a href="https://www.instagram.com/rhishh__" target="_blank">
          <Image data-cursor-tool src='instagram.svg' width={20} height={20} />
        </a>
        <a href="https://twitter.com/rhishavhere" target="_blank">
          <Image data-cursor-tool src='twitter.svg' width={20} height={20} />
        </a>
        <a href="https://github.com/rhishavhere" target="_blank">
          <Image data-cursor-tool src='github.svg' width={20} height={20} />
        </a>
      </div>
      <audio id="background-music" loop>
        <source src="/ambient.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="flex flex-col justify-center items-center fixed bottom-24 right-12 gap-8">
        <a data-cursor-tool href="#top" className="bg-1 w-6 h-6 flex justify-center items-center font-poppins text-black text-sm rounded-full">up</a>
        <button data-cursor-tool
          onClick={toggleMusic}
          className=" text-white"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? <Image src={Unmute} width={40} height={40}/> : <Image src={Mute} width={40} height={40}/>}
        </button>
      </div>
    </div>
  )
}