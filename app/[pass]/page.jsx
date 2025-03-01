'use client'
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';

const BusPassValidationApp = () => {
  const params = useParams();
  const slug = params.pass
  let pass = slug.split('pass-')[1];
  let fare
  if (pass === "ac"){
    fare = "140.0"
  } else if(pass === "nonac"){
    fare = "80.0"
  }else{
    fare = "Type?"
  }

  
  const [isCamera, setIsCamera] = useState(false);
  const [showModal, setShowModal] = useState(false);
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



  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-0 text-black font-poppins">
      {/* Main Pass Screen (Always rendered) */}
      <div className="m-4 pl-4 pr-4 bg-white shadow-md relative rounded-lg">
        <div className="mb-4 text-center pt-6 flex gap-4">
          <img src="bmtc.jpg" alt="" className='w-12 h-12' />
          <div className='flex flex-col'>
            <p className="text-md text-gray-800 mb-2">Ordinary Day Pass</p> 
            <div className='flex justify-center gap-2'>
              <div className='bg-green-400/10 text-green-600 rounded-md pr-1 pl-1 flex-1 text-sm p-1'>Daily</div> 
              <div className='bg-gray-500/20 text-black rounded-md pr-1 pl-1 flex-2 text-sm p-1'>Ordinary</div> 
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
            <div  className='text-sm text-black'>Rhishav Dhali</div>
          </div>
          <div>
            <div className='text-sm text-black/50'>Identification type</div>
            <div  className='text-sm text-black'>Aadhar Card</div>
          </div>
          <div>
            <div className='text-sm text-black/50'>Identification number (Last 4 digits)</div>
            <div  className='text-sm text-black'>6927</div>
          </div>
          <div>
            <div className='text-sm text-black/50'>Pass purchase date</div>
            <div  className='text-sm text-black'>{date}, 06:31 AM</div>
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
            <img src="profile.jpg" alt="" className='w-20 h-20 rounded-full object-cover' />
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
        <div>HELLLOOOO</div>
        
      )}
      
      {/* Validation Modal (rendered conditionally over the main screen) */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 bg-opacity-70 flex items-center justify-center p-4 z-20">
          <div className="bg-white rounded-lg shadow-lg p-5 w-full max-w-sm m-4">
            <div className="text-center mb-4 flex flex-col justify-center items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
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