﻿import React from "react";
import HeadPhone from '../assets/img/headphones.svg';
import './css/Login.scss';
import {Link} from "react-router-dom";

class Login extends React.Component{
    render() {
        return(
            <section id="main">
                    <div className="nav-item">
                        <a className="navbar-brand" href="/">Musify.kg</a>
                    </div>
                    <div className="main-row">
                        <div className="main-row-img">
                            <img className="head-phone-img" src={HeadPhone} alt=""/>
                        </div>
                        <div className="main-row-text">
                            <h1>Музыка для всех</h1>
                            <p>Что-то здесь написано</p>
                            <Link to={"/home"} className="btn">
                                Слушать
                            </Link>
                        </div>
                    </div>
            </section>
        );
    }
}

export default Login;