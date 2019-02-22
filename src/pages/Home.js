import React from 'react'
import Layout from 'components/Layout';

import GameCard from 'components/common/GameCard';

import GamesMock from 'mock/GamesMock';
import Heading from '../components/common/Heading';

const Home = () => {
    
    const games = GamesMock.map((game) => {
        const {title, image} = game;
        return <GameCard  title={title} image={image} />
    });
    
    return (
        <Layout>
            <Heading />
            <div className="row">
                {games}
            </div>
        </Layout>
    )
}

export default Home;