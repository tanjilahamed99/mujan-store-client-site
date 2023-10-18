import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Brand = () => {

    const [brands, setBrands] = useState([])
    useEffect(() => {
        fetch('brand.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])

    return (
        <div className="my-20 container mx-auto">
            <p className="text-center text-lg font-medium">--brands--</p>
            <h2 className="text-center text-2xl font-extrabold "> Our Top brands</h2>

            <div className="grid grid-cols-3 items-center gap-10 w-[80%] mx-auto">
                {
                    brands.map((brand, idx) =>
                        <Link to={`/brand/${brand.name}`} key={idx}>
                            <div className="shadow-lg hover:shadow-xl text-center p-10 mx-auto">
                                <img className="w-[200px] h-[200px] mx-auto"
                                    src={brand.image} alt="" />
                                <h2 className="font-bold text-2xl mt-2 ">{brand.name}</h2>
                            </div>
                        </Link>)
                }
            </div>
        </div>
    );
};

export default Brand;