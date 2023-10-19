import PropTypes from 'prop-types';
import { FaEye, FaPen } from "react-icons/fa";
import { Link } from 'react-router-dom';

const DisplayApple = ({ apple }) => {
    const { _id, name, brand, price, photo, rating, type } = apple
    return (
        <div>
            <div className="  bg-base-100 shadow-xl">
                <div className="flex flex-col lg:flex-row  justify-between md:p-6 lg:p-10 p-4 items-center">
                    <img className='w-[200px] h-[200px]' src={photo} alt="" />
                    <div>
                        <h2 className='font-bold text-xl'>Name: {name}</h2>
                        <h2 className='text-lg flex gap-1'><span className='font-semibold'>Brand:</span>{brand}</h2>
                        <h2 className='text-lg flex gap-1'><span className='font-semibold'>Type:</span>{type}</h2>
                        <h2 className='text-lg flex gap-1'><span className='font-semibold'>Rating:</span>{rating}</h2>
                        <h2 className='text-lg flex gap-1'><span className='font-semibold'>Price:</span>{price}</h2>

                    </div>

                    <div className='flex flex-row mt-2 md:mt-5 lg:flex-col gap-5'>
                        <Link to={`/appleDetail/${_id}`}>
                            <button className='btn bg-orange-100 font-bold'><FaEye className='text-lg'></FaEye></button>
                        </Link>
                        <Link to={`/updateApple/${_id}`}>
                            <button className='btn bg-blue-400 text-white font-bold'><FaPen className='text-lg'></FaPen> </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

DisplayApple.propTypes = {
    apple: PropTypes.object
};

export default DisplayApple;

