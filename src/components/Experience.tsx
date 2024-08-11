import React from 'react';

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
    <div className='px-[1rem]'>
      <h2 className='text-4xl font-semibold tracking-tighter mb-4'>
        Experience
      </h2>
      <section className='flex flex-col gap-4'>
        {experience.map(card => (
          <div key={card.company} className='border p-3 rounded-lg'>
            <h3>{card.company}</h3>
            <p>{card.designation}</p>
            <p>{card.duration}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Experience;
