import React from 'react';
import EnhancedTable from './EnhancedTable';
import PropTypes from 'prop-types';
import JsonViewer from './JsonViewer';
import SearchService from '../services/SearchService';

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

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("Search result render: " + this.props.results)
        return (
            <EnhancedTable
                columnData={columnData}
                rowData={this.props.results}
                searchParams={this.props.searchParams} />
        );
    }
}

SearchResults.prototypes = {
    results: PropTypes.arrayOf(PropTypes.object),
};

export default SearchResults;