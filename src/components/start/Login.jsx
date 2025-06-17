// Login.jsx
import styles from "./RegisterLogin.module.css";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";

export default function Login() {

  // Prep navigate to register page
  const navigateRegister = useNavigate();
  const handleClick = () => {
    navigateRegister("/register");
  };

  return (
    <>
      {/* LOGIN FORM */}
      <LoginForm />
      {/* BUTTON: to navigate to register page */}
      {/* //! If the user clicks the register here button, an error message first appears (saying the active input field is required) ad then only on the second clickdoes the button function. How to set is so that the button navigate to Register on the first click? */}
      <button
        type="button"
        className={styles.loginRegisterHereButton}
        onClick={handleClick}
      >
        REGISTER HERE
      </button>
    </>
  );
}
