import React from "react";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";

const Checkout = () => {
  const courses = useLoaderData()[0];
  const { title, image, description } = courses;
  const short = description.slice(0, 400) + "...";
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handelPay = () => {
    toast.success("Thanks for buying.");
    navigate("/");
  };
  return (
    <section className='bg-white'>
      <div className='max-w-6xl px-6 py-10 mx-auto'>
        <p className='text-xl font-medium text-blue-500 '>{title}</p>

        <h1 className='mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl'>
          Summery
        </h1>

        <main className='relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12'>
          <div className='absolute w-full bg-blue-600 -z-10 md:h-96 rounded-2xl'></div>

          <div className='w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly'>
            <img
              className='h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl'
              src={image}
              alt='client'
            />

            <div className='mt-2 md:mx-6'>
              <div>
                <p className='text-xl font-medium tracking-tight text-white'>
                  {user?.displayName}
                </p>
                <p className='text-blue-200 '>{user?.email}</p>
              </div>

              <p className='mt-4 text-lg leading-relaxed text-white md:text-xl'>
                {" "}
                {short}
              </p>

              <div className='flex items-center justify-between mt-6 md:justify-start'>
                <button
                  onClick={handelPay}
                  className='btn btn-outline btn-warning'
                >
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Checkout;
