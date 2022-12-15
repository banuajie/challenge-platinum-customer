import "./index.css";
import React, { useEffect, useState } from "react";
import img_rectangle_register from "../../assets/images/img_rectangle_register.png";
import img_register from "../../assets/images/img_register.png";
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";
import RegisterError from "../RegisterError";
import axios from "axios";

const FormSignUp = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("Customer");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function register() {
        const sendDataRegister = {
            email: email,
            password: password,
            role: name,
        };

        try {
            await axios({
                method: "post",
                url: "https://bootcamp-rent-cars.herokuapp.com/customer/auth/register",
                data: sendDataRegister,
            });
            navigate(`/signin`);
        } catch (error) {
            setError(error.response.data.message);
        }
    }

    const handleSignUp = (event) => {
        event.preventDefault();

        if (validator.isEmail(email) === false) {
            setError("Format Email Tidak Sesuai...!");
        } else if (password.length < 6) {
            setError("Password Tidak Boleh Kurang Dari 6 Karakter...!");
        } else {
            register();
        }
    };

    return (
        <>
            <section id="form-signin">
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col">
                            <div className="row content-signup h-100 d-flex flex-column align-items-center justify-content-center">
                                <form className="w-75">
                                    <img
                                        src={img_rectangle_register}
                                        alt="Rectangle Register"
                                        className="mb-4"
                                        onClick={() => {
                                            navigate("/");
                                        }}
                                    />
                                    <p className="signup-title">Sign Up</p>
                                    {error && <RegisterError message={error} setError={setError} />}

                                    <div className="mb-3">
                                        <label className="label-name form-label">Name*</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Nama Lengkap"
                                            name="name"
                                            value={name}
                                            onChange={(event) => {
                                                setName(event.target.value);
                                            }}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="label-email form-label">Email*</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Contoh: johndee@gmail.com"
                                            name="email"
                                            value={email}
                                            onChange={(event) => {
                                                setEmail(event.target.value);
                                            }}
                                        />
                                    </div>

                                    <div className="mb-5">
                                        <label className="label-password form-label">Create Password*</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="6+ karakter"
                                            name="password"
                                            value={password}
                                            onChange={(event) => {
                                                setPassword(event.target.value);
                                            }}
                                        />
                                    </div>

                                    <button type="submit" className="btn-signup btn btn-primary w-100 text-white mb-4" onClick={(event) => handleSignUp(event)}>
                                        Sign Up
                                    </button>

                                    <p className="text-center">
                                        Already have an account?{" "}
                                        <Link to="/signin">
                                            <span className="text-signin-bottom">Sign In here</span>
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

export default FormSignUp;
