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
    {
        path: '/google',
        element: <Google></Google>,
        loader: () => fetch(`http://localhost:5000/google`)
    },
    {
        path: '/samsung',
        element: <Samsung></Samsung>,
        loader: () => fetch(`http://localhost:5000/samsung`)
    },
    {
        path: '/intel',
        element: <Intel></Intel>,
        loader: () => fetch(`http://localhost:5000/intel`)
    },
    {
        path: '/mi',
        element: <Mi></Mi>,
        loader: () => fetch(`http://localhost:5000/mi`)
    },
    {
        path: '/sony',
        element: <Sony></Sony>,
        loader: () => fetch(`http://localhost:5000/sony`)
    },


])

export default Router;