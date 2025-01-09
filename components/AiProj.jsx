import Spline from '@splinetool/react-spline';
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);

export default function AiProj(){

  useGSAP(()=>{
    gsap.from(".robot",{
      scrollTrigger:{
        trigger:".robot",
        toggleActions:"restart none none reverse"
      },
      scale:0,
      delay:1
    }),
    gsap.from(".craft",{
      scrollTrigger:{
        trigger:".craft",
        toggleActions:"restart none none reverse"
      },
      opacity:0,
      delay:1
    })
  })

  return(
  
    
    <div className="w-full h-full mt-36">
      <div className='mb-20 ml-48 craft'>
        <p className='text-2xl font-poppins text-1 bg-1/10 p-2 pl-4 pr-6 rounded-lg w-fit h-fit'>my crafts</p>
      </div>

      <div className='flex flex-col justify-center items-center gap-2'>
        
        <div className='flex'>
          <div className='w-96 h-96 -ml-20 relative robot'>
            <Spline scene="https://prod.spline.design/JTFe1HJfgUpBTTCE/scene.splinecode" />
            <div className='bg-[#0e0e0e] border-2 border-1 w-36 h-10 absolute bottom-5 right-4 rounded-xl flex justify-center items-center'>
              <p className='text-1'>AI Projects </p>
            </div>
          </div>
          <div>
            <div className="card bg-[#181715] text-1 font-poppins w-[700px] h-[350px] flex flex-col justify-center text-left p-10 pl-8 ml-24">
              <p className="text-1/50">02</p>
              <p className="text-3xl mb-2">DEVELOPMENT</p>
              <p className="text-sm text-1/50">I&apos;m desire to build innovative and impactful software solutions that solve real-world problems.</p>
            </div>
          </div>

        </div>

        <div className='flex justify-center gap-2'>
          <div className="card bg-[#181715] text-1 font-poppins w-[600px] h-[300px] flex flex-col justify-center text-left p-10 pl-8">
            <p className="text-1/50">02</p>
            <p className="text-3xl mb-2">DEVELOPMENT</p>
            <p className="text-sm text-1/50">I&apos;m desire to build innovative and impactful software solutions that solve real-world problems.</p>
          </div>
          <div className="card bg-[#181715] text-1 font-poppins w-[600px] h-[300px] flex flex-col justify-center text-left p-10 pl-8">
            <p className="text-1/50">02</p>
            <p className="text-3xl mb-2">DEVELOPMENT</p>
            <p className="text-sm text-1/50">I&apos;m desire to build innovative and impactful software solutions that solve real-world problems.</p>
          </div>
        </div>

      </div>

    </div> 


    
  )
}