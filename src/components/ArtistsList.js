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
  searchArtist(query) {
    if (query !== "") {
      SpotifyAxios.getArtists(query)
        .then(response => {
          if (response !== undefined) {
            this.setState({ artists: response.data.artists.items });
          }
        })
    } else {
      this.setState({ artists: [] });
    }
  }

  componentDidUpdate() {
    this.searchArtist(this.props.search)
  }

  componentWillReceiveProps(nextProps) {
    this.searchArtist(nextProps.search);
  }
  render() {
    let { artists } = this.state;
    let xhtml = "Enter Name";
    if (artists.length > 0) {
      xhtml = artists.map((artist, index) => {
        return <Artist key={index} artist={artist} />
      })
    } else {
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
