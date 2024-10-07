import React from 'react';

const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-between border-t border-slate-600 px-20 text-white'>
      <section className='my-8 flex w-full justify-between px-8'>
        <div className='flex flex-col justify-around'>
          <h2 className={`mb-3 text-2xl font-semibold`}>Get in touch</h2>
          <p>+91-6377634347</p>
          <p>snapkits.co.in@gmail.com</p>
        </div>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          © 2024 Your Company, Inc. All rights reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
