import React from "react";
import "./SignUp.css";

function SignUp() {
    return (
        <div className='signup-container'>
            <h1>SIGN UP</h1>
            <div className="form-container">
                <div className="form-wrapper">
                <form action="#">
                    <label>Username</label>
                    <input type="text" name="Name" id="" />
                    <label>Username</label>
                    <input type="text" name="Name" id="" />
                    <label>Username</label>
                    <input type="text" name="Name" id="" />
                    <label>Username</label>
                    <input type="text" name="Name" id="" />
                    <button type="submit">Sign up</button>
                </form>
                </div>
                
            </div>
        </div>
    );
}

export default SignUp;
