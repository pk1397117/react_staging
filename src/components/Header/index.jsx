import React, { Component } from 'react'
import header from './index.module.css'
export default class Header extends Component {
  render() {
    return (
      <input className={header.header} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
    )
  }
}
