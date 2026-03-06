const faqs = [
  {
    q: "Who are we?",
    a: "We are an EdTech platform focused on practical and affordable learning paths.",
  },
  {
    q: "What is our goal?",
    a: "Help students build job-ready skills and achieve clear career outcomes through mentorship and projects.",
  },
  {
    q: "What services do we provide?",
    a: "Live support, downloadable materials, project assessments, and regular online seminars.",
  },
];

const FAQ = () => {
  return (
    <section className='page-shell'>
      <div className='soft-card p-6 md:p-8'>
        <h1 className='text-3xl font-black'>Frequently Asked Questions</h1>
        <div className='mt-5 space-y-3'>
          {faqs.map((item, index) => (
            <details key={item.q} open={index === 0} className='neo-subcard p-4'>
              <summary className='cursor-pointer font-bold text-slate-900'>{item.q}</summary>
              <p className='mt-2 text-slate-700'>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
