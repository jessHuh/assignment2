import React, { Component } from 'react';
import Todos from './Todos';
import AddForm from './AddForm';
import { connect } from 'react-redux';
// import { deleteTodo } from './todoActions';

/* 
Resource that I used:
(1) Connecting back-end API with front-end : GET
https://www.freecodecamp.org/news/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0/
(2) Connecting back-end API with front-end : POST
https://stackoverflow.com/questions/52057337/post-request-in-react

*/
class App extends Component {

  componentDidMount() {
    this
    .callBackendAPI()
    .then(res => this.props.initTodo(res))
    .catch(err => console.log(err));
  }

  // componentDidUpdate() {
  //   this
  //   .callBackendAPI()
  //   .then(res => this.props.initTodo(res))
  //   .catch(err => console.log(err));
  // }

  callBackendAPI = async () => {
    const response = await fetch("/api/tasks");
    const body = await response.json();
    console.log(body)
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  deleteTodoX = (id) => {

    fetch("/api/tasks/" + id, {
      method: 'DELETE',  
    })
    .then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
    this.componentDidMount();
    //this.props.deleteTodo(id);
    // const todos = this.props.todos.filter(todo => {
    //   return todo.id !== id
    // });
    // this.setState({
    //   todos: todos
    // })
  }
  addTodoX = (todo) => {
    todo.id = Math.random().toString();
    fetch("/api/tasks", {
      method: 'POST',  
      body: JSON.stringify(todo),  
      headers:{
        'Content-Type': 'application/json'
    }})
    .then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
    
    this.componentDidMount();
  }

  openPopUpX = (id) => {
    this.props.openPopUp(id);
  }
  render() {
    //console.log(this.props);
    return (
      <div className="todo-app container">
      <h1 className="center blue-text"> CoHabs Tasks </h1>
       <Todos todos = { this.props.todos } deleteTodoX= {this.deleteTodoX} openPopUpX = {this.openPopUpX}/>
       <AddForm addTodoX = {this.addTodoX}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => dispatch({type: 'DELETE_TODO', id: id}),
    addTodo: (todo) => dispatch({type: 'ADD_TODO', todo: todo}),
    openPopUp: (id) => dispatch({type: 'OPEN_POPUP', id: id}),
    initTodo: (todos) => dispatch({type: 'INIT_STATUS', todos: todos}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
