import PropTypes from 'prop-types';
import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai';
import { FaStarHalfAlt } from 'react-icons/fa';
import Rating from 'react-rating';
import Swal from 'sweetalert2';

const DisplayCart = ({ cart, setCartData, cartData }) => {

    const { _id, name, brand, price, photo, rating, type } = cart

    const handleDelete = _id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://mujan-store-server-site-3w2dpawqk-tanjil-ahameds-projects.vercel.app/cart/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your cart has been deleted.',
                                'success'
                            )
                        }
                        const remaining = cartData.filter(cart => cart._id !== _id)
                        setCartData(remaining)
                    })
            }
        })
    }



    return (
            <div className="bg-base-100  shadow-xl mx-auto rounded-lg border ">
                <div className="p-10  items-center">
                    <img className='w-[300px] h-[300px]' src={photo} alt="" />
                    <div className="space-y-3 mt-3">
                        <h2 className='font-bold text-2xl'>Name: {name}</h2>
                        <div className='flex justify-between'>
                            <h2 className='text-lg flex gap-1'><span className='font-semibold'>Brand:</span>{brand}</h2>
                            <h2 className='text-lg flex gap-1'><span className='font-bold '>Type:</span>{type}</h2>
                        </div>
                        <Rating
                            className='text-yellow-400'
                            placeholderRating={rating}
                            emptySymbol={<AiOutlineStar className='text-2xl'></AiOutlineStar>}
                            placeholderSymbol={<AiTwotoneStar className='text-2xl'></AiTwotoneStar>}
                            fullSymbol={<FaStarHalfAlt className='text-2xl'></FaStarHalfAlt>}
                        />

                        <h2 className='text-lg flex gap-1'><span className='font-semibold'>Price:</span>${price}</h2>
                        <button onClick={() => handleDelete(_id)} className='btn w-full btn-outline text-red-600'>Delate</button>
                    </div>
                </div>
            </div>
    );
};

DisplayCart.propTypes = {
    cart: PropTypes.object,
    setCartData: PropTypes.func,
    cartData: PropTypes.array
};

export default DisplayCart;