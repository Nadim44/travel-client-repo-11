import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
    const { title, img, description, price, ratings, _id } = useLoaderData()
    return (
        <div className="card card-compact w-3/4 mx-auto bg-base-100 shadow-xl m-4">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-2xl">{title}</h2>
                <p>{description}</p>
                <div className='flex justify-between'>
                    <p><span className='text-xl font-semibold text-orange-600'>Cost</span>: ${price}</p>
                    <p><span className='text-xl font-semibold text-green-600'>Ratings</span>: {ratings}</p>
                </div>
                <div className="card-actions justify-end">
                    {/* <button className="btn btn-primary">Buy Now</button> */}
                    <Link to={`/review/${_id}`}>
                        <button className="btn btn-primary">Review</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Details;