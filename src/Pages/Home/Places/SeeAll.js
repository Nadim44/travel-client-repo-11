import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PlaceCard from './PlaceCard';

const SeeAll = () => {
    const [places, setPlaces] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/places')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])
    return (
        <div>
            <h1>see all</h1>
            <div>
                <p className='text-2xl font-bold text-orange-600 text-center mb-4'>Places</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                {
                    places.map(place => <PlaceCard
                        key={place._id}
                        place={place}

                    ></PlaceCard>)
                }
            </div>
            <div className="card-actions justify-center">
                <button className="btn btn-primary"><Link to='/'>Back</Link></button>


            </div>
        </div>
    );
};

export default SeeAll;