import React from 'react';
import './RadioButton.css';

const RadioButton = ({option}) => {
    return (
        <div className='f4'>
            <input type="radio" name="sessionOption"/>
            <label className='pl2 b--red'>{option}</label>
        </div>
    );
}

export default RadioButton;