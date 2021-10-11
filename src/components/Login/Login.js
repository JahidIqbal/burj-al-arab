import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const Login = () => {
    const { user, logInusingGoogle } = useAuth();
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form >
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <input type="submit" value="submit" />
                </form>
                <p>New to Burj khalifa? <Link to="/register">Create Account</Link></p>
                <div>------or--------</div>
                <button
                    className="btn-regular"
                    onClick={logInusingGoogle}
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;