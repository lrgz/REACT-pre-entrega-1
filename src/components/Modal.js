import "./styles/Modal.css";
import { Text } from "@chakra-ui/react";

const Modal = ({ title, message, handleClick }) => {
  if (!message && !title) return null;

  return (
    <div className="modal-container">
      <div className="modal">
        <button className="modal-close-button" onClick={handleClick}>
          X
        </button>
        <Text className="category-title" py="10" mb="5">
          {title}
        </Text>
        <p className="modal-message">{message}</p>
      </div>
      ;
    </div>
  );
};

export default Modal;
