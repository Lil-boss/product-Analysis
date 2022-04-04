import React from 'react';
import { FaStar } from 'react-icons/fa'
const ReviewCart = ({ data }) => {
    console.log(data.name);
    const { name, picture, body } = data;
    return (
        <div className='mt-10 max-w-lg px-8 py-8 rounded-md shadow-lg bg-white relative'>
            <span className='flex space-x-0.5'>
                <FaStar className='text-orange-500' />
                <FaStar className='text-orange-500' />
                <FaStar className='text-orange-500' />
                <FaStar className='text-orange-500' />
                <FaStar className='text-orange-500' />
            </span>
            <p className='my-4 text-sm font-medium leading-5 text-gray-500'>04-04-2022</p>
            <div className='mb-10'>
                <p className='text-lg font-medium leading-5 text-gray-600'>
                    {body}
                </p>
            </div>
            <div className='mt-6 flex items-center space-x-2 absolute bottom-6'>
                <div className='flex flex-shrink-0 rounded-full border border-gray-200'>
                    <img className='w-8 h-8 object-cover rounded-full' src={picture} alt="" />
                </div>
                <span className='text-sm font-semibold leading-5 text-gray-900'>{name}</span>
            </div>
        </div >

    );
};

export default ReviewCart;