'use client'
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const BusPassValidationApp = () => {
  const params = useParams();
  const pass = params.slug
  
  
  const [isCamera, setIsCamera] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [fare, setFare] = useState('0.0');
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');
  const passId = 'TPASS264228531'
  const date = new Date().toLocaleString('en-IN', { day: '2-digit', month: 'short', year: 'numeric'})
  
  // Function to handle QR scan completion
  const handleModal = () => {
    setIsCamera(false);
    setShowModal(true);
  };
  
  // Add handler for camera activation
  const handleCamera = () => {
    setIsCamera(true);
    
    // Set a timer to automatically close the camera after 1 second
    setTimeout(() => {
      handleModal();
    }, 1000); // 1000 milliseconds = 1 second
  };

  useEffect(() => {
    // let pass = slug.split('pass-')[1];
    if (pass === "ac"){
      setFare("140.0");
      setTitle("Vajra Gold");
      setType("AC");
    } else if(pass === "nonac"){
      setFare("80.0");
      setTitle("Ordinary");
      setType("Ordinary");
    } else {
      setFare("Type?");
      setTitle("Type?");
      setType("Type?");
    }
  }, []);
  
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-0 text-black font-poppins">
 
      {/* Main Pass Screen (Always rendered) */}
      <div className="m-4 pl-4 pr-4 bg-white shadow-md relative rounded-lg">
        <div className="mb-4 text-center pt-6 flex gap-4">
          <img src="/bmtc.jpg" alt="BMTC Logo" className='w-12 h-12' />
          <div className='flex flex-col'>
            <p className="text-md text-gray-800 mb-2">{title} Day Pass</p> 
            <div className='flex justify-center gap-2'>
              <div className='bg-green-400/10 text-green-600 rounded-md pr-1 pl-1 flex-1 text-sm p-1'>Daily</div> 
              <div className='bg-gray-500/20 text-black rounded-md pr-1 pl-1 flex-2 text-sm p-1'>{type}</div> 
            </div>
          </div>
        </div>
        <div className='flex gap-4'>
          <p className="text-sm text-gray-600/70">Pass ID:</p>
          <p className="text-sm text-gray-600">{passId}</p>
        </div>
        <div className='text-nowrap overflow-hidden text-black/10'>-------------------------------------------------------------------</div>
        
        
        <div className=" flex flex-col justify-center items-center">
          <button
            onClick={handleCamera}
            className="w-full bg-cyan-500 text-white rounded-md p-2 text-sm mb-3"
            disabled={isCamera}
          >
            Validate Pass
          </button>
          <p className='text-xs text-cyan-600 mb-3'>How to Validate Your Pass?</p>
        </div>

      </div>

      <div className="m-4 pl-4 pr-4 p-2 bg-white shadow-md relative rounded-lg flex flex-col">
        <div className='mt-2 text-black'>Booking Details</div>
        <div className='text-nowrap overflow-hidden text-black/10'>-------------------------------------------------------------------</div>
        <div className='flex flex-col gap-2 mb-2 relative'>
          <div>
            <div className='text-sm text-black/50'>Passenger name</div>
            <div  className='text-sm text-black'>Prasun Kumar Saha</div>
          </div>
          <div>
            <div className='text-sm text-black/50'>Identification type</div>
            <div  className='text-sm text-black'>Aadhar Card</div>
          </div>
          <div>
            <div className='text-sm text-black/50'>Identification number (Last 4 digits)</div>
            <div  className='text-sm text-black'>1988</div>
          </div>
          <div>
            <div className='text-sm text-black/50'>Pass purchase date</div>
            <div  className='text-sm text-black'>{date}, 04:12 AM</div>
          </div>
          <div>
            <div className='text-sm text-black/50'>Pass valid from</div>
            <div  className='text-sm text-black'>{date}, 12:00 AM</div>
          </div>
          <div>
            <div className='text-sm text-black/50'>Pass valid till</div>
            <div  className='text-sm text-black'>{date}, 11:59 PM</div>
          </div>

          <div className='absolute right-0'>
            <img src="/prasun.jpg" alt="Passenger Profile" className='w-20 h-20 rounded-full object-cover' />
          </div>

          <div className='absolute bottom-0 right-0'>
            <div className='text-sm text-black/50 underline'>Pass fare</div>
            <div className='text-2xl -ml-2 font-medium text-black'>&#8377; {fare}</div>
          </div>
          
        </div>
        <div className='text-nowrap overflow-hidden text-black/10 mb-2'>-------------------------------------------------------------------</div>
      </div>
      
      {/* Camera Component (rendered conditionally) */}
      {isCamera &&(
        <div className="fixed bg-black bg-opacity-50 flex items-center justify-center z-10">
        <div className="max-w-md bg-black h-screen w-screen text-white">
          <div className="text-center mb-4 mt-48">
            <h2 className="text-xl font-bold text-white">Scan QR Code</h2>
            <p className="text-white text-sm mt-1">Position the QR code within the frame</p>
          </div>
          
          <div className="relative w-full aspect-square bg-black rounded-lg mb-6 overflow-hidden">
            {/* QR Scanner Simulation */}
            <div className="absolute inset-0 border-2 border-gray-700 flex items-center justify-center">
              <div className="w-3/4 h-3/4 border-2 border-dashed border-gray-700 flex items-center justify-center">
                <div className="text-white/50 text-sm">
                  Scanning...
                </div>
              </div>
            </div>
            
            <div className="absolute left-0 right-0 h-0.5 bg-red-500 animate-scan" style={{ 
              top: '52%',
              animation: 'scan 2s linear infinite',
            }}></div>
            
          </div>
        
        </div>
      </div>
        
      )}
      
      {/* Validation Modal (rendered conditionally over the main screen) */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 bg-opacity-70 flex items-center justify-center p-4 z-20">
          <div className="bg-white rounded-lg shadow-lg p-5 w-full max-w-sm m-4">
            <div className="text-center mb-4 flex flex-col justify-center items-center">
              <DotLottieReact
                className='w-24 h-24'
                src="/tick.lottie"
                loop
                autoplay
              />
              <p className="text-lg font-semibold w-60 text-gray-800">Self verification done succesfully</p>
            </div>
            
            <div className="pt-2 pb-2  border-b">
              <div className="flex items-center justify-between mb-1">
                <span className="text-gray-700 text-sm">Pass number</span>
                <span className="text-gray-900 text-sm ">{passId}</span>
              </div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-gray-700 text-sm">Pass type</span>
                <span className="text-gray-900 text-sm ">daily</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700 text-sm">Pass valid till</span>
                <span className="text-gray-900 text-sm ">{date}, 11:59 PM</span>
              </div>
            </div>
            <div className='flex justify-between mt-2 font-medium mb-8'>
              <div>Pass fare</div>
              <div>&#8377; {fare}</div>
            </div>
            
            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-cyan-600 text-white text-sm py-2 px-4 rounded-lg"
            >
              Okay
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusPassValidationApp;