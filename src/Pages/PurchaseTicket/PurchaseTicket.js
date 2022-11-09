import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import PurchaseTicketRow from './PurchaseTicketRow';

const PurchaseTicket = () => {
    const { user, logOut } = useContext(AuthContext);
    const [purchaseTicket, setPurchaseTicket] = useState([]);

    useEffect(() => {
        // fetch(`http://localhost:5000/purchase?email=${user?.email}`)
        fetch(`http://localhost:5000/purchase?email=${user?.email}`, {
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
            .then(data => setPurchaseTicket(data))
    }, [user?.email, logOut])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this ticket')
        if (proceed) {
            fetch(`http://localhost:5000/purchase/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        const remaining = purchaseTicket.filter(pur => pur._id !== id);
                        setPurchaseTicket(remaining);
                    }
                })
        }
    }

    return (
        <div>
            <h1>ticket length: {purchaseTicket.length}</h1>
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
                            <th>Travel Cost</th>
                            <th>Message</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            purchaseTicket.map(ticket => <PurchaseTicketRow
                                key={ticket._id}
                                ticket={ticket}
                                handleDelete={handleDelete}
                            ></PurchaseTicketRow>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default PurchaseTicket;