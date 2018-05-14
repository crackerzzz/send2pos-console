import React from 'react';
import Fragment from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import { TextField } from 'material-ui';
import JSONPretty from 'react-json-pretty';
import CopyToClipboard from 'react-copy-to-clipboard';

class JsonViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            copied: false,
        };
    }

    handleOpen = () => this.setState({ open: true })
    handleClose = () => this.setState({ open: false })

    copied = () => alert("Copied to clipboard")

    render() {
        const actions = [
            <FlatButton
                label="Ok"
                primary={true}
                onClick={this.handleClose}
            />,

            <CopyToClipboard text={this.props.json}>
                <FlatButton
                    label="Copy to clipboard"
                    primary={true}
                    onClick={this.copied}
                />
            </CopyToClipboard>
        ];

        return (
            <React.Fragment>
                <RaisedButton label="Open" onClick={this.handleOpen} />
                <Dialog
                    title={this.props.title}
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
                >
                    <JSONPretty json={this.props.json}></JSONPretty>
                </Dialog>
            </React.Fragment>
        );
    }
}

export default JsonViewer;