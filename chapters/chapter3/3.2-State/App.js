import React from "react";


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            ans: "Yes"
        }
        // props are imuteable non-changeable 
        // this.props.name = " Some New Value, (Impossible to Change) "
        // state is used in class based Components
    }

    render() {
        return (
            <div>
                <h1> Is State important to know? {this.state.ans} </h1>

                <ChildComponent answer={this.state.ans} />
                {/* state value in ChildComponent can be access by props */}
            </div>
        )
    }
}

export default App;