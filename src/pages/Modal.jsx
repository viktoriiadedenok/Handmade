import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const afterOpenModal = () => {};

const BasketModal = props => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div class="form-group">
      <button onClick={openModal} class="btn btn-outline-secondary">
        Open Modal
      </button>
      {Modal.setAppElement("body")}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />

          <button>tab navigation</button>
        </form>
      </Modal>
    </div>
  );
};

// render(<App />);
export default BasketModal;
