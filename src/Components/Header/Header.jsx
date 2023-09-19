// import React from 'react';

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h1 className="text-2xl fot-bold font-semibold"> Navbar </h1>
            <nav className="py-5">

            <Link to="/ " ><span className="text-xl font-semibold pl-5"> Home </span> </Link>
            <Link to="/about" ><span className="text-xl font-semibold pl-5"> About </span> </Link>
            <Link to="/contact" ><span className="text-xl font-semibold pl-5"> Contact </span> </Link>
            <Link to="/users" ><span className="text-xl font-semibold pl-5"> Users </span> </Link>
            <Link to="/posts" ><span className="text-xl font-semibold pl-5"> Posts </span> </Link>



            {/* <a className="text-xl font-semibold pl-5" href="/">Home</a>
            <a className="text-xl font-semibold pl-5" href="/about">About</a>
            <a className="text-xl font-semibold pl-5" href="/contact">Contact</a> */}
            </nav>

        </div>
    );
};

export default Header;