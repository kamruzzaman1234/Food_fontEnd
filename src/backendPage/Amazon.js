import React,{useState, useEffect} from 'react';
import Cards from './Cards';

const Amazon = ({handleClick})=>{
    const [foodItem, setFoodItem] = useState([])
    useEffect(()=>{
        fetch('https://food-app-tvb0.onrender.com/api/createFood')
        .then((res)=>res.json())
        .then((data)=>{
            setFoodItem(data)
        })
    },[])
    return(
        <section>
             <div className="product-area">
            <div className="container">
                <div className="row">
                {
                // foodItem.map(food=>(
                //     <div className="col-12 col-md-4 col-lg-3">
                //         <Cards  food={food} handleClick={handleClick}/>
                //     </div>
                // ))
                foodItem.map((food)=>(
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <Cards food={food} key={food._id}  handleClick={handleClick}/>
                    </div>
                ))
              }
                </div>
            </div>
        </div>
        </section>
    )
}
export default Amazon;