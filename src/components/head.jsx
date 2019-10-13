import React from 'react';
import '../styles/head.css';

export default function({ home, getUser }) {
  return (
    <div className='head-section'>
      <div className='logo'>
        <a href=' ' onClick={home}>
          <img src='logoL.png' alt='alt' />
          <span>GitHub</span>
        </a>
      </div>
      <div className='form-element'>
        <form onSubmit={getUser}>
          <input
            type='text'
            name='key'
            placeholder='GitHub Username'
            autoComplete='off'
          />
        </form>
      </div>
    </div>
  );
}
