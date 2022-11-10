import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        // const navigate =useNavigate()
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                const currentUser = {
                    email: user.email
                }

                // get jwt token
                fetch('https://assignment-11-server-liard.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        localStorage.setItem('travel-token', data.token)
                        navigate(from, { replace: true })

                    })



            })
            .catch(err => console.error(err))
    }

    return (
        <div className='text-center mt-2'>
            <button onClick={handleGoogleSignIn} className='btn btn-ghost bg-blue-600'> <FaGoogle></FaGoogle> <span className='p-2'>Google</span></button>
        </div>
    );
};

export default SocialLogin;