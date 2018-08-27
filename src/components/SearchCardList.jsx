import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
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
                    <Grid container spacing={40} alignItems="flex-end" wrap="nowrap">
                        {this.props.searchFields.map((f, index) =>
                            <Grid item
                                key={index} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardHeader
                                        title={f.searchFor}
                                        titleTypographyProps={{ align: 'center' }}
                                        action={
                                            <IconButton color="primary" onClick={() => this.props.onRemove(index)}>
                                                <CloseIcon />
                                            </IconButton>
                                        }
                                        className={classes.cardHeader}
                                    />
                                    <CardContent>
                                        <Typography variant="headline" component="h2">
                                            search text: {f.searchText}
                                        </Typography>
                                    </CardContent>
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