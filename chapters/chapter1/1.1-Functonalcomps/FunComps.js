import React from "react";
import ReactDOM from "react-dom";

// React Functional Component

function MyApp() {
    // JSX
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}


// JSX do not allow two elements next to each Other

function WrongWay() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>

        <ol>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ol>
    )
}

// So Wrap it into the parent div element

function RightWayIsWrapIntoDiv() {

    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>

            <ol>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ol>
        </div>
    )
}

ReactDOM.render(<MyApp />, document.getElementById("root"));
ReactDOM.render(<WrongWay />, document.getElementById("root"));
ReactDOM.render(<RightWayIsWrapIntoDiv />, document.getElementById("root"));
