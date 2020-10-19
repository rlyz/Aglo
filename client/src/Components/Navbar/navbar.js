import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

export default class navbar extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Aglo</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/About" className="nav-link">About</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/TermsofService" className="nav-link">Terms of Service</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/PrivacyPolicy" className="nav-link">Privacy Policy</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Dashboard</Link>
                        </li>
                        {this.props.user ? <li className="navbar-item">
                            <Link to="/editsub" className="nav-link">Edit Subscriptions</Link>
                        </li> : null}
                    </ul>
                </div>
                <div to="/" className="navbar-brand">{this.props.user}</div>
                {this.props.user ? <GoogleLogout
                    clientId="895280077366-s4pr20h3i27c64kfr39fioit1549l994.apps.googleusercontent.com"
                    buttonText="Logout"
                    onLogoutSuccess={this.props.logout}
                /> : <GoogleLogin
                        clientId="895280077366-s4pr20h3i27c64kfr39fioit1549l994.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={this.props.responseSuccessGoogle}
                        onFailure={this.props.responseErrorGoogle}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                        scope="https://www.googleapis.com/auth/youtube.force-ssl"
                    />}
            </nav>
        )
    }
}
