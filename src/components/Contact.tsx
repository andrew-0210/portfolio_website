import Image from "next/image";

const Contact = () => {
  return (
    <section className="m-auto flex h-full flex-col items-center justify-between overflow-hidden px-[1rem] py-[4rem] md:max-w-[90em]">
      <div className="card-stroke-gradient overflow-clip rounded-[60px] p-[1.5px]">
        <div className="relative flex items-center justify-center rounded-[60px] bg-[#0f0f0f]">
          <div className="-z-2 absolute top-0 h-[3rem] w-[10rem] animate-pulse bg-gray-400/80 blur-3xl" />
          <section className="relative z-[80] flex flex-col items-center gap-4 p-[2rem]">
            <div className="rounded-[40px] border border-[#202020] bg-[#1b1b1b] p-[0.875rem] shadow-xl shadow-gray-600/30">
              <div className="rounded-[30px] border border-[#3f3f3f] bg-gradient-to-b from-[#3d3d3d] to-[#1a1a1a] px-[1.25rem] py-[1.75rem]">
                <div className="relative h-[2rem] w-[3rem]">
                  <Image
                    src="./a-initial.svg"
                    alt="a_logo"
                    fill={true}
                    className="object-fit"
                  />
                </div>
              </div>
            </div>
            <p className="text-center">
              Ready for a design adventure, or need product design advice? Ping
              me for fun collaboration
            </p>
            <button className="rounded-lg bg-white px-5 py-3 font-bold tracking-tighter text-black">
              Drop a Message
            </button>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// <div className='bg-gradient-to-b from-[#a0a0a0] to-[#141414] bg-clip-text'>
//   <span className='text-[6.5rem] md:text-9xl font-extrabold tracking-tighter leading-tight text-transparent '>
//     Contact
//   </span>
// </div>;
