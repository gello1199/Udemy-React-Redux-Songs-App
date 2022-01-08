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

const mapStateToProps = state => {
    return { songs: state.songs }
}

export default connect(mapStateToProps)(Songlist);
