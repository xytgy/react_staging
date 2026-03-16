import { NavLink } from 'react-router-dom'
import { Component } from 'react'

export default class MyNavLink extends Component {
    render() {
        return (
            <NavLink className={({isActive}) => isActive ? 'list-group-item active' : 'list-group-item'} {...this.props}/>
        )
    }
}