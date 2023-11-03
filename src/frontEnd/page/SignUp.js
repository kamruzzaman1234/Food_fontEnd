import React, {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';

const SingUp = ()=>{
    const [regData, setRegData] = useState([]);
    let nevigate = useNavigate()
    const handleSubmit = (event)=>{
        event.preventDefault();
       const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const address = form.address.value;
        const password = form.password.value;
        const userData = {name,email,address,password};
        console.log(userData)

        fetch("https://food-app-tvb0.onrender.com/api/signup", {
            method:"POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(userData),
          
        })
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data);    
            if(data.success){
                toast.success("Register Successfully")
                setRegData(data)
                form.reset()
                nevigate("/login")
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
                            <h3>Create New Account</h3>
                            {/* <p className="text-danger">All ready Registed <Link to="/login"
                             className="btn btn-outline-success mx-2">Login</Link> </p> */}
                        </div>
                    <p>Please fill up the form and visited our Food web site.
                        The one of the biggest popular web site.</p>
                    </div>
                    <div className="col-md-6 px-5 border rounded-4 py-3" style={{background:"rgb(238,238,228)",
                     borderRedius:"10px"}}>
                        <div className="form-area">
                            <form onSubmit={handleSubmit}>
                                <div className="">
                                    <label htmlFor='name'>Name :</label>
                                    <br/>
                                    <input type="text"
                                     name="name"/>
                                </div>
                                
                                <div className="">
                                    <label htmlFor='email'>Email :</label>
                                    <br/>
                                    <input type="email" className=""
                                     name="email"/>
                                </div>
                                
                                <div className="">
                                    <label htmlFor='address'>Address :</label>
                                    <br/>
                                    <input type="text" className=""
                                     name="address"/>
                                </div>
                                
                                <div className="">
                                    <label htmlFor='password'>Password :</label>
                                    <br/>
                                    <input type="password" className=""
                                     name="password"/>
                                </div>
                                <button type="submit" className="btn btn-success">Register</button>
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
export default SingUp;