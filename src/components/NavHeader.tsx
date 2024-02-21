'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ScrollProgress } from './ScrollProgress';
import { UserButton } from '@clerk/nextjs';

export function NavHeader() {
  const pathname = usePathname();

  const links: { title: string; url: string }[] = [
    { title: 'Home', url: '/' },
    { title: 'Community', url: '/community' },
    { title: 'Contact Us', url: '/contact-us' },
  ];

  return (
    <header className='fixed top-0 w-full bg-black shadow-md shadow-blue-500/20 '>
      <section className='max-w-8xl relative mx-6 my-4 flex'>
        <div className='flex w-full justify-between pe-4 ps-16'>
          <div
            className="before:bg-gradient-radial flex items-center before:absolute before:h-[50px] before:w-full 
                        before:-translate-x-1/2 before:rounded-full before:from-sky-500 before:blur-2xl 
                        before:content-[''] before:dark:opacity-50"
          >
            <Image
              className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
              src='/snapkits.svg'
              alt='Snapkits Logo'
              width={200}
              height={48}
              style={{ width: '200px', height: '48px' }}
              priority
            />
          </div>
          <nav className='flex items-center space-x-4 sm:justify-center'>
            {links.map((link) => (
              <Link
                key={`${link.title}`}
                href={link.url}
                className={`rounded-lg px-3 py-2 font-medium ${pathname === link.url ? 'active bg-slate-100 text-slate-900' : 'text-slate-400 hover:bg-slate-500 hover:text-slate-900'}`}
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className='flex items-center p-2'>
          <UserButton afterSignOutUrl='/' />
        </div>
      </section>
      <ScrollProgress />
    </header>
  );
}
