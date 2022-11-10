import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PlaceCard from './PlaceCard';

const Places = () => {
    const [places, setPlaces] = useState([])
    useEffect(() => {
        fetch('https://assignment-11-server-liard.vercel.app/places')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])

    return (
        <div>
            <div className='text-center mb-4 pt-6'>
                <p className='text-4xl font-bold text-orange-600 '>Choose your Traveling places!!</p>
                <p>Travelers always travel to the most beautiful places of the world which uphold the existence of nature.</p>
            </div>
            <>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                    {
                        places.slice(3).map(place => <PlaceCard
                            key={place._id}
                            place={place}

                        ></PlaceCard>)
                    }
                </div>
                <div className="card-actions justify-center m-4">
                    <button className="btn btn-warning"><Link to='/seeAll'>See All</Link></button>
                </div>
            </>
        </div>
    );
};

export default Places;