import React, {Component} from 'react';
import PROFILES from './data/profiles.js';

class Profile extends Component
{
    render()
    {
        const {title, image, link} = this.props.profile;

        return (
            <div style={{display: 'inline-block', margin: 10}}>
                <a target='blank' href={link}><img style={{width: 35, height: 35}} src={image} alt={title} /></a>
            </div>
        )
    }
}

class Profiles extends Component
{
    render()
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
}

export default Profiles;