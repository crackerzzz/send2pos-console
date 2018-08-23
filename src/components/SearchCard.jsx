import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};


class SearchCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <CardContent>
                    <Typography component="p">
                        search for : {this.props.searchFor}
                    </Typography>
                    <Typography variant="headline" component="h2">
                        search text: {this.props.searchText}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={this.props.onRemove}>X</Button>
                </CardActions>
            </Card>
        );
    }
}

SearchCard.prototypes = {
    searchFor: PropTypes.string,
    searchText: PropTypes.string
};

export default SearchCard;