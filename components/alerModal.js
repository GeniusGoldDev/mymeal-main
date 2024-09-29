import React from 'react';
import Modal from 'react-modal';

// Styles for the modal
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '80%',
  },
};

const AlertModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Alert Modal"
    >
      <h2 className="text-xl font-semibold mb-4">Alert</h2>
      <p className="text-gray-600">
        Cannot proceed to checkout without selected items.
      </p>
      <button
        className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
        onClick={onRequestClose}
      >
        OK
      </button>
    </Modal>
  );
};

export default AlertModal;
