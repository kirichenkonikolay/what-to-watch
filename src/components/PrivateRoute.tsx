import React from 'react';
import {Navigate} from 'react-router-dom';

interface PrivateRouteProps {
  children: React.FC;
}

const PrivateRoute: React.FC = (props: PrivateRouteProps) => {
  const isAuthorized = false;
  const {children} = props;

  return isAuthorized ? children : <Navigate to='/login' />;
};

export default PrivateRoute;
