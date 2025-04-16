import { Link } from "react-router";

const Cover = () => {
  return (
    <div
      className='hero min-h-screen'
      style={{
        backgroundImage: `url("https://i.ibb.co/4P552qJ/freelancer-gab2cdc7af-1280.png")`,
      }}
    >
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl font-bold'>Welcome Onboard!!</h1>
          <p className='mb-5'>
            We are here to help you with Quality online Course. We are always
            here with 24/7 support. We provide World class course with best
            trainers.
          </p>
          <Link to='/courses'>
            <button className='btn btn-primary'>Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cover;
