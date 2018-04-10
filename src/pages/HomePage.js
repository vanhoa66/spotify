import React, { Component } from 'react';

import Search from './../components/Search'
import ArtistsList from './../components/ArtistsList'

class HomePage extends Component {

  render() {
    return (
      <div className="panel panel-info">
        <div className="panel-heading">
          <Search />
        </div>
        <div className="panel-body">
          <ArtistsList />
        </div>
      </div>
    );
  }
}
export default HomePage

