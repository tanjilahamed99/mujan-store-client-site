import BrandBanner from "../Brand-banner/BrandBanner";
import Navbar from "../../SharedPages/Navbar/Navbar";
import Footer from "../../SharedPages/Footer/Footer";
const Mi = () => {
    return (
        <div>
            <Navbar></Navbar>
            <BrandBanner></BrandBanner>

            <div className="lg:my-52 my-10 text-center space-y-3 ">
                <h1 className="font-bold text-4xl">No product available right now  </h1>
                <p className="font-medium text-xl">coming soon......</p>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Mi;