import React, { Component } from "react";
import ReactDOM from "react-dom";

// #1
class MyApp extends React.Component {
  render() {
    return (
      <div>
        <Header userName="JohnWick" />
        <Greeting />
      </div>
    );
  }
}

// #2

class Header extends React.Component {
  render() {
    return (
      <div>
        <header> Welcome, {this.props.userName} </header>
      </div>
    );
  }
}

// #3

class Greeting extends Component {
  render() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if (hours < 12) {
      timeOfDay = "morning";
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon";
    } else {
      timeOfDay = "night";
    }

    return (
      <h1> Good { timeOfDay } to you, sir or madam! </h1>
    )
  }
}

ReactDOM.render(<MyApp />, document.getElementById("root"));
