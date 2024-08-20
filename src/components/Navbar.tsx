import Image from "next/image";
import Link from "next/link";

const links = [
  {
    name: "about",
    href: "/about",
  },
  {
    name: "contact",
    href: "/contact",
  },
];
const Navbar = () => {
  return (
    <div className="fixed z-[999] flex w-screen justify-center pt-[1rem]">
      <nav className="nav-gradient mx-[1.25rem] flex w-screen items-center justify-between rounded-full border border-[#bebebe] px-[1.25rem] py-[1.25rem] backdrop-blur-[6px] md:mx-[2rem] lg:px-[3rem] xl:max-w-[90em] dark:border-[#343434]">
        <Link href="/">
          <div className="relative h-[1.75rem] w-[8rem]">
            <Image
              src="./andrew.svg"
              alt="andrew_logo"
              fill={true}
              className="object-fit dark:invert"
            />
          </div>
        </Link>
        <div>
          <ul className="flex gap-5 font-semibold leading-[1.5] -tracking-[1]">
            {links.map((link) => (
              <li key={link.name}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
