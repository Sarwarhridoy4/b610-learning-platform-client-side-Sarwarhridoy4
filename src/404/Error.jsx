import { Link } from "react-router";

const Error = () => {
  return (
    <div>
      <section className='flex items-center h-full p-16 bg-gray-900 text-gray-100'>
        <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
          <div className='max-w-md text-center'>
            <h2 className='mb-8 font-extrabold text-9xl text-gray-600'>
              <span className='sr-only'>Error</span>404
            </h2>
            <p className='text-2xl font-semibold md:text-3xl'>
              Sorry, we couldn&apos;t find this page.
            </p>
            <p className='mt-4 mb-8 text-gray-400'>
              But don&apos;t worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link
              to='/home'
              className='px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900'
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error;
