import { NavLink,Link } from "react-router";
import './Nav.css'
const Nav = () => {

    const links=<>
    <li className="px-2"><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/read'>Listed Books</NavLink></li>
    </>
    return (
        <nav className="navbar bg-base-100/[0.7] backdrop-blur-2xl sticky top-0 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost text-xl">Boi Poka</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Sign Up</a>
                <a className="btn mx-1">Login</a>
            </div>
        </nav>
    );
};

export default Nav;