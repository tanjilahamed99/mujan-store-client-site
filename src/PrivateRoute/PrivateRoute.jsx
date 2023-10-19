import PropTypes from 'prop-types';
import  { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <span className="loading loading-spinner loading-lg text-center mx-auto flex my-32"></span>
    }
    else if (!user) {
        return <Navigate to={'/login'}></Navigate>
    }
    return children
};


PrivateRoute.propTypes = {
    children: PropTypes.node
};

export default PrivateRoute;