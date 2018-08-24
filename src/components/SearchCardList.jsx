import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SearchCard from './SearchCard';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
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
                    <GridList className={classes.gridList} cols={3}>
                        {this.props.searchFields.map((f, index) =>
                            <GridListTile key={index} cols={1}>
                                <SearchCard key={index} searchFor={f.searchFor} searchText={f.searchText} onRemove={() => this.props.onRemove(index)} />
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