import Main from "../../Layout/Main";
import Blog from "../../Pages/Home/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Details from "../../Pages/Home/Places/Details";
import Review from "../../Pages/Home/Places/Review";
import SeeAll from "../../Pages/Home/Places/SeeAll";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import SignUp from "../../Pages/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/seeAll',
                element: <SeeAll></SeeAll>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/place/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`http://localhost:5000/places/${params.id}`)
            },
            {
                path: '/review/:id',
                element: <Review></Review>,
                loader: ({ params }) => fetch(`http://localhost:5000/places/${params.id}`)
            },
            {
                path: '/review',
                element: <MyReviews></MyReviews>
            }


        ]

    }
])

export default router;