import Image from "next/image"

export default function AboutMe() {

  return (
    <div className="min-h-screen">
      <div className="relative">
        <Image src='/potraitfg.png' width={2000} height={2000} className="bgin -z-10 absolute bottom-70 -right-96 object-cover"
        style={{
          width: '1800px',
          height: '844px',
        }}/>
        {/* <Image src='/self_logo.svg' width={700} height={600} className="bgin -z-20 absolute right-0 bottom-0" /> */}
      </div>
    <div className="flex flex-col gap-20 m-36 pt-48 ml-56 text-[#d3c2aa]">
      <div className="flex text-left justify-start mt-36">
        <p data-cursor-hover className="w-[30vw] text-3xl font-poppins font-light"
        >I&apos;m just a 20 year old kid with a keyboard, a sketchpad, and an endless curiosity for the world. I code and develop softwares, and design like every pixel tells a story. </p>
      </div>
      <div className="flex text-left justify-start">
        <p data-cursor-hover className="w-[40vw] text-3xl font-poppins font-light"
        > Tech isn&apos;t just what I do—it&apos;s how I see the world, a playground where I build, break, and reinvent. Adaptable? Always. Enthusiast? Absolutely.</p>
      </div>
    </div>
    {/* <div className="relative flex justify-center items-center bg-black w-screen h-[460px] overflow-hidden">
      <div className="absolute z-[20]">
        <p data-cursor-tool className="text-3xl font-poppins font-medium text-neutral-500">I am a young creator seeking to learn everyday.</p>
      </div>
      <video 
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src="/sequence.mp4"
      >
        Your browser does not support the video tag.
      </video>
    </div> */}
    </div>
  )
}