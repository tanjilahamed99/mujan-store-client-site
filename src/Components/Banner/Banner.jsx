const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/p43bQh3/toni-lluch-Jo-Roy500n-Cc-unsplash.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content justify-center text-neutral-content">
                <div className=" w-1/2  text-white">
                    <div className="mb-3">
                        <p>Top Trending</p>
                        <hr className="border-2 w-[90px] mt-1 " />
                    </div>
                    <h1 className="mb-5 text-5xl font-bold">Welcome to <span className="text-blue-200">Mujan</span> shop</h1>
                    <p className="mb-5">Welcome, dear customers! We are thrilled to have you here. It is discount season, and we 
                    are offering fantastic deals on a wide range of products. Do not miss out on the savings – 
                    shop with us today!</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
                <div className="w-1/2">
                    <img className="w-full" src="https://i.ibb.co/w4k0kyC/pngwing-com-3.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;