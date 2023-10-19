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
            {
                cartData.length > 0 ? <div className="grid items-center md:gap-10 container mx-auto  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
                    {
                        cartData?.map(cart => <DisplayCart cartData={cartData} setCartData={setCartData} key={cart._id} cart={cart}></DisplayCart>)
                    }
                </div> : <h2 className=" text-3xl text-center mt-[170px]">No data added</h2>
            }

        </div>
    );
};

export default MyCart;