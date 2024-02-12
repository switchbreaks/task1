import React from 'react'
import Naviga from './Navi/Naviga';
import ImagePage from './Component/ImagePage';
import ImageAndAbout from './Component/ImageAndAbout';
import { Smallimage } from './Component/Smallimage';
import Aoutprocess from './Component/Aoutprocess';
import Footer from './footer/Footer';

function App() {
    return (
        <>
            <Naviga />
            <ImagePage />
            <ImageAndAbout />
            <Smallimage />
            <Aoutprocess />
            <Footer/>
        </>
    )
}

export default App;