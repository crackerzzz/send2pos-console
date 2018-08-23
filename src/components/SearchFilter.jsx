import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import { TextField } from 'material-ui';
import FlatButton from 'material-ui/FlatButton';
import SearchCard from './SearchCard';
import PropTypes from 'prop-types';

const searchFieldNames = [
    { value: 'Order Number', id: 'OrderNumber' },
    { value: 'Customer Name', id: 'CustomerName' },
    { value: 'Client Id', id: 'ClientId' },
];

const styles = {

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
       
    }


    render() {
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
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <ToolbarTitle text="Options" />
                        <FontIcon className="muidocs-icon-custom-sort" />
                        <ToolbarSeparator />
                        <RaisedButton label="Search" primary={true}
                            onClick={() => this.props.onSearch(this.state.searchFields)}
                        />
                        <IconMenu
                            iconButtonElement={
                                <IconButton touch={true}>
                                    <NavigationExpandMoreIcon />
                                </IconButton>
                            }
                        >
                            <MenuItem primaryText="Download" />
                            <MenuItem primaryText="More Info" />
                        </IconMenu>
                    </ToolbarGroup>
                </Toolbar>
                {this.state.searchFields.map((f, index) =>
                    <SearchCard key={index} searchFor={f.searchFor} searchText={f.searchText} onRemove={this.handleSearchRemove(key)} />
                )}
            </form>
        );
    }
}

SearchCard.prototypes = {
    onSearch: PropTypes.func.isRequired,
};

export default SearchFilter;