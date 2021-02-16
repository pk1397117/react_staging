import React, { Component } from 'react'
import footer from './index.module.css'
export default class Footer extends Component {
  handleSelectAll = (event)=>{
    const {selectAll} = this.props
    selectAll(event.target.checked)
  }
  render() {
    const { finish,all,clearDone } = this.props
    return (
      <div className={footer.footer}>
        <input type="checkbox" onClick={this.handleSelectAll}/>&nbsp;&nbsp;&nbsp;&nbsp;已完成{finish}/全部{all}
        <button hidden={finish<1} onClick={clearDone} style={{float:"right",backgroundColor:"red"}}>清除已选任务</button>
      </div>
    )
  }
}
