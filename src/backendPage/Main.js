import React,{useState} from 'react';
import HomePageDesign from './HomePageDesign';
import About from './About';


const Main = ({ logData})=>{
    const [show, setShow] = useState(true);
    const [cart, setCart] = useState([]);
    return(
        <div>
            <HomePageDesign size={cart.length} logData={logData} />
        
        </div>
    )
}
export default Main;