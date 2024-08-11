import AnimatedPill from './AnimatedPill';

const education = [
  {
    id: 1,
    institute: 'St.John College of Humanities and Sciences',
    branch: 'B.Sc(I.T.)',
    duration: '2017 - 2020',
  },
  {
    id: 2,
    institute: 'Bhavans College',
    branch: 'HSC(Science)',
    duration: '2015 - 2017',
  },
  {
    id: 3,
    institute: 'Infant Jesus High School',
    branch: 'SSC',
    duration: '2015',
  },
];

const Education = () => {
  return (
    <div className='border-b-[1px] border-[#5c5c5c] py-3 mt-3 max-w-[90em] m-auto'>
      <h1 className='text-2xl font-bold tracking-tighter py-[1rem]  px-[1rem]'>
        Education
      </h1>
      <section className='flex flex-col px-[1rem] gap-3 md:grid md:grid-cols-3'>
        {education.map(card => (
          <div
            key={card.id}
            className=' p-4 flex justify-between items-center border rounded-md '
          >
            <div>
              <h3 className='text-[1.125rem] font-semibold tracking-tighter max-w-[50vw]'>
                {card.institute}
              </h3>
              <p className='text-[#c4c4c4] font-medium tracking-tighter text-[0.875rem]'>
                {card.branch}
              </p>
            </div>
            <AnimatedPill>{card.duration}</AnimatedPill>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Education;
