import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <section className='px-[1rem] lowercase md:max-w-[90em] m-auto'>
      <div className='flex justify-between py-[2rem] border-t-[1px] border-[#5c5c5c] text-[#adadad] font-semibold tracking-tighter'>
        <span>&copy; All Rights Reserved.</span>
        <Link href='/'>
          <Image src='./andrew.svg' alt='andrew_logo' width={120} height={10} className="dark:invert"/>
        </Link>
      </div>
    </section>
  );
};

export default Footer;
