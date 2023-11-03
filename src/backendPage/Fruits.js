import React,{useState} from 'react';
import NavbarNav from './NavbarNav';

const Fruits = ()=>{
    const [cart, setCart] = useState([]);
    const [show, setShow] = useState(true)
    return(
        <>
            <NavbarNav size={cart.length} setShow={setShow}/>
            <div className="fruits-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-3">
                           <div className="image-area mb-2">
                           <img src="../Image/p1.jpg"
                      className="img-fluid rounded" alt="Image" style={{objectFit:"contain"}}/>
                           </div>
                           <div className="img-title">
                                <h4>Pizza</h4>
                                <p>Price - 45$</p>
                                <button className="btn btn-warning">Shop Now</button>
                           </div>
                        </div>
                        <div className="col-md-4 mb-3">
                           <div className="image-area mb-2">
                           <img src="../Image/p2.jpg"
                      className="img-fluid rounded" alt="Image" style={{objectFit:"contain"}}/>
                           </div>
                           <div className="img-title">
                                <h4>Pizza</h4>
                                <p>Price - 45$</p>
                                <button className="btn btn-warning">Shop Now</button>
                           </div>
                        </div>
                        <div className="col-md-4 mb-3">
                           <div className="image-area mb-2">
                           <img src="../Image/p2.jpg"
                      className="img-fluid rounded" alt="Image" style={{objectFit:"contain"}}/>
                           </div>
                           <div className="img-title">
                                <h4>Pizza</h4>
                                <p>Price - 45$</p>
                                <button className="btn btn-warning">Shop Now</button>
                           </div>
                        </div>
                        <div className="col-md-4 mb-3">
                           <div className="image-area mb-2">
                           <img src="../Image/p2.jpg"
                      className="img-fluid rounded" alt="Image" style={{objectFit:"contain"}}/>
                           </div>
                           <div className="img-title">
                                <h4>Pizza</h4>
                                <p>Price - 45$</p>
                                <button className="btn btn-warning">Shop Now</button>
                           </div>
                        </div>
                        <div className="col-md-4 mb-3">
                           <div className="image-area mb-2">
                           <img src="../Image/p2.jpg"
                      className="img-fluid rounded" alt="Image" style={{objectFit:"contain"}}/>
                           </div>
                           <div className="img-title">
                                <h4>Pizza</h4>
                                <p>Price - 45$</p>
                                <button className="btn btn-warning">Shop Now</button>
                           </div>
                        </div>
                        <div className="col-md-4 mb-3">
                           <div className="image-area mb-2">
                           <img src="../Image/p2.jpg"
                      className="img-fluid rounded" alt="Image" style={{objectFit:"contain"}}/>
                           </div>
                           <div className="img-title">
                                <h4>Pizza</h4>
                                <p>Price - 45$</p>
                                <button className="btn btn-warning">Shop Now</button>
                           </div>
                        </div>
                        <div className="col-md-4 mb-3">
                           <div className="image-area mb-2">
                           <img src="../Image/p2.jpg"
                      className="img-fluid rounded" alt="Image" style={{objectFit:"contain"}}/>
                           </div>
                           <div className="img-title">
                                <h4>Pizza</h4>
                                <p>Price - 45$</p>
                                <button className="btn btn-warning">Shop Now</button>
                           </div>
                        </div>
                        <div className="col-md-4 mb-3">
                           <div className="image-area mb-2">
                           <img src="../Image/p2.jpg"
                      className="img-fluid rounded" alt="Image" style={{objectFit:"contain"}}/>
                           </div>
                           <div className="img-title">
                                <h4>Pizza</h4>
                                <p>Price - 45$</p>
                                <button className="btn btn-warning">Shop Now</button>
                           </div>
                        </div>
                        <div className="col-md-4 mb-3">
                           <div className="image-area mb-2">
                           <img src="../Image/p2.jpg"
                      className="img-fluid rounded" alt="Image" style={{objectFit:"contain"}}/>
                           </div>
                           <div className="img-title">
                                <h4>Pizza</h4>
                                <p>Price - 45$</p>
                                <button className="btn btn-warning">Shop Now</button>
                           </div>
                        </div>
                        <div className="col-md-4 mb-3">
                           <div className="image-area mb-2">
                           <img src="../Image/p2.jpg"
                      className="img-fluid rounded" alt="Image" style={{objectFit:"contain"}}/>
                           </div>
                           <div className="img-title">
                                <h4>Pizza</h4>
                                <p>Price - 45$</p>
                                <button className="btn btn-warning">Shop Now</button>
                           </div>
                        </div>
                        <div className="col-md-4 mb-3">
                           <div className="image-area mb-2">
                           <img src="../Image/p2.jpg"
                      className="img-fluid rounded" alt="Image" style={{objectFit:"contain"}}/>
                           </div>
                           <div className="img-title">
                                <h4>Pizza</h4>
                                <p>Price - 45$</p>
                                <button className="btn btn-warning">Shop Now</button>
                           </div>
                        </div>
                        <div className="col-md-4 mb-3">
                           <div className="image-area mb-2">
                           <img src="../Image/p2.jpg"
                      className="img-fluid rounded" alt="Image" style={{objectFit:"contain"}}/>
                           </div>
                           <div className="img-title">
                                <h4>Pizza</h4>
                                <p>Price - 45$</p>
                                <button className="btn btn-warning">Shop Now</button>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Fruits;