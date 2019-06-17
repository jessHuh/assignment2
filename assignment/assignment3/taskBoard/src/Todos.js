import React from 'react';

const Todos = ({todos, deleteTodoX, openPopUpX}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                

                <div className="collection-item #659dbd#efebe9 brown lighten-5" key={todo.id}>

                    
                {/* <div class="row">
                <div class="col s12 m6">
                <div class="card #ef9a9a red lighten-3">
                <div class="card-content white-text">
                
                <span class="card-title"> {todo.content} </span>
                
                <p> 
                   {todo.showPopUp ? 
                   <div> Detail: {todo.popup}</div>
                   : null
                 }</p>
                 <div class="chip">
                     {todo.tag}
                <i class="close material-icons">close</i>
                </div>
        </div>
        <div class="card-action">
        <p class="center waves-effect waves-light btn-small #f4511e deep-orange darken-1" onClick={() => {deleteTodoX(todo.id)}}> Delete </p>
        <p class="center waves-effect waves-light btn-small #f4511e deep-orange darken-1" onClick={() => {openPopUpX(todo.id)}}> Details </p>
        </div>
      </div>
    </div>
  </div> */}
                    


  <ul class="collection">
  <li class="collection-item avatar">
        <i  class="material-icons circle #7cb342 light-green darken-1" onClick={() => {openPopUpX(todo.id)}}>insert_link</i>
      <span class="title">Tag: {todo.tag}</span>
      <p>Detail: {todo.content} 
      {todo.showPopUp ? 
                   <div> Link: {todo.popup}</div>
                   : null
                 }</p>

      <a href="#!" class="secondary-content"><i href="#!" class="material-icons" onClick={() => {deleteTodoX(todo.id)}}>delete</i></a>
    </li>
  </ul>

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