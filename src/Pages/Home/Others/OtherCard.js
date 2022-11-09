import React from 'react';

const OtherCard = ({ other }) => {
    const { img, title, description, ratings } = other;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-2">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-2xl">{title}</h2>
                <p>{description}</p>
                <p className='mt-4 text-2xl'>Ratings: <span className='text-orange-600'>{ratings}</span></p>
                {/* <h1>ratingsssssssssssssss</h1> */}
            </div>
        </div>
    );
};

export default OtherCard;