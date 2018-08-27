import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SearchCard from './SearchCard';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'hidden',
        justifyContent: 'space-around',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: '100%',
        height: 200,
        flexWrap: 'nowrap',
    },
    gridListTile: {
        width: 250,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 200,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class SearchCardList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                {
                    this.props.searchFields.length > 0 &&
                    <GridList className={classes.gridList} cols={2.5}>
                        {this.props.searchFields.map((f, index) =>
                            <GridListTile
                                key={index}
                                className={classes.gridListTile}>
                                <SearchCard
                                    key={index}
                                    searchFor={f.searchFor}
                                    searchText={f.searchText}
                                />
                                <GridListTileBar
                                    title=' '
                                    classes={{
                                        root: classes.titleBar,
                                        title: classes.title,
                                    }}
                                    actionIcon={
                                        <IconButton color="primary" onClick={() => this.props.onRemove(index)}>
                                            <CloseIcon />
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
                        )}
                    </GridList>
                }
            </div>
        );
    };
}

SearchCardList.prototypes = {
    searchFields: PropTypes.array.isRequired,
    onRemove: PropTypes.func.isRequired
}

export default withStyles(styles)(SearchCardList);