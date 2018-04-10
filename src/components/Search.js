import React, { Component } from 'react';

import { connect } from 'react-redux'
import { changeSearch } from './../actions'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { search: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ search: event.target.value });
    }

    handleSubmit(event) {
        let {search} = this.state;
        this.props.changeSearch(search);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-inline" >
                <div className="form-group">
                    <input name="search" value={this.state.search} onChange={this.handleChange} type="text" className="form-control" placeholder="Enter artist name ..." />
                    <button type="submit" className="btn btn-danger">Search</button>
                </div>
            </form>

        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeSearch: (search) => {
            dispatch((changeSearch(search)))
        }
    }
}

export default connect(null, mapDispatchToProps)(Search)
