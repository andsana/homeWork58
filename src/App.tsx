import React, {useState} from 'react';
import Modal from './components/Modal/Modal';
import {modalButton} from './types';

const App: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const openModal = () => {
    console.log('modal open');
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleContinue = () => {
    alert('Continue button clicked');
    setShowModal(false);
  };

  const modalButtons: modalButton[] = [
    {type: 'primary', label: 'Continue', onClick: handleContinue},
    {type: 'danger', label: 'Close', onClick: handleCancel},
  ];

  return (
    <div className="container mt-5">
      <button className="btn btn-primary" onClick={openModal}>
        Model
      </button>
      <Modal
        show={showModal}
        onClose={closeModal}
        title="Some kinda modal title"
        body="This is modal content"
        buttons={modalButtons}
      />
    </div>
  );
};

export default App;

