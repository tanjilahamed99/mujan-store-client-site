import PropTypes from 'prop-types';
import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai';
import { FaEye, FaPen, FaStarHalfAlt } from "react-icons/fa";
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const DisplayGoogle = ({ google }) => {
    const { _id, name, brand, price, photo, rating, type } = google
    return (
        <div>
            <div className="  bg-base-100 shadow-xl">
                <div className="flex flex-col lg:flex-row justify-between md:p-10 p-5 items-center">
                    <img className='w-[200px] h-[200px]' src={photo} alt="" />
                    <div>
                        <h2 className='font-bold text-xl'>Name: {name}</h2>
                        <h2 className='text-lg flex gap-1'><span className='font-semibold'>Brand:</span>{brand}</h2>
                        <h2 className='text-lg flex gap-1'><span className='font-semibold'>Type:</span>{type}</h2>
                        <Rating
                            placeholderRating={rating}
                            emptySymbol={<AiOutlineStar className='xl'></AiOutlineStar>}
                            placeholderSymbol={<AiTwotoneStar className='xl'></AiTwotoneStar>}
                            fullSymbol={<FaStarHalfAlt className='xl'></FaStarHalfAlt>}
                        />
                        <h2 className='text-lg flex gap-1'><span className='font-semibold'>Price:</span>{price}</h2>

                    </div>

                    <div className='flex  lg:flex-col mt-4 lg:mt-0 gap-5'>
                        <Link to={`/googleDetail/${_id}`}>
                            <button className='btn bg-orange-100 font-bold'><FaEye className='text-lg'></FaEye></button>
                        </Link>
                        <Link to={`/updateGoogle/${_id}`}>
                            <button className='btn bg-blue-400 text-white font-bold'><FaPen className='text-lg'></FaPen> </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

DisplayGoogle.propTypes = {
    google: PropTypes.object
};

export default DisplayGoogle;
