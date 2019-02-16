import React from 'react';
import '../styles/profile.css';

const Profile = (props) => 
<div className='content'>
    <img src={props.data.avatar_url} alt='dp' />
</div>

    export default Profile;