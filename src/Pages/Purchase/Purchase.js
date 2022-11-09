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
        <div className='bg-gray-300 rounded-lg'>
            <form onSubmit={handleReview}>
                <h2 className='text-4xl mt-4 text-center'>Place Name: <span className='text-orange-600'>{title}</span></h2>
                <h2 className='mb-4 text-3xl  text-center' ><span className=''>Travel Cost :</span> $ <span className=' text-blue-600'>{price}</span></h2>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
                    <input name='firstName' type="text" placeholder="First Name" className="input input-ghost w-full input-bordered" />
                    <input name='lastName' type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />
                    <input name='phone' type="text" placeholder="Your Phone" className="input input-ghost w-full input-bordered" />
                    <input name='email' type="email" placeholder="Your Email" defaultValue={user?.email} className="input input-ghost w-full input-bordered" readOnly />
                </div>
                <textarea name='message' className='textarea textarea-bordered h-24 w-full' placeholder='Your Message'></textarea>

                <input className='btn m-4 bg-orange-500 text-white' type="submit" value="Confirm Purchase Ticket" />
            </form>
        </div>
    );
};

export default Purchase;