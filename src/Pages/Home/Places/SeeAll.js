import React, { useEffect, useState } from 'react';
import PlaceCard from './PlaceCard';

const SeeAll = () => {
    const [places, setPlaces] = useState([])
    useEffect(() => {
        fetch('places.json')
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
        </div>
    );
};

export default SeeAll;