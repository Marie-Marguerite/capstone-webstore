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
