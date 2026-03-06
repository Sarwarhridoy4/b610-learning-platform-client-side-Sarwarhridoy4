import { Link, useLoaderData } from "react-router";
import { takeScreenshotAsPDF } from "../utils/screenshot.js";

const CourseDetail = () => {
  const course = useLoaderData()[0];

  return (
    <section className='page-shell'>
      <article id='targetDiv' className='soft-card overflow-hidden'>
        <img src={course?.image} alt={course?.title} className='h-72 w-full object-cover' />
        <div className='p-6'>
          <h1 className='text-3xl font-black'>{course?.title}</h1>
          <p className='mt-3 text-slate-700 leading-7'>{course?.description}</p>
          <div className='mt-5 flex flex-wrap gap-3'>
            <button
              onClick={() => takeScreenshotAsPDF(["targetDiv", "anotherDiv"], `${course?.title}`)}
              type='button'
              className='brand-button alt'
            >
              Download PDF
            </button>
            <Link to={`/details/${course?.id}/checkout`} className='brand-button'>
              Checkout
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
};

export default CourseDetail;
