import { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider.jsx";

const SignUp = () => {
  const { googleLogin, githubLogin, createUser, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleLogin()
      .then((result) => {
        setLoading(false);
        toast.success(`${result.user?.displayName || "User"} logged in`);
        navigate(from, { replace: true });
      })
      .catch((error) => toast.error(error?.message));
  };

  const handleGithubSignIn = () => {
    githubLogin()
      .then((result) => {
        setLoading(false);
        toast.success(`${result.user?.displayName || "User"} logged in`);
        navigate(from, { replace: true });
      })
      .catch((error) => toast.error(error?.message));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        setLoading(false);
        toast.success(`${result.user?.email} created successfully`);
        navigate(from, { replace: true });
      })
      .catch((error) => toast.error(error?.message));
  };

  return (
    <section className='page-shell'>
      <div className='soft-card mx-auto max-w-lg p-6 md:p-8'>
        <h1 className='text-3xl font-black'>Create Account</h1>
        <p className='mt-2 text-slate-600'>Start learning with your personalized profile.</p>

        <form onSubmit={handleSubmit} className='mt-5 space-y-4'>
          <input type='text' name='name' placeholder='Your name' className='neo-input' required />
          <input type='email' name='email' placeholder='Email' className='neo-input' required />
          <input type='password' name='password' placeholder='Password' className='neo-input' required />
          <input type='text' name='photoURL' placeholder='Photo URL' className='neo-input' required />
          <button className='brand-button w-full'>Sign Up</button>
        </form>

        <div className='mt-5 grid gap-2 sm:grid-cols-2'>
          <button onClick={handleGoogleSignIn} className='ghost-button'>Google Sign Up</button>
          <button onClick={handleGithubSignIn} className='ghost-button'>GitHub Sign Up</button>
        </div>

        <p className='mt-5 text-sm text-slate-600'>
          Already have an account? <Link to='/signin' className='font-bold text-emerald-700'>Sign in</Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
