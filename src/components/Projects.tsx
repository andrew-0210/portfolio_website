import React from 'react';
import AnimatedPill from './AnimatedPill';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'Creative Cooks',
    projectType: 'Case Study',
    description: 'A curated food recipe box delivery app.',
    // href: `/${'Creative Cooks'.toLowerCase().replace(/\s+/g, '-')}`,
    href: `/Creative-cooks`,
  },
  {
    id: 2,
    title: 'HRM Software',
    projectType: 'Product Showcase',
    description: 'A curated food recipe box delivery app.',
    // href: `/${'HRM Software'.toLowerCase().replace(/\s+/g, '-')}`,
    href: `/HRM-Software`,
  },
  {
    id: 3,
    title: 'Company Management - Internal Software',
    projectType: 'Product Showcase',
    description: 'A curated food recipe box delivery app.',
    // href: `/${'Internal Company Management Software'
    //   .toLowerCase()
    //   .replace(/\s+/g, '-')}`,
    href: `/Internal-Company-Management-Software`,
  },
  {
    id: 4,
    title: 'Volta',
    projectType: 'Website Design',
    description: 'A curated food recipe box delivery app.',
    // href: `/${'Volta'.toLowerCase().replace(/\s+/g, '-')}`,
    href: `/Volta`,
  },
];

const Projects = () => {
  return (
    <div className='overflow-hidden flex flex-col gap-4 md:max-w-[90em] md:m-auto px-[1rem]'>
      <h2 className='text-3xl font-bold tracking-tighter'>projects</h2>
      <section className='flex flex-1 gap-4 md:grid md:grid-cols-3  no-scrollbar overflow-x-auto'>
        {projects.map(project => (
          <Link
            href={project.href}
            key={project.id}
            className=' px-4 py-4 bg-[#fcfff2] text-black min-w-[80vw] md:min-w-full flex flex-col h-[70vh] items-start '
          >
            <AnimatedPill>{project.projectType}</AnimatedPill>
            <h3 className='text-3xl font-semibold'>{project.title}</h3>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Projects;
