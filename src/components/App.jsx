import React, { Component } from 'react';
import '../styles/App.css';
import Head from './head.jsx';
import Profile from './profile.jsx';

class App extends Component {
  constructor(){
    super();
    this.state = {info: null}
  }

userProfile = async (event) =>{
  event.preventDefault();
  const key = event.target.elements.key.value;
  const call = await fetch(`https://api.github.com/users/${key}`);
  const data = await call.json();
  this.setState({info:data});
  console.log(data);
}


home = () =>{
  this.setState({info : null})
}

componentWillUnmount(){
  this.setState({});
}


  render() {
    return (
      <div className="App">
       <Head  getUser={this.userProfile}/>
    {this.state.info  && <div>{this.state.info.hasOwnProperty('login')&&<Profile data={this.state.info}/>}</div>}
      </div>
    );
  }
}

export default App;
