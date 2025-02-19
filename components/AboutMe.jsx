

export default function AboutMe() {

  return (
    <>
    <div className="relative flex justify-center items-center bg-black w-screen h-[460px] overflow-hidden">
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
    </div>
    <div id="skills" className="flex flex-col gap-20 m-36 ml-56 text-[#d3c2aa]">
      <div className="flex text-left justify-start">
        <p className="w-[30vw] text-2xl font-poppins font-light"
        >I&apos;m just a 20 years old kid with a keyboard, a sketchpad, and an endless curiosity for the world. I code and develop softwares, and design like every pixel tells a story. </p>
      </div>
      <div className="flex text-left justify-start">
        <p className="w-[30vw] text-2xl font-poppins font-light"
        > Tech isn&apos;t just what I do—it&apos;s how I see the world, a playground where I build, break, and reinvent. Adaptable? Always. Enthusiast? Absolutely.</p>
      </div>
    </div>
    </>
  )
}