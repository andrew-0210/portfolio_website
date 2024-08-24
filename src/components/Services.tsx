import Image from "next/image";
import ServiceCard from "./ServiceCard";

const services = [
  {
    id: 1,
    image: "./figma.svg",
    heading: "Website & Interface Design",
    description:
      "Designing stunning web and mobile apps for any challenging business, along with exceptional websites.",
  },
  {
    id: 2,
    image: "./figma.svg",
    heading: "Web App & Website Development",
    description:
      "Developing stunning web and websites for any business, along with websites.",
  },
  {
    id: 3,
    image: "./figma.svg",
    heading: "Framer Development",
    description:
      "Creating responsive marketing pages optimized for high conversion rates.",
  },
];

const Services = () => {
  return (
    <section className="m-auto flex flex-col gap-[2rem] px-[1rem] py-[7.5rem] md:max-w-[90em]">
      <h2>
        <span className="block">Bringing your ideas</span>
        <span className="flex gap-[0.25rem]">
          <span className="lora-font">To Life</span>
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

      <div className="flex flex-col gap-[0.75rem] md:flex-row">
        {services.map((service) => (
          <ServiceCard
            image={service.image}
            heading={service.heading}
            description={service.description}
            key={service.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
