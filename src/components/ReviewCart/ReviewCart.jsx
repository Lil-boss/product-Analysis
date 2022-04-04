import React from 'react';
import { FaStar } from 'react-icons/fa'
const ReviewCart = () => {
    return (
        <div className='mt-10 max-w-lg px-8 py-8 rounded-md shadow-lg bg-white'>
            <span className='flex space-x-0.5'>
                <FaStar className='text-orange-500' />
                <FaStar className='text-orange-500' />
                <FaStar className='text-orange-500' />
                <FaStar className='text-orange-500' />
                <FaStar className='text-orange-500' />
            </span>
            <p className='mt-2 text-sm font-medium leading-5 text-gray-500'>04-04-2022</p>
            <div>
                <h3 className='font-semibold text-gray-800'>There's a reason they're number one</h3>
                <p className='text-sm font-medium leading-5 text-gray-600'>
                    There's not much to say about YETI stainless steel tumblers that hasn't been said. There's a reason they're so highly rated. I filled mine with ice and water at 8:30am last week and drove to work sipping it. I left it in my car when I went into the office.
                </p>
            </div>
            <div className='mt-6 flex items-center space-x-2'>
                <div className='flex flex-shrink-0 rounded-full border border-gray-200'>
                    <img className='w-8 h-8 object-cover rounded-full' src="https://images.unsplash.com/photo-1508002366005-75a695ee2d17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=512&q=80" alt="" />
                </div>
                <span className='text-sm font-semibold leading-5 text-gray-900'>Carrie Brewer</span>
            </div>
        </div>
    );
};

export default ReviewCart;