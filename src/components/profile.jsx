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
<a href={props.data.html_url} target="_blank" rel="noopener noreferrer">{props.data.login}</a>
</div>
{props.data.bio && <div className='bio'>{props.data.bio}</div>}
<div><button>Follow</button></div>
</div>


<div className='right-section'>
<nav>
    <ul>
       <li><a href={props.data.repos_url}>Repositories<span>{props.data.public_repos}</span></a></li>
        <li><a href={props.data.followers_url}>Followers<span>{props.data.followers}</span></a></li>
        <li><a href={props.data.following_url}>Following<span>{props.data.following}</span></a></li>
    </ul>
</nav>
</div>

</div>

    export default Profile;