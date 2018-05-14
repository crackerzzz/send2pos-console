import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import PropTypes from 'prop-types';

class TopBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <GridList cols={3}>
                <GridTile key="1" title="Send2Pos Support Console"></GridTile>
                <GridTile key="2" title={this.props.welcomeMessage} ></GridTile>
                <GridTile key="3" title="Logout"></GridTile>
            </GridList>
        );
    }
}

TopBar.prototypes = {
    welcomeMessage: PropTypes.string,
};

export default TopBar;