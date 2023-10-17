import { Link } from "react-router-dom";

const Brand = () => {
    return (
        <div className="my-20 container mx-auto">
            <p className="text-center text-lg font-medium">--brands--</p>
            <h2 className="text-center text-2xl font-extrabold "> Our Top brands</h2>

            <div className="grid grid-cols-3 items-center gap-10 w-[80%] mx-auto">
                {/* apple */}
                <Link to={'/apple'}>
                    <div className="shadow-lg hover:shadow-xl text-center p-10 mx-auto">
                        <img className="w-[200px] h-[200px] mx-auto"
                            src="https://i.ibb.co/PQVxqYK/pngwing-com-6.png" alt="" />
                        <h2 className="font-bold text-2xl mt-2 ">Apple</h2>
                    </div>
                </Link>
                <div className="shadow-lg hover:shadow-xl text-center  p-10 mx-auto">
                    <img className="w-[200px] h-[200px] mx-auto"
                        src="https://i.ibb.co/ZGknsNg/pngwing-com-5.png" alt="" />
                    <h2 className="font-bold text-2xl mt-2 ">Google</h2>
                </div>
                <div className="shadow-lg hover:shadow-xl text-center  p-10 mx-auto">
                    <img className="w-[200px] h-[200px] mx-auto"
                        src="https://i.ibb.co/Sfgs79w/pngwing-com-7.png" alt="" />
                    <h2 className="font-bold text-2xl mt-2 ">Samsung</h2>
                </div>
                <div className="shadow-lg hover:shadow-xl text-center  p-10 mx-auto">
                    <img className="w-[200px] h-[200px] mx-auto"
                        src="https://i.ibb.co/pn27fG6/pngwing-com-8.png" alt="" />
                    <h2 className="font-bold text-2xl mt-2 ">Sony</h2>
                </div>
                <div className="shadow-lg hover:shadow-xl text-center  p-10 mx-auto">
                    <img className="w-[200px] h-[200px] mx-auto"
                        src="https://i.ibb.co/bb48SgD/pngwing-com-9.png" alt="" />
                    <h2 className="font-bold text-2xl mt-2 ">Intel</h2>
                </div>
                <div className="shadow-lg hover:shadow-xl text-center  p-10 mx-auto">
                    <img className="w-[200px] h-[200px] mx-auto"
                        src="https://i.ibb.co/gtx5dkL/pngwing-com-10.png" alt="" />
                    <h2 className="font-bold text-2xl mt-2 ">Mi</h2>
                </div>
            </div>

        </div>
    );
};

export default Brand;