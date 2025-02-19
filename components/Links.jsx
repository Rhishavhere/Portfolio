'use client'
import Image from "next/image"
import { useState, useEffect } from "react"
import { FaPlay, FaPause } from "react-icons/fa";

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
        <Image data-cursor-tool src='self_logo.svg' width={70} height={70} className="fixed top-9 left-16"/>
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
      <div>
        <button data-cursor-tool
          onClick={toggleMusic}
          className="fixed bottom-16 right-12 p-2 bg-1 text-white rounded-full"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? <FaPause size={12} color={"black"} /> : <FaPlay size={12} color={"black"} />}
        </button>
      </div>
    </div>
  )
}