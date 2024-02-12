import React from 'react';
import './footer.css';
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';


function Footer() {
    return (
        <footer className="footer">
            <div className="background-images"></div>
            <div className="container">
                <div className="row">
                    <div className="col">Home</div>
                    <p className="col">Carrot Isolated A single stalk of carrot with green leaves. The image is shown at an angle, and is in full focus from front to back. </p>

                </div>
                <div className="row">
                    <div className="col">About</div>
                    <div className="col">The image is shown at an angle, and is in full focus from front to back. </div>

                </div>
                <div className="row">
                    <div className="col">Go to</div>
                    <div className="col">The image is shown at an angle, and is in full focus from front to back.Carrot Isolated A single stalk of carrot with green leaves.  </div>
                </div>
                <div className="row">
                    <div className="col">Location</div>
                    <div className="col">Location Be can't tell you .Carrot Isolated A single stalk of carrot with green leaves.  </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}>
                        <input
                            type="text"
                            className='searcText'
                        />
                        <button style={{ padding: '5px 10px', backgroundColor: 'green', borderRadius: '0 7px 7px 0', color: '#fff', border: 'none', cursor: 'pointer' }}>Go</button>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop:"20px" }}>
                        <FaFacebook style={{ marginRight: '10px', color: '#3b5998', cursor: 'pointer', fontSize:'35px' }} />
                        <FaWhatsapp style={{ marginRight: '10px', color: '#25D366', cursor: 'pointer',fontSize:'35px'}} />
                        <FaInstagram style={{ color: '#E1306C', cursor: 'pointer',fontSize:'35px'}} />
                    </div>                
                    </div>

            </div>
        </footer>
    );
}

export default Footer;
