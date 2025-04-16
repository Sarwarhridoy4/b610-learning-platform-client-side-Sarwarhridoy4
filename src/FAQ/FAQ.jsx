const FAQ = () => {
  return (
    <div>
      <section className='bg-blue-700 text-gray-100'>
        <div className='container flex flex-col justify-center p-4 mx-auto md:p-8'>
          <h2 className='mb-12 text-4xl font-bold leading-none text-center sm:text-5xl'>
            Frequently Asked Questions
          </h2>
          <div className='flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700'>
            <details>
              <summary className='py-2 outline-none cursor-pointer focus:underline'>
                Who We Are?
              </summary>
              <div className='px-4 pb-4'>
                <p>
                  We Are a renowned EdTech Company. Providing Quality Courses At
                  affordable price
                </p>
              </div>
            </details>
            <details>
              <summary className='py-2 outline-none cursor-pointer focus:underline'>
                Our Goal{" "}
              </summary>
              <div className='px-4 pb-4'>
                <p>
                  Our Goal is very crystal clear. Helping a millions of students
                  at studies and and achiving their Goal. persuing there dream
                  of getteing the best carrer opportunity to our student as
                  their desire.
                </p>
              </div>
            </details>
            <details open=''>
              <summary className='py-2 outline-none cursor-pointer focus:underline'>
                Our Service
              </summary>
              <div className='px-4 pb-4 space-y-2'>
                <p>Providing Course Marerials</p>
                <p>Student care Unit</p>
                <p>Live Support</p>
                <p>Real Time project assesment</p>
                <p>Weekly seminars</p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
