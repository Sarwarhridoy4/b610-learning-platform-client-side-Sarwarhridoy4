import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetail = () => {
  const courses = useLoaderData()[0];
  const { title, image, description } = courses;
  // console.log(courses);
  // console.log(title);
  
  return (
    <div>
      <div className='card card-compact w-[50vw] mx-auto my-20 bg-base-100 shadow-xl'>
        <figure>
          <img src={image} alt='Shoes' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{title}</h2>
                  <p>{description}</p>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary'>Download PDF</button>
            <button className='btn btn-primary'>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
