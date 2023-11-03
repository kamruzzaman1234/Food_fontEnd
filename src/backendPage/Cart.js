import React, {useState, useEffect} from 'react';

const Cart = ({cart, setCart, handleChange, handleOrder})=>{
    const [price, setPrice] = useState(0)
    const handlePrice = ()=>{
        let ans = 0;
        cart.map((item)=>(
            ans += item.amount * item.price
        ))

        setPrice(ans)

       }
      

    const handleRemove = (_id)=>{
        const arr = cart.filter((food)=>food._id !== _id)
        setCart(arr)
        //  handlePrice()
    }

    useEffect(()=>{
        handlePrice()
    },[])
   
    return(
        <article>
            {
                cart.map((food)=>(
                    <div className="cart-area">
                    <div className="cart_box mb-3
                     container align-items-center
                      d-flex justify-content-between" key={food._id} style={{borderBottom:"2px solid black"}}>
                      <div className="cart_img col-md-3">
                        <img src={food.img} className="img-fluid" style={{height:"100px", width:"160px"}}/>
                        <p>{food.CategoryName}</p>    
                    </div>  
                    <div className="">
                        <button className="btn btn-dark mx-2" onClick={()=>handleChange(food, +1)}>+</button>
                        <button className="btn btn-warning">{food.amount}</button>
                        <button className="btn btn-dark mx-2" onClick={handleChange(food, -1)}>-</button>
                    </div>
                    <div className="d-block">
                        <button className="btn btn-warning mx-2 ">{food.price}</button>
                        <button className="btn btn-danger mx-2" 
                        onClick={()=>handleRemove(food._id)}>Remove</button>
                    </div>
                    </div>

                    </div>
                ))
            }
            <div className="container">
                <div className="py-3 d-flex justify-content-between align-items-center">
                <span className="text-warning fs-4">Total Price of  Your cart</span>
                <span className="text-success fs-4">Rs - {price}</span>
                </div>
               <div>
               <button onClick={()=>handleOrder()} className="btn btn-inline w-100 btn-success btn-block">Order Now</button>
               </div>
               
            </div>
            
        </article>
    )
}
export default Cart;