'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send } from 'lucide-react';
import Image from 'next/image';

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: 'all',
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);

  const onSubmit = (data: any) => {
    setMessage(true);
    setIsSuccess(true);
    console.log(data);
  };

  return (
    <>
      <section className='my-10 flex w-full flex-row-reverse items-end justify-between p-10'>
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
        <div className='w-1/2'>
          <h2 className='text-4xl font-semibold dark:text-white'>Contact Us</h2>
          <p className='my-6 dark:text-white'>
            Have something to say? We are here to help. Fill up the form or send
            email or call phone.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-5'>
              <input
                type='text'
                placeholder='Full Name'
                autoComplete='false'
                className={`w-full rounded-md border-2 px-4 py-3 outline-none placeholder:text-gray-800 focus:ring-4 dark:bg-gray-900 dark:text-white   dark:placeholder:text-gray-200  ${
                  errors.name
                    ? 'border-red-600 ring-red-100 focus:border-red-600 dark:ring-0'
                    : 'border-gray-300 ring-gray-100 focus:border-gray-600 dark:border-gray-600 dark:ring-0 dark:focus:border-white'
                }`}
                {...register('full_name', {
                  required: 'Full name is required',
                  maxLength: 80,
                })}
              />
              {errors.name && (
                <div className='mt-1 text-red-600'>
                  {/* <small>{errors.name.message}</small> */}
                </div>
              )}
            </div>

            <div className='mb-5'>
              <label htmlFor='email_address' className='sr-only'>
                Email Address
              </label>
              <input
                id='email_address'
                type='email'
                placeholder='Email Address'
                autoComplete='false'
                className={`w-full rounded-md border-2 px-4 py-3 outline-none placeholder:text-gray-800 focus:ring-4 dark:bg-gray-900 dark:text-white   dark:placeholder:text-gray-200  ${
                  errors.email
                    ? 'border-red-600 ring-red-100 focus:border-red-600 dark:ring-0'
                    : 'border-gray-300 ring-gray-100 focus:border-gray-600 dark:border-gray-600 dark:ring-0 dark:focus:border-white'
                }`}
                {...register('email', {
                  required: 'Enter your email',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Please enter a valid email',
                  },
                })}
              />
              {errors.email && (
                <div className='mt-1 text-red-600'>
                  {/* <small>{errors.email.message}</small> */}
                </div>
              )}
            </div>

            <div className='mb-3'>
              <textarea
                placeholder='Your Message'
                className={`h-36 w-full rounded-md border-2 px-4 py-3 outline-none placeholder:text-gray-800   focus:ring-4 dark:bg-gray-900  dark:text-white dark:placeholder:text-gray-200  ${
                  errors.message
                    ? 'border-red-600 ring-red-100 focus:border-red-600 dark:ring-0'
                    : 'border-gray-300 ring-gray-100 focus:border-gray-600 dark:border-gray-600 dark:ring-0 dark:focus:border-white'
                }`}
                {...register('message', {
                  required: 'Enter your Message',
                })}
              />
              {errors.message && (
                <div className='mt-1 text-red-600'>
                  {' '}
                  {/* <small>{errors.message.message}</small> */}
                </div>
              )}
            </div>

            <button
              type='submit'
              className='w-full rounded-md bg-gray-900 px-7 py-4 font-semibold text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-200 focus:ring-offset-2 dark:bg-white dark:text-black '
            >
              {isSubmitting ? (
                <svg
                  className='mx-auto h-5 w-5 animate-spin text-white dark:text-black'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'
                  ></circle>
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  ></path>
                </svg>
              ) : (
                <div className='flex flex-row justify-center gap-4'>
                  <p className='text-xl'>Send Message</p>
                  <div className='flex items-center'>
                    <Send size={20} />
                  </div>
                </div>
              )}
            </button>
          </form>
          {isSubmitSuccessful && isSuccess && (
            <div className='mt-3 text-center text-sm text-green-500'>
              {message || 'Success. Message sent successfully'}
            </div>
          )}
          {isSubmitSuccessful && !isSuccess && (
            <div className='mt-3 text-center text-sm text-red-500'>
              {message || 'Something went wrong. Please try later.'}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ContactUs;
