import { Redirect, Route } from "react-router-dom";

import './App.css';
  console.log('passei')
  
  const PrivateRoute = ({ children, ...rest }) => (
    
    <Route
      {...rest}
      render={() =>
        localStorage.getItem('redesocial') ? children : <Redirect to="/login" />
      }
    />
  );
  export default PrivateRoute
