import * as React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.scss';

import About from './components/About/about'
import Diary from './components/Diary/diary'
import Footer from './components/Footer/footer'
import Header from './components/header/header'
import Home from './components/Home/home'
import Message from './components/Message/message'
import Sidebar from './components/Sidebar/sidebar'

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Header/>
                        <div className="section-body">
                            <div className="section-body-layout">
                                <div className="section-body-layout-left">
                                    <Route exact={true} path='/' component={Home}/>
                                    <Route path='/diary' component={Diary}/>
                                    <Route path='/message' component={Message}/>
                                    <Route path='/about' component={About}/>
                                </div>
                                <div className="section-body-layout-right">
                                    <Sidebar/>
                                </div>
                            </div>
                        </div>
                        <Footer/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
