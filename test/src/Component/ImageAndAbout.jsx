import React from 'react';
import "./imageandabout.css"
function ImageAndAbout() {
    const frutes = "It seems like there might be a typo in your message. Did you mean 'strawberry'? If so, a strawberry is a small, red fruit with a sweet and slightly tart flavor."
    const boxes = [
        { id: 1, image: 'https://imgs.search.brave.com/ovMT_e4dWTXycWov-ljk9v16oNB2rmjqjYbaN8lSNAA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9nZW5l/cmF0b3JmdW4uY29t/L2NvZGUvdXBsb2Fk/cy9SYW5kb20tRnJ1/aXQtaW1hZ2UtOC5q/cGc', name: 'Image 1', description: frutes },
        { id: 2, image: 'https://imgs.search.brave.com/NQsbrFO6LslzHDLk6Vl_I200vvgX5FCOadjuWhcBSVw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdDUu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAyNzE5/OC82NjIwMy9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzY2MjAzNDE0/OC1zdG9jay1waG90/by1hc3NvcnRtZW50/LWhlYWx0aHktc3Vt/bWVyLWZyZXNoLWZy/dWl0cy5qcGc', name: 'Image 2', description: frutes },
        { id: 3, image: 'https://imgs.search.brave.com/_uneSM5c_aItqNa5ANe691ryv2bLA4NvBt9qnTHQNZU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZWF0aGFwcHlwcm9q/ZWN0LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wMi9E/aWZmZXJlbnQtVHlw/ZXMtb2YtRnJ1aXRz/LWFsb25nLXdpdGgt/VGhlaXItTmFtZS1h/bmQtUGljdHVyZS0x/MDI0eDUzNi5qcGc', name: 'Image 3', description: frutes },
        { id: 4, image: 'https://imgs.search.brave.com/x2gkC-Pd6zKoDi36GmXb3UrvpYDAb9IffP1_4pzQ4QU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/MS8yMC8xNS8xMi9v/cmFuZ2VzLTE5OTUw/NzlfNjQwLmpwZw', name: 'Image 4', description: frutes },
        { id: 5, image: 'https://imgs.search.brave.com/UQxqx2A3uBldlsV9wvlAlz4D5W2VvaxaLVMNoT2zgO8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/YmVzdHJhbmRvbXMu/Y29tL1BpYy9mb29k/L1BvdGF0b18xNDIy/NDcyNDYwLmpwZw', name: 'Image 5', description: frutes },
        { id: 6, image: 'https://imgs.search.brave.com/IftRzAF-oRAAiy-Dg9UMMRppVSxBLL05os2LAktdTy0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8x/Mi8wOS8xNy8xMS92/ZWdldGFibGVzLTEw/ODUwNjNfNjQwLmpw/Zw', name: 'Image 6', description: frutes },
    ];

    return (
        <div className="containe">
            <div className='subcontaner'>
                {boxes.map(box => (
                    <div className='mainBOX'>
                        <div key={box.id} className="box">
                            <img className='imageClassName' src={box.image} alt={box.name} />
                        </div>
                        <div className='contentClassName'>
                            <h3 className='h3classname'>{box.name}</h3>
                            <span >{box.description}</span>
                            <div className=''>
                                <button className='contentClassNames'>Get Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default ImageAndAbout;
