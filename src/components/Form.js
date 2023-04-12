import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CartContext from "../context/CartContext";
import { orderValitation } from "../firebase/firebase-config";
import { Text, CircularProgress } from "@chakra-ui/react";

const schema = yup.object({
  name: yup.string().required("obligatorio"),
  phone: yup
    .string()
    .required("obligatorio")
    .matches(
      /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/,
      "solo números, sin 0, ej: 1151234567"
    ),
  email: yup.string().required("obligatorio").email("formato incorrecto"),
  confirmEmail: yup
    .string()
    .required("obligatorio")
    .oneOf([yup.ref("email")], "no coinciden"),
});

const Form = ({ setModal }) => {
  const [loading, setLoading] = useState(false);
  const { cart, clearCart, getGrandTotal } = useContext(CartContext);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const confirmOrder = async (buyer) => {
    setLoading(true);
    return await orderValitation(
      buyer,
      cart,
      getGrandTotal(),
      clearCart,
      setModal
    ).finally(() => setLoading(false));
  };

  return (
    <>
      {loading && (
        <div className="overlay">
          <CircularProgress
            isIndeterminate
            color="pink.300"
            size="100px"
            className="spin"
          />
        </div>
      )}
      <Text className="category-title" py="10" mb="5">
        Completá tu información para finalizar
      </Text>
      <form onSubmit={handleSubmit(confirmOrder)}>
        <div className="inputs-conteiner">
          <div>
            <label htmlFor="name">
              Nombre y Apellido <span>{errors.name?.message}</span>
            </label>
            <input id="name" type="text" {...register("name")} />
          </div>
          <div>
            <label htmlFor="phone">
              Número de teléfono <span>{errors.phone?.message}</span>
            </label>
            <input id="phone" type="text" {...register("phone")} />
          </div>
          <div>
            <label htmlFor="email">
              Email <span>{errors.email?.message}</span>
            </label>
            <input id="email" type="email" {...register("email")} />
          </div>
          <div>
            <label htmlFor="confirmEmail">
              Repetir email <span>{errors.confirmEmail?.message}</span>
            </label>
            <input
              id="confirmEmail"
              type="text"
              {...register("confirmEmail")}
            />
          </div>
        </div>
        <button className="btn-order"> Enviar Compra</button>
      </form>
    </>
  );
};

export default Form;
