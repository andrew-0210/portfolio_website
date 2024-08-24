import Image from "next/image";

const UpArrow = () => {
  return (
    <div className="relative h-[16px] w-[16px]">
      <Image
        src="./UpArrow.svg"
        alt="uparrow"
        fill={true}
        className="object-fit"
      />
    </div>
  );
};

export default UpArrow;
