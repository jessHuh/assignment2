import React, { Component } from 'react';
import Item from './Item';
import AddItem from './AddItem';

class App extends Component {
  state = {
    list : [
      { name: 'Jess', age: 27, belt:'black', id : 1 },
      { name:'Jason', age: 24, belt:'blue', id: 2 },
      { name: 'Jungwha', age: 24, belt:'pink', id: 3 }
    ]
  } 
  addItem = (item) => {
    item.id = Math.random();
    let list = [...this.state.list, item];
    this.setState({
      list: list
    })
  }
  deleteItem = (id) => {
    let newList = this.state.list.filter(item => {
      return item.id !== id;
    })
    this.setState({
      list: newList
    })
  }
  componentDidMount() {
    console.log('component mounted');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('component updated');
    console.log(prevProps, prevState);
  }
  render() {
    return (
    <div className="App">
     <h1> My first React app !</h1>
     <p> Welcome :) </p>
     <Item  deleteItem = { this.deleteItem} list= { this.state.list } />
     <AddItem addItem= { this.addItem } />
    </div>
     );
  }
}

export default App;
