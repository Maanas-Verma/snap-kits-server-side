import Footer from '@/components/Footer';
import { NavHeader } from '@/components/NavHeader';
import React from 'react';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='root'>
      <div className='root-container'>
        <div className='wrapper'>
          <NavHeader />
          <main className='flex flex-col items-center justify-between p-20'>
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default RootLayout;
