import React from "react";
import styles from "./styles/Register.module.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import validationSchema from "./validations";
export interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
  return (
    <div className={styles.register}>
      <div className={styles.registerContainer}>
        <div className={styles.registerContainer__top}>
          <h1 className={styles.title}>Registrate</h1>
        </div>
        <div className={styles.registerContainer__main}>
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
            validateOnBlur
          >
            {({ isSubmitting }) => (
              <Form>
                <Field
                  className={styles.field}
                  type="text"
                  name="name"
                  placeholder="Nombre"
                />
                <ErrorMessage
                  className={styles.errorMessage}
                  name="name"
                  component="div"
                />
                <Field
                  className={styles.field}
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <ErrorMessage
                  className={styles.errorMessage}
                  name="email"
                  component="div"
                />
                <Field
                  placeholder="Contraseña"
                  className={styles.field}
                  type="password"
                  name="password"
                />
                <ErrorMessage
                  className={styles.errorMessage}
                  name="password"
                  component="div"
                />
                <Field
                  placeholder="Confirmar contraseña"
                  className={styles.field}
                  type="password"
                  name="confirmPassword"
                />
                <ErrorMessage
                  className={styles.errorMessage}
                  name="confirmPassword"
                  component="div"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={styles.button}
                >
                  Registrar
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <div className={styles.registerContainer__bottom}>
          <p className={styles.registerContainer__bottom__text}>
            Ya tenes cuenta?
          </p>
          <a href="/login" className={styles.registerContainer__bottom__link}>
            Ingresar
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
