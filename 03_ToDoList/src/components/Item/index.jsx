import React, { Component } from 'react'
import './index.css'
export default class index extends Component {
  handleChange = (id) => (e) => {
    this.props.updateTodo(id,e.target.checked)
  }
  render() {
    const {id,name,done} = this.props
    return (
            <li>
                <label>   
                    <input type="checkbox"  onChange={this.handleChange(id)} checked={done} Checked={done}/>
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{display:done?'block':'none'}} onClick={() => this.props.deleteTodo(id)}>删除</button>
            </li>
    )
  }
}
