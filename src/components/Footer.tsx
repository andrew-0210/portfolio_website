import Link from 'next/link';

const Footer = () => {
  return (
    <div className='h-[70vh] px-[1rem] flex justify-center items-start flex-col gap-6 '>
      <h2 className='text-4xl font-bold tracking-tighter'>
        Got an idea? <span className='block'>Share with me</span>
      </h2>
      <p className='font-medium text-[#adadad]'>
        Ready for a design adventure, or need product design advice? Ping me for
        fun collaboration
      </p>
      <Link href={'/about'}>
        <div className='bg-[#111111] px-[1.5rem] py-[1rem] rounded-md border-[4px] border-[#363636] relative overflow-hidden'>
          <div className='absolute top-0 left-0 h-full animate-slide-right flex gap-[2px] z-0'>
            <div className=' bg-[#575757] h-full w-[8px] transform -skew-x-12' />
            <div className=' bg-[#575757] h-full w-[4px] transform -skew-x-12' />
          </div>
          <p className='font-semibold  relative z-10 text-[#48be2b]'>
            Drop a Message
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Footer;
