import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({food, handleClick})=>{
    return(
        <div className="shopping area">
           <div className="col-md-12 m-2">
            <div className="shop-image">
                <img src={food?.img} alt={food?.name} className="img-fluid"/>
            </div>
            <div className="food-title">
                <h3>{food?.CategoryName}</h3>
                <h4>{food?.name}</h4>
                <p>{food?.description}</p>
                <button className="btn btn-info text-dark m-2">Price  {food?.price}</button>
            </div>
            <button className="btn btn-success" onClick={()=>handleClick(food)}>Add to Cart</button>
           </div>
        </div>
    )
}
export default Cards;