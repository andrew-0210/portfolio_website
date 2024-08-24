import React from "react";
import AnimatedPill from "./AnimatedPill";
import Image from "next/image";

const Hero = () => {
  return (
    <main className="outer-grid relative m-auto h-full overflow-hidden px-[1.25rem] md:max-w-[90em]">
      <header className="z-[90] col-start-1 col-end-5 py-[13.75rem] md:col-start-3 md:col-end-11 md:py-[15rem]">
        <section className="">
          <h1 className="flex flex-col">
            <span className="">
              <span className="font-medium">Focused on</span>
            </span>
            <span className="flex items-center gap-[1rem] md:gap-[2rem]">
              <span className="font-medium">creative</span>
              <hr className="flex-1" />
              <span className="lora-font font-normal">and result</span>
            </span>
            <span className="flex flex-row-reverse">
              <span className="lora-font font-normal">driven designs.</span>
            </span>
          </h1>
        </section>
        <div className="lora-font outer-grid z-[90] h-full py-[5rem]">
          <span className="inner-grid flex flex-col justify-center text-[1.125rem] font-medium leading-[1.25] -tracking-[1px] text-[#383838] md:items-center md:justify-start md:text-center md:text-[2rem] md:-tracking-[2px] dark:text-[#b6b6b6]">
            <span className="flex flex-col items-start gap-[0.5rem] md:items-center">
              <span>I am Andrew, practicing design since</span>
              <span className="lora-font inline-block rounded-full bg-[#dd0000] px-[1.25rem] py-[0.5rem] text-[#f6f6f6]">
                3 years
              </span>
            </span>
            <span>
              I enjoy creating thoughtful and beautiful design experiences.
            </span>
          </span>
        </div>
      </header>
      <div className="absolute left-0 top-0 z-[80] h-full w-screen animate-pulse bg-gradient-to-br from-[#000000] to-[#000000]/50" />
      <div className="-z-1 absolute left-[50%] top-[50%] h-[120vh] w-full -translate-x-1/2 -translate-y-1/2 animate-pulse md:top-[50%]">
        <Image src="./bg.svg" alt="background_initial" fill={true} />
      </div>
    </main>
  );
};

export default Hero;
