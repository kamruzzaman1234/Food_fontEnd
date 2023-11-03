import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineShoppingCart,AiFillFacebook, AiFillTwitterCircle,
    AiFillYoutube,AiFillLinkedin} from 'react-icons/ai';
import Cards from './Cards';
import Cart from './Cart';
import NavbarNav from './NavbarNav';
import Amazon from './Amazon';
import "../App.css";
import axios from 'axios';
import Footer from './FooterBack';

 const Shop = ({logData})=>{
    const [show, setShow] = useState(true)
    const [cart, setCart] = useState([]);
    const [warning, setWarning] = useState(false)
   
    const handleClick = (food)=>{
        let isDisplay = false;
        cart.forEach((product)=>{
            if(food._id === product._id)
                 isDisplay = true
        })
        if(isDisplay){
            setWarning(true)
            setTimeout(()=>{
                setWarning(false)
            },2000)
            return;
        }
            // return;
        setCart([...cart, food])
    console.log(food)
 }
 console.log(logData)
 const handleChange = (food, d)=>{
    // let ind = -1;
    // cart.forEach((item, index)=>{
    //     if (item._id === food._id)
    //         ind = index
    // })
    // const tempArr = cart;

    // tempArr[ind].amount +=d;
    // if (tempArr[ind].amount === 0)
    //     tempArr[ind].amount = 1;
    // setCart([...tempArr])

    
 }
 const handleOrder = () => {
    // Prepare foodItems array from the cart
    const foodItems = cart.map(item => ({
      foodId: item._id,
      quantity: 1, // Assuming quantity is always 1 when adding to the cart
    }));

    // Send a POST request to create the order
    axios.post('https://food-app-tvb0.onrender.com/api/orders', {
      userId: logData?.userEmail?._id, // Replace with the actual user ID
      foodItems,
      totalAmount: calculateTotalAmount(cart), // Implement calculateTotalAmount function to compute total amount
    })
    .then(response => {
      console.log('Order created:', response.data);
      // Optionally, you can clear the cart state or perform other actions upon successful order creation
      setCart([]);
    })
    // .then((data)=>{
    //     setCart(data)
    // })
    .catch(error => {
      console.error('Error creating order: ', error);
    });
  };

  const calculateTotalAmount = (cart) => {
    // Implement your logic to calculate the total amount from the cart items
    // For example, you can sum up the prices of all items in the cart
    return cart.reduce((total, item) => total + parseFloat(item.price), 0);
  };

    return(
        <>
            <NavbarNav size={cart.length} setShow={setShow}/>
            {
                show ? <Amazon handleClick={handleClick}/> : 
                <Cart cart={cart} setCart={setCart}
                handleOrder={handleOrder} handleChange={handleChange}/>
            }
            
            
            {
                warning && <div className="warning">Item is added in the Cart</div>
            }
            <Footer/>
        </>
    )
 }
 export default Shop;