import React from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import PropTypes from 'prop-types';

class SearchCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <CardText expandable={false}>
                    search for : {this.props.searchFor}
                    search text: {this.props.searchText}
                </CardText>
            </Card>
        );
    }
}

SearchCard.prototypes = {
    searchFor: PropTypes.string,
    searchText: PropTypes.string
};

export default SearchCard;