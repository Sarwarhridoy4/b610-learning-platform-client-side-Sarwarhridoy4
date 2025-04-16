const AppSection = () => {
  return (
    <section className='bg-gradient-to-r from-blue-200 to-cyan-200 shadow-lg my-10'>
      <div className='container flex flex-col items-center px-4 py-12 mx-auto text-center'>
        <h2 className='text-2xl font-bold tracking-tight text-gray-800 xl:text-3xl '>
          Try Our Brand new App!!
        </h2>

        <p className='block max-w-4xl mt-4 text-gray-500 '>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse iure
          tenetur commodi ipsam error voluptate magni. Adipisci repudiandae
          ullam commodi iusto reprehenderit suscipit facere voluptatem, eaque
          maiores minima. Neque, officiis.
        </p>

        <div className='mt-6'>
          <a
            href='/'
            className='inline-flex items-center justify-center w-full px-4 py-2.5 overflow-hidden text-sm text-white transition-colors duration-300 bg-gray-900 rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-gray-700   focus:ring focus:ring-gray-300 focus:ring-opacity-80'
          >
            <span className='mx-2'>Get it on the App Store</span>
          </a>

          <a
            href='/'
            className='inline-flex items-center justify-center w-full px-4 py-2.5 mt-4 overflow-hidden text-sm text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80'
          >
            <span className='mx-2'>Get it on Google Play</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
