'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ScrollProgress } from './ScrollProgress';
import { SignedIn, UserButton } from '@clerk/nextjs';
import { navLinks } from '@/constants';

export function NavHeader() {
  const pathname = usePathname();

  return (
    <header className='fixed top-0 w-full bg-black shadow-md shadow-blue-500/20 '>
      <section className='max-w-8xl relative mx-6 my-4 flex'>
        <div className='flex w-full justify-between pe-4 ps-16'>
          <div className='nav-gradiant-background'>
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
            <SignedIn>
              {navLinks.map((link) => {
                const isActive = link.route === pathname;
                return (
                  <Link
                    key={`${link.route}`}
                    href={link.route}
                    className={`rounded-lg px-3 py-2 font-medium ${isActive ? 'active bg-slate-100 text-slate-900' : 'text-slate-400 hover:bg-slate-500 hover:text-slate-900'}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </SignedIn>
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
