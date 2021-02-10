import React, { Component } from 'react'
import item from "./index.module.css"
export default class Item extends Component {
  render() {
    const { action } = this.props
    return (
      <li className={item.li}>
        <label style={{width:"100%",display:"block"}}>
          <input type="checkbox" name="box" value={action.id}/>
          <span>{action.text}</span>
        </label>
      </li>
    )
  }
}
