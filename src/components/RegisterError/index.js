import React from "react";
import Alert from "react-bootstrap/Alert";

// eslint-disable-next-line react/prop-types
const RegisterError = ({ message, setError }) => {
    return (
        <Alert variant="danger" onClose={() => setError("")} dismissible>
            {message}
        </Alert>
    );
};

export default RegisterError;
