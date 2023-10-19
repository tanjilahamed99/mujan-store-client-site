import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const ulLink = <>

        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "" : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/addproduct"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "" : ""
                }
            >
                Add Product
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/cart"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "" : ""
                }
            >
                My Cart
            </NavLink>
        </li>


    </>

    return (
        <div className="navbar bg-base-100 px-5">
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
            <div className="navbar-end">
                <Link to={'/login'}><button className="btn">Login</button></Link>
            </div>
        </div>
    );
};

export default Navbar;