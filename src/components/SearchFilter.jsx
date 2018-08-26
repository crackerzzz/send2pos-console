import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
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
    };

    handleSearchValueChange = (event) => {
        this.setState({ selectedSearchValue: event.target.value });
    };

    handleSearchAdd = () => {
        const newSearchItem = { searchFor: this.state.selectedSearchField, searchText: this.state.selectedSearchValue };
        this.setState({ searchFields: [...this.state.searchFields, newSearchItem] });
    };

    handleSearchRemove = (index) => {
        const tSearchFields = this.state.searchFields;
        this.setState({
            searchFields: tSearchFields.slice(0, index - 1).concat(tSearchFields.slice(index + 1, tSearchFields.length))
        });
    }

    handleSearch = () => {
        this.props.onSearch(this.state.searchFields);
    }

    render() {
        const { classes } = this.props;
        return (
            <form>
                <div>
                    <Grid container spacing={16} alignItems="baseline">
                        <Grid item  >
                            <TextField
                                id="searchFor"
                                select
                                label="Search For"
                                value={this.state.selectedSearchField}
                                onChange={this.handleSelectionChange}
                                SelectProps={{
                                    MenuProps: {
                                        className: classes.menu,
                                    },
                                }}
                                margin="normal"
                            >
                                {searchFieldNames.map(entry =>
                                    <MenuItem key={entry.id} value={entry.id}>{entry.value} </MenuItem>
                                )}
                            </TextField>
                        </Grid>
                        <Grid item  >
                            <TextField
                                id="searchValue"
                                label="Search Value"
                                value={this.state.selectedSearchValue}
                                onChange={this.handleSearchValueChange}
                                autoFocus={true}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item  >
                            <Button label="Add" variant="outlined" color="secondary"
                                onClick={this.handleSearchAdd}
                            >
                                Add
                            </Button>
                        </Grid>
                        <Grid item  >
                            <Button label="Search" variant="contained" color="primary"
                                onClick={this.handleSearch}
                            >
                                Search
                            </Button>
                        </Grid>
                    </Grid>
                </div >
                <SearchCardList searchFields={this.state.searchFields} onRemove={this.handleSearchRemove} />
            </form >
        );
    }
}

SearchFilter.prototypes = {
    onSearch: PropTypes.func.isRequired,
};

export default withStyles(styles)(SearchFilter);