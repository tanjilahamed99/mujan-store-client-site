import { useLoaderData } from "react-router-dom";
import BrandBanner from "../Brand-banner/BrandBanner";
import DisplayApple from "./DisplayApple";
import Navbar from "../../SharedPages/Navbar/Navbar";

const Apple = () => {

    const loadData = useLoaderData()
    console.log(loadData)

    return (
        <div>
            <Navbar></Navbar>
            <BrandBanner></BrandBanner>
            <div className="grid grid-cols-2 items-center gap-5 container mx-auto">
                {
                    loadData.map(apple => <DisplayApple key={apple._id} apple={apple}></DisplayApple>)
                }
            </div>
        </div>
    );
};

export default Apple;