import React from 'react';
import AnimatedPill from './AnimatedPill';

const Hero = () => {
  return (
    <div>
      <main className='px-[1rem] h-screen flex flex-col justify-center items-center gap-3 md:items-center md:max-w-[90em] md:m-auto'>
        <h1 className='text-5xl font-semibold leading-[3.25rem] tracking-tighter text-center'>
          I am a Designer + Developer
        </h1>
        <AnimatedPill>Mumbai,India</AnimatedPill>
      </main>
    </div>
  );
};

export default Hero;
