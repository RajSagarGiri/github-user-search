import React from 'react';
import '../styles/profile.css';
import Top from './top_repo.jsx';

export default function({ proj, data }) {
  const reps =
    Array.isArray(proj) && proj.map((i, j) => <Top key={j} val={i} />);

  return (
    <div className='content'>
      <div className='left-section'>
        <a
          href={data.avatar_url}
          target='_blank'
          className='tile'
          rel='noopener noreferrer'
        >
          <img src={data.avatar_url} alt='dp' />
          {data.name && <div className='name'>{data.name}</div>}
        </a>
        <div className='uname'>{data.login}</div>
        <a href={data.html_url} target='_blank' rel='noopener noreferrer'>
          <button id='follow'>Follow</button>
        </a>
        {data.bio && <div className='bio'>{data.bio}</div>}
        {data.company && <div className='company'>{data.company}</div>}
        {data.location && (
          <div className='loc'>
            <img src='loc.png' alt='loc' />
            {data.location}
          </div>
        )}
        {data.blog && (
          <div className='blog'>
            <a href={data.blog} target='_blank' rel='noopener noreferrer'>
              {data.blog}
            </a>
          </div>
        )}
      </div>

      <div className='right-section'>
        <nav>
          <ul className='menu'>
            <li>
              <a
                href={`https://github.com/${data.login}?tab=repositories`}
                className='tab'
                target='_blank'
                rel='noopener noreferrer'
              >
                Repositories
                <span className='val'>{data.public_repos}</span>
              </a>
            </li>

            <li>
              <a
                href={`https://github.com/${data.login}?tab=followers`}
                className='tab'
                target='_blank'
                rel='noopener noreferrer'
              >
                Followers
                <span className='val'>{data.followers}</span>
              </a>
            </li>
            <li>
              <a
                href={`https://github.com/${data.login}?tab=following`}
                className='tab'
                target='_blank'
                rel='noopener noreferrer'
              >
                Following
                <span className='val'>{data.following}</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className='repo-info'>{reps}</div>
      </div>
    </div>
  );
}
