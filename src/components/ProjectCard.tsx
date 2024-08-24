import Image from "next/image";
import UpArrow from "./UpArrow";

type ProjectCardProps = {
  image: string;
  title: string;
  projectType: string;
  description: string;
};

const ProjectCard = ({
  image,
  title,
  projectType,
  description,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col gap-[1.5rem] md:flex-row md:items-end">
      <div className="relative">
        <div
          className={`${image ? `h-[270px] w-[350px]` : `h-[270px] w-[350px] bg-[#dd0000]`} relative`}
        >
          <Image src={image} alt={title} className="object-fit" fill={true} />
        </div>
        <span className="absolute bottom-4 right-4 bg-[#0f0f0f] px-[1rem] py-[0.25rem] text-[0.875rem] font-semibold uppercase leading-tight -tracking-[0.5px] text-[#ffffff]">
          {projectType}
        </span>
      </div>
      <div className="flex flex-col gap-[1rem] px-[1rem]">
        <p className="text-start text-[1.125rem] font-bold uppercase leading-[1.25] -tracking-[1px] text-[#0f0f0f]">
          {title}
        </p>
        <p className="text-start font-normal leading-[1.5] -tracking-[0.5px] text-[#0f0f0f]">
          {description}
        </p>
        <span className="flex py-[1rem] text-[0.875rem] font-bold leading-[1.25] -tracking-[0.5px] text-[#dd0000]">
          View Case Study <UpArrow />
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
