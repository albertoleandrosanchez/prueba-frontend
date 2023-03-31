import * as Yup from "yup";

const validation = Yup.object({
  email: Yup.string().email("Email Invalido").required("Requerido"),
  password: Yup.string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .required("Requerido"),
});

export default validation;
