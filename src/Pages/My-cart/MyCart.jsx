import Navbar from "../../SharedPages/Navbar/Navbar";
import DisplayCart from "./DisplayCart";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SectionBanner from "../../SharedPages/sectionBanner/SectionBanner";

const MyCart = () => {

    const { user } = useContext(AuthContext)

    const [cartData, setCartData] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/cart/${user?.email}`,)
            .then(res => setCartData(res.data))
    }, [user])


    return (
        <div>
            <Navbar></Navbar>
            <SectionBanner tittle={'My Cart'}></SectionBanner>
            {
                cartData.length > 0 ? <div className="grid mt-10 items-center md:gap-10 container mx-auto  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
                    {
                        cartData?.map(cart => <DisplayCart cartData={cartData} setCartData={setCartData} key={cart._id} cart={cart}></DisplayCart>)
                    }
                </div> : <h2 className=" text-3xl text-center mt-[170px]">No data added</h2>
            }

        </div>
    );
};

export default MyCart;