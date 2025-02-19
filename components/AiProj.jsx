'use client'
import Spline from '@splinetool/react-spline';
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);

import Card from './Card';

export default function AiProj(){

  const Project1 = {
    imageUrl: 'https://via.placeholder.com/300x200',
    title: 'My Awesome Project',
    description: 'This is a description of my awesome project.',
  };

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
      <Spline scene="https://prod.spline.design/r11oixtU3czw4BBW/scene.splinecode" />
      <div className='mb-20 ml-48 craft'>
        <p className='text-2xl font-poppins text-1 bg-1/10 p-2 pl-4 pr-6 rounded-lg w-fit h-fit'>my crafts</p>
      </div>

      <div className='flex flex-col justify-center items-center gap-2'>
        
        <div className='flex items-end'>
          <div className='w-96 h-96 -ml-20 relative robot'>
            <Spline scene="https://prod.spline.design/JTFe1HJfgUpBTTCE/scene.splinecode" />
            <div className='bg-[#0e0e0e] border-2 border-[#aa9d89] w-36 h-10 absolute bottom-5 right-4 rounded-xl flex justify-center items-center'>
              <p className='text-1'>AI Projects </p>
            </div>
          </div>
          <div>
            <div className="card bg-[#181715] text-1 font-poppins w-[700px]  h-[300px] flex flex-col justify-center text-left p-10 pl-8 ml-24">
              <p className="text-1/50">01</p>
              <p className="text-3xl mb-2">GreenMind-AI</p>
              <p className="text-sm text-1/50 pr-20">A smart energy solution for our greener future. The AI predicts user consumption and lerts the user on higher than predicted consumptions. It can also autonoumously reset the connected devices.</p>
            </div>
          </div>

        </div>

        <div className='flex justify-center gap-2'>
          <div className="card bg-[#181715] text-1 font-poppins w-[600px] h-[300px] flex flex-col justify-center text-left p-10 pl-8">
            <p className="text-1/50">02</p>
            <p className="text-3xl mb-2">infoAsk-AI</p>
            <p className="text-sm text-1/50">Provides user information as asked and organizes data received from fetching a webpage.</p>
          </div>
          <div className="card bg-[#181715] text-1 font-poppins w-[600px] h-[300px] flex flex-col justify-center text-left p-10 pl-8">
            <p className="text-1/50">03</p>
            <p className="text-3xl mb-2">chatGen-AI</p>
            <p className="text-sm text-1/50">This projects scraps the messages from your text app and auto replies on your behalf.</p>
          </div>
        </div>
        <div className='flex justify-center gap-2'>
          <div className="card bg-[#181715] text-1 font-poppins w-[600px] h-[300px] flex flex-col justify-center text-left p-10 pl-8">
            <p className="text-1/50">04</p>
            <p className="text-3xl mb-2">blackhole Gravity Simulation</p>
            <p className="text-sm text-1/50">Using Python and data manipulation methods , this projects simulates the gravitational field of a Huge Celestial mass</p>
          </div>
          <div className="card bg-[#181715] text-1 font-poppins w-[600px] h-[300px] flex flex-col justify-center text-left p-10 pl-8">
            <p className="text-1/50">05</p>
            <p className="text-3xl mb-2">atmoSense</p>
            <p className="text-sm text-1/50">A visually creative and intricate Weather Website with real time operations and graph visualizations</p>
          </div>
        </div>
        <div className='flex justify-center gap-2'>
          <div className="card bg-[#181715] text-1 font-poppins w-[600px] h-[300px] flex flex-col justify-center text-left p-10 pl-8">
            <p className="text-1/50">06</p>
            <p className="text-3xl mb-2">careBear</p>
            <p className="text-sm text-1/50">A smart way to digitalize medical reports, appointment details,etc that can also be accessed by doctors.</p>
          </div>
          <div className="card bg-[#181715] text-1 font-poppins w-[600px] h-[300px] flex flex-col justify-center text-left p-10 pl-8">
            <p className="text-1/50">07</p>
            <p className="text-3xl mb-2">algoViz</p>
            <p className="text-sm text-1/50">This projects visualizes the working of algorithms like BINARY SORT, QUICK SORT, etc</p>
          </div>
        </div>

      </div>

    </div> 


    
  )
}