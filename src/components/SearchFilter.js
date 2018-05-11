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

const searchFieldNames = [
    { value: 'Order Number', id: 'OrderNumber' },
    { value: 'Customer Name', id: 'CustomerName' },
    { value: 'Client Id', id: 'ClientId' },
];

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
        const newSearchItem = { [index]: value };
        this.setState({ searchFields: [...this.state.searchFields, newSearchItem] });
        console.log('New Search Field: ' + JSON.stringify(newSearchItem));
    };

    render() {
        return (
            <form>
                <Toolbar>
                    <ToolbarGroup firstChild={true}>
                        <DropDownMenu ref="searchField"
                            value={this.state.selectedSearchField} onChange={this.handleSelectionChange}>
                            {searchFieldNames.map(entry =>
                                <MenuItem key={entry.id} value={entry.id} primaryText={entry.value} />
                            )}
                        </DropDownMenu>
                        <ToolbarSeparator />
                        <TextField ref="searchValue"
                            hintText="Search value"
                            floatingLabelFixed={true}
                            floatingLabelText="Search Value"
                            onChange={this.handleSearchValueChange} />
                        <ToolbarSeparator />
                        <RaisedButton label="Add" primary={false}
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
            </form>
        );
    }
}
export default SearchFilter;