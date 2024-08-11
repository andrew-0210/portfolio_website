import React from 'react';
import AnimatedPill from './AnimatedPill';
import Link from 'next/link';

const projects = [
  { id: 1, title: 'Food App', projectType: 'Personal Project', href: '/about' },
  {
    id: 2,
    title: 'Food App',
    projectType: 'Personal Project',
    href: '/contact',
  },
  { id: 3, title: 'Food App', projectType: 'Personal Project' },
  { id: 4, title: 'Food App', projectType: 'Personal Project' },
  { id: 5, title: 'Food App', projectType: 'Personal Project' },
  { id: 6, title: 'Food App', projectType: 'Personal Project' },
];

const Projects = () => {
  return (
    <div className='overflow-hidden px-[1rem] flex flex-col gap-4 md:max-w-[90em] md:m-auto'>
      <h2 className='text-3xl font-bold tracking-tighter'>projects</h2>
      <section className='flex gap-4 overflow-x-scroll no-scrollbar md:grid md:grid-cols-3'>
        {projects.map(project => (
          <Link
            href={`${project.href}`}
            key={project.id}
            className='px-4 py-4 bg-white text-black h-[30vh]  flex flex-col
            items-start '
          >
            <AnimatedPill>{project.projectType}</AnimatedPill>
            <h3>{project.title}</h3>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Projects;
