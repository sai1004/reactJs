import React from "react";
import TodoData from "./TodoData";
import TodoItem from "./TodoItem";

class Todo extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: TodoData,
        };
    }

    render() {
        const todoItems = this.state.todos.map((item) => {
            return <TodoItem key={item.id} item={item} />;
        });

        return <div className="todo_list">{todoItems}</div>;
    }
}

export default Todo;
