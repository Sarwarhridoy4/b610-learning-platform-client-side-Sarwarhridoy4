import { useState } from "react";
import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Course from "./Course";

const Courses = () => {
  const courses = useLoaderData();

  const [categories, setcategories] = useState([]);

  useEffect(() => {
    fetch("https://e-pathshala-sarwarhridoy4.vercel.app/course-categories")
      .then((response) => response.json())
      .then((data) => setcategories(data));
  }, []);
  return (
    <div className='drawer'>
      <input id='my-drawer' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        <label
          htmlFor='my-drawer'
          className="btn btn-primary drawer-button w-full h-40 bg-[url('https://cdn.pixabay.com/photo/2017/03/25/17/55/colorful-2174045_960_720.png')] bg-cover"
        >
          Open Categories
        </label>
        <div className='mx-5 my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1'>
          {courses.map((course) => (
            <Course
              key={course.id}
              course={course}
            ></Course>
          ))}
        </div>
      </div>

      <div className='drawer-side'>
        <label htmlFor='my-drawer' className='drawer-overlay'></label>
        <ul className='menu p-4 overflow-y-auto w-80 min-h-screen bg-base-100 text-base-content'>
          {categories.map((category, i) => (
            <li key={i}>
              <Link to={`/category/${category?.id}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Courses;
