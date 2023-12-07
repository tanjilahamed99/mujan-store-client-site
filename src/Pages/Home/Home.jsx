import Banner from "../../Components/Banner/Banner";
import Brand from "../../Components/Brand/Brand";
import NewArrival from "../../Components/New-arrival/NewArrrival";
import Trust from "../../Components/Trust/Trust";
import NewsLatter from "../NewsLatter/NewsLatter";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Trust></Trust>
            <Brand></Brand>
            <NewArrival></NewArrival>
            <NewsLatter></NewsLatter>
        </div>
    );
};

export default Home;