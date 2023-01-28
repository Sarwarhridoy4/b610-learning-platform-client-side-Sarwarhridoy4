import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CategorisedCourse = () => {
    const courses = useLoaderData();
    
    return (
        <div className='grid grid-cols-3 gap-2 w-9/12 mx-auto my-10'>
            {
                courses.map((c,i)=><div key={i} className='card w-96 glass'>
                <figure>
                  <img src={c?.image} alt='car!' />
                </figure>
                <div className='card-body'>
                  <h2 className='card-title'>{c?.title}</h2>
                  <p>{c?.description.slice(0,400) +'...'}</p>
                  <div className='card-actions justify-end'>
                    <Link to={`/details/${c?.id}`}><button className='btn btn-primary'>Start now!</button></Link>
                  </div>
                </div>
              </div>)
           } 
        </div>
    );
};

export default CategorisedCourse;