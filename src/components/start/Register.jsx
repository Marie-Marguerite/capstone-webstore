// Register.jsx
import styles from "./RegisterLogin.module.css";
import { useNavigate } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";

export default function Register() {
  // Prep navigate to login page
  const navigateLogin = useNavigate();
  const handleClick = () => {
    navigateLogin("/login");
  };

  return (
    <>
      {/* REGISTRATION FORM */}
      <RegistrationForm />
      {/* BUTTON: to navigate to login page */}
      {/* //! If the user clicks the login here button, an error message first appears (saying the active input field is required) ad then only on the second clickdoes the button function. How to set is so that the button navigate to Login on the first click? */}
      <button
        className={styles.loginRegisterHereButton}
        type="button"
        onClick={handleClick}
      >
        LOGIN HERE
      </button>
    </>
  );
}
