import React from "react";
import { useLocation, Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/authActions";
import {
    FaPersonBooth,
    FaSignInAlt,
    FaPlus,
    FaSignOutAlt
} from "react-icons/fa";

const Header = () => {
    const auth = useSelector(state => state.auth);
    const { isAuthenticated, user } = auth;

    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    const dispatch = useDispatch();
    const history = useHistory();

    const logoutHandle = () => {
        dispatch(logout());
        history.push("/login");
    };

    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light navbar-laravel">
                <div className="container">
                    <Link
                        className={
                            splitLocation[1] === ""
                                ? "navbar-brand bg-primary px-2"
                                : "navbar-brand"
                        }
                        to="/"
                    >
                        TaskManager
                    </Link>

                    {isAuthenticated ? (
                        <div>
                            <ul className="navbar-nav mr-auto">
                                <li
                                    className={
                                        splitLocation[1] === "register"
                                            ? "bg-primary"
                                            : "nav-item"
                                    }
                                >
                                    <Link to="/" className="nav-link">
                                        <FaPersonBooth /> Hello{" "}
                                        <span className="text-danger">
                                            {user.name}
                                        </span>
                                    </Link>
                                </li>

                                <li
                                    className={
                                        splitLocation[1] === "login"
                                            ? "bg-primary"
                                            : "nav-item"
                                    }
                                >
                                    <Link
                                        to="#"
                                        onClick={logoutHandle}
                                        className="nav-link"
                                    >
                                        <FaSignInAlt /> Logout
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <div>
                            <ul className="navbar-nav mr-auto">
                                <li
                                    className={
                                        splitLocation[1] === "register"
                                            ? "bg-primary"
                                            : "nav-item"
                                    }
                                >
                                    <Link to="/register" className="nav-link">
                                        <FaPlus /> Register
                                    </Link>
                                </li>

                                <li
                                    className={
                                        splitLocation[1] === "login"
                                            ? "bg-primary"
                                            : "nav-item"
                                    }
                                >
                                    <Link to="/login" className="nav-link">
                                        <FaSignInAlt /> Login
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Header;
