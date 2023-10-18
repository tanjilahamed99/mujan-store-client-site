import BrandBanner from "../Brand-banner/BrandBanner";
import { useLoaderData } from "react-router-dom";
import Navbar from "../../SharedPages/Navbar/Navbar";
import DisplaySony from "./DisplaySony";
const Sony = () => {
    const loadData = useLoaderData()
    return (
        <div>
        <Navbar></Navbar>
        <BrandBanner></BrandBanner>
        <div className="grid grid-cols-2 items-center gap-5 container mx-auto">
            {
                loadData.map(sony => <DisplaySony key={sony._id} sony={sony}></DisplaySony>)
            }
        </div>
    </div>
    );
};

export default Sony;