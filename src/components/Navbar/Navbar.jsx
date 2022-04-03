import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
            <div className='bg-slate-800'>
                <h1 className='text-white text-4xl font-bold text-center p-4'>Star Shop</h1>
            </div>
            <div className='text-center mt-4'>
                <Link className='mr-4 text-xl font-normal border-b-2 p-4 hover:text-blue-400' to="/">HOME</Link>
                <Link className='mr-4 text-xl font-normal border-b-2 p-4 hover:text-blue-400' to="/reviews">REVIEWS</Link>
                <Link className='mr-4 text-xl font-normal border-b-2 p-4 hover:text-blue-400' to="/dashboard">DASHBOARD</Link>
                <Link className='mr-4 text-xl font-normal border-b-2 p-4 hover:text-blue-400' to="/about">ABOUT</Link>
            </div>
        </div>
    );
};

export default Navbar;