import React from "react";
import { Link, } from "react-router-dom";

const Course = ({course}) => {
  // const course = useLoaderData()[0];
  // const { id, title, description, image } = course;
  console.log(course);
  const shortDesc = course?.description?.slice(0, 100);
  return (
    <div className="grid grid-cols-3 gap-2 w-9/12 mx-auto my-10">
      <div className='card w-96 glass'>
        <figure>
          <img src={course?.image} alt='car!' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{course?.title}</h2>
          <p>{shortDesc}</p>
          <div className='card-actions justify-end'>
            <Link to={`/details/${course?.id}`}><button className='btn btn-primary'>Start now!</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
