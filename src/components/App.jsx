import React, { useState } from 'react';
import '../styles/App.css';
import Head from './head.jsx';
import Error from './error.jsx';
import Profile from './profile.jsx';

export default function() {
  const [state, setState] = useState({
    info: null,
    repos: null,
    loading: false
  });

  const repoInfo = async data => {
    const call = await fetch(data.repos_url);
    let rep = await call.json();
    return rep;
  };

  const userProfile = async event => {
    setState({ ...state, loading: true });
    event.preventDefault();
    const key = event.target.elements.key.value;
    const call = await fetch(`https://api.github.com/users/${key.trim()}`);
    const data = await call.json();
    const repos = call.status === 200 && (await repoInfo(data));
    setState({
      info: data,
      ...(repos && { repos }),
      loading: false
    });
  };
  return (
    <div className='App'>
      <Head getUser={userProfile} />
      {state.loading && (
        <div className='error'>
          <img src='loader.gif' alt='loading...' className='loader' />
        </div>
      )}
      {state.info && (
        <div>
          {state.info.hasOwnProperty('login') && (
            <Profile data={state.info} proj={state.repos} />
          )}
        </div>
      )}

      {state.info && (
        <div>{!state.info.hasOwnProperty('login') && <Error />}</div>
      )}
    </div>
  );
}
