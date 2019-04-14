import React, {Component} from 'react';

class Tracks extends Component 
{
    state = {playing: false, audio: null, playingPreviewUrl: null};
    // playAudio points towards a callback which points to
    // another function, this way we can pass a function
    // into a component without actually calling the 
    // function and still pass an argument
    playAudio = (previewUrl)=> ()=>
    {
        const audio = new Audio(previewUrl);

        if (!this.state.playing)
        {
            // If we get here there is no audio playing
            // and we can just start the track and save
            // the audio object and the url to state
            audio.play();
            this.setState({playing: true, audio, playingPreviewUrl: previewUrl});
        }
        else
        {
            // If we get here there is already music playing
            // and we need to pause it
            this.state.audio.pause();

            // If the url passed in is the same as the one
            // saved in state, then we just need to flip 
            // the playing property in state to false.
            // If the url is different then we need to 
            // use the new audio object to start playing
            // the new url and save things to state
            if (this.state.playingPreviewUrl === previewUrl)
            {
                this.setState({playing: false});
            }
            else
            {
                audio.play();
                this.setState({audio, playingPreviewUrl: previewUrl});
            }
            
        }
        
    }

    trackIcon = (track)=>
    {
        if (!track.preview_url)
        {
            return (<span>N/A</span>);
        }

        if (this.state.playing && this.state.playingPreviewUrl
            === track.preview_url)
            {
                return (<span>| |</span>);
            }

        return (<span>&#9654;</span>);
    }

    render()
    {
        const {tracks} = this.props;

        return (
            <div>
                {tracks.map(track=>
                {
                    const {name, album, id, preview_url} = track;

                    return (
                        <div className="track" 
                        key={id} 
                        onClick={this.playAudio(preview_url)}>
                            <img className="track-image" 
                            src={album.images[0].url}
                            alt="track-image" />
                            <p className="track-text">{name}</p>
                            <p className="track-icon">{this.trackIcon(track)}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Tracks;