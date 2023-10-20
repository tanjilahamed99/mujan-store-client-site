import PropTypes from 'prop-types';
import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai';
import { FaEye, FaPen, FaStarHalfAlt } from "react-icons/fa";
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const DisplaySamsung = ({ samsung }) => {
    const { _id, name, brand, price, photo, rating, type } = samsung
    return (
        <div>
            <div className="  bg-base-100 shadow-xl">
                <div className="flex flex-col lg:flex-row justify-between p-10 items-center">
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

                    <div className='flex flex-row lg:flex-col mt-5 lg:mt-0 gap-5'>
                        <Link to={`/samsungDetail/${_id}`}>
                            <button className='btn bg-orange-100 font-bold'><FaEye className='text-lg'></FaEye></button>
                        </Link>
                        <Link to={`/updateSamsung/${_id}`}>
                            <button className='btn bg-blue-400 text-white font-bold'><FaPen className='text-lg'></FaPen> </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

DisplaySamsung.propTypes = {
    samsung: PropTypes.object
};

export default DisplaySamsung;