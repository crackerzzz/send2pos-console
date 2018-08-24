import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl'
import SearchCardList from './SearchCardList';
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

    handleSelectionChange = (event) => {
        this.setState({ selectedSearchField: event.target.value });
        console.log('selection changed to ' + event.target.value);
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
                <div>
                    <FormControl required>
                        <InputLabel htmlFor="search-for-required">Search For</InputLabel>
                        <Select
                            value={this.state.selectedSearchField}
                            onChange={this.handleSelectionChange}
                            inputProps={{
                                id: 'search-for-required',
                            }}
                        >
                            {searchFieldNames.map(entry =>
                                <MenuItem key={entry.id} value={entry.id}>{entry.value} </MenuItem>
                            )}
                        </Select>
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>
                    <TextField
                        id="searchValue"
                        label="Search value"
                        value={this.state.selectedSearchValue}
                        onChange={this.handleSearchValueChange}
                        autoFocus={true}
                    />
                    <Button label="Add" variant="contained" color="secondary"
                        onClick={() => this.handleSearchAdd(this.state.selectedSearchField, this.state.selectedSearchValue)}
                    >
                        Add
                    </Button>
                    <Button label="Search" variant="contained" color="primary"
                        onClick={() => this.props.onSearch(this.state.searchFields)}
                    >
                        Search
                    </Button>
                </div>
                <SearchCardList searchFields={this.state.searchFields} onRemove={this.handleSearchRemove} />
            </form>
        );
    }
}

SearchFilter.prototypes = {
    onSearch: PropTypes.func.isRequired,
};

export default withStyles(styles)(SearchFilter);