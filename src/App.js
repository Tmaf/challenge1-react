import React, { Component } from 'react';

import './App.css';
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {

  state={
    username : 'username'
  };

  custom = {
    backgroundColor:'#343434',
    color:'#dfdfdf',
    minHeight:'60px'
  };

  changeTextHandler=(evt)=>{
    const newValue= evt.target.value;
    this.setState({username:newValue});
  };


  render() {
    return (
      <div className="App">
        <h1>Challenge 1</h1>
        <div style={this.custom}>
          <UserOutput title="Entry 1" value={this.state.username}/>
        </div>
        <div style={ {backgroundColor:'#3434a4',color:'#dfdfdf',minHeight:'60px'} }>
         <UserOutput style={this.custom} title="Entry 2" value={this.state.username}/>
        </div>
        <div className='custom'>
          <UserOutput style={this.custom} title="Entry 3" value={this.state.username}/>
        </div>
        <div className='input-changed'>
          <UserInput value={this.state.username} onChange={this.changeTextHandler}/>
        </div>
      </div>
    );
  }
}

export default App;
