import { useLoaderData } from "react-router-dom";
import BrandBanner from "../Brand-banner/BrandBanner";
import Navbar from "../../SharedPages/Navbar/Navbar";
import DisplayGoogle from "./DisplayGoogle";

const Google = () => {

    const loadData = useLoaderData()

    return (
        <div>
            <Navbar></Navbar>
            <BrandBanner></BrandBanner>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 container mx-auto">
                {
                    loadData.map(google => <DisplayGoogle key={google._id} google={google}></DisplayGoogle>)
                }
            </div>
        </div>
    );
};

export default Google;