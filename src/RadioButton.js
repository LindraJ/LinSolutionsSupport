import React from 'react';
import './RadioButton.css';

const RadioButton = ({option, name, func,value, color}) => {
    return (
        <div className='f4'>
            <label>
                <input
                    type="radio"
                    name={name}
                    value={value}
                    checked={color == {value}}
                    onChange={func} 
                />
                    {option}
            </label>
        </div>
    );
}

export default RadioButton;