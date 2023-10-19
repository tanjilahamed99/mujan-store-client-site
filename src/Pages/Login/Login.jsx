import { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {

    const [see, setSee] = useState(false)

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        
        console.log(email,password)
    }


    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/TKf5SkS/sean-oulashin-KMn4-VEe-EPR8-unsplash.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content w-full text-center text-neutral-content">
                <div className=" w-full">
                    <div className="w-full">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold text-white">Login now!</h1>
                        </div>
                        <div className="card flex-shrink-0 w-[35%]  mx-auto mt-4 shadow-2xl bg-base-100">
                            <form onSubmit={handleLogin} className="card-body text-black">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name="password" type={see ? "text" : "password"} placeholder="password" className="input input-bordered" required />
                                    {
                                        see ? <FaEye onClick={() => setSee(!see)} className="text-black text-lg  absolute bottom-12 right-3"></FaEye> :
                                            <FaEyeSlash onClick={() => setSee(!see)} className="text-black text-lg absolute bottom-12 right-3"></FaEyeSlash>
                                    }
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <p>New here? <Link className="font-bold te" to={'/registration'}>Create account</Link></p>
                            </form>

                        </div>
                        <div className="my-5">
                            <p className="mb-3">Or</p>
                            <hr className="w-[35%] mx-auto" />
                        </div>
                        <button className="btn bg-purple-600 text-white w-[35%]">
                            <FaGoogle></FaGoogle>
                            google</button>
                    </div>
                </div>
            </div>
        </div >


    );
};

export default Login;