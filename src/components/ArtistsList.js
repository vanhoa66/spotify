import React, { Component } from 'react';

import { connect } from 'react-redux'
import SpotifyAxios from './../services/SpotifyAxios'

import Artist from './Artist'

class ArtistsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      artists: []
    };
  }
  searchArtist(search) {
    if (search !== "") {
      SpotifyAxios.getArtists(search)
        .then(response => {
          if (response !== undefined && response.data !== null) {
            this.setState({ artists: response.data.artists.items });
          }
        })
    } else {
      this.setState({ artists: [] });
    }
  }

  componentWillMount() {
    this.searchArtist(this.props.search)
  }

  componentWillReceiveProps(nextProps) {
    this.searchArtist(nextProps.search);
  }
  render() {
    let { artists } = this.state;
    let { search } = this.props;
    let xhtml = <h3>Enter artist's name to start</h3>;
    if (artists.length > 0) {
      xhtml = artists.map((artist, index) => {
        return <Artist key={index} artist={artist} />
      })
    } else if (search !== '') {
      xhtml = "No data"
    }
    return (
      <div className="row" >
        {xhtml}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    search: state.search,
  }
}

export default connect(mapStateToProps, null)(ArtistsList)
