import React, {Component} from 'react';
import Artist from './Artist.js';
import Tracks from './Tracks.js';
import Search from './Search.js';

const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com/artist/';

// Use Control + d to multi select cursor
// Select first area, then put cursor where 
// you want the second one and enter command

class App extends Component 
{
    state = {artist: null, tracks: []};

    searchArtist = (artistQuery) =>
    {
        fetch(API_ADDRESS + artistQuery)
        .then(response =>
        {
            response.json().then(artistObj=>
            {
                if (artistObj.artists.total > 0)
                {
                    const artist = artistObj.artists.items[0];
                    const id = artist.id;
                    const url = API_ADDRESS + `${id}/top-tracks`;
                    this.setState({artist: artist});
                    this.searchTopTracks(url);
                }
            })
        }).catch(err=>
        {
            alert(err.message);
        });
    }

    searchTopTracks = (url) =>
    {
        fetch(url).then(response =>
        {
            response.json().then(tracks =>
            {
                this.setState({tracks: tracks.tracks});
            });
        }).catch(err=>
        {
            alert(err.message);
        });
    }

    render()
    {
        return (
            <div>
                <h2>Music Master</h2>
                <Search searchArtist={this.searchArtist} />
                <Artist artist={this.state.artist} />
                <Tracks tracks={this.state.tracks} />
            </div>
        )
    }
}

export default App;