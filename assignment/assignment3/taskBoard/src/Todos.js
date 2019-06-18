import React, { Component} from 'react';


class Todos extends Component {

  state = {
    content: '',
    popup:'',
    tag: ''
}
handleChange = (e) =>  {
    this.setState({
        content: e.target.value
    })
}
handleChangeDetail = (e) =>  {
    this.setState({
        popup: e.target.value
    })
}
handleTag = (e) =>  {
    this.setState({
        tag: e.target.value
    })
}
handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.editTodoX(this.state);
    this.setState({
        content: '',
        popup: '',
        tag: '',
        id:''
    })
}
    render() {

      const todoList = this.props.todos.length ? (
        this.props.todos.map(todo => {
            return (            
                <div className="collection-item #659dbd#efebe9 brown lighten-5" key={todo.id}>
  <ul class="collection">
  <li class="collection-item avatar">
        <i  class="material-icons circle #7cb342 light-green darken-1" onClick={() => {this.props.openPopUpX(todo.id)}}>insert_link</i>
      <span class="title">Tag: {todo.tag}</span>
      <p>Detail: {todo.content} 
      {todo.showPopUp ? 
      <div>
                   <div> Link: {todo.popup}</div>
                   </div>             
                   : null
                 }</p>
       <a href="#!" class="secondary-content"><i href="#!" class="material-icons" onClick={() => {this.props.openEditX(todo.id); this.state.id = todo.id;}}>mode_edit</i></a>
       {todo.showedit ? 
      <div>
      <div class="#ffffff white">
          <form onSubmit={this.handleSubmit}>
              <p class="flow-text center-align"> </p>
<div>
<div class="input-field col s6">
<i class="material-icons prefix">local_offer</i>
<input id="icon_prefix" type="text" class="validate" onChange={this.handleTag} value={this.state.tag}/>
<label for="icon_prefix">Tag</label>
</div>
<div class="input-field col s6">
<i class="material-icons prefix">insert_link</i>
<input id="icon_telephone" type="tel" class="validate" onChange={this.handleChangeDetail} value={this.state.popup}/>
<label for="icon_telephone">Link</label>
</div>  
<div class="input-field col s6">
<i class="material-icons prefix">edit</i>
<input id="icon_prefix" type="text" class="validate" onChange={this.handleChange} value={this.state.content} />
<label for="icon_prefix">Details</label>
</div>  
</div>
          </form>
          <div class="center-align">

<button class="btn waves-effect waves-light #039be5 light-blue darken-1 center-align" type="submit" name="action" onClick= {
  this.handleSubmit}>Update!
              
              </button>
              </div>
          </div>
</div>             
                   : null
                 }
      <a href="#!" ><i href="#!" class="material-icons" onClick={() => {this.props.deleteTodoX(todo.id)}}>delete</i></a>     
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
}

export default Todos