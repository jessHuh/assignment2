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

  callBackendAPI = async () => {
    const response = await fetch("/api/tasks");
    const body = await response.json();
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

  editTodoX = (todo) => {
    fetch("/api/tasks/" + todo.id, {
      method: 'PUT',  
      body: JSON.stringify(todo),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
    this.componentDidMount();
  }

  openPopUpX = (id) => {
    this.props.openPopUp(id);
  }

  
  openEditX = (id) => {
    this.props.openEidt(id);
  }
  render() {
    return (
      <div className="todo-app container  #ffffff white">
      <nav>
    <div class="nav-wrapper   #039be5 light-blue darken-1 ">
      <a href="#!" class="brand-logo"><i class="material-icons center-align">wb_incandescent</i>Jessica's Favorite Links</a>
      <ul class="right hide-on-med-and-down">
        <li><a href="sass.html"><i class="material-icons">search</i></a></li>
        <li><a href="badges.html"><i class="material-icons">view_module</i></a></li>
        <li><a href="collapsible.html"><i class="material-icons">refresh</i></a></li>
        <li><a href="mobile.html"><i class="material-icons">more_vert</i></a></li>
      </ul>
    </div>
  </nav>
  <div>
  <AddForm addTodoX = {this.addTodoX}/>
  </div>
  <div>
       <Todos todos = { this.props.todos } deleteTodoX= {this.deleteTodoX} openPopUpX = {this.openPopUpX} openEditX= {this.openEditX} editTodoX = {this.editTodoX} />
       </div>
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
    openEidt: (id) => dispatch({type: 'OPEN_EDIT', id: id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
