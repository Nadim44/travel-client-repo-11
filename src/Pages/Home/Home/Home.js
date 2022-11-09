import React from 'react';
import Banner from '../Banner/Banner';
import Places from '../Places/Places';

const Home = () => {
    return (
        <div className='m-4 '>
            <h1>this is home</h1>
            <Banner></Banner>
            <Places></Places>
        </div>
    );
};

export default Home;