import React from 'react';
import Api from "../../Hooks/Api"
import ReviewCart from '../ReviewCart/ReviewCart';

const Product = () => {
    const [reviews, setReviews] = Api();

    return (
        <div className='w-4/5 m-auto'>
            <h1 className='text-center text-5xl mt-10'>What Our Customers Say!!</h1>
            <div className='grid grid-cols-3 gap-4'>
                {
                    reviews.map(data => <ReviewCart key={data._id} data={data} />)
                }
            </div>

        </div>
    );
};

export default Product;