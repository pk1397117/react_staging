import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import header from './index.module.css'

export default class Header extends Component {

  //对接受的props进行：类型、必要性的限制
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  handleKeyUp = (event)=>{
    //结构赋值，获取keyCode,target
    const {keyCode,target} = event
    //不是回车按键就终止
    if (keyCode!==13) return
    //输入空串不添加。trim：去掉字符串首尾空格，全空格则为空串
    if (target.value.trim()==="") {
      alert("输入不能为空")
      target.value = ""
      return
    }
    //准备好一个todo对象
    const todoObj = {id:nanoid(),name:target.value.trim(),done:false}
    //将todoObj传递给App
    this.props.addTodo(todoObj)
    //清空输入框
    target.value = ""
  }

  render() {
    return (
      <input className={header.header} onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
    )
  }
}
