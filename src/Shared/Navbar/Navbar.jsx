import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider.jsx";
import { ThemeContext } from "../../Contexts/ThemeProvider/ThemeProvider.jsx";

const navItems = [
  { to: "/home", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/faq", label: "FAQ" },
  { to: "/blogs", label: "Insights" },
];

const linkClass = ({ isActive }) =>
  `px-3 py-2 rounded-lg text-sm font-semibold transition ${
    isActive ? "neo-chip" : "text-slate-700 hover:bg-slate-100"
  }`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut, setLoading } = useContext(AuthContext);
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut()
      .then(() => {
        setLoading(false);
        toast.success(`${user?.displayName || "User"} logged out`);
        navigate("/home");
      })
      .catch((error) => {
        toast.error(error?.message || "Failed to log out");
      });
  };

  return (
    <header className='sticky top-0 z-50 glass-nav'>
      <div className='page-shell flex h-16 items-center justify-between'>
        <Link to='/home' className='flex items-center gap-2'>
          <span className='grid h-8 w-8 place-content-center rounded-lg bg-emerald-700 text-white font-extrabold'>
            E
          </span>
          <span className='font-extrabold tracking-wide text-slate-900'>E-Pathshala</span>
        </Link>

        <nav className='hidden lg:flex items-center gap-2'>
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className='hidden lg:flex items-center gap-3'>
          <button
            type='button'
            onClick={toggleTheme}
            className='theme-switch'
            title={isDarkTheme ? "Switch to Mist theme" : "Switch to Midnight theme"}
          >
            <div className='theme-switch-dot' />
          </button>
          {user && (
            <span className='text-sm text-slate-600'>{user?.displayName || user?.email}</span>
          )}
          {user ? (
            <>
              <img
                src={
                  user?.photoURL ||
                  "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
                alt={user?.displayName || "User"}
                className='h-9 w-9 rounded-full border border-slate-200 object-cover'
              />
              <button onClick={handleSignOut} className='brand-button'>
                Log Out
              </button>
            </>
          ) : (
            <Link to='/get-started' className='brand-button'>
              Get Started
            </Link>
          )}
        </div>

        <button
          type='button'
          className='lg:hidden neo-chip px-3 py-2 text-sm font-bold text-slate-700'
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          Menu
        </button>
      </div>

      {isMenuOpen && (
        <div className='lg:hidden border-t border-slate-200'>
          <div className='page-shell py-4 space-y-3'>
            <button
              type='button'
              onClick={toggleTheme}
              className='ghost-button w-full'
            >
              {isDarkTheme ? "Switch to Mist Theme" : "Switch to Midnight Theme"}
            </button>
            <nav className='grid gap-2'>
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={linkClass}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            {user ? (
              <button onClick={handleSignOut} className='brand-button w-full'>
                Log Out
              </button>
            ) : (
              <Link
                to='/get-started'
                onClick={() => setIsMenuOpen(false)}
                className='brand-button block text-center'
              >
                Get Started
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
