import React from 'react';
import '../styles/head.css';

const Head = (props) =>
 <div className='head-section'>
<div className='logo'><a href='/' onClick={props.home}><img src='logoL.png' alt='alt' /><span>GitHub</span></a></div>
<div className='form-element'>
<form onSubmit={props.getUser}>
<input type='text' name='key' placeholder='GitHub Username' autoComplete='off'/>
</form>
</div>
</div>


export default Head;