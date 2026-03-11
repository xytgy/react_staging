import React, { Component } from 'react'
import './index.css'
import Item from '../Item'
export default class index extends Component {
  render() {
    const {todoList} = this.props
    return (
            <ul className="todo-main">
                {
                    todoList.map(item=>(
                        <Item key={item.id} {...item}/>
                    ))
                }
            </ul>
    )
  }
}
