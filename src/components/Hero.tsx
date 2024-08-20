import React from "react";
import AnimatedPill from "./AnimatedPill";
import Image from "next/image";

const Hero = () => {
  return (
    <main className="relative m-auto grid h-screen grid-cols-4 gap-[8px] px-[1.25rem] md:max-w-[90em] md:grid-cols-12 md:gap-[12px]">
      <header className="z-[10] col-span-4 py-[13.75rem] md:col-start-3 md:col-end-11 md:py-[15rem]">
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
        <div className="h-full py-[5rem]">
          <span className="flex flex-wrap items-center justify-center gap-[0.5rem] text-center text-[1.25rem] font-medium leading-[1.25] -tracking-[1px] md:text-[2rem] md:-tracking-[2px]">
            <span className="flex flex-col items-center gap-[0.5rem] md:flex-row">
              <span className="inline-block">
                I am Andrew, practicing design since
              </span>
              <span className="lora-font inline-block rounded-full bg-[#dd0000] px-[1.25rem] py-[0.5rem]">
                3 years
              </span>
            </span>
            <span>
              I enjoy creating thoughtful and beautiful design experiences.
            </span>
          </span>
        </div>
      </header>
      <div className="-z-1 absolute left-[50%] top-[50%] h-[120vh] w-full -translate-x-1/2 -translate-y-1/2 animate-pulse md:top-[50%]">
        <Image src="./bg.svg" alt="background_initial" fill={true} />
      </div>
    </main>
  );
};
// const Hero = () => {
//   return (
//     <div>
//       <main className="relative h-screen overflow-hidden px-[1rem]">
//         <section className="relative z-[99] flex h-screen flex-col items-center justify-center gap-3 md:m-auto md:max-w-[90em] md:items-center">
//           <h1 className="flex flex-wrap items-center justify-center gap-2 text-center">
//             I am a Designer
//             <div className="inline-block h-[2px] w-[80px] bg-white" />
//             <span className="font-extralight -tracking-[3px]">Developer</span>
//           </h1>
//           <p>
//             I believe in creating delightful user experiences that not only look
//             amazing but also function flawlessly.
//           </p>
//           <AnimatedPill>Mumbai,India</AnimatedPill>
//         </section>
//         {/* <div className='absolute top-0 left-0 z-[80] h-screen w-screen bg-gradient-to-br from-[#000000] to-[#080808]/30 animate-pulse' /> */}
//         <div className="-z-1 absolute left-[50%] top-[50%] h-[120vh] w-full -translate-x-1/2 -translate-y-1/2 animate-pulse md:top-[50%]">
//           <Image src="./bg.svg" alt="background_initial" fill={true} />
//         </div>
//       </main>
//     </div>
//   );
// };

export default Hero;
