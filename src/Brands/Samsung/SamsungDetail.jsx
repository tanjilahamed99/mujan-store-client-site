import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
const SamsungDetail = () => {

    const { name, brand, price, photo, rating, type } = useLoaderData()

    return (
        <div>
            <Link className="pl-10 " to={'/samsung'}><button className="btn my-5 btn-outline">
                <FaArrowAltCircleLeft className="text-lg"></FaArrowAltCircleLeft>
                Go back</button></Link>
            <div className="bg-base-100 w-fit shadow-xl mx-auto rounded-lg">
                <div className="flex p-10 justify-center my-20 items-center">
                    <img className='w-[300px] h-[300px]' src={photo} alt="" />
                    <div>
                        <h2 className='font-bold text-2xl'>Name: {name}</h2>
                        <h2 className='text-lg flex gap-1'><span className='font-semibold'>Brand:</span>{brand}</h2>
                        <h2 className='text-lg flex gap-1'><span className='font-semibold'>Type:</span>{type}</h2>
                        <h2 className='text-lg flex gap-1'><span className='font-semibold'>Rating:</span>{rating}</h2>
                        <h2 className='text-lg flex gap-1'><span className='font-semibold'>Price:</span>{price}</h2>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SamsungDetail;