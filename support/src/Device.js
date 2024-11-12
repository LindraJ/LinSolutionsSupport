import React from 'react'
import './Device.css'
import Buttons from './Buttons'
import { library, icon } from '@fortawesome/fontawesome-svg-core'

const Device = () => {
    return(
        <div className='flex flex-column justify-center items-center vh-100'>
            <div className=" w-50 tc">
                <h1>Select Your Device</h1>
                <p>Please choose the device you currently using proceed.</p>
                <div className='flex justify-center device '>
                    <div className='  pa3 '>              
                        <Buttons name={"Mobile Device "} color= {"red"}   padSize={3}/>
                        <svg className='w-10 mt3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64L80 64l0 320 224 0 0-320z"/></svg>
                    </div>
                    <div className='pa3 '>              
                        <Buttons name={"Computer"} color= {"red"}  padSize={3}/>
                        <svg className='w-20 mt3 'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M384 96l0 224L64 320 64 96l320 0zM64 32C28.7 32 0 60.7 0 96L0 320c0 35.3 28.7 64 64 64l117.3 0-10.7 32L96 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-74.7 0-10.7-32L384 384c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L64 32zm464 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0zm16 64l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-16 80c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16zm32 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
                    </div>
                </div>
                <div className='mt3'>
                <Buttons name={"Start remote session"} color= {"red"}  width={"25"} padSize={3} />
                </div>
            </div>
        </div>
    )
}

export default Device