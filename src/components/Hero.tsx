import React from "react";
import AnimatedPill from "./AnimatedPill";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <main className="relative h-screen overflow-hidden px-[1rem]">
        <section className="relative z-[99] flex h-screen flex-col items-center justify-center gap-3 md:m-auto md:max-w-[90em] md:items-center">
          <h1 className="flex flex-wrap items-center justify-center gap-2 text-center">
            I am a Designer
            <div className="inline-block h-[2px] w-[80px] bg-white" />
            <span className="font-extralight -tracking-[3px]">Developer</span>
          </h1>
          <p>
            I believe in creating delightful user experiences that not only look
            amazing but also function flawlessly.
          </p>
          <AnimatedPill>Mumbai,India</AnimatedPill>
        </section>
        {/* <div className='absolute top-0 left-0 z-[80] h-screen w-screen bg-gradient-to-br from-[#000000] to-[#080808]/30 animate-pulse' /> */}
        <div className="-z-1 absolute left-[50%] top-[50%] h-[120vh] w-full -translate-x-1/2 -translate-y-1/2 animate-pulse md:top-[50%]">
          <Image src="./bg.svg" alt="background_initial" fill={true} />
        </div>
      </main>
    </div>
  );
};

export default Hero;
