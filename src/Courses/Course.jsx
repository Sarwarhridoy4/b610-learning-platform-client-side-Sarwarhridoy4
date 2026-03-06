import { Link } from "react-router";
import PropTypes from "prop-types";

const Course = ({ course }) => {
  const shortDesc = `${course?.description?.slice(0, 110) || "No description available"}...`;

  return (
    <article className='soft-card overflow-hidden'>
      <img src={course?.image} alt={course?.title} className='h-44 w-full object-cover' />
      <div className='p-5'>
        <h3 className='text-lg font-black text-slate-900'>{course?.title}</h3>
        <p className='mt-2 text-sm text-slate-600'>{shortDesc}</p>
        <Link to={`/details/${course?.id}`} className='brand-button mt-4 inline-block'>
          Start Course
        </Link>
      </div>
    </article>
  );
};

Course.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default Course;
