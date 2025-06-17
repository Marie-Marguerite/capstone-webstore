// LoginToggle.jsx
import styles from "./LoginToggle.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/UserSlice";
import UserIcon from "../../assets/UserIcon.png";

export default function LoginToggle() {
  // VARIABLES AND HOOKS
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  // HANDLE LOGOUT
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className={styles.toggleContainer}>
      <div className={styles.toggle}>
        <div className={styles.user}>
          {/* USER */}
          <div className={styles.userIconWrapper}>
            {/* - user icon */}
            <img id={styles.userIcon} src={UserIcon} alt="graphic user icon" />
          </div>
          <div>
            {/* - user name */}
            <p>{loggedInUser?.firstName}.</p>
          </div>
        </div>

        {/* BUTTON: LOGOUT */}
        <div>
          <button className={styles.logoutButton} onClick={handleLogout}>
            LOGOUT
          </button>
        </div>
      </div>
    </div>
  );
}
