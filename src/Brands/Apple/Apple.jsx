import { useLoaderData } from "react-router-dom";
import Navbar from "../../SharedPages/Navbar/Navbar";
import BrandBanner from "../Brand-banner/BrandBanner";
import DisplayAppleProduct from "./DisplayAppleProduct";

const Apple = () => {

    const appleProducts = useLoaderData()
    console.log(appleProducts)


    return (
        <div>
            <Navbar></Navbar>
            <BrandBanner></BrandBanner>

            <div className="my-20 ">
                <p className="font-medium text-lg text-center">--Apple--</p>
                <h2 className="font-extrabold text-2xl text-center">Popular product</h2>
                <div className="grid grid-cols-3 container mx-auto gap-10 items-center justify-center">
                    {
                        appleProducts.map(apple => <DisplayAppleProduct key={apple._id} apple={apple}></DisplayAppleProduct>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Apple;