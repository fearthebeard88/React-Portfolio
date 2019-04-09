import React from 'react';
import PROFILES from '../data/profiles.js';

const Profile = (props) =>
{
    const {title, image, link} = props.profile;

    return (
        <div style={{display: 'inline-block', margin: 10}}>
            <a target='blank' href={link}><img style={{width: 35, height: 35}} src={image} alt={title} /></a>
        </div>
    )
}

const Profiles = () =>
{
    return (
        <div>
            <h2>Connect with me!</h2>
            <div>
                {
                    PROFILES.map(PROFILE=>
                    {
                        return (
                            <Profile key={PROFILE.id} profile={PROFILE} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Profiles;