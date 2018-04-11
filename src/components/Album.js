import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Album extends Component {
  render() {
    let album = { name: '', images: [] };
    album = (this.props.album !== null) ? this.props.album : album;
    return (
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="thumbnail">
          {this.showImage(album.images, album.name)}
          <div className="caption">
            <h5><Link to={`/album/${album.id}`}>{album.name}</Link></h5>
          </div>
        </div>
      </div>

    );
  }
  showImage(image, alt) {
    let xhtml = null;
    if (image !== undefined) {
      xhtml = <img src={image[1].url} alt={alt} className="img-responsive" />
    }
    return xhtml;
  }

}

export default Album;
