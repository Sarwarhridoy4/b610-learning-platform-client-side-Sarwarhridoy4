import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Course from "./Course";

const Courses = () => {
  const courses = useLoaderData();
  console.log(courses);

  const [categories, setcategories] = useState([]);

  useEffect(() => {
    fetch("https://e-pathshala-ochre.vercel.app/course-categories")
      .then((response) => response.json())
      .then((data) => setcategories(data));
  }, []);
  return (
    <div class='drawer'>
      <input id='my-drawer' type='checkbox' class='drawer-toggle' />
      <div class='drawer-content'>
        <label
          for='my-drawer'
          class="btn btn-primary drawer-button w-full h-40 bg-[url('https://cdn.pixabay.com/photo/2017/03/25/17/55/colorful-2174045_960_720.png')] bg-cover"
        >
          Open Categories
        </label>
        <div className='my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {courses.map((course) => (
            <Course
              key={course.id}
              title={course.title}
              description={course.description}
              image={course.image}
              course={course}
            ></Course>
          ))}
        </div>
      </div>

      <div class='drawer-side'>
        <label for='my-drawer' class='drawer-overlay'></label>
        <ul class='menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content'>
          {categories.map((category) => (
            <li>
              <Link to={`/details/${category.id}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Courses;
