import React from 'react';
import AnimatedPill from './AnimatedPill';
import Image from 'next/image';

const Hero = () => {
  return (
    <div>
      <main className='px-[1rem] h-screen relative md:py-[5rem]'>
        <div className='w-full absolute h-screen -z-1 -translate-x-1/2 -translate-y-1/2 top-[50%] left-[50%] opacity-35'>
          <Image src='./bg.svg' alt='background_initial' fill={true} />
        </div>

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
      </main>
    </div>
  );
};

export default Hero;
