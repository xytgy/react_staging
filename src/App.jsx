import { Component } from "react";
import { NavLink,Routes,Route } from 'react-router-dom' 
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
                            {/* <NavLink className={({isActive}) => isActive ? 'list-group-item active' : 'list-group-item'} to="/about">About</NavLink>
                            <NavLink className={({isActive}) => isActive ? 'list-group-item active' : 'list-group-item'} to="/home">Home</NavLink> */}
                            <MyNavLink to="/about">About</MyNavLink>
                            <MyNavLink to="/home">Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                        <div className="panel-body">
                            <h3>路由组件</h3>
                            <Routes>
                                <Route path = '/about' element= {<About/>} />
                                <Route path = '/home' element= {<Home/>} />
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