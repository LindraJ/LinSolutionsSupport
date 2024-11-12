
import React, {Component} from 'react'
import './App.css'
import SignIn from './SignIn'
import Dashboard from './Dashboard'
import Device from './Device'

let pageChange
class App extends Component {
    constructor(){
        super();
        this.state = {
            "device": '',
            "input": '',
            "route": 'SignIn',
        }
    }
    pageChange = (nextPage) => {
        this.setState(
            {"route": `${nextPage}`}
        )

    }


    render(){
        return (
            <div>
              {
                this.state.route === 'SignIn' ? (
                  <SignIn onPageChange={() => this.pageChange("Dashboard")} />
                ) : (
                  this.state.route === 'Dashboard' ? (
                    <Dashboard onPageChange={() => this.pageChange("Device")} />
                  ) : (
                    this.state.route === "Device" ? (
                        <Device onPageChange={() => this.pageChange("Device")}/>
                    ) :
                        <Device onPageChange={() => this.pageChange("Device")}/>
                  )
                )
              }
            </div>
          );
    }
}

export default App