import React from 'react'

export const Smallimage = () => {
    const image="https://imgs.search.brave.com/NQsbrFO6LslzHDLk6Vl_I200vvgX5FCOadjuWhcBSVw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdDUu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAyNzE5/OC82NjIwMy9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzY2MjAzNDE0/OC1zdG9jay1waG90/by1hc3NvcnRtZW50/LWhlYWx0aHktc3Vt/bWVyLWZyZXNoLWZy/dWl0cy5qcGc";
    return (
        <div>
            <div className="changehight">
                <img src={image} alt="Background Image" className="bg-image" />
                <div className="content">
                    <div>
                        <span className='h1classname'>FRESH & NON-GMO PRODUCT</span>
                    </div>
                    <span className='aboutSpantag'>The Non-GMO Project is a nonprofit organization offering North America's most trusted third-party verification program for non-GMO food and products</span>
                </div>
            </div>
        </div>
    )
}