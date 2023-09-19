// import React from 'react';

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h1 className="text-2xl fot-bold font-semibold"> Navbar </h1>
            <nav className="py-5">
             <span className="text-xl font-semibold pl-5">
             <Link to= '/'>Home</Link>
            </span>   
             <span className="text-xl font-semibold pl-5">
             <Link to= '/about'>About</Link>
            </span>   
             <span className="text-xl font-semibold pl-5">
             <Link to= '/contact'>Contact</Link>
            </span>   
             <span className="text-xl font-semibold pl-5">
                <Link to="/users" > Users </Link>
            </span>   

            {/* <a className="text-xl font-semibold pl-5" href="/">Home</a>
            <a className="text-xl font-semibold pl-5" href="/about">About</a>
            <a className="text-xl font-semibold pl-5" href="/contact">Contact</a> */}
            </nav>

        </div>
    );
};

export default Header;