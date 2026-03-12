import React, { Component } from 'react'
import "./App.css"
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
export default class App extends Component {
  state = {todoList:[
    {id:1,name:'学习react',done:true},
    {id:2,name:'学习vue',done:false},
    {id:3,name:'学习angular',done:true},
  ]}
    addTodo = (todoObj) => {
      const {todoList} = this.state
      this.setState({todoList:[todoObj,...todoList]})
    }
    updateTodo = (id,checked) => {
      const {todoList} = this.state
      this.setState({todoList:todoList.map(item => item.id === id ? {...item,done:checked} : item)})
    }
    checkAllTodo = (done) => {
      const {todoList} = this.state
      this.setState({todoList:todoList.map(item => ({...item,done}))})
    }
    checkAllDoneDelete = () => {
      const {todoList} = this.state
      this.setState({todoList:todoList.filter(item => !item.done)})
    }
    deleteTodo = (id) => {
      const {todoList} = this.state
      this.setState({todoList:todoList.filter(item => item.id !== id)})
    }
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">

            <Header addTodo={this.addTodo}/>

            <List todoList={this.state.todoList} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>

           <Footer todoList={this.state.todoList} checkAllTodo={this.checkAllTodo} checkAllDoneDelete={this.checkAllDoneDelete}/>
        </div>
    </div>
    )
  }
}
