import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            requestPayloadOpen: false,
            responsePayloadOpen: false,
        };
    }

    handleRequestOpen = () => this.setState({ requestPayloadOpen: true })
    handleRequestClose = () => this.setState({ requestPayloadOpen: false })

    handleResponseOpen = () => this.setState({ responsePayloadOpen: true })
    handleResponseClose = () => this.setState({ responsePayloadOpen: false })

    render() {
        const requestActions = [
            <FlatButton
                label="Ok"
                primary={true}
                onClick={this.handleRequestClose}
            />
        ];
        const responseActions = [
            <FlatButton
                label="Ok"
                primary={true}
                onClick={this.handleResponseClose}
            />
        ];
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
                    {this.props.results.map(result =>
                        <TableRow>
                            <TableRowColumn>{result.clientId}</TableRowColumn>
                            <TableRowColumn>{result.customerName}</TableRowColumn>
                            <TableRowColumn>{result.orderNumber}</TableRowColumn>
                            <TableRowColumn>{result.date}</TableRowColumn>
                            <TableRowColumn>{result.status}</TableRowColumn>
                            <TableRowColumn>
                                <RaisedButton label="Open" onClick={this.handleRequestOpen} />
                                <Dialog
                                    title="Request Payload"
                                    actions={requestActions}
                                    modal={false}
                                    open={this.state.requestPayloadOpen}
                                    onRequestClose={this.handleRequestClose}
                                >
                                    {JSON.stringify(result.requestPayload, null, 2)}
                                </Dialog>
                            </TableRowColumn>
                            <TableRowColumn>
                                <RaisedButton label="Open" onClick={this.handleResponseOpen} />
                                <Dialog
                                    title="Response Payload"
                                    actions={responseActions}
                                    modal={false}
                                    open={this.state.responsePayloadOpen}
                                    onRequestClose={this.handleResponseClose}
                                >
                                    {JSON.stringify(result.responsePayload, null, 2)}
                                </Dialog>
                            </TableRowColumn>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        );
    }
}

export default SearchResults;