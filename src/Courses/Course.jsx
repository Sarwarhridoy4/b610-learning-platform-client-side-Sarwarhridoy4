import { Link } from "react-router";
import PropTypes from "prop-types";

const Course = ({ course }) => {
  // console.log(course);

  const shortDesc = course?.description?.slice(0, 100);
  return (
    <div className='grid grid-cols-3 gap-2 w-9/12 mx-auto my-10'>
      <div className='card w-96 glass'>
        <figure>
          <img src={course?.image} alt='car!' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{course?.title}</h2>
          <p>{shortDesc}</p>
          <div className='card-actions justify-end'>
            <Link to={`/details/${course?.id}`}>
              <button className='btn btn-primary'>Start now!</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
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

