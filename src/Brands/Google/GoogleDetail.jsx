import { useContext } from "react";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import { FaArrowAltCircleLeft, FaStarHalfAlt } from "react-icons/fa";
import Rating from "react-rating";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const GoogleDetail = () => {

    const { name, brand, price, photo, rating, type, desc } = useLoaderData()

    const { user } = useContext(AuthContext)

    const handleAddCart = (name, brand, price, photo, rating, type, desc) => {

        const addCart = { name, brand, price, photo, rating, type, desc, email: user?.email }

        fetch('https://mujan-store-server-site-3w2dpawqk-tanjil-ahameds-projects.vercel.app/cart', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addCart)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire(
                        'Good job!',
                        'successful added to cart!',
                        'success'
                    )
                }
            })

    }

    return (
        <div>
            <Link className="pl-10 " to={'/google'}><button className="btn my-5 btn-outline">
                <FaArrowAltCircleLeft className="text-lg"></FaArrowAltCircleLeft>
                Go back</button></Link>
            <div className="bg-base-100 w-fit shadow-xl gap-10 mx-auto rounded-lg">
                <div className="flex flex-col md:flex-row gap-5 p-5 md:p-10 justify-center my-20 items-center">
                    <img className='w-[300px] h-[300px]' src={photo} alt="" />
                    <div className="lg:ml-5 space-y-2">
                        <h2 className='font-bold text-2xl'>Name: {name}</h2>
                        <h2 className='text-lg flex gap-1'><span className='font-semibold'>Brand:</span>{brand}</h2>
                        <h2 className='text-lg flex gap-1'><span className='font-semibold'>Type:</span>{type}</h2>
                        <Rating
                        className="text-yellow-500"
                            placeholderRating={rating}
                            emptySymbol={<AiOutlineStar className='text-xl'></AiOutlineStar>}
                            placeholderSymbol={<AiTwotoneStar className='text-xl'></AiTwotoneStar>}
                            fullSymbol={<FaStarHalfAlt className='text-xl'></FaStarHalfAlt>}
                        />
                        <h2 className='text-lg flex gap-1'><span className='font-semibold'>Price:</span>{price}</h2>
                        <button onClick={() => handleAddCart(name, brand, price, photo, rating, type)} className="btn btn-outline">Add to cart</button>
                    </div>
                </div>
                <div className="text-center space-y-2 pb-20">
                    <h2 className="font-bold text-2xl">short description</h2>
                    <p className="lg:mx-52">{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default GoogleDetail;