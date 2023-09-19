import './Header.css';
import { NavLink, } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h1 className="text-2xl fot-bold font-semibold"> Navbar </h1>
            <nav className="py-5">


            <NavLink to="/ " ><span className="text-xl font-semibold pl-5"> Home </span> </NavLink>
            <NavLink to="/about" ><span className="text-xl font-semibold pl-5"> About </span> </NavLink>
            <NavLink to="/contact" ><span className="text-xl font-semibold pl-5"> Contact </span> </NavLink>
            <NavLink to="/users" ><span className="text-xl font-semibold pl-5"> Users </span> </NavLink>
            <NavLink to="/posts" ><span className="text-xl font-semibold pl-5"> Posts </span> </NavLink>



            {/* <a className="text-xl font-semibold pl-5" href="/">Home</a>
            <a className="text-xl font-semibold pl-5" href="/about">About</a>
            <a className="text-xl font-semibold pl-5" href="/contact">Contact</a> */}
            </nav>

        </div>
    );
};

export default Header;