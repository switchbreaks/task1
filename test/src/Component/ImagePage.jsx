import React from 'react';
import './imagePage.css';

const ImagePage = () => {
    return (
        <div className="container">
            <img src="https://api.time.com/wp-content/uploads/2018/07/sesame-oil.jpg?quality=75&w=1080" alt="Background Image" className="bg-image" />
            <div className="content">
                <div>
                    <span className='h1classname'>100% ORGANIC</span>
                </div>
                <span className='aboutSpantag'>This oil is often used for its potent flavor</span>
                <div >
                    <button className='btnOnimage'>Get Now</button>
                </div>
            </div>
        </div>
    )
}

export default ImagePage;