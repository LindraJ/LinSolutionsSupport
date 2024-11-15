import React from 'react'
import './Dashboard.css'
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
const AWS = require('aws-sdk')
AWS.config.update({region:'us-east-1'});
const cognito = new AWS.CognitoIdentityServiceProvider();

const SignIn = () => {
    const navigate = useNavigate();

    const clientId = 'i9kqccjgbv3nj2p5aapctuano';

    const signInAuth = (username, password) => {
        var params = {
            AuthFlow: "USER_PASSWORD_AUTH",
            ClientId: clientId,
            AuthParameters: {
                USERNAME: username,
                PASSWORD: password,
            }

        }

        cognito.initiateAuth(params,function(err,data){

            if(err){
                console.log(err, err.stack)
                document.getElementById("errorMessage").textContent = "Invalid credentials. Please try again."
            }else {
                console.log(data)
                navigate("/MFA",{state:{session: data.Session, username}});
            }
        })

    }
     
      const submitted =  (event) => {
        event.preventDefault();

        const username = document.getElementById("email-address").value
        const password = document.getElementById("password").value

        signInAuth(username,password);
    };


    return(
        <div className='flex flex-column items-center'>
            <div className='bg-light-gray'>
                <main className="pa4 black-80">
                    <Logo />
                    <form className="measure center">
                        <fieldset id="sign_in" className="ba b--transparent ph0 mh0">
                            <legend className="f6 fw6 ph0 mh0 tc">Sign into Lin Solutions Support</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                            </div>
                        </fieldset>
                        <div className="flex justify-center">
                                <input onClick={submitted} className=" b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
                        </div>
                        <div className="lh-copy mt3">
                            <a onClick= {() => navigate("/SignUp")} href="#0" className="flex justify-center f6 link dim black db">New user? Sign up</a>
                        </div>
                        <p className="red tc"id="errorMessage"></p>
                    </form>
                </main>
            </div>
        </div>
    );
}

export default SignIn