import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { TextField } from 'material-ui';
import SearchCard from './SearchCard';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const searchFieldNames = [
    { value: 'Order Number', id: 'OrderNumber' },
    { value: 'Customer Name', id: 'CustomerName' },
    { value: 'Client Id', id: 'ClientId' },
];


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
    }
};

class SearchFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSearchField: 'OrderNumber',
            selectedSearchValue: '',
            searchFields: [],
        };
    }

    handleSelectionChange = (event, index, value) => {
        this.setState({ selectedSearchField: value });
        console.log('selection changed to ' + value);
    };

    handleSearchValueChange = (event) => {
        this.setState({ selectedSearchValue: event.target.value });
        console.log('search value changed to ' + event.target.value);
    };

    handleSearchAdd = (index, value) => {
        const newSearchItem = { searchFor: index, searchText: value };
        this.setState({ searchFields: [...this.state.searchFields, newSearchItem] });
        console.log('New Search Field: ' + JSON.stringify(newSearchItem));
    };

    handleSearchRemove = (index) => {
        const tSearchFields = this.state.searchFields;
        this.setState({
            searchFields: tSearchFields.slice(0, index - 1).concat(tSearchFields.slice(index + 1, tSearchFields.length))
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <form>
                <Toolbar>
                    <ToolbarGroup firstChild={true}>
                        <DropDownMenu
                            value={this.state.selectedSearchField} onChange={this.handleSelectionChange}>
                            {searchFieldNames.map(entry =>
                                <MenuItem key={entry.id} value={entry.id} primaryText={entry.value} />
                            )}
                        </DropDownMenu>
                        <ToolbarSeparator />
                        <TextField
                            hintText="Search value"
                            onChange={this.handleSearchValueChange}
                            autoFocus={true}
                        />
                        <ToolbarSeparator />
                        <RaisedButton label="Add" secondary={true}
                            onClick={() => this.handleSearchAdd(this.state.selectedSearchField, this.state.selectedSearchValue)}
                        />
                        <ToolbarSeparator />
                        <RaisedButton label="Search" primary={true}
                            onClick={() => this.props.onSearch(this.state.searchFields)}
                        />
                    </ToolbarGroup>
                </Toolbar>
                {this.state.searchFields.length > 0 &&
                    <div className={classes.root}>
                        <GridList className={classes.gridList} cols={3}>
                            {this.state.searchFields.map((f, index) =>
                                <GridListTile key={index} cols={1}>
                                    <SearchCard key={index} searchFor={f.searchFor} searchText={f.searchText} onRemove={() => this.handleSearchRemove(index)} />
                                </GridListTile>
                            )}
                        </GridList>
                    </div>
                }
            </form>
        );
    }
}

SearchCard.prototypes = {
    onSearch: PropTypes.func.isRequired,
};

export default withStyles(styles)(SearchFilter);