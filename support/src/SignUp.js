import React from 'react'
import './SignUp.css'
import RadioButton from './RadioButton'
import Buttons from './Buttons'
import { useHistory } from 'react-router-dom';


const SignUp = ({ setColor,color}) => {
    const changeColor = (event) => {
        setColor(event.target.value);
    }
    
    return(
        <div className='flex flex-column justify-center items-center vh-100'>
            <article class={`pa4 bg-light-${color} black w-34-ns br3`}>
                <form  className='flex flex-column items-center' action="sign-up_submit" method="get" accept-charset="utf-8">
                    <h3>Create Your Account</h3>
                    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                        <legend class="ph0 mh0 fw6 clip">Sign Up</legend>
                        <div class="mt3">
                            <label class="db fw4 lh-copy f6" for="email-address">Email address</label>
                            <input class="pa2  input-reset ba b--black bg-transparent w-100 measure" type="email" name="email-address"  id="email-address" />
                        </div>
                        <div class="mt3">
                            <label class="db fw4 lh-copy f6" for="password">Password</label>
                            <input class="pa2 input-reset ba  b--black bg-transparent w-100 measure" type="password" name="password"  id="password" />
                        </div>
                        <div class="mt3">
                            <label class="db fw4 lh-copy f6" for="phone">Phone</label>
                            <input class="pa2 input-reset ba b--black bg-transparent w-100 measure"  type="tel" name="phone"  id="phone" />
                        </div>
                        <div class="mt3">
                            <label class="db fw4 lh-copy f6" for="password">Birthday</label>
                            <input class="b pa2 input-reset ba b--black bg-transparent" type="date" name="birthday"  id="birthday" />
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
                    <div class="mt3">
                        <Buttons name="Submit" color={color} width={100} padSize={2}/>
                    </div>
                </form>
            </article>
        </div>
    )
}

export default SignUp