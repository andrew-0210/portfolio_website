import Link from 'next/link';

const Footer = () => {
  return (
    <section className='px-[1rem] lowercase md:max-w-[90em] m-auto'>
      <div className='h-[70vh] flex justify-center items-start flex-col gap-6'>
        <h2 className='text-4xl font-bold tracking-tighter'>
          Got an idea? <span className='block'>Share with me</span>
        </h2>
        <p className='font-medium text-[#adadad]'>
          Ready for a design adventure, or need product design advice? Ping me
          for fun collaboration
        </p>
        <Link href='/'>
          <button className='font-bold bg-white px-5 py-3 text-black tracking-tighter'>
            Drop a Message
          </button>
        </Link>
      </div>
      <div className='flex justify-between py-[2rem] border-t-[1px] border-[#5c5c5c] text-[#adadad] font-bold tracking-tighter'>
        <span>&copy; All Rights Reserved.</span>
        <span>Andrew&reg;</span>
      </div>
    </section>
  );
};

export default Footer;
