import Spline from '@splinetool/react-spline/next';
import { TypewriterEffectSmoothDemo } from "../app/components/wordwriter";
import { TextGenerateEffectDemo } from "../app/components/generatetext";
import { iphone } from '../app/components/iphone';
import { BentoGridDemo } from '../app/components/bentogrid';
import { GlobeDemo } from '../app/components/globefix';
import ProfileCard from '../app/components/ui/ProfileCard/ProfileCard';
// import React, { useEffect } from "react";

export default function home() {
  return (
    
    <div className="w-full h-screen overflow-x-hidden bg-[#0D0D0D] flex flex-col justify-between">

    <div className='flex justify-between items-center p-4 bg-[#0D0D0D] w-52 h-80'>
      <ProfileCard avatarUrl='/pasfoto.jpg' />
    </div>

      <div className="relative flex-grow">
        {/* Asset Spline */}
        <div className="absolute top-0 left-[5%] w-screen h-full object-cover">
          <Spline
            scene="https://prod.spline.design/g7DdaCJbkpqiUUUU/scene.splinecode"
          />
        </div>

        {/* Div untuk teks */}
        <div className="absolute w-[30%] top-1/2 left-0 transform -translate-y-1/2 ml-20 text-white">
          <TextGenerateEffectDemo />
        </div>

        {/* Typewriter Effect */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/3">
          <TypewriterEffectSmoothDemo />
        </div>

        <div className="absolute -bottom-[90%] -left-[30%] w-screen h-full">
          <Spline
            scene="https://prod.spline.design/OlB0j9NKFYVuWRil/scene.splinecode"
          />
        </div>

        <div className="absolute -bottom-[90%] left-[35%] w-[70%] h-full">
          <BentoGridDemo />
        </div>
        
        {/* <div className='absolute -bottom-[170%]  w-[800px] h-[800px]  rounded-xl shadow-lg'>
          <GlobeDemo />
        </div> */}

        <div>
          <div className='absolute -bottom-[400%] left-[35%] w-24 h-72 bg-slate-100 '>
          
          </div>
        </div>
      </div>
    </div>
    
  );
}

