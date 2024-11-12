import React from 'react'
import './Buttons.css'

const Buttons = ({name, color,width , func, padSize}) => {
    return(
        <div>
            <button onClick={func} type="submit" className = {`bg-${color} w-${width} b--none white br3 pa${padSize}`} >{name}</button>
        </div>
    )
}

export default Buttons