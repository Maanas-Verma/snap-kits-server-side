import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='auth flex min-h-screen w-full items-center justify-center bg-slate-100'>
      {children}
    </main>
  );
};

export default AuthLayout;
