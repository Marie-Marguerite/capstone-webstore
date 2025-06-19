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
