import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from './../components/Search'
import ArtistsList from './../components/ArtistsList'
import { actGoHome } from './../actions/index';
class HomePage extends Component {
  componentDidMount() {
    this.props.changeBreadcrumb();
  }
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
const mapDispatchToProps = dispatch => {
  return {
    changeBreadcrumb: () => {
      dispatch(actGoHome());
    }
  }
}
export default connect(null, mapDispatchToProps)(HomePage);
