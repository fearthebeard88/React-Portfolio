import React from 'react';

const Artist = (props)=>
{
    const artist = props.artist;

    if (artist == null)
    {
        return null;
    }

    const {genres, name, images} = artist;
    const totalFollowers = artist.followers.total;

    return (
        <div>
            <p>{name}</p>
            <p>{genres.join(',')}</p>
            <p>{totalFollowers} Followers</p>
            <div>
                <img src={images[0] && images[0].url}
                style={{width: 200, height: 200,
                borderRadius: 100, objectFit: 'cover'}}
                alt="artist-profile" />
            </div>
        </div>
    )
}

export default Artist;