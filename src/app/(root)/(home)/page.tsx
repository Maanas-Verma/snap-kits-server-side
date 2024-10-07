import React from 'react';
import Image from 'next/image';
import { Cards } from '@/components/ProjectCard';

const Home = () => {
  return (
    <>
      <section className='my-10 flex w-full items-end justify-between p-10'>
        <div className='flex max-w-xl flex-col gap-16'>
          <h2 className='text-6xl font-semibold text-white'>Who we are?</h2>
          <p className='text-slate-300'>
            We are a growing community passionate about developing software in
            small packets. Our aim is to establish a standard for code writing
            that is easy to understand and use, much like Lego. We maintain this
            standard in our writing.
          </p>
        </div>
        <div
          className="before:bg-gradient-radial after:bg-gradient-conic relative z-[-1] 
                        flex place-items-center before:absolute before:h-[400px] before:w-full 
                        before:-translate-x-1/2 before:rounded-full before:from-white before:to-transparent before:blur-2xl 
                        before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 
                        after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] 
                        before:dark:bg-gradient-to-br before:dark:from-transparent 
                        before:dark:to-blue-700 before:dark:opacity-20 after:dark:from-sky-900 after:dark:via-[#0141ff] 
                        after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"
        >
          <Image
            className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]'
            src='/legos.svg'
            alt='Legos Logo'
            width={400}
            height={400}
            style={{ width: '400px', height: '400px' }}
            priority
          />
        </div>
      </section>

      <section className='my-10 flex w-full items-center justify-center p-10'>
        <div className='flex size-full flex-col gap-16'>
          <h2 className='text-6xl font-semibold text-white'>What we do?</h2>
          <p className='text-slate-300'>
            Our team is dedicated to exploring a wide range of industries and
            niches, with a focus on finding the most promising ideas that have
            yet to be discovered. From innovative products to disruptive
            business models, we seek out the best ideas and make them accessible
            to entrepreneurs who are looking for inspiration and guidance.
          </p>
        </div>
      </section>

      <section className='my-10 flex w-full items-center justify-center p-10'>
        <div className='flex size-full flex-col gap-20'>
          <h2 className='text-6xl font-semibold text-white'>Open Projects</h2>
          <div className='flex gap-8'>
            <Cards
              title={'Project 1'}
              content={`We believe in the power of collaboration, building strong
            relationships and committed a long-lasting partnerships with our
            clients.`}
              actionButton={[
                { key: 'Github', value: 'Github' },
                { key: 'Link', value: 'Link' },
              ]}
            />
            <Cards
              title={'Project 2'}
              content={`We believe in the power of collaboration, building strong
            relationships and committed a long-lasting partnerships with our
            clients.`}
              actionButton={[
                { key: 'Github', value: 'Github' },
                { key: 'Link', value: 'Link' },
              ]}
            />
            <Cards
              title={'Project 3'}
              content={`We believe in the power of collaboration, building strong
            relationships and committed a long-lasting partnerships with our
            clients.`}
              actionButton={[
                { key: 'Github', value: 'Github' },
                { key: 'Link', value: 'Link' },
              ]}
            />
          </div>
        </div>
      </section>

      <section className='my-10 flex w-full items-center justify-center p-10'>
        <div className='flex size-full flex-col gap-20'>
          <h2 className='text-6xl font-semibold text-white'>Meet our team</h2>
          <ul className='grid grid-cols-3 gap-10 text-center'>
            <li className='rounded-2xl bg-slate-900 px-10 py-8 '>
              <Image
                src='/profile_1.jpg'
                className='m-auto rounded-full'
                alt='anurag'
                width={250}
                height={200}
                style={{ width: 'auto', height: '70%' }}
              />
              <h2 className='text-medium mt-6 font-semibold text-white'>
                Anurag Porte
              </h2>
              <p className='mt-1 text-sm font-light text-slate-200'>
                Software Developer
              </p>
              <ul className='mt-6 flex justify-center gap-4 text-sm'>
                <li>
                  <a href='/' className='cursor rounded bg-slate-600 px-2 py-1'>
                    X
                  </a>
                </li>
                <li>
                  <a href='/' className='cursor rounded bg-slate-600 px-2 py-1'>
                    in
                  </a>
                </li>
              </ul>
            </li>
            <li className='rounded-2xl bg-slate-900 px-10 py-8'>
              <Image
                src='/profile_2.jpg'
                className='m-auto rounded-full'
                alt='anurag'
                width={250}
                height={200}
                style={{ width: 'auto', height: '70%' }}
              />
              <h2 className='text-medium mt-6 font-semibold text-white'>
                Maanas Verma
              </h2>
              <p className='mt-1 text-sm font-light text-slate-200'>
                Software Developer
              </p>
              <ul className='mt-6 flex justify-center gap-4 text-sm'>
                <li>
                  <a href='/' className='cursor rounded bg-slate-600 px-2 py-1'>
                    X
                  </a>
                </li>
                <li>
                  <a href='/' className='cursor rounded bg-slate-600 px-2 py-1'>
                    in
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Home;
