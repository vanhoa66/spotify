import React, { Component } from 'react';

class Track extends Component {

  render() {
    let track = { name: '', preview_url: '' };
    track = (this.props.track !== null) ? this.props.track : track;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 track">
        <h4>{track.name}</h4>
        <audio src={track.preview_url} controls>Your browser does not support the audio element.</audio>
      </div>
    );
  }
}

export default Track

