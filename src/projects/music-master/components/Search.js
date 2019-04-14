import React, {Component} from 'react';

class Search extends Component
{
    state = {artistQuery: ''};

    updateArtistQuery = (event)=>
    {
        this.setState({artistQuery: event.target.value});
    }

    handleKeyPress = (event)=>
    {
        if (event.key === 'Enter')
        {
            this.searchArtist();
        }
    }

    searchArtist = ()=>
    {
        // This actually calls the method defined in App.js
        // and any setting of state goes to App.js as well
        this.props.searchArtist(this.state.artistQuery);
    }

    render()
    {
        return (
            <div>
                <input 
                onChange={this.updateArtistQuery} 
                placeholder="Search for an Artist"
                onKeyPress={this.handleKeyPress}
                 />
                <button onClick={this.searchArtist}>Search</button>
            </div>
        )
    }
}

export default Search;