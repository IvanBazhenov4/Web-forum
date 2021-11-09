import React from 'react';

class ClassDodo extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            count:99
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    increment() {
        this.setState({count: this.state.count + 1})
    }
    decrement() {
        this.setState({count: this.state.count - 1})
    }
    render() {
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>Eggs+</button>
                <button onClick={this.decrement}>Eggs-</button>
            </div>
        )
    }
}
export default ClassDodo;