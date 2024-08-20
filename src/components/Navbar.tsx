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
    <nav className='p-[1rem] md:px-[3rem] md:py-[2rem] fixed w-screen bg-[#fafafa] shadow-sm z-[9999] dark:bg-[#0e0e0e]'>
      <div className='flex justify-between items-center'>
        <Link href='/'>
          <div className='w-[8rem] h-[1.75rem] relative'>
            <Image
              src='./andrew.svg'
              alt='andrew_logo'
              fill={true}
              className='object-fit dark:invert'
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
      </div>
    </nav>
  );
};

export default Navbar;
