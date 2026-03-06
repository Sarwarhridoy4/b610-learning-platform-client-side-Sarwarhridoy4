const ContactForm = () => {
  return (
    <section className='page-shell'>
      <div className='soft-card p-6 md:p-8'>
        <h2 className='text-2xl font-black'>Contact Us</h2>
        <p className='mt-2 text-slate-600'>Tell us what you need and our support team will respond quickly.</p>
        <form className='mt-5 grid gap-4'>
          <input type='text' name='name' placeholder='Full name' className='neo-input' />
          <input type='email' name='email' placeholder='Email address' className='neo-input' />
          <input type='text' name='subject' placeholder='Subject' className='neo-input' />
          <textarea rows='4' name='message' placeholder='Your message' className='neo-textarea' />
          <button type='submit' className='brand-button w-fit'>
            Submit Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
