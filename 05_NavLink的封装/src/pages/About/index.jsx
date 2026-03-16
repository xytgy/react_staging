import {Component} from 'react'

export default class About extends Component {
    render() {
        console.log('我是About组件',this.props)
        return (
            <div>
                <h3>
                    About
                </h3>
            </div>
        )
    }
}