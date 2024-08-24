import React, { Fragment } from "react";
import AnimatedPill from "./AnimatedPill";
import Link from "next/link";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    image: "./Cover.png",
    title: "Creative Cooks",
    projectType: "Case Study",
    description: "A curated food recipe box delivery app.",
    // href: `/${'Creative Cooks'.toLowerCase().replace(/\s+/g, '-')}`,
    href: `/Creative-cooks`,
  },
  {
    id: 2,
    image: "",
    title: "HRM Software",
    projectType: "Product Showcase",
    description: "A curated food recipe box delivery app.",
    // href: `/${'HRM Software'.toLowerCase().replace(/\s+/g, '-')}`,
    href: `/HRM-Software`,
  },
  {
    id: 3,
    image: "",
    title: "Company Management - Internal Software",
    projectType: "Product Showcase",
    description: "A curated food recipe box delivery app.",
    // href: `/${'Internal Company Management Software'
    //   .toLowerCase()
    //   .replace(/\s+/g, '-')}`,
    href: `/Internal-Company-Management-Software`,
  },
  {
    id: 4,
    title: "Volta",
    image: "",
    projectType: "Website Design",
    description: "A curated food recipe box delivery app.",
    // href: `/${'Volta'.toLowerCase().replace(/\s+/g, '-')}`,
    href: `/Volta`,
  },
];

const Projects = () => {
  return (
    <div className="md:bg-[#f6f6f6] hidden md:block ">
      <section className="m-auto flex flex-col gap-[2rem] rounded-[32px] bg-[#f6f6f6] px-[1rem] py-[7.5rem] md:max-w-[90em] md:rounded-none">
        <div className="flex flex-col gap-[1.25rem]">
          <h2>
            <span className="block text-[#0f0f0f]">Exceptional Design</span>
            <span className="flex gap-[0.25rem]">
              <span className="lora-font text-[#0f0f0f]">Showcase</span>
              <div className="relative h-[1.25rem] w-[1.5rem]">
                <Image
                  src="./h2-badge.svg"
                  alt="badge"
                  fill={true}
                  className="object-fit"
                />
              </div>
            </span>
          </h2>
          <p className="text-start text-[#0f0f0f]">
            Stay updated with my latest case studies and designs, and explore my
            creative process.
          </p>
        </div>

        <div className="no-scrollbar flex-start flex w-full gap-[0.75rem] overflow-x-auto md:flex-col lg:grid lg:grid-cols-12 lg:gap-[0.75rem]">
          {projects.map((project) => (
            <div className="lg:col-span-6 lg:grid" key={project.id}>
              <Link href={project.href} key={project.id}>
                <ProjectCard
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  projectType={project.projectType}
                />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;

// const Projects = () => {
//   return (
//     <div className="flex flex-col gap-4 overflow-hidden px-[1rem] md:m-auto md:max-w-[90em]">
//       <h2 className="text-3xl font-bold tracking-tighter">projects</h2>
//       <section className="no-scrollbar flex flex-1 gap-4 overflow-x-auto md:grid md:grid-cols-3">
//         {projects.map((project) => (
//           <Link
//             href={project.href}
//             key={project.id}
//             className="flex h-[70vh] min-w-[80vw] flex-col items-start bg-[#fcfff2] px-4 py-4 text-black md:min-w-full"
//           >
//             <AnimatedPill>{project.projectType}</AnimatedPill>
//             <h3 className="text-3xl font-semibold">{project.title}</h3>
//           </Link>
//         ))}
//       </section>
//     </div>
//   );
// };
