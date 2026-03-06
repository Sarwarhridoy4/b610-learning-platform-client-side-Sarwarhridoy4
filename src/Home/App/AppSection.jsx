const AppSection = () => {
  return (
    <section className='page-shell'>
      <div className='soft-card tint-surface p-6 md:p-8'>
        <h2 className='text-2xl md:text-3xl font-black'>Learn Anywhere With The Mobile App</h2>
        <p className='mt-3 max-w-3xl text-slate-700'>
          Continue lessons on your commute, download class notes, and track progress from your phone.
        </p>
        <div className='mt-5 flex flex-wrap gap-3'>
          <a href='/' className='brand-button'>App Store</a>
          <a href='/' className='brand-button alt'>Google Play</a>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
