import { createBrowserRouter } from "react-router-dom";
import Blogs from "../../Blogs/Blogs";
import Courses from "../../Courses/Courses";
import SignUp from "../../SignUp/SignUp";
import Signin from "../../SignIn/Signin";
import FAQ from "../../FAQ/FAQ";
import Home from "../../Home/Home";
import Main from "../../Layout/Main";
import Errror from "../../404/Errror";
import CourseDetail from "../../Courses/CourseDetail";
import Course from "../../Courses/Course";

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
                loader: () => fetch('https://e-pathshala-ochre.vercel.app/courses'),
                element:<Courses></Courses> ,
            },
            {
                path: "/faq",
                element:<FAQ></FAQ> ,
            },
            {
                path: "/blogs",
                loader: () => fetch('https://e-pathshala-ochre.vercel.app/blogs'),
                element:<Blogs></Blogs> ,
            },
            {
                path: "/get-started",
                element:<SignUp></SignUp> ,
            },
            {
                path: "/signin",
                element:<Signin></Signin> ,
            },
            {
                path: "/category/:id",
                loader:({params})=> fetch(`https://e-pathshala-ochre.vercel.app/category/${params.id}`),
                element:<Course></Course> ,
            },
            {
                path: "/details/:id",
                loader:({params})=> fetch(`https://e-pathshala-ochre.vercel.app/details/${params.id}`),
                element:<CourseDetail></CourseDetail> ,
            },
        ]
    }
])