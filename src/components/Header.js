import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) =>
{
    const style = {
        display: 'inline-block',
        margin: 10,
        marginBottom: 30
    };

    return (
        <div>
            <div>
                <h3 style={style}><Link to='/'>Home</Link></h3>
                <h3 style={style}><Link to='/jokes'>Jokes</Link></h3>
                <h3 style={style}><Link to='/music-master'>Music Master</Link></h3>
            </div>
            {props.children}
        </div>
    )
}

// Using props.children to pass in other components to render
// inside this one. Think of a template file, only difference
// is this is a template block instead.

export default Header;