import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import Loading from "../../Loading/Loading.jsx";
import Private from "../Private/Private.jsx";

const Main = lazy(() => import("../../Layout/Main.jsx"));
const ErrorPage = lazy(() => import("../../404/Error.jsx"));
const Home = lazy(() => import("../../Home/Home.jsx"));
const Courses = lazy(() => import("../../Courses/Courses.jsx"));
const FAQ = lazy(() => import("../../FAQ/FAQ.jsx"));
const Blogs = lazy(() => import("../../Blogs/Blogs.jsx"));
const SignUp = lazy(() => import("../../SignUp/SignUp.jsx"));
const Signin = lazy(() => import("../../SignIn/Signin.jsx"));
const CategorisedCourse = lazy(() => import("../../Courses/CategorisedCourse.jsx"));
const CourseDetail = lazy(() => import("../../Courses/CourseDetail.jsx"));
const Checkout = lazy(() => import("../../Checkout/Checkout.jsx"));

const lazyElement = (Component) => (
  <Suspense fallback={<Loading />}>
    <Component />
  </Suspense>
);

export const routes = createBrowserRouter([
  {
    path: "/",
    element: lazyElement(Main),
    errorElement: lazyElement(ErrorPage),
    children: [
      {
        path: "/",
        element: lazyElement(Home),
      },
      {
        path: "/home",
        element: lazyElement(Home),
      },
      {
        path: "/courses",
        loader: () => fetch("https://e-pathshala-sarwarhridoy4.vercel.app/courses"),
        element: lazyElement(Courses),
      },
      {
        path: "/faq",
        element: lazyElement(FAQ),
      },
      {
        path: "/blogs",
        loader: () => fetch("https://e-pathshala-sarwarhridoy4.vercel.app/blogs"),
        element: lazyElement(Blogs),
      },
      {
        path: "/get-started",
        element: lazyElement(SignUp),
      },
      {
        path: "/signin",
        element: lazyElement(Signin),
      },
      {
        path: "/category/:id",
        loader: ({ params }) =>
          fetch(`https://e-pathshala-sarwarhridoy4.vercel.app/category/${params.id}`),
        element: lazyElement(CategorisedCourse),
      },
      {
        path: "/details/:id",
        loader: ({ params }) =>
          fetch(`https://e-pathshala-sarwarhridoy4.vercel.app/details/${params.id}`),
        element: lazyElement(CourseDetail),
      },
      {
        path: "/details/:id/checkout",
        loader: ({ params }) =>
          fetch(`https://e-pathshala-sarwarhridoy4.vercel.app/details/${params.id}`),
        element: <Private>{lazyElement(Checkout)}</Private>,
      },
    ],
  },
]);
