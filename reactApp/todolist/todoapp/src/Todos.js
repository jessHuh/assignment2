import React from 'react';

const Todos = ({todos, deleteTodoX}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => {deleteTodoX(todo.id)}}>{todo.content}</span>

                </div>
            )
        })
    ) : (
    <p className="center"> You have no todo's left, yay! </p>
    )
    return(
        <div className="todos collection">
        {todoList}
        </div>
    )
}

export default Todos