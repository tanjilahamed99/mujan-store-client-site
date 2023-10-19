import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center">
            <Link to={'/'}><button className="btn btn-outline ml-10 mt-4">
                <FaArrowAltCircleLeft className="text-xl"></FaArrowAltCircleLeft>
                Go back</button></Link>
            <img className="h-[600px]" src="https://i.ibb.co/sqDDgjy/404.gif" alt="" />
        </div >
    );
};

export default ErrorPage;