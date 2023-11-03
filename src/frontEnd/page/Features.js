import React from 'react';
import {AiFillApple} from 'react-icons/ai';
import ReactStars from "react-rating-stars-component";
import {LuBanana} from 'react-icons/lu';
import {HiCake} from 'react-icons/hi';

const Features = ()=>{
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
    return(
        <div className="feature-area py-5 bg-light">
            <div className="container">
                <div className="text-center mb-5">
                    <h2>Food Review</h2>
                </div>
                <div className="row">
                    <div className="col-md-4 col-lg-3 col-sm-6 my-3">
                        <div>
                            <img src="../Image/f1.png" className="img-fluid"/>
                        </div> 
                        <p className="mb-1">Italic Apple Very Sweet and Juscy</p>
                        <p className="mb-0 text-success ">Price $2</p>
                       <span>
                       <ReactStars
                        count={5}
                         onChange={ratingChanged}
                          size={20}
                         activeColor="#ffd700"
                        />,

                       </span>
                        <button className="btn btn-success">Shop Now</button>

                    </div>
                    <div className="col-md-4 col-lg-3 col-sm-6 my-3">
                     <div>
                            <img src="../Image/f1.png" className="img-fluid"/>
                        </div> 
                        <p className="mb-1">Italic Apple Very Sweet and Juscy</p>
                        <p className="mb-0 text-success">Price $2</p>
                        <span>
                       <ReactStars
                        count={5}
                         onChange={ratingChanged}
                          size={20}
                         activeColor="#ffd700"
                        />,

                       </span>
                        <button className="btn btn-success">Shop Now</button>

                    </div>
                    <div className="col-md-4 col-lg-3 col-sm-6 my-3">
                    <div>
                            <img src="../Image/f1.png" className="img-fluid"/>
                        </div> 
                        <p className="mb-1">Italic Apple Very Sweet and Juscy</p>
                        <p className="mb-0 text-success">Price $2</p>
                        <span>
                       <ReactStars
                        count={5}
                         onChange={ratingChanged}
                          size={20}
                         activeColor="#ffd700"
                        />,

                       </span>
                        <button className="btn btn-success">Shop Now</button>

                    </div>
                    <div className="col-md-4 col-lg-3  col-sm-6 my-3">
                     <div>
                            <img src="../Image/f1.png" className="img-fluid"/>
                        </div> 
                        <p className="mb-1">Italic Apple Very Sweet and Juscy</p>
                        <p className="mb-0 text-success">Price $2</p>
                        <span>
                       <ReactStars
                        count={5}
                         onChange={ratingChanged}
                          size={20}
                         activeColor="#ffd700"
                        />,

                       </span>
                        <button className="btn btn-success">Shop Now</button>

                    </div>
                    <div className="col-md-4 col-lg-3 col-sm-6 my-3">
                    <div>
                            <img src="../Image/f1.png" className="img-fluid"/>
                        </div> 
                        <p className="mb-1">Italic Apple Very Sweet and Juscy</p>
                        <p className="mb-0 text-success">Price $2</p>
                        <span>
                       <ReactStars
                        count={5}
                         onChange={ratingChanged}
                          size={20}
                         activeColor="#ffd700"
                        />,

                       </span>
                        <button className="btn btn-success">Shop Now</button>
                    </div>
                    <div className="col-md-4 col-lg-3 col-sm-6 my-2">
                    <div>
                            <img src="../Image/f1.png" className="img-fluid"/>
                        </div> 
                        <p className="mb-1">Italic Apple Very Sweet and Juscy</p>
                        <p className="mb-0 text-success">Price $2</p>
                        <span>
                       <ReactStars
                        count={5}
                         onChange={ratingChanged}
                          size={20}
                         activeColor="#ffd700"
                        />,

                       </span>
                        <button className="btn btn-success">Shop Now</button>

                    </div>
                    <div className="col-md-4 col-lg-3 col-sm-6 my-3">
                    <div>
                            <img src="../Image/f1.png" className="img-fluid"/>
                        </div> 
                        <p className="mb-1">Italic Apple Very Sweet and Juscy</p>
                        <p className="mb-0 text-success">Price $2</p>
                        <span>
                       <ReactStars
                        count={5}
                         onChange={ratingChanged}
                          size={20}
                         activeColor="#ffd700"
                        />,

                       </span>
                        <button className="btn btn-success">Shop Now</button>

                    </div>
                    <div className="col-md-4 col-lg-3 col-sm-6 my-3">
                    <div>
                            <img src="../Image/f1.png" className="img-fluid"/>
                        </div> 
                        <p className="mb-1">Italic Apple Very Sweet and Juscy</p>
                        <p className="mb-0 text-success">Price $2</p>
                        <span>
                       <ReactStars
                        count={5}
                         onChange={ratingChanged}
                          size={20}
                         activeColor="#ffd700"
                        />,

                       </span>
                        <button className="btn btn-success">Shop Now</button>

                    </div>
                    <div className="col-md-4 col-lg-3 col-sm-6 my-3">
                    <div>
                            <img src="../Image/f1.png" className="img-fluid"/>
                        </div> 
                        <p className="mb-1">Italic Apple Very Sweet and Juscy</p>
                        <p className="mb-0 text-success">Price $2</p>
                        <span>
                       <ReactStars
                        count={5}
                         onChange={ratingChanged}
                          size={20}
                         activeColor="#ffd700"
                        />,

                       </span>
                        <button className="btn btn-success">Shop Now</button>

                    </div>

                    <div className="col-md-4 col-lg-3 col-sm-6 my-3">
                    <div>
                            <img src="../Image/f1.png" className="img-fluid"/>
                        </div> 
                        <p className="mb-1">Italic Apple Very Sweet and Juscy</p>
                        <p className="mb-0 text-success">Price $2</p>
                        <span>
                       <ReactStars
                        count={5}
                         onChange={ratingChanged}
                          size={20}
                         activeColor="#ffd700"
                        />,

                       </span>
                        <button className="btn btn-success">Shop Now</button>

                    </div>
                   
            </div>
                

                  
                

            </div>
        </div>
    )
}
export default Features;