import { Component } from "react";
import { Routes,Route,Navigate } from 'react-router-dom' 
import About from './pages/About/index.jsx'
import Home from './pages/Home/index.jsx'
import Header from './components/Header/index.jsx'
import MyNavLink from './components/MyNavLink/index.jsx'

export default class App extends Component {
    render() {
        return (
            <div id="root">
                <div>
                    <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><Header/></div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">                  
                            <MyNavLink to="/about/">About</MyNavLink>
                            <MyNavLink to="/home/">Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                        <div className="panel-body">
                            <h3>路由组件</h3>
                            <Routes>
                                <Route path = '/about' element={<About/>} />
                                <Route path = '/home/*' element={<Home/>} />
                                <Route path="*" element={<Navigate to="/about" />} />
                               
                            </Routes>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}