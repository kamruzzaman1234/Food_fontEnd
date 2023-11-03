import React from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineShoppingCart,AiFillFacebook, AiFillTwitterCircle,
    AiFillYoutube,AiFillLinkedin} from 'react-icons/ai';

const NavbarNav = ({size, setShow,logData})=>{
    return(
        <div>
            {/* <h3>{logData?.userEmail?.name}</h3> */}
            <h3>{logData?.userEmail?.name}</h3>
               <div className="home-page py-2 bg-dark text-light position-static" style={{borderBottom:""}}>
            <div className="container">
                <div className="row">
                    <div className="d-lg-block d-md-block  col-lg-2 col-md-4 col-sm-4 d-sm-none">
                        <Link className="fs-4 mx-1 text-primary"><AiFillFacebook/> </Link>
                         <Link className="fs-4 mx-1 text-danger"><AiFillYoutube/></Link>
                        <Link className="fs-4 mx-1 text-info"><AiFillLinkedin/></Link>  
                         <Link className="fs-4 mx-1"><AiFillTwitterCircle/></Link>
                         <button className="btn btn-light text-dark p-2 rounded mx-2">{logData?.userEmail?.name}</button>
                    </div>
                    <div className="col-lg-8 col-md-6">
                        <div className="detals text-center">
                            <p>Free shooping and All retail orders $75 up</p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-6">
                       <Link onClick={()=>setShow(false)}><AiOutlineShoppingCart className="fs-1 text-warning"/></Link>
                        <span className="mx-1 text-light p-2 rounded-circle bg-danger">{size}</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="company-name text-center light py-4">
            <div className="container">
                <div className="header-title py-3">
                    <button  className="btn bg-warning p-2 d-sm-none">BEST FOOD</button>
                    <button className="btn btn-success mx-2" onClick={()=>setShow(true)}>Shopping Area</button>
                </div>
                <div className="menu">
                    <ul className="d-sm-flex">
                    <Link className="mx-lg-2 mx-md-1 mx-sm-1 btn btn-warning
                        " style={{textDecoration:"none"}} to="/main_page">Home</Link>
                        <Link className="mx-lg-2 mx-md-1 mx-sm-1 btn btn-warning 
                        " style={{textDecoration:"none"}} to="/about">ABOUT</Link>
                        <Link className="mx-lg-2 mx-md-1 mx-sm-1 btn btn-warning
                        " style={{textDecoration:"none"}} to="/shop">SHOP</Link>
                        {/* <Link className="mx-lg-2 mx-md-1 mx-sm-1 btn btn-warning
                        " style={{textDecoration:"none"}} to="/fruit">FRUITS</Link>
                        <Link className="mx-lg-2 mx-md-1 mx-sm-1 btn btn-warning
                        " style={{textDecoration:"none"}} to="/vegetable">VEGETABLE</Link>
                        <Link className="mx-lg-2 mx-md-1 mx-sm-1 btn btn-warning
                        " style={{textDecoration:"none"}} to="rice">RICE</Link> */}
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
}
export default NavbarNav;