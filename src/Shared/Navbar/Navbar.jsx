import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const HandelSignOut = () => {
    logOut()
      .then(() => {
        setLoading(false);
        toast(`${user?.displayName} logged out!`);
        navigate("/home");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error?.message);
      });
  };
  return (
    <div>
      <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        <div className='relative flex grid items-center grid-cols-2 lg:grid-cols-3'>
          <ul className='flex items-center hidden space-x-8 lg:flex'>
            <li>
              <Link
                to='/home'
                aria-label='Our product'
                title='Our product'
                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/courses'
                aria-label='Our product'
                title='Our product'
                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to='/faq'
                aria-label='Product pricing'
                title='Product pricing'
                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to='/blogs'
                aria-label='Product pricing'
                title='Product pricing'
                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
              >
                Blogs
              </Link>
            </li>
          </ul>
          <Link
            to='/home'
            aria-label='Company'
            title='Company'
            className='inline-flex items-center lg:mx-auto'
          >
            <svg
              className='w-8 text-deep-purple-accent-400'
              viewBox='0 0 24 24'
              strokeLinejoin='round'
              strokeWidth='2'
              strokeLinecap='round'
              strokeMiterlimit='10'
              stroke='currentColor'
              fill='none'
            >
              <rect x='3' y='1' width='7' height='12' />
              <rect x='3' y='17' width='7' height='6' />
              <rect x='14' y='1' width='7' height='6' />
              <rect x='14' y='11' width='7' height='12' />
            </svg>
            <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
              E-Pathshala
            </span>
          </Link>
          <ul className='flex items-center hidden ml-auto space-x-8 lg:flex'>
            {user ? <span>{user.displayName}</span> : null}
            <div className='form-control'>
              <label className='label cursor-pointer'>
                <span className='label-text'>Dark Mode</span>
                <input type='checkbox' className='toggle toggle-primary' />
              </label>
            </div>
            {user ? (
              <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
                <div className='w-10 rounded-full'>
                  <img
                    title={user.displayName}
                    src={user?.photoURL}
                    alt={user?.displayName}
                  />
                </div>
              </label>
            ) : (
              <li>
                <Link
                  to='/get-started'
                  aria-label='get-started'
                  title='Get-Started'
                  className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                >
                  Get Started
                </Link>
              </li>
            )}
            {user ? (
              <button
                onClick={HandelSignOut}
                className='btn btn-active btn-primary'
              >
                Log Out
              </button>
            ) : null}
          </ul>
          <div className='ml-auto lg:hidden'>
            <button
              aria-label='Open Menu'
              title='Open Menu'
              className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                />
                <path
                  fill='currentColor'
                  d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                />
                <path
                  fill='currentColor'
                  d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className='absolute top-0 left-0 w-full z-50'>
                <div className='p-5 bg-white border rounded shadow-sm'>
                  <div className='flex items-center justify-between mb-4'>
                    <div>
                      <a
                        href='/'
                        aria-label='Company'
                        title='Company'
                        className='inline-flex items-center'
                      >
                        <svg
                          className='w-8 text-deep-purple-accent-400'
                          viewBox='0 0 24 24'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeMiterlimit='10'
                          stroke='currentColor'
                          fill='none'
                        >
                          <rect x='3' y='1' width='7' height='12' />
                          <rect x='3' y='17' width='7' height='6' />
                          <rect x='14' y='1' width='7' height='6' />
                          <rect x='14' y='11' width='7' height='12' />
                        </svg>
                        <Link to='/home'>
                          <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                            E-pathshala
                          </span>
                        </Link>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label='Close Menu'
                        title='Close Menu'
                        className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                          <path
                            fill='currentColor'
                            d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className='space-y-4'>
                      <li>
                        <Link
                          to='/courses'
                          className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                          Courses
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/faq'
                          className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                          FAQ
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/blogs'
                          className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                          Blogs
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/signin'
                          className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                          Sign in
                        </Link>
                      </li>
                      {user ? (
                        <button
                          onClick={HandelSignOut}
                          className='btn btn-active btn-primary'
                        >
                          Log Out
                        </button>
                      ) : null}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
