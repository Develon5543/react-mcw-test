import React, { Component } from "react";

class RaisedButton extends Component {
    render(){
        return(
            <button className="mdc-button mdc-button--raised">
                <div className="mdc-button__ripple"></div>
                <span className="mdc-button__label">{this.props.name}</span>
            </button>
        )
    }
};

RaisedButton.defaultProps = {
    name: "Unnamed"
}

class App extends Component {
    render(){
        return(
            <div className="App">
                <h1>Hi again</h1>
                <RaisedButton />
                <RaisedButton name="Yooo" />
                <RaisedButton />
                <p>Turns out that you can mix React, Material Components for the Web, and nw.js in order to create a cool webapp.</p>
            </div>
        );
    }
}

export default App;
