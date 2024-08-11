import React from 'react';
import AnimatedPill from './AnimatedPill';

const experience = [
  {
    company: 'Thinkarz Pvt. Ltd.',
    designation: 'UI/UX Designer (Intern)',
    duration: '2021 - 2022',
  },
  {
    company: 'Terado Engineering Pvt. Ltd.',
    designation: 'UI/UX Designer',
    duration: '2022 - 2024',
  },
  {
    company: 'Adaptify Pvt. Ltd.',
    designation: 'UI/UX Designer',
    duration: '2024 - Present',
  },
];

const Experience = () => {
  return (
    <div className=' bg-white border-t-[4px] border-gray-400 rounded-t-xl overflow-clip rounded-b-xl pb-[1.25rem] text-black h-full'>
      <h2 className='text-2xl font-bold tracking-tighter mb-4 text-black py-[1rem] border-b border-gray-400 px-[1rem] bg-[#f7f7f7]'>
        Experience
      </h2>
      <section className='flex flex-col px-[1rem] gap-3'>
        {experience.map(card => (
          <div
            key={card.company}
            className=' p-4 flex justify-between items-center border rounded-md '
          >
            <div>
              <h3 className='text-[1.125rem] font-semibold tracking-tighter text-black'>
                {card.company}
              </h3>
              <p className='text-[#7c7c7c] font-medium tracking-tighter text-[0.875rem]'>
                {card.designation}
              </p>
            </div>
            <AnimatedPill>{card.duration}</AnimatedPill>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Experience;
