import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full h-96 mb-4 mt-4">
            <div id="slide1" className="carousel-item relative w-full  ">
                <img alt='' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Sundarban_Tiger.jpg/1200px-Sundarban_Tiger.jpg" className="w-full  rounded-xl " />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-20 top-1/4">
                    <h1 className='text-2xl text-orange-600 font-bold '> It's Time to Travel</h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-20 top-1/2">
                    <p className='text-white font-semibold text-xl'>Traveling means going from one place to another for different purposes. <br /> They also explore to see the unseen and know the unknown. </p>
                </div>
            </div>

        </div >
    );
};

export default Banner;