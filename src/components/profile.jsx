import React from 'react';
import '../styles/profile.css';
import Top from './top_repo.jsx';

class Profile extends React.Component{ 

render(){

const  reps  = this.props.proj&&this.props.proj.map((i, j) => <Top key ={j} val={i}/>)

return(<div className='content'>

<div className='left-section'>
<a href={this.props.data.avatar_url} target="_blank" className="tile" rel="noopener noreferrer">
<img src={this.props.data.avatar_url} alt='dp' />
{this.props.data.name && <div className='name'>{this.props.data.name}</div>}
</a>
<div className='uname'>
{this.props.data.login}
</div>
{this.props.data.bio && <div className='bio'>{this.props.data.bio}</div>}
<a href={this.props.data.html_url} target="_blank" rel="noopener noreferrer"><button id='follow'>Follow</button></a>
</div>

<div className='right-section'>
<nav>
    <ul className='menu'>
         <li><a href='#null' className="tab">Overview</a></li>
         <li>
           <a href={`https://github.com/${this.props.data.login}?tab=repositories`} className='tab' target="_blank" rel="noopener noreferrer">Repositories<span className='val'>{this.props.data.public_repos}</span></a>
        </li>
        <li>
            <a href='#null' className='tab'>Public Gists<span className='val'>{this.props.data.public_gists}</span></a>
        </li>
        <li>
            <a href={`https://github.com/${this.props.data.login}?tab=followers`} className='tab' target="_blank" rel="noopener noreferrer">Followers<span className='val'>{this.props.data.followers}</span></a>
        </li>
        <li>
            <a href={`https://github.com/${this.props.data.login}?tab=following`} className='tab' target="_blank" rel="noopener noreferrer">Following<span className='val'>{this.props.data.following}</span></a>
        </li>
    </ul>
</nav>
<div className='repo-info'>
    {reps}
</div>
</div>

</div>)
}
}


export default Profile;