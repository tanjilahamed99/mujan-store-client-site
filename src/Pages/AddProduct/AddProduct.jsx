import Swal from "sweetalert2";

const AddProduct = () => {


    const handleAddProduct = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const brand = form.brand.value
        const price = form.price.value
        const photo = form.photo.value
        const desc = form.desc.value
        const type = form.type.value
        const rating = form.rating.value
        const newProduct = { name, brand, price, photo, rating, type, desc }
        console.log(newProduct)

        fetch(`https://mujan-store-server-site-3w2dpawqk-tanjil-ahameds-projects.vercel.app/${brand}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire(
                        'success!',
                        'successful added product.',
                        'success'
                    )
                }
            })
    }

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/TKf5SkS/sean-oulashin-KMn4-VEe-EPR8-unsplash.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content">
                <div className=" w-[100%] md:w-[60%] lg:p-10 mx-auto  text-neutral-content">
                    <h2 className="text-center text-3xl font-bold mt-10 text-white">Add Product</h2>
                    <p className="text-center md:px-[40px] mt-3 text-white">When you add any product to your cart on our digital shop website, you will experience a seamless shopping journey.</p>
                    <form onSubmit={handleAddProduct} className=" gap-5  mx-auto mt-10 space-y-4">
                        <div className="">
                            <h2>Name</h2>
                            <input required name="name" type="text" placeholder="Iphone" className="input text-black input-bordered w-full " />
                        </div>
                        <div className="">
                            <h2>Brand</h2>
                            <select name="brand" className="select select-bordered w-full text-black ">
                                <option className="text-black" disabled selected>select brand</option>
                                <option className="text-black">apple</option>
                                <option className="text-black">google</option>
                                <option className="text-black">sony</option>
                                <option className="text-black">intel</option>
                                <option className="text-black">samsung</option>
                            </select>
                        </div>
                        <div className="">
                            <h2>Price</h2>
                            <input required type="text" name="price" placeholder="1000" className="input text-black input-bordered w-full " />
                        </div>
                        <div className="">
                            <h2>Type</h2>
                            <input required name="type" type="text" placeholder="Mobile" className="input text-black input-bordered w-full " />
                        </div>
                        <div className="">
                            <h2>Rating</h2>
                            <input required name="rating" type="text" placeholder="5" className="input text-black input-bordered w-full " />
                        </div>
                        <div className="">
                            <h2>image URL</h2>
                            <input required name="photo" type="text" placeholder="https:" className="input text-black input-bordered w-full " />
                        </div>
                        <div className="">
                            <h2>short description</h2>
                            <textarea className="textarea textarea-bordered w-full text-black" placeholder="description"></textarea>
                        </div>
                        <button className="btn col-span-2 btn-accent w-full">Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;