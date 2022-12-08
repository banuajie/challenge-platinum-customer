import "./index.css";
import React, { useState } from "react";
import img_rectangle_register from "../../assets/images/img_rectangle_register.png";
import img_register from "../../assets/images/img_register.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { postLogin } from "../../actions/signinAction";
import { Alert } from "bootstrap";

const FormSignIn = () => {
    const dispatch = useDispatch();
    const getSessionCarDetail = JSON.parse(window.sessionStorage.getItem("SessionCarDetail"));
    const { postLoginResult } = useSelector((state) => state.SignInReducer);
    const location = useLocation();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const signIn = () => {
        dispatch(postLogin({ email: email, password: password }));
        window.localStorage.setItem("Token", postLoginResult.access_token);

        const token = postLoginResult.access_token;

        if (location.state && getSessionCarDetail && token) {
            navigate(location.state);
        } else {
            navigate("/");
        }
    };

    const handleSignIn = (event) => {
        event.preventDefault();

        if (validator.isEmail(email) === false) {
            setError("Email yang Anda inputkan tidak sesuai format!");
        } else if (password.length < 6) {
            setError("Password tidak boleh kurang dari 6 karakter!");
        } else {
            signIn();
        }
    };

    return (
        <>
            <section id="form-signin">
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col">
                            <div className="row content-signin h-100 d-flex flex-column align-items-center justify-content-center">
                                <form className="w-75">
                                    <img src={img_rectangle_register} alt="Rectangle Register" className="mb-4" />
                                    <p className="signin-title">Welcome Back!</p>
                                    {error && (
                                        <Alert className="bg-danger" onClose={() => setError("")}>
                                            {error}
                                        </Alert>
                                    )}

                                    <div className="mb-3">
                                        <label className="label-email form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Contoh: johndee@gmail.com"
                                            value={email}
                                            onChange={(event) => {
                                                setEmail(event.target.value);
                                            }}
                                        />
                                    </div>

                                    <div className="mb-5">
                                        <label className="label-password form-label">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="6+ karakter"
                                            value={password}
                                            onChange={(event) => {
                                                setPassword(event.target.value);
                                            }}
                                        />
                                    </div>

                                    <button type="submit" className="btn-signin btn btn-primary w-100 text-white mb-4" onClick={(event) => handleSignIn(event)}>
                                        Sign In
                                    </button>

                                    <p className="text-center">
                                        Don't have an account?{" "}
                                        <Link to="/signup">
                                            <span className="text-signup-bottom">Sign Up for free</span>
                                        </Link>
                                    </p>
                                </form>
                            </div>
                        </div>

                        <div className="col">
                            <img src={img_register} alt="Right Side Register" className="w-100" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FormSignIn;
