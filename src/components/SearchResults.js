import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import PropTypes from 'prop-types';
import JsonViewer from './JsonViewer';


const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
    },
    table: {
        minWidth: 500,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
});

class SearchResults extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>Client ID</TableHeaderColumn>
                        <TableHeaderColumn>Customer Name</TableHeaderColumn>
                        <TableHeaderColumn>Order Number</TableHeaderColumn>
                        <TableHeaderColumn>Date Received</TableHeaderColumn>
                        <TableHeaderColumn>Status</TableHeaderColumn>
                        <TableHeaderColumn>Request Payload</TableHeaderColumn>
                        <TableHeaderColumn>Response Payload</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {this.props.results.map((result, index) =>
                        <TableRow key={index}>
                            <TableRowColumn>{result.clientId}</TableRowColumn>
                            <TableRowColumn>{result.customerName}</TableRowColumn>
                            <TableRowColumn>{result.orderNumber}</TableRowColumn>
                            <TableRowColumn>{result.date}</TableRowColumn>
                            <TableRowColumn>{result.status}</TableRowColumn>
                            <TableRowColumn>
                                <JsonViewer title="Request Payload" json={result.requestPayload} />
                            </TableRowColumn>
                            <TableRowColumn>
                                <JsonViewer title="Response Payload" json={result.responsePayload} />
                            </TableRowColumn>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        );
    }
}

SearchResults.prototypes = {
    results: PropTypes.arrayOf(PropTypes.object),
};

export default SearchResults;