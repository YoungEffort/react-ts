import * as React from 'react';

import imgbg from '../../assets/img/sidebarbg.jpg';
import imglogo from '../../assets/img/sidebarlogo.jpg';
import './sidebar.scss';

class Sidebar extends React.Component {
    public render() {
        const arr1 = [1, 2, 3, 4, 5, 6, 7];
        const arr2 = arr1.map((arr, index) =>
            <li key={index}>
                <a href="#">{arr}</a>
            </li>
        )
        return (
            <div className="sidebar">
                <div className="mgb-20">
                    <img src={imgbg} alt="" className="sidebar-imgbg" />
                    <div className="sidebar-imglogo">
                        <img src={imglogo} alt="" />
                    </div>
                    <div className="sidebar-info">
                        <h2>YoungEffort</h2>
                        <p>前端攻城狮</p>
                        <p>
                            <span>文章-</span>
                            <span>10</span>
                            &nbsp;&nbsp;|&nbsp;&nbsp;
                            <span>访问-</span>
                            <span>1000000</span>
                        </p>
                    </div>
                </div>
                <div className="mgb-20 follow">
                    <div className="sidebar-head">
                        <div>FOLLOW ME</div>
                    </div>
                    <div className="sidebar-body pd-24">
                        <span className="tubiao">
                            <i className="icon iconfont icon-gerenjianli" />
                        </span>
                        <span className="tubiao">
                            <i className="icon iconfont icon-github" />
                        </span>
                        <span className="tubiao">
                            <i className="icon iconfont icon-weixin" />
                        </span>
                        <span className="tubiao">
                            <i className="icon iconfont icon-csdn" />
                        </span>
                    </div>
                    <div className="tip1">
                        <div className="tip">
                            <div className="arrow" />
                            <div className="tip-font">个人简历</div>
                        </div>
                    </div>
                </div>
                <div className="mgb-20">
                    <div className="sidebar-head">
                        <div>云标签</div>
                    </div>
                    <div className="sidebar-body pd-24">
                        <p className="biaoqian">
                            <span className="c1">html</span>
                            <span className="c2">css</span>
                            <span className="c3">js</span>
                            <span className="c4">node</span>
                        </p>
                        <p className="biaoqian">
                            <span className="c5">scss</span>
                            <span className="c6">vue</span>
                            <span className="c7">react</span>
                            <span className="c8">angular</span>
                        </p>
                        <p className="biaoqian">
                            <span className="c9">webpack</span>
                        </p>
                    </div>
                </div>
                <div className="mgb-20">
                    <div className="sidebar-head">
                        <div>文章列表</div>
                    </div>
                    <div className="sidebar-body pd-24">
                        <ul>{arr2}</ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar