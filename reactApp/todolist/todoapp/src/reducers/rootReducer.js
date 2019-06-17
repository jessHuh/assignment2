// import { bindActionCreators } from "../../../../../../../../../AppData/Local/Microsoft/TypeScript/3.5/node_modules/redux";

// import api from './api';


const initState = {
    todos: []
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
    if(action.type === "OPEN_POPUP") {
        state.todos.forEach(element => {
            if(element.id === action.id){
                element.showPopUp = !element.showPopUp;
            }
        });
        return {
            todos: [...state.todos]
        }
    }

    if(action.type ==='INIT_STATUS') {
        return {
            todos: action.todos
        };
    }
    return state;
    
}

export default rootReducer;