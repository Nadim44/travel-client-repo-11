import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Others from '../Others/Others';
import Places from '../Places/Places';

const Home = () => {
    return (
        <div className='m-4 '>
            <h1>this is home</h1>
            <Banner></Banner>
            <Places></Places>
            <About></About>
            <Others></Others>
        </div>
    );
};

export default Home;