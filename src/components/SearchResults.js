import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
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
                    <TableRow>
                        <TableRowColumn>Brightside</TableRowColumn>
                        <TableRowColumn>John Smith</TableRowColumn>
                        <TableRowColumn>PO-BS-000000274d</TableRowColumn>
                        <TableRowColumn>2018-03-05 16:17:51.727</TableRowColumn>
                        <TableRowColumn>COMPLETED</TableRowColumn>
                        <TableRowColumn>Request</TableRowColumn>
                        <TableRowColumn>Response</TableRowColumn>
                    </TableRow>
                </TableBody>
            </Table>
        );
    }
}

export default SearchResults;