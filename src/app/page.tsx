export default function Home() {
  return (
    <main className='px-[1rem] h-screen flex flex-col justify-center items-start gap-3 md:items-center md:max-w-[90em] md:m-auto'>
      <h1 className='text-5xl font-semibold leading-[3.25rem] tracking-tighter'>
        Andrew is a Designer + Developer
      </h1>
      <div className='bg-[#111111] px-[1rem] py-[0.5rem] rounded-full border-[1px] border-[#4b4b4b] relative overflow-hidden'>
        <div className='absolute top-0 left-0 h-full animate-slide-right flex gap-[2px] z-0'>
          <div className=' bg-[#575757] h-full w-[8px] transform -skew-x-12' />
          <div className=' bg-[#575757] h-full w-[4px] transform -skew-x-12' />
        </div>
        <p className='font-semibold  relative z-10 text-[#48be2b]'>
          Mumbai, India
        </p>
      </div>
    </main>
  );
}
