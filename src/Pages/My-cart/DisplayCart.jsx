import PropTypes from 'prop-types';
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
                fetch(`https://mujan-store-server-site-havqq095v-tanjil-ahameds-projects.vercel.app/cart/${_id}`, {
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
        <div>
            <div className="bg-base-100 w-fit shadow-xl mx-auto rounded-lg">
                <div className=" md:p-10 p-5 md:my-20 items-center">
                    <img className='w-[300px] h-[300px]' src={photo} alt="" />
                    <div className="space-y-2">
                        <h2 className='font-bold text-2xl'>Name: {name}</h2>
                        <h2 className='text-lg flex gap-1'><span className='font-semibold'>Brand:</span>{brand}</h2>
                        <h2 className='text-lg flex gap-1'><span className='font-semibold'>Type:</span>{type}</h2>
                        <h2 className='text-lg flex gap-1'><span className='font-semibold'>Rating:</span>{rating}</h2>
                        <h2 className='text-lg flex gap-1'><span className='font-semibold'>Price:</span>{price}</h2>
                        <button onClick={() => handleDelete(_id)} className='btn w-full btn-outline'>Delate</button>
                    </div>
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