import React, {Component} from 'react';

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    } 

    increment = () => {
        this.setState({
            count:this.state.count + 1 
        });
    };

    decrement = () => {
        this.setState({
            count:this.state.count - 1 
        });
    };

    render(){
        return(
            <div>
            <h2>This is a Counter App</h2>
            <p class="Count">Count: {this.state.count}</p>
            <div className="btn">
            <button onClick={this.decrement}>Decrement</button>
            <button onClick={this.increment}>Increment</button>
            </div>
            </div>
        );
    }
}

export default Counter;