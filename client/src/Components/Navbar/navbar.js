import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Aglo</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Dashboard</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/settings" className="nav-link">Settings</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
