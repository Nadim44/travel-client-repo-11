import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Purchase = () => {
    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext)
    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const purchase = {
            place: _id,
            placeName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }

        fetch('http://localhost:5000/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
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
        <div>
            <form onSubmit={handleReview}>
                <h2 className='text-4xl'>You are about to this place: {title}</h2>
                <h2 className='text-3xl'>Travel Cost: ${price}</h2>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='firstName' type="text" placeholder="First Name" className="input input-ghost w-full input-bordered" />
                    <input name='lastName' type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />
                    <input name='phone' type="text" placeholder="Your Phone" className="input input-ghost w-full input-bordered" />
                    <input name='email' type="email" placeholder="Your Email" defaultValue={user?.email} className="input input-ghost w-full input-bordered" readOnly />
                </div>
                <textarea name='message' className='textarea textarea-bordered h-24 w-full' placeholder='Your Message'></textarea>

                <input className='btn' type="submit" value="Confirm Purchase Ticket" />
            </form>
        </div>
    );
};

export default Purchase;