import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"
const Home = () => {
    return (
        <div className='nav'>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/product">Product</Link>
        </div>
    );
};

export default Home;