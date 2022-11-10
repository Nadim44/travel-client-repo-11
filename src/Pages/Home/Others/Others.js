import React, { useEffect, useState } from 'react';
import OtherCard from './OtherCard';

const Others = () => {
    const [others, setOthers] = useState([])
    useEffect(() => {
        fetch('https://assignment-11-server-liard.vercel.app/others')
            .then(res => res.json())
            .then(data => setOthers(data))

    }, [])
    return (
        <div className='mt-4'>
            <div>
                <p className='text-center text-4xl font-bold text-orange-600'>Most beautiful places!!!</p>
                <p className='text-center mb-4'>There are many beautiful places in the world. But this places is the most beautiful places in the world.</p>

            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    others.map(other => <OtherCard
                        key={other._id}
                        other={other}

                    ></OtherCard>)
                }
            </div>
        </div>
    );
};

export default Others;