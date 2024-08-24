import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="m-auto px-[1rem] lowercase md:max-w-[90em]">
      <div className="flex items-center justify-between border-t-[1px] border-[#5c5c5c] py-[2rem] font-semibold tracking-tighter text-[#adadad]">
        <span>&copy; All Rights Reserved.</span>
        <Link href="/">
          <div className="relative h-[2rem] w-[7.5rem]">
            <Image
              src="./andrew.svg"
              alt="andrew_logo"
              fill={true}
              className="object-fit"
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Footer;
