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
    <nav className='p-[1rem] flex justify-between items-center md:px-[3rem] md:py-[2rem] fixed w-screen bg-[#181818] shadow-sm z-[9999]'>
      <Link href={'/'}>
        <h2 className='text-3xl font-bold tracking-tighter flex items-center gap-1'>
          andrew{' '}
          <span className='text-[1.25rem] leading-[0rem] font-normal'>
            &reg;
          </span>
        </h2>
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
