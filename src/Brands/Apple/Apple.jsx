import { useLoaderData } from "react-router-dom";
import BrandBanner from "../Brand-banner/BrandBanner";
import DisplayApple from "./DisplayApple";
import Navbar from "../../SharedPages/Navbar/Navbar";

const Apple = () => {

    const loadData = useLoaderData()

    return (
        <div className="">
            <Navbar></Navbar>
            <BrandBanner></BrandBanner>
            <p className="text-center font-medium">-- Apple --</p>
            <h2 className="text-center font-bold text-2xl">Popular Product</h2>
            <div className="grid grid-cols-2 items-center gap-5 container mx-auto">
                {
                    loadData.map(apple => <DisplayApple key={apple._id} apple={apple}></DisplayApple>)
                }
            </div>
        </div>
    );
};

export default Apple;