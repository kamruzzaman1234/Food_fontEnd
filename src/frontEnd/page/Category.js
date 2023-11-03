import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../backendPage/FooterBack';

const Category = ()=>{
    return(
      <>
        <div className="category py-5 bg-light">
           <div className="container">
               <div className="header text-center mb-4">
                  <h3 className="">Category</h3>
               </div>
               <div className="row mt-3">
            <div className="col-md-6">
               <h3 className="fs-1">New Product</h3>
               <h4 className="fs-3 mb-3">INTERIOR</h4>
               <p>A fruits is a very healthful . It was very sweets and testy.Its product
                  not dangures.Food is very helpful and sweet and testy.this is very helpful.
                  loream ispum dollar sit amet and conceptetur.
               </p>
               <Link className="btn btn-dark text-light">Visit Now</Link>
            </div>
            <div className="col-md-6">
              <div className="row">
               <div className="col-md-3"> 
                  <img src="../Image/p2.jpg" alt="Image" className="img-fluid rounded"/>
                  <h5 className="mt-2">Pizza</h5>
               </div>
               <div className="col-md-3"> 
                  <img src="../Image/p1.jpg" alt="Image" className="img-fluid rounded"/>
                  <h5 className="mt-2">Pizza</h5>
               </div>
               <div className="col-md-3"> 
                  <img src="../Image/p2.jpg" alt="Image" className="img-fluid rounded"/>
                  <h5 className="mt-2">Pizza</h5>
               </div>
               <div className="col-md-3"> 
                  <img src="../Image/p1.jpg" alt="Image" className="img-fluid rounded"/>
                  <h5 className="mt-2">Pizza</h5>
               </div>
               <div className="col-md-3"> 
                  <img src="../Image/p2.jpg" alt="Image" className="img-fluid rounded"/>
                  <h5 className="mt-2">Pizza</h5>
               </div>
               <div className="col-md-3"> 
                  <img src="../Image/p1.jpg" alt="Image" className="img-fluid rounded"/>
                  <h5 className="mt-2">Pizza</h5>
               </div>
               <div className="col-md-3"> 
                  <img src="../Image/p2.jpg" alt="Image" className="img-fluid rounded"/>
                  <h5 className="mt-2">Pizza</h5>
               </div>
               <div className="col-md-3"> 
                  <img src="../Image/p1.jpg" alt="Image" className="img-fluid rounded"/>
                  <h5 className="mt-2">Pizza</h5>
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
export default Category;