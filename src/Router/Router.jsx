import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import About from "../About/About";
import Project from "../Project/Project";
import Contact from "../Contact/Contact";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: "/project",
                element: <Project></Project>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            }
        ]
    },
]);
