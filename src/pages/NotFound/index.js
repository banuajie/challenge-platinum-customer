import "./index.css";
import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <>
            <div className="not-section">
                <div className="not-content">
                    <h1 className="err">404</h1>
                    <h3>Page Not Founds</h3>

                    <p>
                        Lets go{" "}
                        <Link to="/" className="home-link">
                            {" "}
                            home{" "}
                        </Link>{" "}
                        and try from there.
                    </p>
                </div>
            </div>
        </>
    );
};

export default NotFound;
