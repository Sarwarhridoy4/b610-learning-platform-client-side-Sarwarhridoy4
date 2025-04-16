import { Link, useLoaderData } from "react-router";
import { takeScreenshotAsPDF } from "../utils/screenshot";

const CourseDetail = () => {
  const courses = useLoaderData()[0];

  return (
    <div>
      <div
        id='targetDiv'
        className='card card-compact w-[50vw] mx-auto my-20 bg-base-100 shadow-xl'
      >
        <figure>
          <img src={courses?.image} alt='Shoes' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{courses?.title}</h2>
          <p>{courses?.description}</p>
          <div className='card-actions justify-end'>
            <button
              onClick={() => takeScreenshotAsPDF(["targetDiv", "anotherDiv"],`${courses?.title}`)}
              type='button'
              className='btn btn-primary'
            >
              Download PDF
            </button>
            <Link to={`/details/${courses?.id}/checkout`}>
              <button className='btn btn-primary'>Checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
