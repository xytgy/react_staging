import { Component } from 'react'

export default class Header extends Component {
    render() {
        console.log('我是Header组件',this.props)
        return (
            <div>
                <h2>一般组件   React Router Demo</h2>
            </div>
        )
    }
}