import Image from 'next/image';

const Contact = () => {
  return (
    <section className='h-full px-[1rem] md:max-w-[90em] m-auto flex justify-between items-center flex-col overflow-hidden py-[4rem] '>
      <div className='p-[1.5px] bg-gradient-to-br from-[#636363] rounded-[60px] overflow-clip'>
        <div className='relative flex items-center justify-center bg-[#0f0f0f] rounded-[60px]'>
          <div className='h-[3rem] w-[10rem] bg-gray-400/80 absolute -z-2  top-0 blur-3xl animate-pulse' />
          <section className='relative z-[80] p-[2rem] gap-4 flex items-center flex-col'>
            <div className='p-[0.875rem] bg-[#1b1b1b] rounded-[40px] border border-[#202020] shadow-xl shadow-gray-600/30'>
              <div className='bg-gradient-to-b from-[#3d3d3d] to-[#1a1a1a] px-[1.25rem] py-[1.75rem] rounded-[30px] border border-[#3f3f3f]'>
                <div className='h-[2rem] w-[3rem] relative '>
                  <Image
                    src='./a-initial.svg'
                    alt='a_logo'
                    fill={true}
                    className='object-fit'
                  />
                </div>
              </div>
            </div>
            <p className='text-center'>
              Ready for a design adventure, or need product design advice? Ping
              me for fun collaboration
            </p>
            <button className='font-bold bg-white px-5 py-3 text-black tracking-tighter rounded-lg'>
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
