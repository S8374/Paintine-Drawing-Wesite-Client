import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Private = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (user) {
        return children;
    }

    // Show alert before redirecting
    Swal.fire({
        title: "Please Login",
        text: "You need to be logged in to access this page.",
        icon: "warning",
        confirmButtonText: "OK"
    });

    return <Navigate to="/" />;
};

export default Private;
