import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase";
import Swal from "sweetalert2";
import Navbar from "../../SharedPages/Navbar/Navbar";

const Registration = () => {

    const [see, setSee] = useState(false)
    const navigate = useNavigate()

    const { createUser, googleLogin } = useContext(AuthContext)

    const handleCreateAccount = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const image = form.image.value
        const email = form.email.value
        const password = form.password.value

        const passValidate = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password)
        if (!passValidate) {
            return Swal.fire({
                title: 'Error!',
                text: "your password in not validate",
                icon: 'error',
                confirmButtonText: 'error'
            })
        }

        createUser(email, password)
            .then(() => {
                Swal.fire(
                    'success!',
                    'successful create account.',
                    'success'
                )
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: image
                })
                    .then(() => [
                        console.log('profile updated')
                    ])
                    .catch(error => {
                        console.log(error.message)
                    })
                navigate('/')
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'error'
                })
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                Swal.fire(
                    'success!',
                    'successful login.',
                    'success'
                )
                navigate('/')
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'error'
                })
            })
    }



    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/TKf5SkS/sean-oulashin-KMn4-VEe-EPR8-unsplash.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content w-full text-center text-neutral-content">
                    <div className=" w-full">
                        <div className="w-full">
                            <div className="text-center">
                                <h1 className="md:text-5xl text-3xl font-bold text-white">Create account</h1>
                            </div>
                            <div className="card flex-shrink-0 xl:w-[35%] md:w-[50%] lg:w-[40%] mx-auto mt-4 shadow-2xl bg-base-100">
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
                            <button onClick={handleGoogleLogin} className="btn bg-purple-600 text-white lg:w-[40%] md:w-[50%] xl:w-[35%]">
                                <FaGoogle></FaGoogle>
                                google</button>
                        </div>
                    </div>
                </div>
            </div >
        </div>


    );
};

export default Registration;