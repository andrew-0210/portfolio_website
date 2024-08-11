type PillProps = {
  children: string;
};

const AnimatedPill = ({ children }: PillProps) => {
  return (
    <div className='bg-[#111111] px-[1rem] py-[0.25rem] rounded-full border-[1px] border-[#4b4b4b] relative overflow-hidden'>
      <div className='absolute top-0 left-0 h-full animate-slide-right flex gap-[2px] z-0'>
        <div className=' bg-[#575757] h-full w-[8px] transform -skew-x-12' />
        <div className=' bg-[#575757] h-full w-[4px] transform -skew-x-12' />
      </div>
      <p className='font-bold relative z-10 text-[#48be2b] text-[0.875rem] text-nowrap'>
        {children}
      </p>
    </div>
  );
};

export default AnimatedPill;
