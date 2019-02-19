import React, { Component } from 'react';
import '../styles/App.css';
import Head from './head.jsx';
import Profile from './profile.jsx';

class App extends Component {
  constructor(){
    super();
    this.state = {info: null, repos: null}
  }


 repoInfo = async (data)=>{
   const call = await fetch(data.repos_url);
   let  rep = await call.json();
   rep = rep.slice(0,8);
   this.setState({repos: rep});
 } 

userProfile = async (event) =>{
  event.preventDefault();
  const key = event.target.elements.key.value;
  const call = await fetch(`https://api.github.com/users/${key.trim()}`);
  const data = await call.json();
  this.setState({info:data});
  this.repoInfo(data);
}


home = () =>{
  this.setState({info : null, repos: null})
}

componentWillUnmount(){
  this.setState({});
}


  render() {
    return (
      <div className="App">
       <Head  getUser={this.userProfile}/>
    {this.state.info  && <div>{this.state.info.hasOwnProperty('login')&&<Profile data={this.state.info} proj={this.state.repos}/>}</div>}
      </div>
    );
  }
}

export default App;
