import React from 'react';
import SearchFilter from './SearchFilter';
import SearchService from '../services/SearchService';
import EnhancedTable from './EnhancedTable';
import { withStyles } from '@material-ui/core';

const columnData = [
    { id: 'country', numeric: false, disablePadding: true, label: 'Country' },
    { id: 'storeNo', numeric: false, disablePadding: false, label: 'Store Num' },
    { id: 'brand', numeric: false, disablePadding: false, label: 'Brand' },
    { id: 'franchiseCode', numeric: false, disablePadding: false, label: 'Franchise Code' },
    { id: 'franchiseChannel', numeric: false, disablePadding: false, label: 'Franchise Channel' },
    { id: 'clientId', numeric: false, disablePadding: true, label: 'Client ID' },
    { id: 'customerName', numeric: false, disablePadding: false, label: 'Customer Name' },
    { id: 'orderNumber', numeric: false, disablePadding: false, label: 'Order Number' },
    { id: 'date', numeric: false, disablePadding: false, label: 'Date' },
    { id: 'status', numeric: false, disablePadding: false, label: 'Status' },
    { id: 'request', numeric: false, disablePadding: false, label: 'Request' },
    { id: 'response', numeric: false, disablePadding: false, label: 'Response' },
];

const style = {
    root: {
        margin: 8
    }
}

class SearchHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchParams: [],
            results: [],
        };
    }

    handleSorting = (sorted) => {
        this.setState({
            results: sorted
        });
    }

    handleSearch = (searchParams) => {
        this.setState({
            results: SearchService(searchParams)
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <SearchFilter
                    onSearch={this.handleSearch}
                />
                <EnhancedTable
                    onSort={this.handleSorting}
                    rowData={this.state.results}
                    columnData={columnData}
                />
            </div>
        );
    }
}

export default withStyles(style)(SearchHome);
