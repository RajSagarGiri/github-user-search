import React from 'react';
import '../styles/top_repos.css';

const Top  = (props) => <div className='item'>
<div className='title'><a href={props.val.svn_url} target="_blank" rel="noopener noreferrer">{props.val.full_name.split('/')[1]}</a></div>
<div className='extra-info'>{props.val.description}</div>
<div className='add-info'>
{props.val.language && <div className='list'><img src='lang.png' alt='lang'/><span>{props.val.language}</span></div>}
{props.val.forks_count!==0 &&<div className='list'><img src='fork.png' alt='forks'/><span>{props.val.forks_count}</span></div>}
{props.val.stargazers_count!==0 &&<div className='list'><img src='star.png' alt='stars'/><span>{props.val.stargazers_count}</span></div>}
</div> 
</div>



export default Top;