import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Review = () => {
    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext)

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        // const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const ratings = form.ratings.value;
        const message = form.message.value;

        const review = {
            place: _id,
            placeName: title,
            price,
            // customer: name,
            email,
            ratings,
            message
        }

        fetch('https://assignment-11-server-liard.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.acknowledged) {
                    alert('Review placed successfully')
                    form.reset();
                }
            })
            .catch(err => console.error(err))

    }

    return (
        <div className='bg-gray-300 rounded-lg'>

            <h2 className='text-4xl mb-4 text-center mt-4'>Review to : <span className='text-orange-600'> {title}</span></h2>
            <form onSubmit={handleReview}>
                <textarea name='message' className='textarea textarea-bordered h-24 w-full' placeholder='Your Message'></textarea>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>

                    <input name='ratings' type="text" placeholder="Ratings" className="input input-ghost w-full input-bordered" required />
                    <input name='email' type="email" placeholder="Email" defaultValue={user?.email} className="input input-ghost w-full input-bordered" readOnly />
                </div>

                <input className='btn' type="submit" value="Place your Review" />
            </form>
        </div>
    );
};

export default Review;