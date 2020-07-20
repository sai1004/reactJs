import React from "react";


class Example extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            toggle: true
        }

        this.onClick = this.onClick.bind(this)
    }

    onClick = () => {
        this.setState((prevState, props) => ({
            toggle: !prevState.toggle
        }))
    }

    render() {
        return (
            <div onClick={this.onClick}>
                Hello, {this.props.name}! I am Example.
                <br />
                Toggle is: {this.state.toggle}
            </div>
        )
    }
}


export default Example;