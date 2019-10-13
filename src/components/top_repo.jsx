import React from 'react';
import '../styles/top_repos.css';

export default function({ val }) {
  return (
    <div className='item'>
      <div className='title'>
        <a href={val.html_url} target='_blank' rel='noopener noreferrer'>
          {val.full_name.split('/')[1]}
        </a>
      </div>
      <div className='extra-info'>{val.description}</div>
      <div className='add-info'>
        {val.language && (
          <div className='list'>
            <img src='lang.png' alt='lang' />
            <span>{val.language}</span>
          </div>
        )}
        {val.forks_count !== 0 && (
          <div className='list'>
            <img src='fork.png' alt='forks' />
            <span>{val.forks_count}</span>
          </div>
        )}
        {val.stargazers_count !== 0 && (
          <div className='list'>
            <img src='star.png' alt='stars' />
            <span>{val.stargazers_count}</span>
          </div>
        )}
      </div>
    </div>
  );
}
