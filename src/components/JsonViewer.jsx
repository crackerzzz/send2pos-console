import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import JSONPretty from 'react-json-pretty';
import CopyToClipboard from 'react-copy-to-clipboard';
import PropTypes from 'prop-types';

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
            <Button
                label="Ok"
                variant="contained"
                color="primary"
                onClick={this.handleClose}
            >Ok</Button>,

            <CopyToClipboard text={this.props.json}>
                <Button
                    label="Copy to clipboard"
                    variant="contained"
                    color="primary"
                    onClick={this.copied}
                >Copy to clipboard</Button>
            </CopyToClipboard>
        ];

        return (
            <React.Fragment>
                <Button
                    label="Open"
                    variant="contained"
                    color="primary"
                    onClick={this.handleOpen}
                >
                    Open
                </Button>
                <Dialog
                    title={this.props.title}
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
                    style={{ fontSize: '10px' }}
                >
                    <JSONPretty json={this.props.json} />
                </Dialog>
            </React.Fragment>
        );
    }
}

JsonViewer.prototypes = {
    json: PropTypes.string,
    title: PropTypes.string
};

export default JsonViewer;