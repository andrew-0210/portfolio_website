import Image from 'next/image';
import Link from 'next/link';

const links = [
  {
    name: 'about',
    href: '/about',
  },
  {
    name: 'contact',
    href: '/contact',
  },
];

const Navbar = () => {
  return (
    <nav className='p-[1rem] flex justify-between items-center md:px-[3rem] md:py-[2rem] fixed w-screen bg-[#0e0e0e] shadow-sm z-[9999]'>
      <Link href='/'>
        <div className='w-[8rem] h-[1.75rem] relative'>
          <Image
            src='./andrew.svg'
            alt='andrew_logo'
            fill={true}
            className='object-fit'
          />
        </div>
      </Link>
      <ul className='flex gap-5 font-semibold tracking-tight'>
        {links.map(link => (
          <li key={link.name}>
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
