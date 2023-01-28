import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";
const ref = React.createRef();
const CourseDetail = () => {
  const courses = useLoaderData()[0];
  const { title, image, description,id } = courses;
  // console.log(courses);
  // console.log(title);
  
  return (
    <div>
      <Pdf targetRef={ref} filename= {`${title}.pdf`}>
      {({ toPdf }) => <div ref={ref} className='card card-compact w-[50vw] mx-auto my-20 bg-base-100 shadow-xl'>
        <figure>
          <img src={image} alt='Shoes' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{title}</h2>
                  <p>{description}</p>
          <div className='card-actions justify-end'>
            <button onClick={toPdf} className='btn btn-primary'>Download PDF</button>
            <Link to={`/details/${id}/checkout`}><button className='btn btn-primary'>Checkout</button></Link>
            
          </div>
        </div>
      </div> }
      </Pdf>
    </div>
  );
};

export default CourseDetail;
