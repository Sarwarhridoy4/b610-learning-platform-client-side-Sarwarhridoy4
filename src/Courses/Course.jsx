import React from "react";

const Course = ({id,title,description,image}) => {
  return (
    <div>
      <div className='card w-96 glass'>
        <figure>
          <img src={image} alt='car!' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{title}</h2>
          <p>{description.slice(0,50)+ '...'}</p>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary'>Start now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
