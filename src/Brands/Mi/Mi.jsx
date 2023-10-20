import BrandBanner from "../Brand-banner/BrandBanner";
import { useLoaderData } from "react-router-dom";
import Navbar from "../../SharedPages/Navbar/Navbar";
import DisplayMi from "./DisplayMi";
const Mi = () => {
    const loadData = useLoaderData()
    return (
        <div>
            <Navbar></Navbar>
            <BrandBanner></BrandBanner>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 container mx-auto">
                {
                    loadData.map(mi => <DisplayMi key={mi._id} mi={mi}></DisplayMi>)
                }
            </div>
        </div>
    );
};

export default Mi;