import { createBrowserRouter } from "react-router-dom";
import Blogs from "../../Blogs/Blogs";
import Courses from "../../Courses/Courses";
import SignUp from "../../SignUp/SignUp";
import Signin from "../../SignIn/Signin";
import FAQ from "../../FAQ/FAQ";
import Home from "../../Home/Home";
import Main from "../../Layout/Main";
import Errror from "../../404/Errror";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<Errror></Errror>,
        children: [
            {
                path: "/home",
                element:<Home></Home> ,
            },
            {
                path: "/courses",
                loader: () => fetch('http://localhost:5000/courses'),
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
            {
                path: "/signin",
                element:<Signin></Signin> ,
            }
        ]
    }
])