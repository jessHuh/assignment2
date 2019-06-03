const initState = {
    todos: [
        {id: '1', content: 'watch movie-redux'},
        {id: '2', content: 'make dinner-redux'}
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_TODO') {
        let newTodos = state.todos.filter(todo => {
            return action.id !== todo.id
        });
        return {
            ...state,
            todos: newTodos
        }
    }
    if (action.type === 'ADD_TODO') {
        return {
            ...state,
            todos: [...state.todos, action.todo]
        }
    }
    return state;
    
}

export default rootReducer;