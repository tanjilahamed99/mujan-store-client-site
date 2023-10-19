import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineFileProtect,AiOutlineVerified } from "react-icons/ai";
import { FcMoneyTransfer } from "react-icons/fc";

const Trust = () => {
    return (
        <div className="my-20 grid grid-cols-1 px-3 justify-center items-center md:grid-cols-2 gap-5 lg:grid-cols-4 container mx-auto">
            <div className="bg-pink-50 p-10 lg:p-5 xl:p-10   text-center rounded-lg shadow-md">
                <TbTruckDelivery className="text-5xl mx-auto"> </TbTruckDelivery>
                <h3 className="font-bold my-2 text-xl">Free Shipping</h3>
                <p className="text-lg">Enjoy free delivery on all orders – shop hassle-free today!</p>
            </div>
            <div className="bg-emerald-50  p-10 lg:p-5 xl:p-10 text-center rounded-lg shadow-md">
                <FcMoneyTransfer className="text-5xl mx-auto"> </FcMoneyTransfer>
                <h3 className="font-bold my-2 text-xl">Free Return</h3>
                <p className="text-lg">Enjoy hassle-free returns on all purchases  shopping experience.</p>
            </div>
            <div className="bg-blue-100 p-10 lg:p-5 xl:p-10 text-center rounded-lg shadow-md">
                <AiOutlineFileProtect className="text-5xl mx-auto"></AiOutlineFileProtect>
                <h3 className="font-bold my-2 text-xl">100%  Secured</h3>
                <p className="text-lg">Rest easy, your payment is securely protected with our system.</p>
            </div>
            <div className="bg-orange-100 p-10 lg:p-5 xl:p-10 text-center rounded-lg shadow-md">
                <AiOutlineVerified className="text-5xl mx-auto"></AiOutlineVerified>
                <h3 className="font-bold my-2 text-xl">100% Guarantee</h3>
                <p className="text-lg">Our product comes with a 100%  guarantee for your peace.</p>
            </div>
        </div>
    );
};

export default Trust;