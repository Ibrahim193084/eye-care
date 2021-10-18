import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Navigation from './../../Shared/Navigation/Navigation';

const Login = () => {
    return (
        <div> 
            <Navigation/>
            <br />
            <br />
             <h1 className="text-center text-white mt-5">Please log in!</h1>
            <div className="d-flex justify-content-center align-items-center">
              
            <form action="">
                
                <input className="my-2 p-1" placeholder="Email" type="email" name="email" id="" />
                <br />
                <input className="my-2 p-1" placeholder="Password" type="password" name="password" id="" />
                <br />
                <input className="btn btn-primary" type="submit" value="Log in" />
            </form>
            </div>
            <div className=" text-center mt-3">
            <img src="https://img.icons8.com/color/48/000000/google-logo.png"/>
            <img src="https://img.icons8.com/fluency/50/000000/facebook-new.png"/>
            <img src="https://img.icons8.com/fluency/48/000000/github.png"/>
            </div>
            <p className="text-white text-center mt-3">Are you new in Eye Care? <Link to="/signup">Please sign up</Link></p>
          
            <Footer></Footer>
        </div>
    );
};

export default Login;