import React from 'react';
const Home = () => {
    return (
        <div className='w-4/5 m-auto mt-10 p-10'>
            <div className='grid grid-cols-2 gap-10'>
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
        </div>
    );
};

export default Home;