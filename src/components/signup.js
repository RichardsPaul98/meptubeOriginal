import React, { Component } from 'react';
import './signup.css';

class signup extends Component {
    render() {
        return (
            <div>
                <div class="wrapper fadeInDown">

                    <div id="formContent">
                        <div class="fadeIn first">
                            <h1>Sign Up</h1>
                        </div>
                        <form>
                            <input type="text" id="fid" class="fadeIn second" name="login" placeholder="First Name"></input><br></br>
                            <input type="text" id="lid" class="fadeIn second" name="login" placeholder="Last Name"></input><br></br>
                            <input type="text" id="lid" class="fadeIn second" name="login" placeholder="Year"></input><br></br>
                            <input type="text" id="lid" class="fadeIn second" name="login" placeholder="Department"></input><br></br>
                            <input type="text" id="lid" class="fadeIn second" name="login" placeholder="Roll Number"></input><br></br>
                            <input type="text" id="password" class="fadeIn third" name="login" placeholder="Password"></input><br></br>

                        </form>
                        <div id="formFooter">
                            <input type="submit" class="fadeIn fourth" value="Sign Up"></input>
                        </div>
                        </div>
                    </div>
                </div>
                );
            }
        }
        
export default signup;