import React, {useState} from 'react';
import Modal from './components/Modal/Modal';
import {modalButton} from './types';
import Alert from './components/Alert/Alert';

const App: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(true);


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

  const closeAlert = () => {
    console.log('Закрыть алерт');
    setShowAlert((prevState) => !prevState);
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

      {showAlert && (
        <Alert type="warning" onDismiss={closeAlert}>
          This is a warning type alert
        </Alert>
      )}
      <Alert type="success">
        This is a success type alert
      </Alert>
    </div>
  );
};

export default App;

