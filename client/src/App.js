import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar/navbar";
import DashBoard from './Components/DashBoard/dashboard';
import PrivacyPolicy from './Components/Navbar/privacypolicy';
import TermsOfService from './Components/Navbar/termsofservice';
import About from './Components/Navbar/about';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

function App() {
  const [user, setUser] = useState('');
  const responseSuccessGoogle = (response) => {
    console.log(response)
    setUser(response.profileObj.name)
    axios({
      method: "POST",
      url: "/users/googlelogin",
      data: { tokenId: response.tokenId },
      withCredentials: true,
      credentials: 'include',
    }).then(response => {
      console.log(response);
    })
  }

  const responseErrorGoogle = (response) => {
    console.log(response);
  }

  return (
    <>
      <Router>
        <div className="container">
          <Navbar />
          <Route path="/" exact component={DashBoard} />
          <Route path="/TermsofService" component={TermsOfService} />
          <Route path="/PrivacyPolicy" component={PrivacyPolicy} />
          <Route path="/About" component={About} />
        </div>
      </Router>
      <GoogleLogin
        clientId="895280077366-s4pr20h3i27c64kfr39fioit1549l994.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseSuccessGoogle}
        onFailure={responseErrorGoogle}
        cookiePolicy={'single_host_origin'}
      />
      <h1>{user}</h1>
    </>

  );
}

export default App;

