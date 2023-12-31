import React, { Component } from 'react'

class Fcolor2 extends Component {
constructor (){
    super();
    this.state = {color:"red"}
}

render() {
    return (
    <div>
        <h1> My color is {this.state.color}</h1>
        <button onClick={()=>{this.setState({color:"Green"})}}>Change Color</button>
    </div>
    )
}
}

export default Fcolor2
