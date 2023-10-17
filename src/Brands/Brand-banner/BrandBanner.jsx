const BrandBanner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content  text-neutral-content">
                <img src="https://i.ibb.co/MpPQKdJ/pngwing-com-23.png" alt="" />
                <div className="text-white">
                    <h1 className="mb-5 text-5xl font-bold">20% Discount for every product</h1>
                    <p className="mb-5">Discover irresistible discounts on a wide range of products. Shop now to save big and make the most of these incredible deals. Do not miss out</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default BrandBanner;