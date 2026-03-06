import { useContext } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider.jsx";

const Checkout = () => {
  const course = useLoaderData()[0];
  const { title, image, description } = course;
  const short = `${description.slice(0, 320)}...`;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handlePay = () => {
    toast.success("Thanks for your purchase.");
    navigate("/");
  };

  return (
    <section className='page-shell'>
      <div className='soft-card overflow-hidden md:grid md:grid-cols-2'>
        <img src={image} alt={title} className='h-full min-h-80 w-full object-cover' />
        <div className='p-6 md:p-8'>
          <p className='text-sm font-black uppercase tracking-wide text-emerald-700'>Checkout</p>
          <h1 className='mt-2 text-3xl font-black'>{title}</h1>
          <p className='mt-3 text-slate-700'>{short}</p>

          <div className='mt-5 rounded-xl border border-slate-200 p-4 bg-slate-50'>
            <p className='font-bold text-slate-900'>{user?.displayName || "Student"}</p>
            <p className='text-sm text-slate-600'>{user?.email}</p>
          </div>

          <button onClick={handlePay} className='brand-button mt-6'>
            Pay Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
