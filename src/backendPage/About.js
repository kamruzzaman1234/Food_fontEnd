import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
import {FaHouseFlag} from "react-icons/fa6"
import Mobile from "./Mobile";
import ReactStars from "react-rating-stars-component";
import NavbarNav from "./NavbarNav";
import FooterBack from './FooterBack';

const About = () => {
  const [cart, setCart] = useState([])
  const [show, setShow] = useState(true)
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <>
      <NavbarNav size={cart.length} setShow={setShow}/>
      <div className="about-story py-5 bg-light text-dark">
        <div className="container">
          <div className="heading text-center mb-4">
            <h3 className="mb-4 fs-2">Our Story</h3>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-3">
              <h3 className="mb-3"> What was the first ever shop?</h3>
              <p className="">
        The Roman forum was arguably the earliest example of a 
        permanent retail shop front. In antiquity, exchange involved direct selling 
        via merchants or peddlers and bartering systems were commonplace.
              </p>
              <Link to="/" className="btn btn-success px-5">Learn More</Link>
            </div>
            <div className="col-lg-6 col-md-12 mb-3">
              <h4 className="mb-3">Our mission is to make clean eating delicious 
                and convenient for everyone.</h4>
                <p>Our mission is to make clean eating simple and convenient. 
                  You should never have to sacrifice quality, flavor or nutrition when 
                  it comes to your, which is why we offer the highest quality ingredients in our meals. Every meal we prepare is created with passion and care by our incredible chef and culinary team. We are more passionate
                   than ever that we can truly change people’s
                 lives with clean eating!</p>
                 <Link to="/" className="btn btn-success px-5">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="about-area-details bg-dark py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 bg-dark rounded">
              <div className="image-about">
                <img
                  src="../Image/f4.png"
                  className="img-fluid"
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
              <div className="product-details text-light">
                <p>
                  Exclusive AY-49 Phone Vlog Tripod Vlogging Kits Live Selfie
                  Fill Light Integration with Remote Control Microphone LED
                  Light
                </p>

                <div>
                  <p>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"/>
                    <span>Best Product</span> <br/>
                    <span>Price $10</span>
                  </p>
                </div>
                    <Link className="btn btn-primary mx-1">Buy Now</Link>
                    <Link className="btn btn-warning mx-1">Add to Cart</Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <h3 className="text-light">Offer On Purchase Of Goods</h3>
              <div className="about-offer">
                <ol className="text-light">
                  <li>4kg Fruits <span className="fs-4 text-warning">(2% discount)</span> </li>
                  <li>5kg Vegetable <span className="fs-4 text-warning">(3% discount)</span> </li>
                  <li>6kg Rice <span className="fs-4 text-warning">(2% discount)</span> </li>
                  <li>5kg dal <span className="fs-4 text-warning">(2% discount)</span> </li>
                  <li>5kg Vegetable <span className="fs-4 text-warning">(3% discount)</span> </li>
                  <li>5kg Vegetable <span className="fs-4 text-warning">(3% discount)</span> </li>
                  <li>5kg Vegetable <span className="fs-4 text-warning">(3% discount)</span> </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shop-area-map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3648.333297099215!2d90.31824392501896!3d23.877797178583673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAshulia%20Daffodil%20campus!5e0!3m2!1sen!2sbd!4v1698468237370!5m2!1sen!2sbd"
       width="100%" height="450" style={{border:"0"}} allowfullscreen="" 
      loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
      </div>
      <div className="about-footer bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="care">
                <h3 className="text-danger">Customer Care</h3>
                <ul className="list-unstyled">
                  <li>Help Center</li>
                  <li>How to Buy</li>
                  <li>Returns and Refounds</li>
                  <li>Contact Us</li>
                  <li>Team & Conditions</li>
                  <li>Central Complain Management</li>
                  <li>System</li>
                  <li>Privacy & Secuirity</li>
                </ul>
              </div>
              <div className="earn mt-5">
                <h3 className="fs-3 text-danger">Earn With Page</h3>
                <ul className="list-unstyled">
                  <li>Sell Our Product</li>
                  <li>Our Page University</li>
                  <li>Code and Contact</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <h3 className="text-danger">Food Shop</h3>
              <ul className="list-unstyled">
                <li>About Food Shop</li>
                <li>Digital Payments</li>
                <li>Shop Card</li>
                <li>Privacy Policy</li>
                <li>Shop Mart</li>
                <li>Security</li>
                <li>Shop App</li>
                <li>Shop Exclusive</li>
                <li>Shop Donates</li>
                <li>Shop Cares</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="commerce">
                <h3 className="text-danger">Shop International</h3>
                <ul className="list-unstyled m-2 p-3">
                  <li className="m-1"> <FaHouseFlag className="text-danger mx-2"/> Bangladesh</li>
                  <li className="m-1"> <FaHouseFlag className="text-success mx-2"/>Pakistan</li>
                  <li className="m-1"> <FaHouseFlag className="text-success mx-2"/>Pakistan</li>
                  <li className="m-1"> <FaHouseFlag className="text-primary mx-2"/>India </li>
                  <li className="m-1"> <FaHouseFlag className="text-info mx-2"/> Australia</li>
                  <li className="m-1"> <FaHouseFlag className="text-warning mx-2"/> Srilanka</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <h3 className="text-danger">Exclusive Deals and Offers</h3>
              <ul className="list-unstyled">
                <li>Apple</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <FooterBack/>
    </>
  );
};
export default About;
