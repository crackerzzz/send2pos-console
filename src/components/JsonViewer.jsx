import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import OpenInNew from '@material-ui/icons/OpenInNew';
import JSONPretty from 'react-json-pretty';
import CopyToClipboard from 'react-copy-to-clipboard';
import PropTypes from 'prop-types';
import { DialogContent, DialogContentText, DialogActions } from '@material-ui/core';

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
        return (
            <React.Fragment>
                <Button
                    label="Open"
                    variant="fab"
                    color="primary"
                    onClick={this.handleOpen}
                >
                    <OpenInNew />
                </Button>
                <Dialog
                    onClose={this.handleClose}
                    open={this.state.open}
                    scroll='paper'
                    aria-labelledby="scroll-dialog-title"
                >
                    <DialogTitle id="simple-dialog-title">
                        {this.props.title}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <JSONPretty json={this.props.json} />
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            label="Ok"
                            variant="contained"
                            color="primary"
                            onClick={this.handleClose}
                        >
                            Ok
                        </Button>
                        <CopyToClipboard text={this.props.json}>
                            <Button
                                label="Copy to clipboard"
                                variant="contained"
                                color="primary"
                                onClick={this.copied}
                            >
                                Copy to clipboard
                            </Button>
                        </CopyToClipboard>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        );
    }
}

JsonViewer.propTypes = {
    json: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default JsonViewer;