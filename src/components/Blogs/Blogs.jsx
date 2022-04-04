import React from 'react';

const Blogs = () => {
    return (
        <div className='w-4/5 m-auto'>
            <div className='my-10'>
                <h1 className='text-5xl text-slate-700 my-3'>Q: What is context api?</h1>
                <h2 className='text-3xl text-slate-700'>A: <span className='text-xl text-blue-400'>
                    it's one of the react structures. It helps us to avoid prop-drilling. mainly it helps us to share data from parent to children easily.
                </span></h2>
            </div>
            <div className='my-10'>
                <h1 className='text-5xl text-slate-700 my-3'>Q: What is semantic tag?</h1>
                <h2 className='text-3xl text-slate-700'>A: <span className='text-xl text-blue-400'>
                    A tag that tells the meaning of the element.
                </span></h2>
                <h1 className='text-xl text-blue-400'>
                    some Example: Form,article,table,main,header,footer etc.
                </h1>
            </div>
            <div className='my-10'>
                <h1 className='text-5xl text-slate-700 my-3'>Q: difference between inline block or inline block elements </h1>
                <h2 className='text-3xl text-slate-700'>A: <span className='text-xl text-blue-400'>
                    <p>*inline-block elements always start to form a new line, it takes up the full width.</p>
                    <p>*The inline element does not start on a new line. only takes up as much width as necessary.</p>
                </span></h2>
            </div>
        </div>
    );
};

export default Blogs;