import { Link, useLoaderData } from "react-router";

const CategorisedCourse = () => {
  const courses = useLoaderData();

  return (
    <section className='page-shell'>
      <div className='soft-card p-6 md:p-8'>
        <h1 className='text-3xl font-black'>Category Results</h1>
        <p className='mt-2 text-slate-600'>Found {courses.length} course(s) in this category.</p>

        <div className='mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {courses.map((course) => (
            <article key={course?.id} className='neo-subcard overflow-hidden'>
              <img src={course?.image} alt={course?.title} className='h-44 w-full object-cover' />
              <div className='p-4'>
                <h3 className='font-black text-slate-900'>{course?.title}</h3>
                <p className='mt-2 text-sm text-slate-600'>
                  {`${course?.description?.slice(0, 120) || "No description"}...`}
                </p>
                <Link to={`/details/${course?.id}`} className='brand-button mt-4 inline-block'>
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorisedCourse;
