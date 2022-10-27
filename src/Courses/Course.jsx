import React from "react";
import { Link } from "react-router-dom";

const Course = ({title,description,image}) => {
  return (
    <div className="grid grid-cols-3 gap-">
      <div className='card w-96 glass'>
        <figure>
          <img src={image} alt='car!' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{title}</h2>
          <p>{description.slice(0,150)}</p>
          <div className='card-actions justify-end'>
            <Link to='/course_detailse'><button className='btn btn-primary'>Start now!</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
