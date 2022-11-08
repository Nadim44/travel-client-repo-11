import React from 'react';
import { Link } from 'react-router-dom';

const PlaceCard = ({ place }) => {
    const { img, price, ratings, title, description, _id } = place;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
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
                    <Link to={`/place/${_id}`}>
                        <button className="btn btn-primary">Details</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default PlaceCard;