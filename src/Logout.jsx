import './App.css';

import { useHistory } from "react-router-dom";


function Logout() {

  const history = useHistory();

  localStorage.removeItem('redesocial')
  history.push('/login')

  return (

    <div>
    </div>
  );
}

export default Logout;
