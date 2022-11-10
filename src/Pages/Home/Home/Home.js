import React from 'react';
import useTitle from '../../../hooks/useTitle';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Others from '../Others/Others';
import Places from '../Places/Places';

const Home = () => {
    useTitle('Home')
    return (
        <div className='m-4 pt-4 '>
            <Banner></Banner>
            <Places></Places>
            <About></About>
            <Others></Others>
        </div>
    );
};

export default Home;