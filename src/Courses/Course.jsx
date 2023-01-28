import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Course = () => {
  const course = useLoaderData()[0];
  const { id, title, description, image } = course;
  console.log(course);
  const shortDesc = description?.slice(0, 100);
  return (
    <div className="grid grid-cols-3 gap-2 w-9/12 mx-auto my-10">
      <div className='card w-96 glass'>
        <figure>
          <img src={image} alt='car!' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{title}</h2>
          <p>{shortDesc}</p>
          <div className='card-actions justify-end'>
            <Link to={`/details/${id}`}><button className='btn btn-primary'>Start now!</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
