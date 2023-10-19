import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {

    const { user, userLogout } = useContext(AuthContext)

    const handleLOgout = () => {
        userLogout()
            .then(() => {
                Swal.fire(
                    'success!',
                    'successful create account.',
                    'success'
                )
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


    const ulLink = <>

        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-purple-200" : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/addproduct"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-purple-200" : ""
                }
            >
                Add Product
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/cart"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-purple-200" : ""
                }
            >
                My Cart
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/registration"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-purple-200" : ""
                }
            >
                Registration
            </NavLink>
        </li>


    </>

    return (
        <div className="navbar bg-base-300 px-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            ulLink
                        }
                    </ul>
                </div>
                <img className="w-16" src="https://i.ibb.co/whhFGb2/pngwing-com-1.png" alt="" />
                <a className="btn btn-ghost normal-case text-xl">MUJAN STORE</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-medium">
                    {
                        ulLink
                    }
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <div className="flex items-center text-white  gap-2 bg-black rounded-lg py-1 px-3">
                    {
                        user && <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" />
                    }
                    {
                        user && <h2>{user.displayName}</h2>
                    }
                </div>
                {
                    user ? <button onClick={handleLOgout} className="btn btn-outline">logout</button> : <Link to={'/login'}><button className="btn">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;