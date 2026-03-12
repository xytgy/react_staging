import React, { Component } from 'react'
import './index.css'

export default class index extends Component {
  handleCheckAll = (e) => {
    this.props.checkAllTodo(e.target.checked)
  }
  render() {
    const {todoList} = this.props
    const total = todoList.length
    const doneCount = todoList.filter(item => item.done).length
    return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={total > 0 && doneCount === total} onChange={this.handleCheckAll}/>
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{total}
                </span>
                <button className="btn btn-danger" onClick={() => this.props.checkAllDoneDelete()}>清除已完成任务</button>
            </div>
    )
  }
}
