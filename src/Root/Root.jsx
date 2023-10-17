import { Outlet } from "react-router-dom";
import Navbar from "../SharedPages/Navbar/Navbar";
import Footer from "../SharedPages/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;