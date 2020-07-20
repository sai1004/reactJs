import React from "react";

class EventBind extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "hello",
    };
    // approch 3 besr way
    // this.clickHandler = this.clickHandler.bind(this);
  }

  //   clickHandler() {
  //     this.setState({
  //       message: "How are you?",
  //     });
  //     console.log(this);
  //   }

  // aproach 4
  clickHandler = () => {
    this.setState({
      message: "How are you?",
    });
  };

  render() {
    return (
      <div>
        <h1> {this.state.message} </h1>
        {/* approach 1 */}
        {/* <button onClick={this.clickHandler.bind(this)}> Click </button> */}

        {/* approach 2 */}

        <button onClick={() => this.clickHandler()}> Click </button>

        {/* approach 3 and 4*/}

        <button onClick={this.clickHandler}> Click </button>
      </div>
    );
  }
}

export default EventBind;
