import React from 'react'
import './Dashboard.css'
import RadioButton from './RadioButton';
import Buttons from './Buttons';

const Dashboard = ({onPageChange}) => {
    return(
        <div className='flex flex-column justify-center items-center vh-100'>
            <div className='  bg-light-gray br4 pa5'>
                <h1>Start a New Session</h1>
                <RadioButton option={"Quick Session"} color="red"/>
                <RadioButton option={"Detailed Session"}/>
                <div className='pt4'>
                    <Buttons func = {onPageChange} name={"Proceed"} color={"red"} width="100" />
                </div>
            </div>
        </div>
    );
}

export default Dashboard