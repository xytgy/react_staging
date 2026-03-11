import React, { Component } from 'react'
import './index.css'
import Item from '../Item'
export default class index extends Component {
  render() {
    console.log(this.props.b)
    return (
            <ul className="todo-main">
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </ul>
    )
  }
}
