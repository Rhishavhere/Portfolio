import Image from "next/image"

export default function Home() {
  return (
    <div>
      <div className="fixed left-16 flex flex-col gap-5">
        <Image src='self_logo.svg' width={70} height={70} className="fixed top-14"/>
        <div className="fixed bottom-14">
          <p>HI</p>
          <p>HI</p>
        </div>
      </div>
      <div className="fixed right-0 top-[20%] m-2 flex flex-col gap-5">
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
      </div>
      <main className="flex flex-col justify-center items-center font-anton text-8xl mt-20">
        <p className="text-[#aa9d89]">HELLO WELCOME</p>
        <p className="text-[#ec5938]">HELLO WELCOME</p>
        <p className="text-white">HELLO WELCOME</p>
        <p className="text-white/80">HELLO WELCOME</p>
        <p className="text-white/60">HELLO WELCOME</p>
        <p className="text-white/40">HELLO WELCOME</p>
        <p className="text-white/20">HELLO WELCOME</p>
        <p className="text-white/10">HELLO WELCOME</p>
        
      </main>
    </div>
  )
}
