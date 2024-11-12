import React from 'react'
import './Dashboard.css'
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';

const SignIn = () => {
    const navigate = useNavigate();

    return(
        <div className='flex flex-column items-center'>
            <div className='bg-light-gray'>
                <main class="pa4 black-80">
                    <Logo />
                    <form class="measure center">
                        <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                            <legend class="f6 fw6 ph0 mh0 tc">Sign into Lin Solutions Support</legend>
                            <div class="mt3">
                                <label class="db fw6 lh-copy f6" for="email-address">Email</label>
                                <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                            </div>
                            <div class="mv3">
                                <label class="db fw6 lh-copy f6" for="password">Password</label>
                                <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                            </div>
                        </fieldset>
                        <div class="flex justify-center">
                                <input onClick= {() => navigate("/Dashboard")} class=" b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
                        </div>
                        <div class="lh-copy mt3">
                            <a onClick= {() => navigate("/SignUp")} href="#0" class="flex justify-center f6 link dim black db">New user? Sign up</a>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    );
}

export default SignIn