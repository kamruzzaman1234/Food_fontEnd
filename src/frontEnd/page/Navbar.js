import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ()=>{
    return(
        <div className="navbar navbar-expand bg-light text-light">
            <div className="container-xxl">
                <Link to="/" className="navbar-brand
                fs-italic fs-1 fs-md-4 fs-sm-5">Food Shop</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"  
                  data-bs-target="#navCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navCollapse">
                    <ul className="navbar-nav m-auto">
                    <li className="nav-item">
                        <Link to="/signup" className="nav-link text-dark
                        border-success p-2 btn btn-warning border m-1">SIGN UP</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link text-dark
                         border border-success p-2 btn btn-warning  m-1">SIGN IN</Link>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Navbar;