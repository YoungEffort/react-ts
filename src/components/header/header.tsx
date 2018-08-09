import * as React from 'react';

import img from '../../assets/img/logo.jpg';
import './header.scss'

class Header extends React.Component {
    public jumpPage(){
        window.console.log(1)
    }
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
                        <a onClick={this.jumpPage}>首页</a>
                        <a onClick={this.jumpPage}>日记</a>
                        <a onClick={this.jumpPage}>留言板</a>
                        <a onClick={this.jumpPage}>关于我</a>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header