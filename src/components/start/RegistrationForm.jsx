// RegistrationForm.jsx
import styles from "./RegisterLogin.module.css";
import { useFormik } from "formik";
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, clearRegistrationSuccess } from "../../redux/UserSlice";

export default function RegisterForm() {
  const inputRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registrationSuccess = useSelector(
    (state) => state.user.registrationSuccess
  );

  //* FOCUS INPUT FIELD (first input field - firstName)
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  //* TIMER FOR REGISTRATION SUCCESS CONFIRMATION MESSAGE
  useEffect(() => {
    if (registrationSuccess) {
      const timer = setTimeout(() => {
        dispatch(clearRegistrationSuccess());
      }, 5000);
      return () => clearTimeout(timer); // remove once used
    }
  }, [registrationSuccess, dispatch]);

  //* THE FORM
  const formik = useFormik({
    //* 3.1. INITIAL VALUES
    initialValues: {
      firstName: "",
      surname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    //* VALIDATE
    validate: (values) => {
      const errors = {};
      // VALIDATE: FIRST NAME (has input, alphabetical characters & under 15 characters)
      if (!values.firstName) {
        errors.firstName = "Required.";
      } else if (!/^[\p{L}\s'-]+$/u.test(values.firstName)) {
        errors.firstName = "Please enter a valid name";
      } else if (values.firstName.length > 15) {
        errors.firstName = "Please use a maximum of 15 characters.";
      }

      // VALIDATE: SURNAME (has input, alphabetical characters & under 20 characters)
      if (!values.surname) {
        errors.surname = "Required.";
      } else if (!/^[\p{L}\s'-]+$/u.test(values.surname)) {
        errors.surname = "Please enter a valid name";
      } else if (values.surname.length > 20) {
        errors.surname = "Please use a maximum of 20 characters.";
      }

      // VALIDATE: USERNAME (has input & under 20 characters)
      if (!values.surname) {
        errors.surname = "Required.";
      } else if (values.surname.length > 20) {
        errors.surname = "Please use a maximum of 20 characters.";
      }

      // VALIDATE: EMAIL (expected email characters)
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Please enter a valid email.";
      }

      // VALIDATE: PASSWORD (8 characters or more, at least one uppercase and lowercase letter, a number and a special case character)
      if (!values.password) {
        errors.password = "Required.";
      } else if (values.password.length < 8) {
        errors.password = "Password must contain 8 or more characters.";
      } else if (
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/.test(
          values.password
        )
      ) {
        errors.password =
          "Please enter a password with at least one upper- and lowercase letter, a number and a special character.";
      }

      // VALIDATE: CONFIRM PASSWORD
      if (!values.confirmPassword) {
        errors.confirmPassword = "Required";
      } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword =
          "Please re-enter as the passwords do not match.";
      }
      return errors;
    },

    //* ON SUBMIT
    onSubmit: (values, { resetForm, setTouched }) => {
      dispatch(registerUser(values));
      resetForm(); // clear old input
      setTouched({}); // prevent 'touch' from old input to pickup (and thus show errors) during new registration
    },
  });

  //* RETURN: FORM INPUT FIELDS
  return (
    <div className={styles.formContainer}>
      <form onSubmit={formik.handleSubmit} className={styles.loginRegisterForm}>
        {/* FIRST NAME */}
        <label htmlFor="firstName" className={styles.visuallyHidden}>
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="First Name"
          ref={inputRef}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className={styles.error}>{formik.errors.firstName}</div>
        ) : null}

        {/* SURNAME */}
        <label htmlFor="surname" className={styles.visuallyHidden}>
          Surname
        </label>
        <input
          id="surname"
          name="surname"
          type="text"
          placeholder="Surname"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.surname}
        />
        {formik.touched.surname && formik.errors.surname ? (
          <div className={styles.error}>{formik.errors.surname}</div>
        ) : null}

        {/* USERNAME */}
        <label htmlFor="username" className={styles.visuallyHidden}>
          Username
        </label>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />
        {formik.touched.surname && formik.errors.surname ? (
          <div className={styles.error}>{formik.errors.surname}</div>
        ) : null}

        {/* EMAIL */}
        <label htmlFor="email" className={styles.visuallyHidden}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className={styles.error}>{formik.errors.email}</div>
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

        {/* CONFIRM PASSWORD */}
        <label htmlFor="confirmPassword" className={styles.visuallyHidden}>
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <div className={styles.error}>{formik.errors.confirmPassword}</div>
        ) : null}

        {/* SUBMIT BUTTON */}
        <button className={styles.loginRegisterButton} type="submit">
          REGISTER
        </button>
      </form>

      {/* REGISTRATION SUCCESS CONFIRMATION MESSAGE */}
      {registrationSuccess && (
        <p className={styles.registrationSuccess}>
          Successful registration. Continue to{" "}
          <a onClick={() => navigate("/login")}>LOGIN</a>.
        </p>
      )}
    </div>
  );
}
