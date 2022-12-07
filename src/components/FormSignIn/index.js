import "./index.css";
import React from "react";
import img_rectangle_register from "../../assets/images/img_rectangle_register.png";
import img_register from "../../assets/images/img_register.png";
import { Link } from "react-router-dom";

const FormSignIn = () => {
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

                                    <div className="mb-3">
                                        <label className="label-email form-label">Email</label>
                                        <input type="email" className="form-control" placeholder="Contoh: johndee@gmail.com" />
                                    </div>

                                    <div className="mb-5">
                                        <label className="label-password form-label">Password</label>
                                        <input type="password" className="form-control" placeholder="6+ karakter" />
                                    </div>

                                    <button type="submit" className="btn btn-primary w-100 text-white mb-4">
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
