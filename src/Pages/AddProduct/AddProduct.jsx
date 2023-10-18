const AddProduct = () => {


    const handleAddProduct = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const brand = form.brand.value
        const price = form.price.value
        const photo = form.photo.value
        const type = form.type.value
        const rating = form.rating.value
        const newProduct = { name, brand, price, photo, rating, type }
        console.log(newProduct)


    }

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url()' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content">
                <div className=" w-[50%] p-10 mx-auto  text-neutral-content">
                    <h2 className="text-center text-3xl font-bold mt-10 text-white">Add Product</h2>
                    <p className="text-center px-[40px] mt-3 text-white">When you add any product to your cart on our digital shop website, you will experience a seamless shopping journey.</p>
                    <form onSubmit={handleAddProduct} className="grid gap-5 justify-center grid-cols-2 mx-auto  mt-10">
                        <div>
                            <h2>Name</h2>
                            <input required name="name" type="text" placeholder="Iphone" className="input text-black input-bordered w-full " />
                        </div>
                        <div>
                            <h2>Brand</h2>
                            <input required name="brand" type="text" placeholder="Apple" className="input text-black input-bordered w-full " />
                        </div>
                        <div>
                            <h2>Price</h2>
                            <input required type="text" name="price" placeholder="1000" className="input text-black input-bordered w-full " />
                        </div>
                        <div>
                            <h2>Type</h2>
                            <input required name="type" type="text" placeholder="Mobile" className="input text-black input-bordered w-full " />
                        </div>
                        <div>
                            <h2>Rating</h2>
                            <input required name="rating" type="text" placeholder="5" className="input text-black input-bordered w-full " />
                        </div>
                        <div className="col-span-2">
                            <h2>image URL</h2>
                            <input required name="photo" type="text" placeholder="https:" className="input text-black input-bordered w-full " />
                        </div>
                        <button className="btn col-span-2 btn-accent">Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;