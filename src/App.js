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
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">

            <Header addTodo={this.addTodo}/>

            <List todoList={this.state.todoList}/>

           <Footer/>
        </div>
    </div>
    )
  }
}
