import { Component } from "react";
import { Link,Routes,Route } from 'react-router-dom' 
import About from './pages/About/index.jsx'
import Home from './pages/Home/index.jsx'
import Header from './components/Header/index.jsx'
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
                            <Link className="list-group-item" to="/about">About</Link>
                            <Link className="list-group-item active" to="/home">Home</Link>
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