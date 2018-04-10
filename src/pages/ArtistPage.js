import React, { Component } from 'react';

import SpotifyAxios from './../services/SpotifyAxios'

import Album from './../components/Album'

class ArtistPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artist: null,
            albums: []
        };
    }

    loadArtist(id) {
        SpotifyAxios.getOneArtist(id)
            .then(response => {
                this.setState({ artist: response.data });
            })
    }

    loadAblums(id) {
        SpotifyAxios.getAblums(id)
            .then(response => {
                this.setState({ albums: response.data.items });
            })
    }
    componentWillMount() {
        let { id } = this.props.match.params;
        this.loadArtist(id);
        this.loadAblums(id);
    }
    render() {
        let artist = { name: '', images: [], external_urls: '', genres: [] }
        let { albums } = this.state;
        artist = (this.state.artist !== null) ? this.state.artist : artist;
        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title">Singer</h3>
                </div>
                <div className="panel-body">
                    <div className="panel-body">
                        <div className="col-sm-4 col-md-4">
                            {this.showImage(artist.images)}
                            <blockquote style={{ marginTop: 20 }}>
                                <p>{artist.name}</p>
                            </blockquote>
                            <p><i className="glyphicon glyphicon-play-circle" />
                                <a rel="noopener noreferrer" target="_blank" href={artist.external_urls.spotify}> View Spotify</a>
                                <br /><br />
                                <i className="glyphicon glyphicon-play-circle" /> Genres: {this.showGenres(artist.genres)}
                            </p>
                        </div>
                        <div className="col-sm-8 col-md-8">
                            <div className="panel panel-danger">
                                <div className="panel-heading">
                                    <h3 className="panel-title">List Albums</h3>
                                </div>
                                <div className="panel-body list-albums">
                                    {this.showAblums(albums)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }

    showImage(image) {
        let xhtml = null;
        if (image[0] !== undefined) {
            xhtml = <img src={image[0].url} alt="abc" className="img-responsive" />
        }
        return xhtml;
    }

    showGenres(genres) {
        let xhtml = null;
        if (genres !== undefined && genres.length > 0) {
            xhtml = genres.map((genre, index) => {
                return <span key={index} className="label label-warning" style={{ marginRight: 5 }}>{genre}</span>
            })

        }
        return xhtml;
    }

    showAblums(albums) {
        let xhtml = null;
        if (albums.length > 0) {
            xhtml = albums.map((album, index) => {
                return <Album key={index} album={album} />
            })
        }
        return xhtml;
    }
}
export default ArtistPage


