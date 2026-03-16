import {Component} from 'react'

export default class Home extends Component {
    render() {
        console.log('我是Home组件',this.props)
        return (
            <div>
                <h3>
                    Home
                </h3>
            </div>
        )
    }
}