// LoginForm.jsx
import styles from "./RegisterLogin.module.css";

import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, clearLoginError } from "../../redux/UserSlice";

export default function LoginForm() {
  const inputRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const loginError = useSelector((state) => state.user.loginError);

  //* FOCUS FIRST INPUT FIELD
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  //* TIMER FOR INCORRECT LOGIN DETAILS ERROR MESSAGE
  useEffect(() => {
    if (loginError) {
      const timer = setTimeout(() => {
        dispatch(clearLoginError());
      }, 5000);
      return () => clearTimeout(timer); // remove once used
    }
  }, [loginError, dispatch]);

  //* REDIRECT TO HOME AFTER SUCCESSFUL LOGIN
  useEffect(() => {
    if (loggedInUser) {
      navigate("/home"); // redirect home
    }
  }, [loggedInUser, navigate]);

  //* HANDLE FORM
  const formik = useFormik({
    // INITIAL VALUES
    initialValues: {
      username: "",
      password: "",
    },

    // VALIDATE
    validate: (values) => {
      const errors = {};
      // If no input:
      // - username
      if (!values.username) {
        errors.username = "Username required.";
      }
      // - password
      if (!values.password) {
        errors.password = "Password required.";
      }
      return errors;
    },

    //* ON SUBMIT
    onSubmit: (values, { resetForm, setTouched }) => {
      // - dispatch login to Redux
      dispatch(
        loginUser({ username: values.username, password: values.password })
      );
      // - clear old input
      resetForm();
      // - // prevent 'touch' from old input to pickup (and thus show errors) during new registration
      setTouched({});
    },
  });

  //* RENDER FORM
  return (
    <div className={styles.formContainer}>
      <form onSubmit={formik.handleSubmit} className={styles.loginRegisterForm}>
        {/* USERNAME */}
        <label htmlFor="username" className={styles.visuallyHidden}>
          Username
        </label>
        <input
          id="username"
          name="username"
          type="username"
          placeholder="username"
          ref={inputRef}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username ? (
          <div className={styles.error}>{formik.errors.username}</div>
        ) : null}

        {/* PASSWORD */}
        <label htmlFor="password" className={styles.visuallyHidden}>
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className={styles.error}>{formik.errors.password}</div>
        ) : null}

        {/* LOGIN ERROR MESSAGE */}
        {loginError && (
          <p className={styles.error}>
            An invalid username or password was entered.
          </p>
        )}

        {/* SUBMIT BUTTON */}
        <button className={styles.loginRegisterButton} type="submit">
          LOGIN
        </button>
      </form>
    </div>
  );
}
