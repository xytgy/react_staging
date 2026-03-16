import {Component} from 'react'
import {Routes,Route} from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
import News from './News'
import Message from './Message'

export default class Home extends Component {
    render() {
        console.log('我是Home组件',this.props)
        return (
            <div>
                <h3>
                    Home
                </h3>
                <div>
                    <ul className="nav nav-tabs">
                    <li>
                        <MyNavLink to="/home/news">News</MyNavLink>
                    </li>
                    <li>
                        <MyNavLink to="/home/message">Message</MyNavLink>
                    </li>
                    </ul>
                        <Routes>
                            <Route path="news" element={<News/>} />
                            <Route path="message/*" element={<Message/>} />
                        </Routes>
                    </div>
                </div>
        )
    }
}