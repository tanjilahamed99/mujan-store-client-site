import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const UpdateSamsung = () => {

    const { _id, name, brand, price, photo, rating, type } = useLoaderData()

    const handleAddProduct = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const brand = form.brand.value
        const price = form.price.value
        const photo = form.photo.value
        const type = form.type.value
        const rating = form.rating.value
        const updateProduct = { name, brand, price, photo, rating, type }
        console.log(updateProduct)


        fetch(`http://localhost:5000/samsung/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }


    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url()' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content">

                <div className=" w-[80%] p-10 mx-auto  text-neutral-content">
                    <Link className="pl-10 " to={'/samsung'}><button className="btn my-5 btn-outline">
                        <FaArrowAltCircleLeft className="text-lg"></FaArrowAltCircleLeft>
                        Go back</button></Link>
                    <h2 className="text-center text-3xl font-bold mt-10 text-white">Update</h2>
                    <p className="text-center px-[40px] mt-3 text-white">When you Update any product to your cart on our digital shop website, you will experience a seamless shopping journey.</p>
                    <form onSubmit={handleAddProduct} className="grid gap-5 justify-center grid-cols-2 mx-auto  mt-10">
                        <div>
                            <h2>Name</h2>
                            <input required defaultValue={name} name="name" type="text" placeholder="Iphone" className="input text-black input-bordered w-full " />
                        </div>
                        <div>
                            <h2>Brand</h2>
                            <input required defaultValue={brand} name="brand" type="text" placeholder="Apple" className="input text-black input-bordered w-full " />
                        </div>
                        <div>
                            <h2>Price</h2>
                            <input required defaultValue={price} type="text" name="price" placeholder="1000" className="input text-black input-bordered w-full " />
                        </div>
                        <div>
                            <h2>Type</h2>
                            <input required defaultValue={type} name="type" type="text" placeholder="Mobile" className="input text-black input-bordered w-full " />
                        </div>
                        <div>
                            <h2>Rating</h2>
                            <input required defaultValue={rating} name="rating" type="text" placeholder="5" className="input text-black input-bordered w-full " />
                        </div>
                        <div className="">
                            <h2>image URL</h2>
                            <input required defaultValue={photo} name="photo" type="text" placeholder="https:" className="input text-black input-bordered w-full " />
                        </div>
                        <button className="btn col-span-2 btn-accent">Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateSamsung;