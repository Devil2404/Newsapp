import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../Styles/sidebar.css'

export default class Sidebar extends Component {
    show() {
        document.getElementById("sidebar").classList.toggle("active");
    }
    render() {
        return (
            <div>
                <i className="fas fa-bars" onClick={this.show} id="menu"></i>
                <div className="sidebar-menu" id="sidebar">
                    <div className="close">
                        <i className="fas fa-times" onClick={this.show}></i>
                    </div>
                    <div className="navigation">
                        <ul>
                            <li onClick={this.show}>
                                <Link to="/general">
                                    <i className="fas fa-home"></i> General
                                </Link>
                            </li>
                            <li onClick={this.show}>
                                <Link to="/business">
                                    <i className="fas fa-business-time"></i> Busniess
                                </Link>
                            </li>
                            <li onClick={this.show}>
                                <Link to="/entertainment">
                                    <i className="fas fa-film"></i> Entertainment
                                </Link>
                            </li>
                            <li onClick={this.show}>
                                <Link to="/health">
                                    <i className="fas fa-heartbeat"></i> Health
                                </Link>
                            </li>
                            <li onClick={this.show}>
                                <Link to="/science">
                                    <i className="fas fa-atom"></i> Science
                                </Link>
                            </li>
                            <li onClick={this.show}>
                                <Link to="/sports">
                                    <i className="fas fa-volleyball-ball"></i> Sports
                                </Link>
                            </li>
                            <li onClick={this.show}>
                                <Link to="/technology">
                                    <i className="fas fa-satellite-dish"></i> Technology
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
