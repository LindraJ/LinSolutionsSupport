import React, {Component} from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Switch, Link} from 'react-router-dom';
import SignIn from './SignIn'
import Dashboard from './Dashboard'

import Device from './Device'
import SignUp from './SignUp'
import MFAPage from './MFAPage';

let pageChange
let setColor
let colorsList
class App extends Component {
    constructor(){
        super();
        this.state = {
            "device": '',
            "input": '',
            "route": 'SignIn',
            "color": "gray"
        }
    }

    colorsList=["Red", "Green"]
    pageChange = (nextPage) => {
        this.setState(
            {"route": `${nextPage}`}
        )

    }

    setColor = (newColor) => {
        
        this.setState({
            "color": newColor
        })
    }


    render(){
        return (
            <Router>
                <div>
                    <Routes>
                        <Route path = "/" element={<SignIn />}/>
                        <Route path="/MFA" element= {<MFAPage />} />
                        <Route path = "/Dashboard" element={<Dashboard />}/>
                        <Route path = "/Signup" element={<SignUp setColor={this.setColor} color={this.state.color} />} />
                        <Route path = "/Device" element={<Device />}/>
                    </Routes>
                </div>
            </Router>
        )    
    }    
}

export default App;