import React from 'react'
import './Buttons.css'

const Buttons = ({name, color,width , func}) => {
    return(
        <div>
            <button onClick={func} type="submit" className = {`bg-${color} w-${width} b--none white br pa2`} >{name}</button>
        </div>
    )
}

export default Buttons