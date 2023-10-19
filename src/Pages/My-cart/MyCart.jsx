import { useLoaderData } from "react-router-dom";
import Navbar from "../../SharedPages/Navbar/Navbar";
import DisplayCart from "./DisplayCart";
import { useState } from "react";

const MyCart = () => {

    const loadCartData = useLoaderData() || []

    const [cartData, setCartData] = useState(loadCartData)

    return (
        <div>
            <Navbar></Navbar>
            <p className="text-center font-medium mt-10">--Product--</p>
            <h2 className="font-bold text-2xl text-center">My cart</h2>
            <div className="grid items-center gap-10 grid-cols-3">
                {
                    cartData?.map(cart => <DisplayCart cartData={cartData} setCartData={setCartData} key={cart._id} cart={cart}></DisplayCart>)
                }
            </div>

        </div>
    );
};

export default MyCart;