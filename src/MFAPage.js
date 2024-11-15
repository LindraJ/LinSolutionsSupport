import React, {useState} from 'react'
import './MFAPage.css'
import AWS from 'aws-sdk'
import { useNavigate, useLocation } from "react-router-dom";
import Buttons from './Buttons';



const cognito = new AWS.CognitoIdentityServiceProvider()
const MFAPage = () => {
    
    const {state} = useLocation();
    const navigate = useNavigate();
    const [mfaCode, setMfaCode] = useState('');
    const [errorMassage, setErrorMessage] = useState();
    const clientId = 'i9kqccjgbv3nj2p5aapctuano'

    const {session, username} = state

    const mfaSubmit = (event) =>{
        event.preventDefault();
        setErrorMessage('');

        var params ={
            ChallengeName: "SMS_MFA",
            ClientId: clientId,
            ChallengeResponses:{
                "SMS_MFA_CODE": mfaCode,
                "USERNAME": username
            },
            Session: session
        }

        cognito.respondToAuthChallenge(params,function(err,data){
            if (err){
                console.log(err, err.stack)
                setErrorMessage('Invalid MFA code. Please try again.');
            }else{
                navigate('/Dashboard')
            }
        })
    }

    return(
        <div className='flex bg-light-gray vh-100 flex-column justify-center items-center'>
            <h2>Multi-Factor Authentication</h2>
            <p>Please enter the verfication that was sent to your device.</p>
            <form >
                <div className=''>
                    <label htmlFor='mfaInput'>Enter MFA Code:  </label>
                    <input type='text' id="mfa-code" maxLength={'6'} value={mfaCode} onChange={(e) => setMfaCode(e.target.value)}></input>
                </div>
                {errorMassage && <p className="red tc">{errorMassage}</p>}
                <div className='tc pt4'>
                    <Buttons func={mfaSubmit} color={"red"} width={75} name="Confirm" padSize={2}/>
                </div>
            </form>
        </div>
    )



}

export default MFAPage