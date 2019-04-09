import React, {Component} from 'react';
import Projects from './Projects.js';
import Profiles from './Profiles.js';
import profilePicture from '../assets/MyProfilePic.jpg';
import Title from './Title.js';
import Jokes from './Jokes.js';

// Note: Cannot have a line break between return and opening (

// Note:: In a javascript constructor, you must call the parent constructor before
// using the 'this' keyword when extending from another class.

// Note: When referencing functions/methods in onClick events you
// need to name the function, but not call it. This is why in onClick
// you do not include the (). If you do the component gets stuck in an 
// infinite loop because the setState method is recalling the render
// method after it changes the state property and the function will be called again.

class App extends Component 
{
    state = {displayBio: false};

    toggleDisplayBio = () =>
    {
        this.setState({displayBio: !this.state.displayBio});
    }

    render()
    {
        return (
            <div>
                <img className="profile" src={profilePicture} alt="My ugly mug :)" />
                <h1>Hello World</h1>
                <p>My name is Tim.</p>
                <Title />
                <p>I'm looking to expand my knowledge by learning about new technologies.</p>
                {this.state.displayBio ? (
                    <div>
                        <p>I live in Michigan, and I code every day!</p>
                        <p>My favorite language is probably C#.</p>
                        <p>Besides coding I enjoy disc golf, reading, and video games.</p>
                        <button onClick={this.toggleDisplayBio}>Show Less</button>
                    </div>
                ) : (<div>
                        <button onClick={this.toggleDisplayBio}>Read More</button>
                    </div>
                )}
                <hr />
                <Projects />
                <hr />
                <Profiles />
                <hr />
                <Jokes />
            </div>
        )
    }
}

export default App;