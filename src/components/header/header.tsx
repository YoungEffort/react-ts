import * as React from 'react';
import {NavLink} from 'react-router-dom'

import img from '../../assets/img/logo.jpg';
import './header.scss'

class Header extends React.Component {
    public render() {
        return (
            <header className="header-bar">
                <div className="nav-bar">
                    <div className="nav-bar-logo">
                        <img src={img} className="logo-img"/>
                        <span>
                            YOUNGEFFORT
                        </span>
                    </div>
                    <div className="nav-bar-tag">
                        <NavLink exact={true} to="/" activeClassName="selected">首页</NavLink>
                        <NavLink exact={true} to="/diary" activeClassName="selected">日记</NavLink>
                        <NavLink exact={true} to="/message" activeClassName="selected">留言板</NavLink>
                        <NavLink exact={true} to="/about" activeClassName="selected">关于我</NavLink>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header