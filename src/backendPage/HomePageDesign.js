import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineShoppingCart,AiFillFacebook, AiFillTwitterCircle,
    AiFillYoutube,AiFillLinkedin} from 'react-icons/ai';
import './Home_Page.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// // import { Carousel } from 'react-responsive-carousel';
// import Carousel from 'react-bootstrap/Carousel';
// //import ExampleCarouselImage from 'components/ExampleCarouselImage';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../App.css';
import About from './About';
import Shop from './Shop';
import NavbarNav from './NavbarNav';
import Footer from './FooterBack';


const HomePageDesign = ({logData})=>{
   const [cart, setCart] = useState([])
  const [show, setShow] = useState(true)
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

   
    return(
        <>
        <NavbarNav size={cart.length} logData={logData} setShow={setShow}/>
            
        <div className="home-slider bg-light py-5 mb-4">
        <Slider {...settings} className="container">
      <div className="">
         
         <div className="row">
            <div className="col-md-4">
               <div className="image-home">
                  <img src="../Image/p1.jpg" alt="Image1" className="img-fluid"/>
               </div>
               <div className="image-title">
                  <p>Loream ispum dollar sit amet and conceptetur other side for the most </p>
                  <button className="btn btn-warning">Primium </button>
               </div>
            </div>
            <div className="col-md-4">
               <div className="image-home">
                  <img src="../Image/p1.jpg" alt="Image1" className="img-fluid"/>
               </div>
               <div className="image-title">
                  <p>Loream ispum dollar sit amet and conceptetur other side for the most </p>
                  <button className="btn btn-warning">Primium </button>
               </div>
            </div>
            <div className="col-md-4">
               <div className="image-home mb-2">
                  <img src="../Image/p1.jpg" alt="Image1" className="img-fluid"/>
               </div>
               <div className="image-title">
                  <p>Loream ispum dollar sit amet and conceptetur other side for the most </p>
                  <button className="btn btn-warning">Primium </button>
               </div>
            </div>
            
         </div>
        {/* <img src="../Image/f1.png" className="img-fluid bg-dark"
         style={{height:"400px", width:"100%", objectFit:"contain"}} alt="Image"/> */}
      </div>
      <div>
         <div className="row">
         <div className="col-md-4">
               <div className="image-home">
                  <img src="../Image/p2.jpg" alt="Image1" className="img-fluid rounded"/>
               </div>
               <div className="image-title">
                  <p>Loream ispum dollar sit amet and conceptetur other side for the most </p>
                  <button className="btn btn-warning">Primium </button>
               </div>
            </div>
            <div className="col-md-4">
               <div className="image-home">
                  <img src="../Image/p2.jpg" alt="Image1" className="img-fluid rounded"/>
               </div>
               <div className="image-title">
                  <p>Loream ispum dollar sit amet and conceptetur other side for the most </p>
                  <button className="btn btn-warning">Primium </button>
               </div>
            </div>
            <div className="col-md-4">
               <div className="image-home">
                  <img src="../Image/p2.jpg" alt="Image1" className="img-fluid rounded"/>
               </div>
               <div className="image-title">
                  <p>Loream ispum dollar sit amet and conceptetur other side for the most </p>
                  <button className="btn btn-warning">Primium </button>
               </div>
            </div>
         </div>
      </div>
      <div>
      <img src="../Image/f3.png" className="img-fluid bg-dark"
         style={{height:"400px", width:"100%", objectFit:"contain"}} alt="Image"/>
      </div>
      <div>
      <img src="../Image/f4.png" className="img-fluid bg-dark"
         style={{height:"400px", width:"100%", objectFit:"contain"}} alt="Image"/>
      </div>
      <div>
      <img src="../Image/f5.png" className="img-fluid bg-dark"
         style={{height:"400px", width:"100%", objectFit:"contain"}} alt="Image"/>
      </div>
      <div>
      <img src="../Image/f6.png" className="img-fluid bg-dark"
         style={{height:"400px", width:"100%", objectFit:"contain"}} alt="Image"/>
      </div>
    </Slider> 
         <div className="online-food py-5 text-light" style={{backgroundAttachment:"fixed"}}>
            <div className="container">
               <div className="row">
               <div className="col-md-4 bg-warning mb-3 py-3 rounded" style={{borderRight:"0.5px solid crimson"}}>
                  <div className="d-flex justify-content-between">
                     <div className="align-items-start">
                        <img src="../Image/p5.png"
                         className="img-fluid"  alt="Image" style={{width:"200px"}}/>
                     </div>
                     <div className="align-items-end">
                        <h4 className="" style={{fontSize:"17px"}}>Burger</h4>
                        <p className="" style={{fontSize:"13px"}}>Fluffy Whole egg scramble that combines
                            shallot, mushroom, sliced asparagus
                             and parmesan</p>
                        <div className="d-flex justify-content-between mt-2">
                           <h4 style={{fontSize:"18px"}}>340 calorise</h4>
                           <AiOutlineShoppingCart className="fs-2 text-light bg-warning rounded"/>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-md-4 bg-warning mb-3 py-3 rounded" style={{borderRight:"0.5px solid crimson"}}>
                  <div className="d-flex justify-content-between">
                     <div className="align-items-start">
                        <img src="../Image/p5.png"
                         className="img-fluid"  alt="Image" style={{width:"200px"}}/>
                     </div>
                     <div className="align-items-end">
                        <h4 className="" style={{fontSize:"17px"}}>Burger</h4>
                        <p className="" style={{fontSize:"13px"}}>Fluffy Whole egg scramble that combines
                            shallot, mushroom, sliced asparagus
                             and parmesan</p>
                        <div className="d-flex justify-content-between mt-2">
                           <h4 style={{fontSize:"18px"}}>340 calorise</h4>
                           <AiOutlineShoppingCart className="fs-2 text-light bg-warning rounded"/>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-md-4 bg-warning mb-3 py-3 rounded" style={{borderRight:"0.5px solid crimson"}}>
                  <div className="d-flex justify-content-between">
                     <div className="align-items-start">
                        <img src="../Image/p5.png"
                         className="img-fluid"  alt="Image" style={{width:"200px"}}/>
                     </div>
                     <div className="align-items-end">
                        <h4 className="" style={{fontSize:"17px"}}>Burger</h4>
                        <p className="" style={{fontSize:"13px"}}>Fluffy Whole egg scramble that combines
                            shallot, mushroom, sliced asparagus
                             and parmesan</p>
                        <div className="d-flex justify-content-between mt-2">
                           <h4 style={{fontSize:"18px"}}>340 calorise</h4>
                           <AiOutlineShoppingCart className="fs-2 text-light bg-warning rounded"/>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-md-4 bg-warning mb-3 py-rounded" style={{borderRight:"0.5px solid crimson"}}>
                  <div className="d-flex justify-content-between">
                     <div className="align-items-start">
                        <img src="../Image/p5.png"
                         className="img-fluid"  alt="Image" style={{width:"200px"}}/>
                     </div>
                     <div className="align-items-end">
                        <h4 className="" style={{fontSize:"17px"}}>Burger</h4>
                        <p className="" style={{fontSize:"13px"}}>Fluffy Whole egg scramble that combines
                            shallot, mushroom, sliced asparagus
                             and parmesan</p>
                        <div className="d-flex justify-content-between mt-2">
                           <h4 style={{fontSize:"18px"}}>340 calorise</h4>
                           <AiOutlineShoppingCart className="fs-2 text-light bg-warning rounded"/>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-md-4 bg-warning mb-3 py-3 rounded" style={{borderRight:"0.5px solid crimson"}}>
                  <div className="d-flex justify-content-between">
                     <div className="align-items-start">
                        <img src="../Image/p5.png"
                         className="img-fluid"  alt="Image" style={{width:"200px"}}/>
                     </div>
                     <div className="align-items-end">
                        <h4 className="" style={{fontSize:"17px"}}>Burger</h4>
                        <p className="" style={{fontSize:"13px"}}>Fluffy Whole egg scramble that combines
                            shallot, mushroom, sliced asparagus
                             and parmesan</p>
                        <div className="d-flex justify-content-between mt-2">
                           <h4 style={{fontSize:"18px"}}>340 calorise</h4>
                           <AiOutlineShoppingCart className="fs-2 text-light bg-warning rounded"/>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-md-4 bg-warning mb-3 py-3 rounded" style={{borderRight:"0.5px solid crimson"}}>
                  <div className="d-flex justify-content-between">
                     <div className="align-items-start">
                        <img src="../Image/p5.png"
                         className="img-fluid"  alt="Image" style={{width:"200px"}}/>
                     </div>
                     <div className="align-items-end">
                        <h4 className="" style={{fontSize:"17px"}}>Burger</h4>
                        <p className="" style={{fontSize:"13px"}}>Fluffy Whole egg scramble that combines
                            shallot, mushroom, sliced asparagus
                             and parmesan</p>
                        <div className="d-flex justify-content-between mt-2">
                           <h4 style={{fontSize:"18px"}}>340 calorise</h4>
                           <AiOutlineShoppingCart className="fs-2 text-light bg-warning rounded"/>
                        </div>
                     </div>
                  </div>
               </div>
               </div>
            </div>
         </div>
        </div>
         <Footer/>
       
        </>
    )
}
export default HomePageDesign;