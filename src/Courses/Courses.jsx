import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import Course from "./Course.jsx";

const Courses = () => {
  const courses = useLoaderData();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://e-pathshala-sarwarhridoy4.vercel.app/course-categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <section className='page-shell space-y-5'>
      <div className='soft-card tint-surface p-6'>
        <h1 className='text-3xl font-black'>Course Library</h1>
        <p className='mt-2 text-slate-700'>Pick a course and start learning with guided content and assignments.</p>
      </div>

      <div className='soft-card p-5'>
        <h2 className='text-sm font-black uppercase tracking-wide text-slate-500'>Browse Categories</h2>
        <div className='mt-3 flex flex-wrap gap-2'>
          {categories.map((category) => (
            <Link
              key={category?.id}
              to={`/category/${category?.id}`}
              className='neo-chip px-4 py-2 text-sm font-semibold'
            >
              {category?.name}
            </Link>
          ))}
        </div>
      </div>

      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {courses.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default Courses;
