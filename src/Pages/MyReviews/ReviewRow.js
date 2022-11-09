import React, { useEffect, useState } from 'react';

const ReviewRow = ({ review, handleDelete }) => {
    const { _id, placeName, message, ratings, place } = review;
    const [selectPlace, setSelectPlace] = useState({})

    useEffect(() => {
        fetch(`https://assignment-11-server-liard.vercel.app/places/${place}`)
            .then(res => res.json())
            .then(data => setSelectPlace(data))
    }, [place])




    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                selectPlace?.img &&
                                <img src={selectPlace.img} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{placeName}</div>

                    </div>
                </div>
            </td>
            <td>
                {ratings}
            </td>
            <td>{message}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>


    );
};

export default ReviewRow;