import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      friends: [],
      picture: '',
      name: ''
    }
  }
  click() {
    var newFriend = {
      name:this.state.name, 
      picture:this.state.picture
    };
    this.setState({
      friends: [...this.state.friends, newFriend],
      name: '',
      picture:''
    })
  }
  render() {

    let list = this.state.friends.map((friend) => {
      return (
        <div>
          <p>{friend.name}</p>
          <img src={friend.picture}/>
        </div>
      )
    })
    return (
      <div className="App">
        <label>Name</label>
        <input onChange={(e) => this.setState({name:e.target.value})}/>
        <label>Picture</label>
        <input onChange={(e) => this.setState({picture: e.target.value})}/>
        <button onClick={() => this.click()}>Add Friend</button>
        {list}
      </div>
    );
  }
}

export default App;
