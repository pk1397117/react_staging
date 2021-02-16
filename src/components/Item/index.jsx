import React, { Component } from 'react'
import item from "./index.module.css"
export default class Item extends Component {
  state={mouseOver:false}
  delBtn = React.createRef()
  handleMouse = (mouseOver)=>{
    return ()=>{
      this.setState({mouseOver})
    }
  }
  render() {
    const { todo,updateTodo,deleteTodo } = this.props
    const {mouseOver} = this.state
    return (
      <li className={item} style={{backgroundColor:mouseOver?"skyblue":"white"}} onMouseOver={this.handleMouse(true)} onMouseOut={this.handleMouse(false)}>
        <label style={{width:"100%",height:"100%",display:"block"}}>
          <input type="checkbox" name="box" readOnly={true} checked={todo.done} onClick={()=>{updateTodo(todo.id)}}/>
          <span>{todo.name}</span>
          <button ref={this.delBtn} hidden={!mouseOver} style={{float:"right",height:"100%",backgroundColor:"red"}} onClick={()=>{deleteTodo(todo.id)}}>删除</button>
        </label>
      </li>
    )
  }
}
