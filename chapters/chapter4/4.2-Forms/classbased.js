import React from "react";
import "./App.css";

const profile = [];
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert("You have submitted the input successfully: " + this.state.firstName);
    profile.push({ ...this.state });
    
    console.log("profile", profile);
  }

  render() {
    return (
      <main className="App">
        <h1> Hello World </h1>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            placeholder="First Name"
            required
          />
          <br />

          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
            placeholder=" Last Name"
            required
          />
          <br />

          <input
            type="text"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
            placeholder="Age"
            required
          />
          <br />

          <button type="submit"> Submit </button>
        </form>

        <div>
          <h4>
            Name: {this.state.firstName} {this.state.lastName}
          </h4>
          <h4> Age: {this.state.age}</h4>
        </div>
      </main>
    );
  }
}

export default App;
