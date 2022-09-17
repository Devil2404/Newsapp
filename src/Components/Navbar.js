import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/navbar.css'
import Sidebar from './Sidebar'

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar" id="navbar">
                <h1>
                    <Link to="/">
                        The Times of World
                    </Link>
                </h1>
                <div className="nav">
                    <Sidebar />
                </div>
            </div>
        )
    }
}
