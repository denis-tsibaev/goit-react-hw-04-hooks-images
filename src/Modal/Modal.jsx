import { createPortal } from 'react-dom';
import './Modal.scss';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, handleBackdropClick, modalImage }) => {
    return createPortal(
        <div
            className="Overlay"
            onClose={onClose}
            onClick={handleBackdropClick}
        >
            <div className="Modal">
                <img src={modalImage} />
            </div>
        </div>,
        modalRoot,
    );
};

export default Modal;
