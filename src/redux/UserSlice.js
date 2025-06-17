// UserSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: JSON.parse(localStorage.getItem("users")) || [], // registered users
  loggedInUser: JSON.parse(localStorage.getItem("loggedInUser")) || null,
  loginError: false,
  registrationSuccess: false,
};

//* HELPER FUNCTION FOR FORMATTING NAMES
//  Capitalize first letter of each word in the user input & handle hyphenated names
function formatName(name) {
  return name
    .trim()
    .split(" ")
    .map((word) =>
      word
        .split("-")
        .map(
          (part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
        )
        .join("-")
    )
    .join(" ");
}

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //* ADD/REGISTER NEW USER
    registerUser: (state, action) => {
      const { firstName, surname, username, email, password } = action.payload;

      //  FORMAT USER INPUT
      const newUser = {
        firstName: formatName(firstName),
        surname: formatName(surname),
        username: username.trim(),
        email: email.trim().toLowerCase(),
        password: password.trim(),
      };

      //  ADD FORMATTED USER to users array
      state.users.push(newUser);
      localStorage.setItem("users", JSON.stringify(state.users));

      //  SET SUCCESSFUL REGISTRATION TO TRUE
      state.registrationSuccess = true;
      state.loginError = false;
    },

    //* CLEAR REGISTRATION SUCCESS
    clearRegistrationSuccess: (state) => {
      state.registrationSuccess = false;
    },

    clearLoginError: (state) => {
      state.loginError = false;
    },

    //* LOGIN USER
    loginUser: (state, action) => {
      //  VALIDATE LOGIN DETAILS AGAINST REGISTERED USERS
      const { username, password } = action.payload;
      const foundUser = state.users.find(
        (user) =>
          //  - find match: username
          user.username.trim().toLowerCase() === username.toLowerCase() &&
          //  - find match: password
          user.password === password
      );
      //  IF VALID USER = LOGIN (successful login)
      if (foundUser) {
        // set login as true
        state.loggedInUser = foundUser;
        state.loginError = false;
        localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
      }
      //  IF NO USER MATCH = ERROR (unsuccessful login)
      else {
        state.loggedInUser = null;
        state.loginError = true;
      }
    },

    //* LOGOUT USER
    logoutUser: (state) => {
      state.loggedInUser = null;
      localStorage.removeItem("loggedInUser");
    },
  },
});

export const { registerUser, clearRegistrationSuccess, clearLoginError, loginUser, logoutUser } =
  UserSlice.actions;

export default UserSlice.reducer;
