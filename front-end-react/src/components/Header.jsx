import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logInOut } from "../Store/authSlice";
const Header = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const { error } = useSelector((state) => state);
  return (
    <>
      {error && <div className="alert alert-danger mb-0">{error}</div>}
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">My Books</span>

        <button
          className="btn btn-outline-primary"
          type="submit"
          onClick={() => dispatch(logInOut())}
        >
          {isLoggedIn ? "Logout" : "Log In"}
        </button>
      </nav>
    </>
  );
};

export default Header;
