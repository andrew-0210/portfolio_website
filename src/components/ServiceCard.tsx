import Image from "next/image";

type ServiceCardProps = {
  heading: string;
  description: string;
  image: string;
};

const ServiceCard = ({ image, heading, description }: ServiceCardProps) => {
  return (
    <div className="card-stroke-gradient flex-1 overflow-clip rounded-[2rem] p-[1px] md:h-full">
      <div className="card-gradient flex flex-col items-center gap-[2rem] rounded-[2rem] p-[1.25rem]">
        <div className="relative h-[4rem] w-[4rem]">
          <Image src={image} alt={heading} fill={true} className="object-fit" />
        </div>
        <div className="flex flex-col gap-[0.5rem]">
          <p className="text-[1rem] font-bold uppercase -tracking-[0.5px]">
            {heading}
          </p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
