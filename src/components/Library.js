import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';

class Library extends Component {
    constructor(props) {
        super(props);
        this.state = { albums: albumData };
    }

    render() {
        return (
            <section className='library'>
                {
                    this.state.albums.map( (album, index) =>
                        <div className="album">
                            <Link to={`/album/${album.slug}`} key={index}>
                                <img className="album-cover" src={album.albumCover} alt={album.title} />
                                <div className="album-title">{album.title}</div>
                                <div className="album-details">
                                    {album.artist}
                                    <br />
                                    {album.songs.length} songs
                                </div>
                            </Link>
                        </div>
                    )
                }
            </section>
        );
    }
}

export default Library;