import React, { Component } from 'react';
import '../styles/App.css';
import Head from './head.jsx';

class App extends Component {
  constructor(){
    super();
    this.state = {profile: []}
  }

userProfile = async () =>{
  const call = await fetch(`https://api.github.com/users/hashvision`);
  const data = await call.json();
  console.log(data);
}


componentDidMount(){
  this.userProfile();
}

  render() {
    return (
      <div className="App">
       <h1>hello</h1>
       <Head/>
      </div>
    );
  }
}

export default App;
