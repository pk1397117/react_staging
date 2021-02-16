import React, {Component} from 'react'
import "./App.css"
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

export default class App extends Component {
  //初始化状态
  state = {
    todos: [
      {id: "001", name: "吃饭", done: false},
      {id: "002", name: "睡觉", done: false},
      {id: "003", name: "打代码", done: false},
      {id: "004", name: "逛街", done: false}
    ]
  }
  //用于创建一个todo对象，参数接收一个todo对象
  addTodo = (todoObj) => {
    //获取原todos
    let {todos} = this.state
    //遍历发现同名todo对象终止添加
    for (let todo of todos) {
      if (todo.name===todoObj.name){
        alert("该项目已存在")
        return
      }
    }
    //添加新todo对象到todos
    todos = [todoObj, ...todos]
    //更新状态
    this.setState({todos})
  }
  deleteTodo = (todoId) => {
    let {todos} = this.state
    //根据id删除todo
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === todoId) {
        todos.splice(i, 1)
        break
      }
    }
    this.setState({todos})
  }
  updateTodo = (todoId) => {
    const {todos} = this.state
    for (const todo of todos) {
      if (todo.id === todoId) {
        todo.done = !todo.done
        break;
      }
    }
    this.setState({todos})
  }
  //全选和全不选
  selectAll = (allFlag) => {
    let {todos} = this.state
    for (const todo of todos) {
      todo.done = allFlag
    }
    this.setState({todos})
  }
  //清除已完成
  clearDone = ()=>{
    let {todos} = this.state
    todos = todos.filter((todo)=>{
      return !todo.done
    })
    this.setState({todos})
  }
  render() {
    const {todos} = this.state
    return (
      <div id="content">
        <Header addTodo={this.addTodo}/>
        <List updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} todos={todos}/>
        <Footer selectAll={this.selectAll} clearDone={this.clearDone} finish={todos.length===0?0:todos.map(e => e.done ? 1 : 0).reduce((a, b) => a + b)}
                all={todos.length}/>
      </div>
    )
  }
}
