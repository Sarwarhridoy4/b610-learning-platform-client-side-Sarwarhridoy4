import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router";
import { routes } from "./Routes/Routes/Routes.jsx";

const App = () => {
  return (
    <>
      <RouterProvider router={routes} />
      <Toaster position='top-right' />
    </>
  );
};

export default App;
