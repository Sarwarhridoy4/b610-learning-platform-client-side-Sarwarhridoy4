import { createBrowserRouter } from "react-router-dom";
import Blogs from "../../Blogs/Blogs";
import Courses from "../../Courses/Courses";
import SignUp from "../../SignUp/SignUp";
import FAQ from "../../FAQ/FAQ";
import Home from "../../Home/Home";
import Main from "../../Layout/Main";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/home",
                element:<Home></Home> ,
            },
            {
                path: "/courses",
                element:<Courses></Courses> ,
            },
            {
                path: "/faq",
                element:<FAQ></FAQ> ,
            },
            {
                path: "/blogs",
                element:<Blogs></Blogs> ,
            },
            {
                path: "/get-started",
                element:<SignUp></SignUp> ,
            },
        ]
    }
])