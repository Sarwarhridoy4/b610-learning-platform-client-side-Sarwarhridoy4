
import { Link } from "react-router";

const Error = () => {
  return (
    <section className='page-shell'>
      <div className='soft-card grid place-items-center p-10 text-center min-h-[60vh]'>
        <div>
          <p className='text-7xl font-black text-slate-300'>404</p>
          <h1 className='mt-3 text-3xl font-black'>Page Not Found</h1>
          <p className='mt-2 text-slate-600'>The route you requested does not exist.</p>
          <Link to='/home' className='brand-button mt-5 inline-block'>
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
