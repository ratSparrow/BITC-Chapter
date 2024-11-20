import { createBrowserRouter } from "react-router-dom";
import About from "../components/static/About";
import MainLayout from "../layout/MainLayout";
import Contact from "../components/static/Contact";
import Blog from "../components/static/Blog";
import Login from "../components/login/Login";
import SignUp from "../components/login/SignUp";
import Homepage from "../components/homepage/Homepage";

const router = createBrowserRouter([
    {
      path:"/",
      element:<MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<Homepage></Homepage>
        },
        {
            path:"/about",
            element:<About></About>
        },
        {
            path:"/contact",
            element:<Contact></Contact>
        },
        {
            path:"/blog",
            element:<Blog></Blog>
        },
      ]
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/sign-up',
        element:<SignUp></SignUp>
    },
    
  ]);

export default router