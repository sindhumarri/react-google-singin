import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import { useHistory } from "react-router-dom";
import { toast} from "react-toastify";

const clientId = '131581938677-8ddp4920lduil2ns50v22gpkb8g7o2ns.apps.googleusercontent.com';

const Dashboard = () => {
  let history = useHistory();

  const onLogoutSuccess = () => {
    toast.success('Logged out Successfully', {position: "top-center",autoClose: 1000,hideProgressBar: false, closeOnClick: true,pauseOnHover: true,draggable: true,}); 
    localStorage.removeItem('loginID');
    history.push('/');
  };
  const onFailure = (res) => {
    console.log('Login failed: res:', res);
  };  
  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <div>
      <h1> Dashboard </h1>
      <h4> LoggedIn User : {JSON.parse(localStorage.getItem('loginID'))} </h4>
      <button onClick={signOut} className="gr__log__button">Logout</button>
    </div>
  )
}

export default Dashboard
