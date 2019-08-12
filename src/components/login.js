import React from 'react';
import './login.css';

function Login() {
    return (
        <div>
        <div class="wrapper fadeInDown">
            <div class="fadeIn first">
                <center><h1>LOGIN</h1></center>
            </div>
            <div id="formContent">

                <form>
                    <input type="text" id="userid" class="fadeIn second" name="login" placeholder="User Name"></input>
                    <input type="text" id="password" class="fadeIn third" name="login" placeholder="Password"></input>
                    <br/>
                    <a class="underlineHover" href="./signup.js">Forgot Password?</a><span> </span>
			        <a class="underlineHover" href="signup.js">Sign Up</a>
		
		        </form>
               
                <div id="formFooter">
                    <input type="submit" class="fadeIn fourth" value="Log In"></input>
                </div>
            </div>
	     </div>
        </div> 
        );
     } 
            
            
export default Login;