import React from 'react';
import AnimatedPill from './AnimatedPill';

const Hero = () => {
  return (
    <div>
      <main className='px-[1rem] h-screen flex flex-col justify-center items-center gap-3 md:items-center md:max-w-[90em] md:m-auto'>
        <h1 className='text-5xl font-semibold leading-[3.25rem] tracking-tighter text-center'>
          I am a Designer + Developer
        </h1>
        <p className='text-[#adadad] font-medium text-center tracking-tight text-[1.125rem] leading-7'>
          I believe in creating delightful user experiences that not only look
          amazing but also function flawlessly.
        </p>
        <AnimatedPill>Mumbai,India</AnimatedPill>
      </main>
    </div>
  );
};

export default Hero;
