import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import './index.css'

export default class index extends Component {
   
  handleKeyUp = (e) => {
    if(e.keyCode !== 13) return
    const name = e.target.value.trim()
    if(!name) return
    this.props.addTodo({id:nanoid(),name:name,done:false})
    e.target.value = '' 
  }
  render() {
    console.log(this.props)
    return (
        <div className="todo-header">
            <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
        </div>
    )
  }
}
