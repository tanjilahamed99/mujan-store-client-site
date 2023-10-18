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

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ],
    },
    {
        path: '/addproduct',
        element: <AddProduct></AddProduct>

    },

    // apple
    {
        path: '/apple',
        element: <Apple></Apple>,
        loader: () => fetch(`http://localhost:5000/apple`)
    },
    {
        path: '/appleDetail/:id',
        element: <AppleDetail></AppleDetail>,
        loader: ({ params }) => fetch(`http://localhost:5000/apple/${params.id}`)
    },
    {
        path: '/updateApple/:id',
        element: <UpdateApple></UpdateApple>,
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
        element: <GoogleDetail></GoogleDetail>,
        loader: ({ params }) => fetch(`http://localhost:5000/google/${params.id}`)
    },
    {
        path: '/updateGoogle/:id',
        element: <UpdateGoogle></UpdateGoogle>,
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
        element: <SamsungDetail></SamsungDetail>,
        loader: ({ params }) => fetch(`http://localhost:5000/samsung/${params.id}`)
    },
    {
        path: '/updateSamsung/:id',
        element: <UpdateSamsung></UpdateSamsung>,
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
        element: <IntelDetail></IntelDetail>,
        loader: ({ params }) => fetch(`http://localhost:5000/intel/${params.id}`)
    },
    {
        path: '/UpdateIntel/:id',
        element: <UpdateIntel></UpdateIntel>,
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
        element: <SonyDetail></SonyDetail>,
        loader: ({ params }) => fetch(`http://localhost:5000/sony/${params.id}`)
    },
    {
        path: '/UpdateSony/:id',
        element: <UpdateSony></UpdateSony>,
        loader: ({ params }) => fetch(`http://localhost:5000/sony/${params.id}`)
    },



    {
        path: '/mi',
        element: <Mi></Mi>,
        loader: () => fetch(`http://localhost:5000/mi`)
    }


])

export default Router;