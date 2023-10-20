import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import { FaArrowAltCircleLeft, FaStarHalfAlt } from "react-icons/fa";
import Rating from "react-rating";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const SonyDetail = () => {

    const { name, brand, price, photo, rating, type } = useLoaderData()


    const handleAddCart = (name, brand, price, photo, rating, type) => {

        const addCart = { name, brand, price, photo, rating, type }
        console.log(addCart)

        fetch('https://mujan-store-server-site-havqq095v-tanjil-ahameds-projects.vercel.app/cart', {
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
            <Link className="pl-10 " to={'/sony'}><button className="btn my-5 btn-outline">
                <FaArrowAltCircleLeft className="text-lg"></FaArrowAltCircleLeft>
                Go back</button></Link>
            <div className="bg-base-100 w-fit shadow-xl mx-auto rounded-lg">
                <div className="flex flex-col md:flex-row gap-5 p-10 justify-center my-20 items-center">
                    <img className='w-[300px] h-[300px]' src={photo} alt="" />
                    <div>
                        <h2 className='font-bold text-2xl'>Name: {name}</h2>
                        <h2 className='text-lg flex gap-1'><span className='font-semibold'>Brand:</span>{brand}</h2>
                        <h2 className='text-lg flex gap-1'><span className='font-semibold'>Type:</span>{type}</h2>
                        <Rating
                            placeholderRating={rating}
                            emptySymbol={<AiOutlineStar className='xl'></AiOutlineStar>}
                            placeholderSymbol={<AiTwotoneStar className='xl'></AiTwotoneStar>}
                            fullSymbol={<FaStarHalfAlt className='xl'></FaStarHalfAlt>}
                        />
                        <h2 className='text-lg flex gap-1'><span className='font-semibold'>Rating:</span>{rating}</h2>
                        <h2 className='text-lg flex gap-1'><span className='font-semibold'>Price:</span>{price}</h2>
                        <button onClick={() => handleAddCart(name, brand, price, photo, rating, type)} className="btn">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SonyDetail;