//EXERCISE 1 : React Error Boundary Simulation

import React, { Component } from "react";

class BuggyCounter extends Component {
    constructor() {
        super();
        //Initialize the state with a counter starting from 0
        this.state = {
            counter: 0
        };
    };
//This method handles the click event, increasing the counter by 1
    hendleClick = () => {
        this.setState({ counter: this.state.counter + 1 })
    }
 //If the counter exceeds 4, throw an error
    render() {
        if (this.state.counter > 4) {
            throw new Error('I crashed!!!');
        }
 //Render the component with a click handler and display the counter
        return (
            <div onClick={this.hendleClick} style={{backgroundColor:'rgb(116, 143, 225)', margin:'2px', color:'white'}}>
                <p>Click on me 5 times!</p>
                {this.state.counter}
            </div>
        );
    };
};

export default BuggyCounter;