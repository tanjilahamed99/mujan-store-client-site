import { useLoaderData } from "react-router-dom";
import BrandBanner from "../Brand-banner/BrandBanner";
import Navbar from "../../SharedPages/Navbar/Navbar";
import DisplayIntel from "./DisplayIntel";

const Intel = () => {
    const loadData = useLoaderData()
    return (
        <div>
            <Navbar></Navbar>
            <BrandBanner></BrandBanner>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 container mx-auto">
                {
                    loadData.map(intel => <DisplayIntel key={intel._id} intel={intel}></DisplayIntel>)
                }
            </div>
        </div>
    );
};

export default Intel;