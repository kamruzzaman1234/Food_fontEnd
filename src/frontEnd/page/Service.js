import React from "react";
import { BsFillBusFrontFill } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { TbDiscountCheck } from "react-icons/tb";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdCropFree } from "react-icons/md";
import {Link} from 'react-router-dom';
const Service = () => {
  return (
    <div className="service-area py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2>Our Service</h2>
        </div>
        <div className="row">
          <div className="col-md-7">
            <div className="row">
              <div
                className="col-lg-6 col-md-6"
                style={{
                  borderBottom: "7px solid green",
                  borderRadius: "20px",
                }}
              >
                <div className="delivary d-flex">
                  <div className=" p-3 align-items-start">
                    <BsFillBusFrontFill className="fs-1 text-warning " />
                  </div>
                  <div className="align-items-end p-3">
                    <p className="mb-0 text-success">HOME DELIVARY</p>
                    <span
                      style={{ fontSize: "13px", fontWeight: "bold" }}
                      className="text-danger"
                    >
                      Charge 100/=
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 col-md-6 "
                style={{
                  borderBottom: "7px solid green",
                  borderRadius: "20px",
                }}
              >
                <div className="delivary d-flex">
                  <div className=" p-3 align-items-start">
                    <TbDiscountCheck className="fs-1 text-warning " />
                  </div>
                  <div className="align-items-end p-3">
                    <p className="mb-0 text-success">ORDER DISCOUNT</p>
                    <span
                      style={{ fontSize: "13px", fontWeight: "bold" }}
                      className="text-danger"
                    >
                      Charge 50%
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-6 col-md-6"
                style={{
                  borderBottom: "7px solid green",
                  borderRadius: "20px",
                }}
              >
                <div className="delivary d-flex">
                  <div className=" p-3 align-items-start">
                    <MdCropFree className="fs-1 text-warning " />
                  </div>
                  <div className="align-items-end p-3">
                    <p className="mb-0 text-success">FREE DELIVARY</p>
                    <span
                      style={{ fontSize: "13px", fontWeight: "bold" }}
                      className="text-danger"
                    >
                      Charge 0%
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-6 col-md-6"
                style={{
                  borderBottom: "7px solid green",
                  borderRadius: "20px",
                }}
              >
                <div className="delivary d-flex">
                  <div className=" p-3 align-items-start">
                    <RiSecurePaymentFill className="fs-1 text-warning " />
                  </div>
                  <div className="align-items-end p-3">
                    <p className="mb-0 text-success font-bold">SAFE PAYMENT</p>
                    <span
                      style={{ fontSize: "13px", fontWeight: "bold" }}
                      className="text-danger"
                    >
                      Charge 0%
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-6 col-md-6 "
                style={{
                  borderBottom: "7px solid green",
                  borderRadius: "20px",
                }}
              >
                <div className="delivary d-flex">
                  <div className=" p-3 align-items-start">
                    <RiSecurePaymentFill className="fs-1 text-warning " />
                  </div>
                  <div className="align-items-end p-3">
                    <p className="mb-0 text-success font-bold">SAFE PAYMENT</p>
                    <span
                      style={{ fontSize: "13px", fontWeight: "bold" }}
                      className="text-danger"
                    >
                      Charge 0%
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 " style={{borderBottom:"7px solid green", borderRadius:"20px"}}>
                            <div className="delivary d-flex">
                                    <div className=" p-3 align-items-end">
                                        <RiSecurePaymentFill className="fs-1 text-warning "/>
                                    </div>
                                    <div className="align-items-end p-3">
                                         <p className="mb-0 text-success font-bold">SAFE PAYMENT</p>
                                         <span style={{fontSize:"13px", fontWeight:"bold"}} className="text-danger">Charge 0%</span>
                                    </div>
                                     
                                </div>
                            </div>
                          </div>
          </div>
          <div className="col-md-5">
               <div className="row">
                    <div className="col-md-4 mb-3">
                        <div className="image">
                            <img src="../Image/f3.png" style={{objectFit:"cover", width:"250px"}}
                             className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-md-8 mb-3">
                        <div className="description">
                            <h4 className="mb-0">Poteto</h4>
                            <p className="mb-0 mt-3">Loream ispum dollar sit amet and conceptetur other side</p>
                            <Link to="" className="btn btn-success mt-3">SHOP NOW</Link>
                        </div>
                    </div>
                    <div className="col-md-8 mt-5">
                         <div className="description">
                            <h4 className="mb-0">Orange</h4>
                            <p className="mb-0 mt-3">Loream ispum dollar sit amet and conceptetur other side</p>
                            <Link to="" className="btn btn-success mt-3">SHOP NOW</Link>
                        </div>
                     </div>
                    <div className=" col-md-4 mt-5">
                    <div className="image">
                            <img src="../Image/f3.png" style={{objectFit:"cover", width:"250px"}}
                             className="img-fluid"/>
                        </div>
                    </div>
               </div>
          </div>
        </div>




      </div>
    </div>
  );
};
export default Service;
