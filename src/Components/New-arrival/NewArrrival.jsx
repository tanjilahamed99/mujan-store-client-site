const NewArrival = () => {
    return (
        <div>
            <p className="font-medium text-center text-lg">-- Latest --</p>
            <h2 className="font-bold text-2xl text-center">New Arrival</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 px-3 lg:grid-cols-4 gap-5 items-center justify-center container mx-auto my-10 '>
                <div className="shadow-md p-3 hover:shadow-xl shadow-slate-300">
                    <img className="w-[300px] h-[300px]" src="https://i.ibb.co/LtvPmxr/Samsung-Galaxy-S23-Ultra.png" alt="" />
                </div>
                <div className="shadow-md p-3 hover:shadow-xl shadow-slate-300">
                    <img className="w-[300px] h-[300px]" src="https://i.ibb.co/qYFzG7Q/GA03923-GB-1-Supersize-1.png" alt="" />
                </div>
                <div className="shadow-md p-3 hover:shadow-xl shadow-slate-300">
                    <img className="w-[300px] h-[300px]" src="https://i.ibb.co/cQK8s6T/download.png" alt="" />
                </div>
                <div className="shadow-md p-3 hover:shadow-xl shadow-slate-300">
                    <img className="w-[300px] h-[300px]" src="https://i.ibb.co/47rDLSh/pngwing-com-13.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default NewArrival;