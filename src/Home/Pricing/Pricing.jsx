const plans = [
  {
    name: "Essential",
    price: "$5/mo",
    desc: "Great for students starting from scratch.",
    features: ["5 courses", "Community support", "Weekly quizzes"],
  },
  {
    name: "Pro",
    price: "$19/mo",
    desc: "Best for serious learners building job-ready skills.",
    features: ["All courses", "Priority mentor support", "Project reviews"],
  },
  {
    name: "Lifetime",
    price: "$99 once",
    desc: "One-time payment for permanent access.",
    features: ["All future content", "Downloadable resources", "Certificate templates"],
  },
];

const Pricing = () => {
  return (
    <section className='page-shell'>
      <div className='soft-card p-6 md:p-8'>
        <h2 className='text-3xl font-black'>Pricing Plans</h2>
        <p className='mt-2 text-slate-600'>Choose a plan based on your learning speed and support needs.</p>
        <div className='mt-6 grid gap-4 md:grid-cols-3'>
          {plans.map((plan) => (
            <article key={plan.name} className='neo-subcard p-5'>
              <h3 className='text-xl font-black text-slate-900'>{plan.name}</h3>
              <p className='mt-1 text-2xl font-black text-emerald-700'>{plan.price}</p>
              <p className='mt-2 text-sm text-slate-600'>{plan.desc}</p>
              <ul className='mt-4 space-y-2 text-sm text-slate-700'>
                {plan.features.map((feature) => (
                  <li key={feature}>- {feature}</li>
                ))}
              </ul>
              <button className='brand-button mt-5 w-full'>Start Plan</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
