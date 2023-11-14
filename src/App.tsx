import React, {useState} from 'react';
import Modal from './components/Modal/Modal';
import {modalButton} from './types';
import Alert from './components/Alert/Alert';

const App: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showWarningAlert, setShowWarningAlert] = useState<boolean>(true);
  const [showSuccessAlert, setShowSuccessAlert] = useState<boolean>(true);

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const toggleContinue = () => {
    alert('Continue button clicked');
    setShowModal((prevState) => !prevState);
  };

  const modalButtons: modalButton[] = [
    {type: 'primary', label: 'Continue', onClick: toggleContinue},
    {type: 'danger', label: 'Close', onClick: toggleModal},
  ];

  const closeWarningAlert = () => {
    setShowWarningAlert((prevState) => !prevState);
  };

  const closeSuccessAlert = () => {
    setShowSuccessAlert((prevState) => !prevState);
  };

  return (
    <div className="container mt-5">
      <button className="btn btn-primary mb-5" onClick={toggleModal}>
        Model
      </button>
      <Modal
        show={showModal}
        onClose={toggleModal}
        title="Some kinda modal title"
        body="This is modal content"
        buttons={modalButtons}
      />

      {showWarningAlert && (
        <Alert type="warning" onDismiss={closeWarningAlert}>
          This is a warning type alert
        </Alert>
      )}
      {showSuccessAlert && (
        <Alert type="success" clickDismissable onDismiss={closeSuccessAlert}>
          This is a success type alert
        </Alert>
      )}
    </div>
  );
};

export default App;

