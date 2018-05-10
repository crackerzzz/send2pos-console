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

class SearchFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchFieldIndex: 2,
            searchValue: '',
            searchFields: [],
        };
    }

    handleSelectionChange = (event, index, value) => this.setState({ searchFieldIndex: value });
    handleSearchValueChange = (event, index, value) => this.setState({ searchValue: value });
    handleAdd = (index, value) => {
        const newSearchItem = { index: value };
        this.setState({ searchFields: [...this.state.searchFields, newSearchItem] });
        console.log('Refs is null' + newSearchItemt);
    };

    render() {
        return (
            <form>
                <Toolbar>
                    <ToolbarGroup firstChild={true}>
                        <DropDownMenu ref="searchField" value={this.state.searchFieldIndex} onChange={this.handleSelectionChange}>
                            <MenuItem value={1} primaryText="Search By" />
                            <MenuItem value={2} primaryText="Order Number" />
                            <MenuItem value={3} primaryText="Customer Name" />
                            <MenuItem value={4} primaryText="Client" />
                        </DropDownMenu>
                        <ToolbarSeparator />
                        <TextField ref="searchValue" hintText="Search value" floatingLabelFixed={true} floatingLabelText="Search Value" onChange={this.handleSearchValueChange} />
                        <ToolbarSeparator />
                        <RaisedButton label="Add" primary={false} onClick={() => this.handleAdd(this.state.searchFieldIndex, this.state.searchValue)} />
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <ToolbarTitle text="Options" />
                        <FontIcon className="muidocs-icon-custom-sort" />
                        <ToolbarSeparator />
                        <RaisedButton label="Search" primary={true} onClick={this.props.onSearch} />
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