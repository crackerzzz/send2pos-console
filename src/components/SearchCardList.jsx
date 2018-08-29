import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import red from '@material-ui/core/colors/red';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { CardHeader } from '@material-ui/core';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'hidden',
        justifyContent: 'space-around',
        backgroundColor: theme.palette.background.paper,
    },
    griditem: {
        margin: 0,
        padding: 10,
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    searchAvatar: {
        backgroundColor: red[500]
    }
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
                    <Grid container
                        spacing={40}
                        direction="row"
                        justify="center"
                        alignItems="center"
                        wrap="nowrap">
                        {this.props.searchFields.map((f, index) =>
                            <Grid item
                                className={classes.griditem}
                                key={index}
                                xs="auto">
                                <Card
                                    className={classes.card}>
                                    <CardHeader
                                        avatar={
                                            <Avatar
                                                className={classes.searchAvatar}>
                                                S
                                            </Avatar>
                                        }
                                        title={f.searchFor}
                                        subheader={f.searchText}
                                        action={
                                            <IconButton
                                                color="secondary"
                                                onClick={() => this.props.onRemove(index)}>
                                                <CloseIcon />
                                            </IconButton>
                                        }
                                        className={classes.cardHeader}
                                    />
                                </Card>
                            </Grid>
                        )}
                    </Grid>
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