import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import {modalButton} from '../../types';

interface Props {
  show: boolean;
  title: string;
  body: string;
  onClose: React.MouseEventHandler;
  buttons: modalButton[];
}

const Modal: React.FC<Props> = ({show, onClose, title, body, buttons}) => {
  return (
    <>
      <Backdrop show={show} onClick={onClose}/>
      <div className="modal show" style={{display: show ? 'block' : 'none'}}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              <p>{body}</p>
            </div>
            <div className="modal-footer">
              {buttons.map((button, index) => (
                <button
                  key={index}
                  type="button"
                  className={`btn btn-${button.type}`}
                  data-bs-dismiss="modal"
                  onClick={button.onClick}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

