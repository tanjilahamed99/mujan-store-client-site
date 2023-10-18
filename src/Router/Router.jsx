import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Apple from "../Brands/Brands";
import AddProduct from "../Pages/AddProduct/AddProduct";

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
        path: '/brand/:name',
        element: <Apple></Apple>,
        loader: ({ params }) => fetch(`http://localhost:5000/${params.name}`)
    },
    {
        path: '/addproduct',
        element: <AddProduct></AddProduct>

    }

])

export default Router;