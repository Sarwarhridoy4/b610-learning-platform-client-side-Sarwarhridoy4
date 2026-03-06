import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider.jsx";

const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const Signin = () => {
  const { signIn, googleLogin, githubLogin, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        setLoading(false);
        const user = result.user;
        toast.success(`${user?.displayName || "User"} logged in`);
        navigate(from, { replace: true });
      })
      .catch((error) => toast.error(error?.message));
  };

  const handleGoogle = () => {
    googleLogin(googleProvider)
      .then((result) => {
        setLoading(false);
        toast.success(`${result.user?.displayName || "User"} logged in`);
        navigate(from, { replace: true });
      })
      .catch((error) => toast.error(error?.message));
  };

  const handleGitHub = () => {
    githubLogin(gitProvider)
      .then((result) => {
        setLoading(false);
        toast.success(`${result.user?.displayName || "User"} logged in`);
        navigate(from, { replace: true });
      })
      .catch((error) => toast.error(error?.message));
  };

  return (
    <section className='page-shell'>
      <div className='soft-card mx-auto max-w-lg p-6 md:p-8'>
        <h1 className='text-3xl font-black'>Sign In</h1>
        <p className='mt-2 text-slate-600'>Access your learning dashboard.</p>

        <form onSubmit={handleSubmit} className='mt-5 space-y-4'>
          <input type='email' name='email' placeholder='Email' className='neo-input' required />
          <input type='password' name='password' placeholder='Password' className='neo-input' required />
          <button className='brand-button w-full'>Sign In</button>
        </form>

        <div className='mt-5 grid gap-2 sm:grid-cols-2'>
          <button onClick={handleGoogle} className='ghost-button'>Continue with Google</button>
          <button onClick={handleGitHub} className='ghost-button'>Continue with GitHub</button>
        </div>

        <p className='mt-5 text-sm text-slate-600'>
          Don&apos;t have an account? <Link to='/get-started' className='font-bold text-emerald-700'>Sign up</Link>
        </p>
      </div>
    </section>
  );
};

export default Signin;
