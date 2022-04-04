import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Api from '../../Hooks/Api';

const Home = () => {
    const [reviews] = Api();
    const reviewData = reviews.slice(0, 3);
    console.log(reviewData);
    return (
        <div className='w-4/5 m-auto mt-10'>
            <section>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-10 p-10'>
                    <div className='flex flex-col justify-center '>
                        <h1 className='text-5xl font-medium text-blue-400'>The best chocolate cake</h1>
                        <h1 className='text-5xl font-medium text-gray-800 text-left'>in your town</h1>
                        <p className='text-xl mt-4 text-slate-400'>Chocolate cake or chocolate gâteau is a cake flavored with melted chocolate, cocoa powder, or both.</p>
                        <button className='border-0 mt-10 bg-blue-400 w-28 h-10 rounded-md text-center text-white font-medium cursor-pointer'>Live Demo</button>
                    </div>
                    <div>
                        <img className='rounded-md' src="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/0A475B34-4E78-40D8-9F30-46223B7D77E7/Derivates/E55C7EA4-0E60-403F-B5DC-75EA358197BD.jpg" alt="" />
                    </div>
                </div>
            </section>
            <section>
                <div className='mb-10'>
                    <h1 className='text-center text-5xl mt-10'>Customer Reviews</h1>
                    <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-4 items-center'>
                        {
                            reviewData.map(data => <div className='mt-10 max-w-lg px-8 py-8 rounded-md shadow-lg bg-white relative'>
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
                                        {data.body}
                                    </p>
                                </div>
                                <div className='mt-6 flex items-center space-x-2 absolute bottom-6'>
                                    <div className='flex flex-shrink-0 rounded-full border border-gray-200'>
                                        <img className='w-8 h-8 object-cover rounded-full' src={data.picture} alt="" />
                                    </div>
                                    <span className='text-sm font-semibold leading-5 text-gray-900'>{data.name}</span>
                                </div>
                            </div >)
                        }
                    </div>
                    <div className='flex justify-center'>
                        <Link to="/reviews" className='border-0 mt-10 bg-blue-400 w-1/3 h-10 rounded-md text-center text-white font-medium cursor-pointer'>
                            <button className='mt-2'>
                                See All Reviews
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default Home;