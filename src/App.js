
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './frontEnd/page/Home';
import SingUp from './frontEnd/page/SignUp';
import Login from './frontEnd/page/Login';
import HomePageDesign from './backendPage/HomePageDesign';
import About from './backendPage/About';
import Shop from './backendPage/Shop';
import Mobile from './backendPage/Mobile';
import Main from './backendPage/Main';
import { useState } from 'react';
import Fruits from './backendPage/Fruits';

function App() {
  const [logData, setLogData] = useState([]);
  console.log(logData)
  return (
    <BrowserRouter>
        <Routes>
            <Route extact path="/" element={<Home/>}/>
            <Route extact path="signup" element={<SingUp/>}/>
            <Route extact path="login" element={<Login logData={logData} setLogData={setLogData}/>}/>
            {/* <Route extact path="home_page" element={<HomePageDesign />}/> */}
            <Route extact path="main_page" element={<Main logData={logData}/>}/>
            <Route extact path ="about" element={<About/>}/>
            <Route extact path="shop" element={<Shop logData={logData}/>}/>
            <Route extact path="fruit" element={<Fruits/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
