import { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import Form from "./Form";
import Modal from "./Modal";

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const setModal = (title, message) => {
    setMessage(message);
    setTitle(title);
  };

  const handleClick = () => {
    setMessage("");
    setTitle("");
  };

  return (
    <>
      {cart.length > 0 && <Form setModal={setModal} />}

      <Modal
        message={message}
        title={title}
        handleClick={() => handleClick()}
      />
    </>
  );
};

export default Checkout;
