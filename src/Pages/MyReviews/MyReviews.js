import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewRow from './ReviewRow';


const MyReviews = () => {
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useTitle('MyReview')

    useEffect(() => {
        fetch(`https://assignment-11-server-liard.vercel.app/review?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('travel-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }
                return res.json()
            })
            .then(data => setReviews(data))
    }, [user?.email, logOut])


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this review');
        if (proceed) {
            fetch(`https://assignment-11-server-liard.vercel.app/review/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        const remaining = reviews.filter(re => re._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }


    return (
        <div>
            <h1 className='text-2xl my-4'>You have {reviews.length} reviews</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Rating</th>
                            <th>Message</th>
                            <th>Update options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review => <ReviewRow
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}
                            ></ReviewRow>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyReviews;