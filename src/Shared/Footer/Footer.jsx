
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className='glass-footer'>
      <div className='page-shell py-10'>
        <div className='grid gap-8 md:grid-cols-3'>
          <div>
            <Link to='/home' className='text-xl font-extrabold text-slate-900'>
              E-Pathshala
            </Link>
            <p className='mt-3 text-sm text-slate-600 max-w-xs'>
              Professional online learning platform for structured, practical and career-focused growth.
            </p>
          </div>
          <div>
            <h3 className='text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500'>Platform</h3>
            <div className='mt-3 grid gap-2 text-sm'>
              <Link to='/courses' className='hover:text-emerald-700'>Courses</Link>
              <Link to='/faq' className='hover:text-emerald-700'>FAQ</Link>
              <Link to='/blogs' className='hover:text-emerald-700'>Insights</Link>
            </div>
          </div>
          <div>
            <h3 className='text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500'>Contact</h3>
            <p className='mt-3 text-sm text-slate-600'>support@e-pathshala.com</p>
            <p className='text-sm text-slate-600'>+880 1700-000000</p>
          </div>
        </div>
        <div className='luxe-divider mt-8' />
        <p className='pt-4 text-xs text-slate-500'>© 2026 E-Pathshala. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
