import { Outlet } from "react-router";
import Footer from "../Shared/Footer/Footer.jsx";
import Navbar from "../Shared/Navbar/Navbar.jsx";

const Main = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <main className='flex-1 py-6'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
