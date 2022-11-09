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
            <div className='text-center mb-4'>
                <p className='text-2xl font-bold text-orange-600 '>Choose your Travel place!!</p>
                <p>Travelers always travel to the most beautiful places of the world which uphold the existence of nature.</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                {
                    places.map(place => <PlaceCard
                        key={place._id}
                        place={place}

                    ></PlaceCard>)
                }
            </div>
            <div className="card-actions justify-center m-4">
                <button className="btn btn-warning "><Link to='/'>Back</Link></button>


            </div>
        </div>
    );
};

export default SeeAll;