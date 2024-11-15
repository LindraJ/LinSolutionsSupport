import React, { useState } from 'react'
import './SignUp.css'
import RadioButton from './RadioButton'
import Buttons from './Buttons'
import { useHistory } from 'react-router-dom';
const AWS = require('aws-sdk')
AWS.config.update({region:'us-east-1'});
const cognito = new AWS.CognitoIdentityServiceProvider();




const SignUp = ({ setColor,color}) => {
    const [fullName, setFullName] = useState('')
    const [email,setEmail] = useState('');
    const [password,setPasswprd] = useState('');
    const [phone,setPhone] = useState('');
    const [birthday,setBirthday] = useState('');
    const [themeColor, setThemeColor] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const clientId = 'i9kqccjgbv3nj2p5aapctuano'

    const handleSignUp = async (event) => {
        event.preventDefault();

        const params = {
            ClientId: clientId,
            Password: password,
            Username: email,
            UserAttributes: [
                {Name: "email", Value: email},
                {Name: "phone_number", Value: phone},
                {Name: "name", Value: fullName},
                {Name: "birthdate", Value: birthday},
                {Name: "preferred_username", Value: fullName},
                {Name: "custom:themeColor", Value: color}
            ]
        }
    
        try {
            const data = await cognito.signUp(params).promise();
            console.log("Sign-up successful:", data);
            setMessage('Sign-up successful! Please wait for us to review your account.');

        } catch (err) {
            console.error("Error signing up:", err);
            setMessage('Error signing up, please try again.');
        }
    }

    
    const changeColor = (event) => {
        setColor(event.target.value);
    }
    
    return(
        <div className='flex flex-column justify-center items-center vh-100'>
            <article className={`pa4 bg-light-${color} black w-34-ns br3`}>
                <form  className='flex flex-column items-center' onSubmit={handleSignUp} action="sign-up_submit" method="get" accept-charse="utf-8">
                    <h3>Create Your Account</h3>
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="ph0 mh0 fw6 clip">Sign Up</legend>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" htmlFor="fullName">Full Name</label>
                            <input className="pa2  input-reset ba b--black bg-transparent w-100 measure" onChange= {(e) => setFullName(e.target.value)} value={fullName} type="text" name="fullName"  id="fullName" />
                        </div>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
                            <input className="pa2  input-reset ba b--black bg-transparent w-100 measure" onChange= {(e) => setEmail(e.target.value)} value={email} type="email" name="email-address"  id="email-address" />
                        </div>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
                            <input className="pa2 input-reset ba  b--black bg-transparent w-100 measure" onChange={(e) => setPasswprd(e.target.value)} value={password} type="password" name="password"  id="password" />
                        </div>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" htmlFor="phone">Phone (include + and the country code, for example +12065551212.)</label>
                            <input className="pa2 input-reset ba b--black bg-transparent w-100 measure" onChange={(e) => setPhone(e.target.value)}  type="tel" name="phone"  id="phone" />
                        </div>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" htmlFor="password">Birthday</label>
                            <input className="b pa2 input-reset ba b--black bg-transparent" onChange={(e) => setBirthday(e.target.value)} value={birthday} type="date" name="birthday"  id="birthday" />
                        </div>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" htmlFor="favorite-color">Theme Color</label>
                            <div className='flex justify-around'>
                                <div className='mr2'>
                                    <label>
                                        <input
                                                type="radio"
                                                name="favColor"
                                                value="red"
                                                checked={color === 'red'}
                                                onChange={changeColor} // Properly passing changeColor
                                        />
                                            Red
                                        </label>
                                </div>
                                <div className='mr2'>
                                    <label>
                                        <input
                                                type="radio"
                                                name="favColor"
                                                value="green"
                                                checked={color === 'green'}
                                                onChange={changeColor} // Properly passing changeColor
                                        />
                                            Green
                                    </label>
                                </div>
                                <div className='mr2'>
                                    <label>
                                        <input
                                                type="radio"
                                                name="favColor"
                                                value="purple"
                                                checked={color === 'purple'}
                                                onChange={changeColor} // Properly passing changeColor
                                        />
                                            Purple
                                    </label>
                                </div>
                                <div className='mr2'>
                                    <label>
                                        <input
                                                type="radio"
                                                name="favColor"
                                                value="pink"
                                                checked={color === 'pink'}
                                                onChange={changeColor} // Properly passing changeColor
                                        />
                                            Pink
                                    </label>
                                </div>
                                <div className='mr2'>
                                </div>
                                <div className='mr2'>
                                    <label>
                                        <input
                                                type="radio"
                                                name="favColor"
                                                value="blue"
                                                checked={color === 'blue'}
                                                onChange={changeColor} // Properly passing changeColor
                                        />
                                            Blue
                                    </label>
                                </div>
                            
                                <div className='mr2'>
                                    <label>
                                        <input
                                                type="radio"
                                                name="favColor"
                                                value="yellow"
                                                checked={color === 'yellow'}
                                                onChange={changeColor} // Properly passing changeColor
                                        />
                                            Yellow
                                    </label>
                                </div>
                                    
                            </div>
                        </div>

                    </fieldset>
                    <div className="mt3">
                        <Buttons  name="Submit" color={color} width={100} padSize={2}/>
                    </div>
                </form>
            </article>
            {message && <p>{message}</p>}
        </div>
    )
}

export default SignUp