import React, {Component} from 'react';

const Joke = (props) =>
{
    const {setup, punchline} = props.joke;

    return (<p style={{margin: 20}}>{setup} <em>{punchline}</em></p>);
}

class Jokes extends Component
{
    state = {joke: {}, jokes: []};

    fetchJokes = () =>
    {
        fetch('https://official-joke-api.appspot.com/random_ten')
        .then(response=>
        {
            response.json().then(json=>
            {
                this.setState({jokes: json});
            });
        }).catch(err =>
        {
            alert(err.message);
        });
    }

    componentDidMount()
    {
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => 
        {
            response.json().then(json=>
            {
                this.setState({joke: json});
            });
        }).catch(err =>
        {
            alert(err.message);
        });
    }

    render()
    {
        return (
            <div>
                <h2>Random Joke</h2>
                <Joke joke={this.state.joke} />
                <hr />
                <h3>Want 10 new jokes?</h3>
                <button onClick={this.fetchJokes}>Click Here!</button>
                {
                    this.state.jokes.map(joke =>
                    {
                        return (<Joke key={joke.id} joke={joke} />)
                    })
                }
            </div>
        )
    }
}

export default Jokes;