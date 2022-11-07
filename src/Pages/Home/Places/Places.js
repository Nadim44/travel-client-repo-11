import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PlaceCard from './PlaceCard';

const Places = () => {
    const [places, setPlaces] = useState([])
    useEffect(() => {
        fetch('places.json')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])

    return (
        <div>
            <div>
                <p className='text-2xl font-bold text-orange-600 text-center mb-4'>Places</p>
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
                <div className="card-actions justify-center">
                    <button className="btn btn-primary"><Link to='/seeAll'>See All</Link></button>


                </div>
            </>
        </div>
    );
};

export default Places;