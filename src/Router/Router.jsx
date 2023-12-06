import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Apple from "../Brands/Apple/Apple";
import Google from "../Brands/Google/Google";
import Samsung from "../Brands/Samsung/Samsung";
import Intel from "../Brands/Intel/Intel";
import Mi from "../Brands/Mi/Mi";
import Sony from "../Brands/Sony/Sony";
import AppleDetail from "../Brands/Apple/AppleDetail";
import UpdateApple from "../Brands/Apple/UpdateApple";
import GoogleDetail from "../Brands/Google/GoogleDetail";
import UpdateGoogle from "../Brands/Google/UpdateGoogle";
import SamsungDetail from "../Brands/Samsung/SamsungDetail";
import UpdateSamsung from "../Brands/Samsung/UpdateSamsung";
import SonyDetail from "../Brands/Sony/SonyDetail";
import IntelDetail from "../Brands/Intel/IntelDetail";
import UpdateSony from "../Brands/Sony/UpdateSony";
import UpdateIntel from "../Brands/Intel/UpdateIntel";
import MyCart from "../Pages/My-cart/MyCart";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";



const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addproduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
        ],
    },

    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/registration',
        element: <Registration></Registration>
    },

    {
        path: '/cart',
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
    },


    // apple
    {
        path: '/apple',
        element: <Apple></Apple>,
        loader: () => fetch(`http://localhost:5000/apple`)
    },
    {
        path: '/appleDetail/:id',
        element: <PrivateRoute><AppleDetail></AppleDetail></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/apple/${params.id}`)
    },
    {
        path: '/updateApple/:id',
        element: <PrivateRoute><UpdateApple></UpdateApple></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/apple/${params.id}`)
    },

    // google
    {
        path: '/google',
        element: <Google></Google>,
        loader: () => fetch(`http://localhost:5000/google`)
    },
    {
        path: '/googleDetail/:id',
        element: <PrivateRoute><GoogleDetail></GoogleDetail></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/google/${params.id}`)
    },
    {
        path: '/updateGoogle/:id',
        element: <PrivateRoute><UpdateGoogle></UpdateGoogle></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/google/${params.id}`)
    },

    // samsung
    {
        path: '/samsung',
        element: <Samsung></Samsung>,
        loader: () => fetch(`http://localhost:5000/samsung`)
    },
    {
        path: '/samsungDetail/:id',
        element: <PrivateRoute><SamsungDetail></SamsungDetail></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/samsung/${params.id}`)
    },
    {
        path: '/updateSamsung/:id',
        element: <PrivateRoute><UpdateSamsung></UpdateSamsung></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/samsung/${params.id}`)
    },



    // intel
    {
        path: '/intel',
        element: <Intel></Intel>,
        loader: () => fetch(`http://localhost:5000/intel`)
    },
    {
        path: '/intelDetail/:id',
        element: <PrivateRoute><IntelDetail></IntelDetail></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/intel/${params.id}`)
    },
    {
        path: '/UpdateIntel/:id',
        element: <PrivateRoute><UpdateIntel></UpdateIntel></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/intel/${params.id}`)
    },

    // sony
    {
        path: '/sony',
        element: <Sony></Sony>,
        loader: () => fetch(`http://localhost:5000/sony`)
    },
    {
        path: '/sonyDetail/:id',
        element: <PrivateRoute><SonyDetail></SonyDetail></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/sony/${params.id}`)
    },
    {
        path: '/UpdateSony/:id',
        element: <PrivateRoute><UpdateSony></UpdateSony></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/sony/${params.id}`)
    },

    {
        path: '/mi',
        element: <Mi></Mi>
    },
])

export default Router;