import React from 'react';
import AnimatedPill from './AnimatedPill';
import Image from 'next/image';

const Hero = () => {
  return (
    <div>
      <main className='px-[1rem] h-screen relative overflow-hidden'>
        <section className='flex flex-col justify-center items-center gap-3 md:items-center md:max-w-[90em] md:m-auto h-screen relative z-[99]'>
          <h1 className='text-5xl font-semibold leading-[3.25rem] tracking-tighter text-center'>
            I am a Designer + Developer
          </h1>
          <p className='text-[#adadad] font-medium text-center tracking-tight text-[1.125rem] leading-7'>
            I believe in creating delightful user experiences that not only look
            amazing but also function flawlessly.
          </p>
          <AnimatedPill>Mumbai,India</AnimatedPill>
        </section>
        <div className='absolute top-0 left-0 z-[80] h-screen w-screen bg-gradient-to-br from-[#000000]/80 to-[#080808]/30' />
        <div className='w-full absolute h-[80vh] -z-1 -translate-x-1/2 -translate-y-1/2 md:top-[55%] top-[50%] left-[50%] animate-pulse'>
          <Image src='./bg.svg' alt='background_initial' fill={true} />
        </div>
      </main>
    </div>
  );
};

export default Hero;
