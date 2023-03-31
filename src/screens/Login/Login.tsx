import React from "react";
import styles from "./styles/Login.module.css";
export interface LoginProps {}
import { Formik, Form, Field, ErrorMessage } from "formik";
import validationSchema from "./validations";

const Login: React.FC<LoginProps> = () => {
  return (
    <div className={styles.login}>
      <div className={styles.loginContainer}>
        <div className={styles.loginContainer__top}>
          <h1 className={styles.title}>Login</h1>
        </div>
        <div className={styles.loginContainer__main}>
          <Formik
            initialValues={{ email: "", password: "" }}
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
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={styles.button}
                >
                  Entrar
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <div className={styles.loginContainer__bottom}>
          <p className={styles.loginContainer__bottom__text}>
            Todavia no tenes cuenta?
          </p>
          <a href="#" className={styles.loginContainer__bottom__link}>
            Registrate
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
