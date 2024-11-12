import React from 'react'
import './Dashboard.css'
import RadioButton from './RadioButton';
import { useNavigate } from 'react-router-dom';
import Buttons from './Buttons';

const Dashboard = ({}) => {
    const navigate = useNavigate();
    return(
        <div className='flex flex-column justify-center items-center vh-100'>
            <div className='  bg-light-gray br4 pa5 '>
                <h1>Start a New Session</h1>
                <RadioButton option={"Quick Session"} name={"sessionOptions"} />
                <RadioButton option={"Detailed Session"} name={"sessionOptions"} />
                <div className='pt4'>
                    <Buttons func={() => navigate("/Device")} name={"Proceed"} color={"red"} width="100" padSize={2} />
                </div>
            </div>
        </div>
    );
}

export default Dashboard