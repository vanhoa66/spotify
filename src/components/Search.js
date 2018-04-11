import React, { Component } from 'react';

import { connect } from 'react-redux'
import { changeSearch } from './../actions'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { search: '' };
    }

    handleChange = (event) => {
        this.setState({ search: event.target.value });
    }

    handleSubmit = (event) => {
        let { search } = this.state;
        this.props.changeSearch(search);
        event.preventDefault();
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.handleSubmit(event);
        }
    }

    render() {
        let search = (this.state.search !== '') ? this.state.search : this.props.search;
        return (
            <form onSubmit={this.handleSubmit} className="form-inline" >
                <div className="form-group">
                    <input name="search" value={search} onKeyPress={this.handleKeyPress} onChange={this.handleChange} type="text" className="form-control" placeholder="Enter artist name ..." />
                    <button type="submit" className="btn btn-danger">Search</button>
                </div>
            </form>

        );
    }
}

const mapStateToProps = state => {
    return {
        search: state.search
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeSearch: (search) => {
            dispatch((changeSearch(search)))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
