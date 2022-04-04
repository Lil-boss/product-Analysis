import React from 'react';
import CustomLink from '../CustomLink/CustomLink';


const Navbar = () => {
    return (
        <div>
            <div className='bg-slate-800'>
                <h1 className='text-white text-4xl font-bold text-center p-4'>Star Shop</h1>
            </div>
            <div className='text-center mt-4 flex justify-center'>
                <CustomLink className='mr-4 text-xl font-normal border-b-2 p-4 hover:text-blue-400' to="/">HOME</CustomLink>
                <CustomLink className='mr-4 text-xl font-normal border-b-2 p-4 hover:text-blue-400' to="/reviews">REVIEWS</CustomLink>
                <CustomLink className='mr-4 text-xl font-normal border-b-2 p-4 hover:text-blue-400' to="/dashboard">DASHBOARD</CustomLink>
                <CustomLink className='mr-4 text-xl font-normal border-b-2 p-4 hover:text-blue-400' to="/about">ABOUT</CustomLink>
            </div>
        </div>
    );
};

export default Navbar;