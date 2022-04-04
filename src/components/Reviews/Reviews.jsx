import React from 'react';
import ReviewCart from '../ReviewCart/ReviewCart';

const Product = () => {
    return (
        <div className='w-4/5 m-auto'>
            <h1 className='text-center text-5xl mt-10'>Customer Reviews</h1>
            <div className='grid grid-cols-3 gap-4'>
                <ReviewCart />
                <ReviewCart />
                <ReviewCart />
                <ReviewCart />
                <ReviewCart />
                <ReviewCart />
                <ReviewCart />
                <ReviewCart />
                <ReviewCart />
            </div>

        </div>
    );
};

export default Product;