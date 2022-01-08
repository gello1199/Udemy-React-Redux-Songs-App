import React, { Component } from 'react';
import { connect } from 'react-redux';

class Songlist extends Component {
    render() {
        return (
            <div>
                Song List
            </div>
        );
    }
}

export default connect()(Songlist);
