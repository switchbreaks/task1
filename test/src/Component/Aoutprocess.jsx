import React from 'react';
import { FiHeart } from 'react-icons/fi'; // Import the React Icon you want to use
import { CiLocationOn } from "react-icons/ci";
import { MdBackHand } from "react-icons/md";
import { FaLeaf } from "react-icons/fa6";
import { IoIosWater } from "react-icons/io";
import { FaWater } from "react-icons/fa";

import './aoutopro.css';

function Aoutprocess() {
    const frutes = "It seems like there might be a typo in your message. Did you mean 'strawberry'? If so, a strawberry is a small, red fruit with a sweet and slightly tart flavor."
    const boxes = [
        { id: 1, IconComponent: FiHeart, name: 'Fevrat', description: frutes },
        { id: 2, IconComponent: CiLocationOn, name: 'Location', description: frutes },
        { id: 3, IconComponent: MdBackHand, name: 'Care', description: frutes },
        { id: 4, IconComponent: FaLeaf, name: 'Green', description: frutes },
        { id: 5, IconComponent: IoIosWater, name: 'Water', description: frutes },
        { id: 6, IconComponent: FaWater, name: 'Watch', description: frutes },
    ];

    return (
        <div className="containe">
            <div className='subcontaner'>
                {boxes.map(box => (
                    <div className='mainBOX mainBOX2'>
                        <div key={box.id} className="boxs">
                            <box.IconComponent className='iconsClass' />
                        </div>
                        <div className='contentClassName'>
                            <h4 className='h3classname'>{box.name}</h4>
                            <span className='marginBottom'>{box.description}</span>
                            <div className='mtmargin'>
                                <span className='marginBottom'>{box.description}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Aoutprocess;
