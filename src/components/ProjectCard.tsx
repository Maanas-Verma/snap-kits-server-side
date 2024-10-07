'use client';

export function Cards(props: {
  title: string;
  content: string;
  actionButton: { key: string; value: string; href?: string }[];
}) {
  return (
    <div className='mx-auto max-w-sm space-y-2 rounded-xl bg-white px-8 py-8 shadow-lg'>
      <div className='space-y-6'>
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold text-black'>{props.title}</h2>
          <p className='font-light text-slate-600'>{props.content}</p>
        </div>
        <div className='space-x-4'>
          {props.actionButton.map((action) => {
            return (
              <button
                key={`${props.title}-${action.key}`}
                className='group space-x-2 rounded-full border border-black bg-black px-4 py-2 text-sm font-semibold text-white hover:border-transparent hover:bg-stone-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-stone-600 focus:ring-offset-2'
              >
                <span>{action.value}</span>
                <span className='inline-block transition-transform group-hover:-rotate-45 motion-reduce:transform-none'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='h-3 w-3'
                  >
                    <path
                      fillRule='evenodd'
                      d='M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z'
                      clipRule='evenodd'
                    />
                  </svg>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
