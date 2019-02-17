import React from 'react';
import '../styles/profile.css';

const Profile = (props) => 
<div className='content'>

<div className='left-section'>
<a href={props.data.avatar_url} target="_blank" className="tile" rel="noopener noreferrer">
<img src={props.data.avatar_url} alt='dp' />
{props.data.name && <div className='name'>{props.data.name}</div>}
</a>
<div className='uname'>
{props.data.login}
</div>
{props.data.bio && <div className='bio'>{props.data.bio}</div>}
<a href={props.data.html_url} target="_blank" rel="noopener noreferrer"><button id='follow'>Follow</button></a>
</div>


<div className='right-section'>
<nav>
    <ul className='menu'>
         <li><a href='#null' className="tab" autofocus>Overview</a></li>
         <li>
           <a href={`https://github.com/${props.data.login}?tab=repositories`} className='tab' target="_blank" rel="noopener noreferrer">Repositories<span className='val'>{props.data.public_repos}</span></a>
        </li>
        <li>
            <a href='#null' className='tab'>Public Gists<span className='val'>{props.data.public_gists}</span></a>
        </li>
        <li>
            <a href={`https://github.com/${props.data.login}?tab=followers`} className='tab' target="_blank" rel="noopener noreferrer">Followers<span className='val'>{props.data.followers}</span></a>
        </li>
        <li>
            <a href={`https://github.com/${props.data.login}?tab=following`} className='tab' target="_blank" rel="noopener noreferrer">Following<span className='val'>{props.data.following}</span></a>
        </li>
    </ul>
    <div>
        helloworld
    </div>
</nav>
</div>

</div>


export default Profile;