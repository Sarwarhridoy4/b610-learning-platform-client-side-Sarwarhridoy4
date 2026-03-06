
import { Link } from "react-router";

const Cover = () => {
  return (
    <section className='page-shell'>
      <div className='soft-card hero-lens overflow-hidden p-8 md:p-12'>
        <p className='text-xs uppercase tracking-[0.26em] text-slate-700 font-bold'>Professional Learning Space</p>
        <h1 className='mt-3 text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl text-slate-900'>
          Sleek, Structured Courses For Real-World Skills
        </h1>
        <p className='mt-4 max-w-2xl text-slate-700 leading-7'>
          Build strong fundamentals, complete practical projects, and move toward your career goals with a polished learning workflow.
        </p>
        <div className='mt-7 flex flex-wrap gap-3'>
          <Link to='/courses' className='brand-button'>
            Explore Courses
          </Link>
          <Link to='/get-started' className='brand-button alt'>
            Create Account
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cover;
