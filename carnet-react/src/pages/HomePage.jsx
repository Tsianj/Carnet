import React from 'react';
import Inscription from '../components/Inscription';
import Connexion from '../components/Connexion';

const HomePage = () => {
    return <>
    <h1>Post It</h1>
        <div>
            <Inscription />
            <Connexion />
        </div>
    </>
}

export default HomePage;