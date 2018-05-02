import React, { Component } from 'react';

import { connect } from 'react-redux'
import { changeToken } from './../actions'

class Token extends Component {
    constructor(props) {
        super(props);
        this.state = { token: '' };
    }

    handleChange = (event) => {
        this.setState({ token: event.target.value });
    }

    handleSubmit = (event) => {
        let { token } = this.state;
        this.props.changeToken(token);
        event.preventDefault();
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.handleSubmit(event);
        }
    }

    render() {
        let token = (this.state.token !== '') ? this.state.token : this.props.token;
        return (
            <form onSubmit={this.handleSubmit} className="form-inline" >
                <div className="form-group">
                    <input name="token" value={token} onKeyPress={this.handleKeyPress} onChange={this.handleChange} type="text" className="form-control" placeholder="Enter New Token ..." />
                    <button type="submit" className="btn btn-danger">Get Token</button>
                </div>
            </form>

        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeToken: (token) => {
            dispatch(changeToken(token))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Token)
