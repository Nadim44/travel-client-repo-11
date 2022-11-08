import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const { title, img, description, price, ratings } = useLoaderData()
    return (
        <div className="card card-compact w-3/4 mx-auto bg-base-100 shadow-xl m-4">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-2xl">{title}</h2>
                <p>{description.slice(0, 150)}</p>
                <div className='flex justify-between'>
                    <p><span className='text-xl font-semibold text-orange-600'>Cost</span>: ${price}</p>
                    <p><span className='text-xl font-semibold text-green-600'>Ratings</span>: {ratings}</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Details;