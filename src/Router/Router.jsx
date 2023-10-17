import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Apple from "../Brands/Apple/Apple";
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
        path: '/apple',
        element: <Apple></Apple>,
        loader: () => fetch('http://localhost:5000/iphone')
    },
    {
        path: '/addproduct',
        element: <AddProduct></AddProduct>

    }

])

export default Router;