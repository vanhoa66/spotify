import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Artist extends Component {

  render() {
    let artist = { name: '', images: [] };
    artist = (this.props.artist !== null) ? this.props.artist : artist;
    return (
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="thumbnail">
          {this.showImage(artist.images, artist.name)}
          <div className="caption">
            <h3><Link to={`/artist/${artist.id}`} >{artist.name}</Link></h3>
            {this.showGenres(artist.genres)}
          </div>
        </div>
      </div>

    );
  }
  showImage(image, alt) {
    let xhtml = null;
    if (image[0] !== undefined) {
      xhtml = <img src={image[0].url} alt={alt} className="img-responsive" />
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
}

export default Artist

