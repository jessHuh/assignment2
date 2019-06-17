import React, { Component} from 'react';


class AddForm extends Component {
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
        this.props.addTodoX(this.state);
        this.setState({
            content: '',
            popup: '',
            tag: ''
        })
    }
    render() {
        return(
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

  <button class="btn waves-effect waves-light #039be5 light-blue darken-1 center-align" type="submit" name="action" onClick= {this.handleSubmit}>Add Link!
                    
                    </button>
                    </div>
                    
    
                </div>

</div>
               

           

    
        )
    }
}

export default AddForm