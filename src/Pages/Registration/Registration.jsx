import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase";

const Registration = () => {

    const [see, setSee] = useState(false)

    const { createUser } = useContext(AuthContext)

    const handleCreateAccount = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const image = form.image.value
        const email = form.email.value
        const password = form.password.value

        createUser(email, password)
            .then((result) => {
                console.log(result)
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: image
                })
                    .then(() => [
                        console.log('profile updated')
                    ])
                    .catch(error => {
                        console.log(error.message)
                    })
            })
            .catch(error => console.log(error.message))
    }


    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/TKf5SkS/sean-oulashin-KMn4-VEe-EPR8-unsplash.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content w-full text-center text-neutral-content">
                <div className=" w-full">
                    <div className="w-full">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold text-white">Create account</h1>
                        </div>
                        <div className="card flex-shrink-0 w-[35%]  mx-auto mt-4 shadow-2xl bg-base-100">
                            <form onSubmit={handleCreateAccount} className="card-body text-black">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image url</span>
                                    </label>
                                    <input name="image" type="text" placeholder="https:" className="input input-bordered" required />
                                </div>
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
                                        see ? <FaEye onClick={() => setSee(!see)} className="text-black text-lg  absolute bottom-4 right-3"></FaEye> :
                                            <FaEyeSlash onClick={() => setSee(!see)} className="text-black text-lg absolute bottom-4 right-3"></FaEyeSlash>
                                    }
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Create</button>
                                </div>
                                <p>Already have account? <Link className="font-bold te" to={'/login'}>Login</Link></p>
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

export default Registration;