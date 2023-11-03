import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({setLogData})=>{
    // const [logData, setLogData] = useState([]);
    let navigate = useNavigate()
    const handleSubmit = (event)=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const userData = {email, password}
        console.log(userData)
        fetch("https://food-app-tvb0.onrender.com/api/login", {
            method:"POST",
            headers : {
                'content-type':'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then((res)=> res.json())
        .then((data)=>{
            if(data.success){
                toast.success("Log In Success")
                setLogData(data)
                form.reset()
                navigate("/main_page")
            }else{
                toast.error(data.message)
            }
        })
    }
    return(
        <>
        <div className="singup py-4">
            <div className="container">
                <div>
                <Link to="/" className="btn btn-outline-dark">Food App</Link>
                </div>
            </div>
        </div>
        <div className="signup1 py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 left-side">
                    <div className="form-title">
                            <h3>Please Sign In</h3>
                            <p className="text-danger">You can Sign Up<Link to="/signup"
                             className="btn btn-outline-success mx-2">Sign Up</Link> </p>
                        </div>
                    <p>Please fill up the form and visited our Food web site.
                        The one of the biggest popular web site.</p>
                    </div>
                    <div className="col-md-6 px-5 border rounded-4 py-3" style={{background:"rgb(238,238,228)",
                     borderRedius:"10px"}}>
                        <div className="form-area">
                            <form onSubmit={handleSubmit}>  
                                <div className="">
                                    <label htmlFor='email'>Email :</label>
                                    <br/>
                                    <input type="email" className=""
                                     name="email"/>
                                </div> 
                                <div className="">
                                    <label htmlFor='password'>Password :</label>
                                    <br/>
                                    <input type="password" className=""
                                     name="password"/>
                                </div>
                                <button type="submit" className="btn btn-success">Log In</button>
                                
                            </form>
                            <ToastContainer/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Login;