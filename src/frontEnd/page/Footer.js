import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ()=>{
    return(
        <div className="footer py-2 bg-primary text-light">
            <div className="container">
                <div className="text-center">
                    <p>Design & Develop By : <Link to="">MD Kamruzzaman</Link> </p>
                </div>
            </div>
        </div>
    )
}
export default Footer;