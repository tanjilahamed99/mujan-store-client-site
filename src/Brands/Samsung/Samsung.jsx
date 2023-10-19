import { useLoaderData } from "react-router-dom";
import Navbar from "../../SharedPages/Navbar/Navbar";
import BrandBanner from "../Brand-banner/BrandBanner";
import DisplaySamsung from "./DisplaySamsung";

const Samsung = () => {

    const loadData = useLoaderData()

    return (
        <div>
            <Navbar></Navbar>
            <BrandBanner></BrandBanner>
            <div className="grid md:grid-cols-2 items-center gap-5 container mx-auto">
                {
                    loadData.map(samsung => <DisplaySamsung key={samsung._id} samsung={samsung}></DisplaySamsung>)
                }
            </div>
        </div>
    );
};

export default Samsung;