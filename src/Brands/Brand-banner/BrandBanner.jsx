const BrandBanner = () => {
    return (
        // <div className="hero min-h-screen" >
        //     <div className="hero-overlay bg-opacity-80"></div>
        // </div>

        <div className="carousel w-full" >
            <div id="slide1" className="carousel-item flex-col md:flex-row px-3 relative w-full gap-5 justify-around items-center">
                <img src={'https://i.ibb.co/MpPQKdJ/pngwing-com-23.png" '} className="w-1/2 lg:h-[500px]" />
                <div className="flex-1 space-y-4 ">
                    <h2 className="font-bold lg:text-4xl md:text-4xl text-xl leading-tight ">Limited Time Offer: Enjoy a 20% Discount!</h2>
                    <p className="font-medium text-[#000] pr-8">🕒 Act fast - this amazing deal wont last forever. Do not miss out on the opportunity to grab high-quality [Product/Service] at an unbeatable price.</p>
                    <div className="flex gap-3">
                        <button className="btn bg-purple-600 text-white">Buy Now</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5  top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item flex-col-reverse md:flex-row px-3 relative gap-5 justify-around items-center w-full">
                <div className="flex-1 space-y-4 md:text-right text-left">
                    <h2 className="font-bold lg:text-4xl md:text-4xl text-xl leading-tight "> Get ready to upgrade your Product experience with an exclusive 20% discount! 🛒</h2>
                    <p className="font-medium text-[#000] pr-8 md:pr-0 md:pl-8 lg:pr-0">🚀 Elevate your [mention product benefits] with this limited-time offer. Whether you are a [describe your target audience] or simply looking for [mention a key feature], this is your chance to save big.</p>
                    <div className="flex gap-3 md:justify-end">
                        <button className="btn bg-purple-600 text-white">Buy Now</button>
                    </div>
                </div>
                <img src={'https://i.ibb.co/NY0BGGV/pngwing-com-2.png'} className="w-1/2 lg:h-[600px]" />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item flex-col md:flex-row px-3 gap-5 relative w-full justify-around items-center">
                <img src={'https://i.ibb.co/m87RqDm/pngwing-com-8.png'} className="w-1/2 lg:h-[500px]" />
                <div className="flex-1 space-y-4 text-left">
                    <h2 className="font-bold md:text-4xl lg:text-4xl text-xl leading-tight ">It is time to celebrate with an exclusive 20% discount on Product</h2>
                    <p className="font-medium text-[#000] pr-8">🚀 Elevate your [mention product benefits]
                        and experience the ultimate in [your industry] at an unbeatable
                        price. This is your chance to indulge in quality, style, and savings, all in one place.</p>
                    <div className="flex gap-3">
                    <button className="btn bg-purple-600 text-white">Buy Now</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>

    );
};

export default BrandBanner;