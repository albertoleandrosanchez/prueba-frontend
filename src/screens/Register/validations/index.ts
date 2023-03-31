import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("El nombre es requerido"),
  email: Yup.string().email("Email Invalido").required("El email es requerido"),
  password: Yup.string()
    .min(6, ({ min }) => `La contraseña debe tener al menos ${min} caracteres`)
    .required("La contraseña es requerida"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Las contraseñas no coinciden")
    .required("La confirmación de la contraseña es requerida"),
});

export default validationSchema;
