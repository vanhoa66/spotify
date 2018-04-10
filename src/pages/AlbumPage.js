import React, { Component } from 'react';

import SpotifyAxios from './../services/SpotifyAxios'

import Track from './../components/Track'

class AlbumPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            album: null,
            tracks: []
        };
    }

    loadAlbum(id) {
        SpotifyAxios.getOneAlbum(id)
            .then(response => {
                this.setState({ album: response.data });
            })
    }

    loadTracks(id) {
        SpotifyAxios.getTracks(id)
            .then(response => {
                this.setState({ tracks: response.data.items });
            })
    }
    componentWillMount() {
        let { id } = this.props.match.params;
        this.loadAlbum(id);
        this.loadTracks(id);
    }
    render() {
        let album = { name: '', images: [] }
        let { tracks } = this.state;
        album = (this.state.album !== null) ? this.state.album : album;
        console.log(tracks);
        return (
            <div className="panel panel-danger">
                <div className="panel-heading">
                    <h3 className="panel-title">{album.name}</h3>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-sm-4 col-md-4 col-lg-4">
                            {this.showImage(album.images)}
                        </div>
                        <div className="col-sm-8 col-md-8 col-lg-8">
                            <div className="panel panel-warning">
                                <div className="panel-heading">
                                    <h3 className="panel-title">List Tracks</h3>
                                </div>
                                <div className="panel-body">
                                    {this.showTracks(tracks)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

    showImage(image) {
        let xhtml = null;
        if (image[0] !== undefined) {
            xhtml = <img src={image[0].url} alt="abc" className="img-responsive" />
        }
        return xhtml;
    }

    showTracks(tracks) {
        let xhtml = null;
        if (tracks.length > 0) {
            xhtml = tracks.map((track, index) => {
                return <Track key={index} track={track} />
            })
        }
        return xhtml;
    }
}
export default AlbumPage


