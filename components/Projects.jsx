'use client'

import Image from "next/image";

export default function Projects({ 
  number, 
  title, 
  description, 
  githubLink 
}) {
  return (
    <div className="group relative">
      <a href={githubLink} target='_blank' className="mb-8 border-l-[1px] border-b-[1px] border-white/30 h-[130px] flex items-center justify-between hover:bg-[#f3efec] group transition-all duration-200 cursor-pointer hover:after:content-['Click_-_Github_Repo'] hover:after:absolute hover:after:bottom-[-30px] hover:after:left-1/3 hover:after:-translate-x-1/2 hover:after:bg-black hover:after:text-white hover:after:px-2 hover:after:py-1 hover:after:rounded hover:after:text-sm hover:after:font-poppins">
        <div className="flex items-center">
          <div>
            <p className="font-bebas text-6xl text-[#f3efec]/20 p-4 group-hover:text-[#0e0e0e]/40 transition-all duration-200">{number}</p>  
            <div className="bg-[#f3efec]/20 w-[70px] h-2 group-hover:bg-[#0e0e0e]/40 transition-all duration-300"></div>
          </div>
          <p data-cursor-tool className="text-6xl font-josefin font-bold text-white/50 ml-28 group-hover:text-[#0e0e0e]/80 transition-all duration-200">{title}</p>
        </div>
        <div className="pr-36">
          <p data-cursor-tool className="w-[400px] text-balance text-1 font-poppins">{description}</p>
        </div>
      </a>
      
      <div className="absolute hidden group-hover:block right-0 z-50 w-[800px] h-[400px] -mt-6 rounded-lg">
        <video 
          autoPlay
          loop
          className="w-full h-full object-cover rounded-md"
          src="/sequence.mp4"
          muted
        />
      </div>
    </div>
  );
}