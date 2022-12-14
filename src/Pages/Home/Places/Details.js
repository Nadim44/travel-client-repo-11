import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const Details = () => {
    const { title, img, description, price, ratings, _id } = useLoaderData()
    useTitle('Details')

    return (
        <div>
            <div className="card card-compact w-3/4 mx-auto bg-base-100 shadow-xl m-4">
                {/* <figure><img src={img} alt="Shoes" /></figure> */}
                <PhotoProvider>
                    <PhotoView src={img}>
                        <figure><img src={img} alt="Shoes" /></figure>
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body">
                    <h2 className="card-title font-bold text-2xl">{title}</h2>
                    <p>{description}</p>
                    <div className='flex justify-between'>
                        <p><span className='text-xl font-semibold text-orange-600'>Travel Cost</span> : $ {price}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/purchase/${_id}`}>
                            <button className="btn btn-primary">Purchase ticket</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='bg-gray-300 w-3/4 mx-auto rounded mb-4'>
                <h2 className='text-center text-4xl mb-3 '>Review</h2>
                <div className='w-3/4 mx-auto grid lg:grid-cols-2 justify-between '>
                    <h2 className='text-xl'> Place Name: <span className='text-3xl font-semibold text-orange-600'>{title}</span></h2>
                    <h2>Ratings: <span className='text-3xl font-semibold text-orange-600'> {ratings}</span></h2>
                </div>
                <div className='mb-'>
                    <Link to={`/review/${_id}`}>
                        <button className="btn btn-primary m-4">My Review</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Details;