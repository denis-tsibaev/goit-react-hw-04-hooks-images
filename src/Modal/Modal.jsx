import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
    handleModalEscape = e => {
        this.props.onClose();
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleModalEscape);
    }

    render() {
        return createPortal(
            <div
                className="Overlay"
                onClose={this.handleModalEscape}
                onClick={this.props.handleBackdropClick}
            >
                <div className="Modal">{this.props.children}</div>
            </div>,
            modalRoot,
        );
    }
}

export default Modal;
